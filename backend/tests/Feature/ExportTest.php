<?php

namespace Tests\Feature;

use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use App\Modules\Parking\Models\ParkingLevel;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ExportTest extends TestCase
{
    use RefreshDatabase;

    public function test_static_export_matches_public_api_and_takes_statuses_from_database(): void
    {
        Storage::fake('local');
        Storage::disk('local')->put('media/brands/korzinka.svg', '<svg/>');
        $p = Project::query()->create([
            'slug' => 'demo', 'name' => 'Демо', 'developer' => 'X', 'mode' => 'massing', 'context' => ['places' => []],
            'payload' => ['slug' => 'demo', 'name' => 'Демо', 'building' => ['mode' => 'massing', 'blocks' => []], 'about' => [['title' => 'Корпуса', 'text' => 'OSM']]],
        ]);
        $p->blockLayouts()->create(['key' => 'k1', 'payload' => ['id' => 'k1', 'floors' => []]]);
        Unit::query()->create(['id' => 7_000_001, 'project_id' => $p->id, 'block' => 'k1', 'number' => 1, 'floor' => 2, 'rooms' => 2, 'area' => 50, 'status' => 'sold', 'price' => 600_000_000, 'is_test' => false]);
        $level = ParkingLevel::query()->create(['project_id' => $p->id, 'level' => -1, 'name' => 'Уровень −1', 'height' => 3.3, 'outline' => [[0, 0], [10, 0], [10, 10]]]);
        $level->spots()->create(['project_id' => $p->id, 'code' => '1-001', 'number' => 1, 'kind' => 'standard', 'area' => 13.25, 'polygon' => [[0, 0], [2.5, 0], [2.5, 5.3], [0, 5.3]], 'status' => 'sold', 'price' => 150_000_000]);

        $to = sys_get_temp_dir().'/zhk-export-'.uniqid();
        $this->artisan('zhk:export', ['slugs' => ['demo'], '--to' => $to])->assertSuccessful();

        $units = json_decode(File::get("$to/projects/demo/units.json"), true);
        $this->assertSame('sold', $units['items'][0]['status']);
        $this->assertNull($units['items'][0]['price'], 'цена проданной квартиры не должна попасть в выгрузку');
        $this->assertSame($this->getJson('/api/projects/demo')->json(), json_decode(File::get("$to/projects/demo.json"), true));
        $this->assertFileExists("$to/projects/demo/blocks/k1.json");
        $this->assertSame($this->getJson('/api/projects/demo/parking')->json(), json_decode(File::get("$to/projects/demo/parking.json"), true));
        $this->assertNull(json_decode(File::get("$to/projects/demo/parking.json"), true)['spots'][0]['price'], 'цена проданного места не должна попасть в выгрузку');
        $this->assertFileExists("$to/brands/korzinka.svg");
        $this->assertSame(['demo'], array_column(json_decode(File::get("$to/projects/index.json"), true)['items'], 'slug'));
        File::deleteDirectory($to);
    }
}
