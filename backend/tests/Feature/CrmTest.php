<?php

namespace Tests\Feature;

use App\Models\User;
use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use App\Modules\Leads\Models\Lead;
use App\Modules\Sales\Models\UnitStatusChange;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class CrmTest extends TestCase
{
    use RefreshDatabase;

    private Project $project;

    protected function setUp(): void
    {
        parent::setUp();
        $this->project = Project::query()->create([
            'slug' => 'demo', 'name' => 'Демо', 'developer' => 'GH', 'mode' => 'massing',
            'payload' => ['slug' => 'demo', 'name' => 'Демо', 'building' => ['mode' => 'massing', 'blocks' => []], 'catalog' => ['units_total' => 0]],
        ]);
        foreach ([[1, 'available', 500_000_000], [2, 'sold', null], [3, 'available', 700_000_000]] as [$n, $status, $price]) {
            Unit::query()->create([
                'id' => 9_000_000 + $n, 'project_id' => $this->project->id, 'block' => 'k1', 'number' => $n, 'floor' => 2,
                'rooms' => 2, 'area' => 54.01, 'type_code' => 'H2E-54', 'status' => $status, 'price' => $price, 'is_test' => true,
            ]);
        }
    }

    public function test_public_contract_reflects_live_statuses(): void
    {
        $this->getJson('/api/projects/index')->assertOk()->assertJsonPath('items.0.slug', 'demo');
        $this->getJson('/api/projects/demo')->assertOk()
            ->assertJsonPath('catalog.units_total', 3)
            ->assertJsonPath('catalog.by_status.available', 2);
        $this->getJson('/api/projects/demo/units')->assertOk()
            ->assertJsonCount(3, 'items')
            ->assertJsonStructure(['items' => [['id', 'number', 'floor', 'block', 'rooms', 'area', 'type_code', 'status', 'price', 'polygon', 'test']]]);
    }

    public function test_guest_cannot_change_status(): void
    {
        $this->patchJson('/api/crm/units/9000001', ['status' => 'sold'])->assertUnauthorized();
        $this->assertSame('available', Unit::query()->find(9_000_001)->status->value);
    }

    public function test_manager_changes_status_and_history_is_written(): void
    {
        $user = User::factory()->create(['name' => 'Анна']);
        $this->actingAs($user)->patchJson('/api/crm/units/9000001', ['status' => 'booked', 'price' => 520_000_000, 'comment' => 'бронь на 3 дня'])
            ->assertOk()->assertJsonPath('status', 'booked')->assertJsonPath('price', 520_000_000)->assertJsonPath('test', false);

        $change = UnitStatusChange::query()->firstOrFail();
        $this->assertSame([$user->id, 'available', 'booked', 500_000_000, 520_000_000, 'бронь на 3 дня'],
            [$change->user_id, $change->from_status, $change->to_status, $change->from_price, $change->to_price, $change->comment]);
        $this->getJson('/api/projects/demo/units')->assertJsonPath('items.0.status', 'booked');
        $this->actingAs($user)->getJson('/api/crm/units/9000001/history')->assertOk()->assertJsonPath('items.0.user', 'Анна');
    }

    public function test_invalid_status_is_rejected(): void
    {
        $this->actingAs(User::factory()->create())->patchJson('/api/crm/units/9000001', ['status' => 'paid'])->assertUnprocessable();
    }

    public function test_bulk_change_counts_only_real_changes(): void
    {
        $this->actingAs(User::factory()->create())
            ->postJson('/api/crm/units/bulk', ['project' => 'demo', 'ids' => [9_000_001, 9_000_002, 9_000_003], 'status' => 'sold'])
            ->assertOk()->assertJsonPath('changed', 2);
        $this->assertSame(0, Unit::query()->where('status', 'available')->count());
    }

    public function test_lead_from_site_is_validated_and_stored(): void
    {
        $this->postJson('/api/leads', ['project' => 'demo', 'name' => 'Азиз', 'phone' => '12345'])->assertUnprocessable();
        $this->postJson('/api/leads', ['project' => 'demo', 'unit_id' => 9_000_003, 'name' => 'Азиз', 'phone' => '+998 90 123-45-67'])
            ->assertCreated();
        $lead = Lead::query()->firstOrFail();
        $this->assertSame(['+998901234567', 9_000_003, 'new'], [$lead->phone, $lead->unit_id, $lead->status]);

        $this->getJson('/api/crm/projects/demo/leads')->assertUnauthorized();
        $this->actingAs(User::factory()->create())->getJson('/api/crm/projects/demo/leads')
            ->assertOk()->assertJsonPath('items.0.unit.number', 3);
    }

    public function test_login_and_session(): void
    {
        User::factory()->create(['email' => 'm@gh.uz', 'password' => Hash::make('secret-pass')]);
        $this->postJson('/api/crm/login', ['email' => 'm@gh.uz', 'password' => 'wrong'])->assertUnprocessable();
        $this->withHeader('Referer', 'http://localhost:5180/crm.html')
            ->postJson('/api/crm/login', ['email' => 'm@gh.uz', 'password' => 'secret-pass'])->assertOk()->assertJsonPath('email', 'm@gh.uz');
        $this->getJson('/api/crm/me')->assertOk();
    }

    public function test_stats_for_crm(): void
    {
        $this->actingAs(User::factory()->create())->getJson('/api/crm/projects/demo/stats')
            ->assertOk()->assertJsonPath('total', 3)->assertJsonPath('by_status.sold', 1)
            ->assertJsonPath('available_value', 1_200_000_000)->assertJsonPath('by_block.0.available', 2);
    }

    public function test_public_api_hides_price_of_sold_units(): void
    {
        $this->actingAs(User::factory()->create())
            ->patchJson('/api/crm/units/9000001', ['status' => 'sold', 'price' => 610_000_000])->assertOk()->assertJsonPath('price', 610_000_000);
        $this->getJson('/api/projects/demo/units')->assertJsonPath('items.0.status', 'sold')->assertJsonPath('items.0.price', null);
    }
}
