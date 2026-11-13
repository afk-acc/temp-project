<?php

namespace Tests\Feature;

use App\Models\User;
use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use App\Modules\Leads\Console\PrepareDemoCommand;
use App\Modules\Leads\Models\Lead;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class DemoCommandTest extends TestCase
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
        foreach (range(1, 6) as $n) {
            Unit::query()->create([
                'id' => 9_100_000 + $n, 'project_id' => $this->project->id, 'block' => 'k1', 'number' => $n, 'floor' => $n,
                'rooms' => 2, 'area' => 54.0, 'type_code' => 'T2', 'status' => $n === 6 ? 'sold' : 'available', 'price' => 500_000_000, 'is_test' => true,
            ]);
        }
    }

    public function test_demo_manager_logs_in_and_sees_demo_leads(): void
    {
        $this->artisan('spliti:demo')->assertSuccessful();

        // без паркинга заявка на место пропускается: 5 заявок на квартиры в продаже
        $leads = Lead::query()->where('source', 'demo')->get();
        $this->assertCount(5, $leads);
        $this->assertTrue($leads->every(fn (Lead $l) => $l->unit_id && $l->unit_id !== 9_100_006));

        $this->assertTrue(Auth::guard('web')->attempt(['email' => PrepareDemoCommand::EMAIL, 'password' => PrepareDemoCommand::PASSWORD]));
        $this->actingAs(Auth::guard('web')->user())->getJson('/api/crm/projects/demo/leads')->assertOk()->assertJsonCount(5, 'items');
    }

    public function test_rerun_replaces_only_demo_leads_and_clear_removes_manager(): void
    {
        Lead::query()->create(['project_id' => $this->project->id, 'name' => 'Покупатель', 'phone' => '+998900000000', 'status' => 'new', 'source' => '3d']);
        $this->artisan('spliti:demo')->assertSuccessful();
        $this->artisan('spliti:demo')->assertSuccessful();
        $this->assertSame(5, Lead::query()->where('source', 'demo')->count());

        $this->artisan('spliti:demo --clear')->assertSuccessful();
        $this->assertSame(0, Lead::query()->where('source', 'demo')->count());
        $this->assertSame(1, Lead::query()->where('source', '3d')->count());
        $this->assertFalse(User::query()->where('email', PrepareDemoCommand::EMAIL)->exists());
    }

    public function test_refuses_on_production(): void
    {
        $this->app['env'] = 'production';
        $this->artisan('spliti:demo')->assertFailed();
        $this->assertFalse(User::query()->where('email', PrepareDemoCommand::EMAIL)->exists());
    }
}
