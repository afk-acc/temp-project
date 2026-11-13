<?php

namespace Tests\Feature;

use App\Models\User;
use App\Modules\Catalog\Models\Project;
use App\Modules\Leads\Models\Lead;
use App\Modules\Parking\Application\ImportParking;
use App\Modules\Parking\Models\ParkingSpot;
use App\Modules\Parking\Models\ParkingSpotStatusChange;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ParkingTest extends TestCase
{
    use RefreshDatabase;

    private Project $project;

    protected function setUp(): void
    {
        parent::setUp();
        $this->project = $this->makeProject('demo');
        $this->import($this->project, [
            ['1-001', -1, 'standard', 'available', 150_000_000],
            ['1-002', -1, 'mgn', 'sold', 140_000_000],
            ['1-003', -1, 'ev', 'booked', 175_000_000],
            ['2-001', -2, 'wide', 'available', 160_000_000],
        ]);
    }

    private function makeProject(string $slug): Project
    {
        return Project::query()->create([
            'slug' => $slug, 'name' => 'Демо', 'developer' => 'GH', 'mode' => 'massing',
            'payload' => ['slug' => $slug, 'name' => 'Демо', 'building' => ['mode' => 'massing', 'blocks' => []], 'catalog' => ['units_total' => 0]],
        ]);
    }

    /** @param list<array{0: string, 1: int, 2: string, 3: string, 4: int}> $spots */
    private function import(Project $project, array $spots, bool $reset = false): array
    {
        $rect = fn (float $x) => [[$x, 0], [$x + 2.5, 0], [$x + 2.5, 5.3], [$x, 5.3]];
        $level = fn (int $l) => [
            'level' => $l, 'name' => "Уровень $l", 'height' => 3.3,
            'outline' => [[-5, -5], [60, -5], [60, 20], [-5, 20]],
            'cores' => [['block' => '26/1', 'label' => 'Лифт и лестница · Блок 26/1', 'p' => [[30, 10], [38, 10], [38, 16], [30, 16]]]],
            'ramps' => [['label' => 'Въезд с улицы', 'p' => [[-5, 8], [10, 8], [10, 14], [-5, 14]], 'entry' => [-7, 11]]],
            'columns' => [[[7.25, 5.0], [7.75, 5.0], [7.75, 5.5], [7.25, 5.5]]],
        ];
        $levels = array_values(array_unique(array_map(fn ($s) => $s[1], $spots)));
        $file = tempnam(sys_get_temp_dir(), 'parking');
        file_put_contents($file, json_encode([
            'levels' => array_map($level, $levels),
            'spots' => array_map(fn ($s) => [
                'code' => $s[0], 'number' => (int) substr($s[0], 2), 'level' => $s[1], 'kind' => $s[2],
                'polygon' => $rect((int) substr($s[0], 2) * 2.5), 'area' => 13.25, 'status' => $s[3], 'price' => $s[4], 'test' => true,
            ], $spots),
        ]));
        try {
            return app(ImportParking::class)($project, $file, $reset);
        } finally {
            unlink($file);
        }
    }

    private function spot(string $code): ParkingSpot
    {
        return ParkingSpot::query()->where('project_id', $this->project->id)->where('code', $code)->firstOrFail();
    }

    public function test_public_contract_has_levels_spots_and_summary(): void
    {
        $r = $this->getJson('/api/projects/demo/parking')->assertOk()
            ->assertJsonPath('test', true)
            ->assertJsonPath('summary.levels', 2)
            ->assertJsonPath('summary.total', 4)
            ->assertJsonPath('summary.by_status.available', 2)
            ->assertJsonPath('summary.by_status.sold', 1)
            ->assertJsonPath('summary.price_from', 150_000_000)
            ->assertJsonPath('levels.0.level', -1)
            ->assertJsonPath('levels.0.total', 3)
            ->assertJsonPath('levels.0.available', 1)
            ->assertJsonPath('levels.0.cores.0.block', '26/1')
            ->assertJsonPath('levels.0.columns.0.0', [7.25, 5])
            ->assertJsonPath('levels.1.level', -2)
            ->assertJsonStructure(['spots' => [['id', 'code', 'number', 'level', 'kind', 'area', 'polygon', 'status', 'price', 'test']]]);
        $spots = collect($r->json('spots'))->keyBy('code');
        $this->assertSame(-1, $spots['1-002']['level']);
        $this->assertSame('mgn', $spots['1-002']['kind']);
        // цена проданного места — коммерческая тайна, на сайт не уходит; у брони — видна
        $this->assertNull($spots['1-002']['price']);
        $this->assertSame(175_000_000, $spots['1-003']['price']);
    }

    public function test_project_without_parking_answers_empty(): void
    {
        $this->makeProject('empty');
        $this->getJson('/api/projects/empty/parking')->assertOk()
            ->assertJsonPath('summary.total', 0)->assertJsonPath('levels', [])->assertJsonPath('spots', []);
        $this->getJson('/api/projects/nope/parking')->assertNotFound();
    }

    public function test_reimport_keeps_crm_statuses_and_removes_vanished_spots(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user)->patchJson('/api/crm/parking-spots/'.$this->spot('1-001')->id, ['status' => 'sold', 'price' => 155_000_000])->assertOk();

        $n = $this->import($this->project, [
            ['1-001', -1, 'wide', 'available', 150_000_000],
            ['1-002', -1, 'mgn', 'sold', 140_000_000],
            ['1-004', -1, 'standard', 'available', 150_000_000],
        ]);

        $this->assertSame(['levels' => 1, 'spots_new' => 1, 'spots_kept' => 2, 'spots_removed' => 2], $n);
        $s = $this->spot('1-001');
        $this->assertSame(['sold', 155_000_000, 'wide'], [$s->status->value, $s->price, $s->kind->value]);
        $this->getJson('/api/projects/demo/parking')->assertJsonPath('summary.levels', 1)->assertJsonPath('summary.total', 3);
    }

    public function test_guest_cannot_touch_crm_parking(): void
    {
        $id = $this->spot('1-001')->id;
        $this->getJson('/api/crm/projects/demo/parking')->assertUnauthorized();
        $this->patchJson("/api/crm/parking-spots/$id", ['status' => 'sold'])->assertUnauthorized();
        $this->postJson('/api/crm/parking-spots/bulk', ['project' => 'demo', 'ids' => [$id], 'status' => 'sold'])->assertUnauthorized();
        $this->assertSame('available', $this->spot('1-001')->status->value);
    }

    public function test_manager_sees_all_prices_and_changes_spot_with_history(): void
    {
        $user = User::factory()->create(['name' => 'Анна']);
        $this->actingAs($user)->getJson('/api/crm/projects/demo/parking')->assertOk()
            ->assertJsonPath('spots.1.code', '1-002')->assertJsonPath('spots.1.price', 140_000_000);

        $id = $this->spot('1-001')->id;
        $this->actingAs($user)->patchJson("/api/crm/parking-spots/$id", ['status' => 'booked', 'price' => 152_000_000, 'comment' => 'бронь до пятницы'])
            ->assertOk()->assertJsonPath('status', 'booked')->assertJsonPath('price', 152_000_000)->assertJsonPath('test', false)->assertJsonPath('level', -1);

        $change = ParkingSpotStatusChange::query()->firstOrFail();
        $this->assertSame([$user->id, 'available', 'booked', 150_000_000, 152_000_000, 'бронь до пятницы'],
            [$change->user_id, $change->from_status, $change->to_status, $change->from_price, $change->to_price, $change->comment]);
        $this->actingAs($user)->getJson("/api/crm/parking-spots/$id/history")->assertOk()
            ->assertJsonPath('items.0.user', 'Анна')->assertJsonPath('items.0.to_status', 'booked');
        // сайт видит новый статус
        $this->getJson('/api/projects/demo/parking')->assertJsonPath('summary.by_status.booked', 2);

        $this->actingAs($user)->patchJson("/api/crm/parking-spots/$id", ['status' => 'parked'])->assertUnprocessable();
    }

    public function test_bulk_changes_only_spots_of_the_project(): void
    {
        $other = $this->makeProject('other');
        $this->import($other, [['1-001', -1, 'standard', 'available', 150_000_000]]);
        $foreign = ParkingSpot::query()->where('project_id', $other->id)->firstOrFail();
        $ids = [$this->spot('1-001')->id, $this->spot('2-001')->id, $this->spot('1-002')->id, $foreign->id];

        $this->actingAs(User::factory()->create())->postJson('/api/crm/parking-spots/bulk', ['project' => 'demo', 'ids' => $ids, 'status' => 'unavailable', 'comment' => 'ремонт'])
            ->assertOk()->assertJsonPath('changed', 3);
        $this->assertSame('available', $foreign->refresh()->status->value);
        $this->assertSame(3, ParkingSpotStatusChange::query()->count());
    }

    public function test_lead_for_parking_spot_reaches_crm(): void
    {
        $other = $this->makeProject('other');
        $this->import($other, [['1-001', -1, 'standard', 'available', 150_000_000]]);
        $foreign = ParkingSpot::query()->where('project_id', $other->id)->firstOrFail();
        $spot = $this->spot('1-003');

        $this->postJson('/api/leads', ['project' => 'demo', 'parking_spot_id' => $spot->id, 'name' => 'Бобур', 'phone' => '+998 90 123 45 67'])->assertCreated();
        $this->postJson('/api/leads', ['project' => 'demo', 'parking_spot_id' => $foreign->id, 'name' => 'Лола', 'phone' => '+998 90 765 43 21'])->assertCreated();

        $this->assertSame($spot->id, Lead::query()->where('name', 'Бобур')->value('parking_spot_id'));
        $this->assertNull(Lead::query()->where('name', 'Лола')->value('parking_spot_id'));
        $this->actingAs(User::factory()->create())->getJson('/api/crm/projects/demo/leads')->assertOk()
            ->assertJsonPath('items.1.parking_spot.code', '1-003')
            ->assertJsonPath('items.1.parking_spot.level', -1)
            ->assertJsonPath('items.0.parking_spot', null);
    }
}
