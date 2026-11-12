<?php

namespace App\Modules\Catalog\Application;

use App\Modules\Catalog\Models\ApartmentType;
use App\Modules\Catalog\Models\BlockLayout;
use App\Modules\Catalog\Models\FloorType;
use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use RuntimeException;

/**
 * Импорт проекта из сборки конвейера чертежей (каталог data-build/projects): карточка, окружение, геометрия,
 * типы квартир, квартиры, картинки. Существующие квартиры сохраняют статус и цену из CRM
 * (если не задан resetStatuses) — меняются только «статичные» поля (площадь, контур, комнаты).
 */
final class ImportProject
{
    public function handle(string $root, string $slug, int $sort = 0, bool $resetStatuses = false): array
    {
        $dir = rtrim($root, '/').'/projects';
        $payload = $this->json("$dir/$slug.json");
        $units = $this->json("$dir/$slug/units.json")['items'] ?? [];
        $context = is_file("$dir/$slug/context.json") ? $this->json("$dir/$slug/context.json") : null;

        return DB::transaction(function () use ($dir, $slug, $sort, $payload, $units, $context, $resetStatuses) {
            $project = Project::query()->updateOrCreate(['slug' => $slug], [
                'name' => $payload['name'], 'developer' => $payload['developer']['brand'] ?? '',
                'mode' => $payload['building']['mode'] ?? 'plans', 'payload' => $payload, 'context' => $context, 'sort' => $sort,
            ]);
            $n = ['blocks' => 0, 'floor_types' => 0, 'apartment_types' => 0, 'units_new' => 0, 'units_kept' => 0];
            foreach (glob("$dir/$slug/blocks/*.json") ?: [] as $f) {
                BlockLayout::query()->updateOrCreate(['project_id' => $project->id, 'key' => basename($f, '.json')], ['payload' => $this->json($f)]);
                $n['blocks']++;
            }
            foreach (glob("$dir/$slug/floor-types/*.json") ?: [] as $f) {
                FloorType::query()->updateOrCreate(['project_id' => $project->id, 'key' => basename($f, '.json')], ['payload' => $this->json($f)]);
                $n['floor_types']++;
            }
            if (is_file("$dir/$slug/apartment-types.json")) {
                foreach ($this->json("$dir/$slug/apartment-types.json")['items'] as $t) {
                    ApartmentType::query()->updateOrCreate(['project_id' => $project->id, 'code' => $t['code']], ['payload' => $t]);
                    $n['apartment_types']++;
                }
            }
            foreach (glob("$dir/$slug/types/*.png") ?: [] as $f) {
                Storage::disk('local')->put("media/projects/$slug/types/".basename($f), file_get_contents($f));
            }
            foreach ($units as $u) {
                $static = [
                    'project_id' => $project->id, 'block' => $u['block'] ?? null, 'number' => $u['number'], 'floor' => $u['floor'],
                    'section' => $u['section'] ?? 1, 'rooms' => $u['rooms'], 'area' => $u['area'], 'type_code' => $u['type_code'] ?? null,
                    'polygon' => $u['polygon'] ?? null, 'room_list' => $u['room_list'] ?? null,
                ];
                $existing = Unit::query()->find($u['id']);
                if ($existing && $existing->project_id !== $project->id) {
                    throw new RuntimeException("Квартира {$u['id']} уже принадлежит другому проекту — идентификаторы должны быть уникальны");
                }
                if ($existing && ! $resetStatuses) {
                    $existing->fill($static)->save();
                    $n['units_kept']++;
                } else {
                    Unit::query()->updateOrCreate(['id' => $u['id']], $static + [
                        'status' => $u['status'], 'price' => $u['price'] ?? null, 'is_test' => (bool) ($u['test'] ?? false),
                    ]);
                    $n['units_new']++;
                }
            }

            return $n;
        });
    }

    public function importBrands(string $root): int
    {
        $count = 0;
        // без GLOB_BRACE: на Alpine (musl) такой константы нет
        $logos = preg_grep('/\.(svg|png)$/', glob(rtrim($root, '/').'/brands/*') ?: []);
        foreach ($logos as $f) {
            Storage::disk('local')->put('media/brands/'.basename($f), file_get_contents($f));
            $count++;
        }

        return $count;
    }

    private function json(string $path): array
    {
        if (! is_file($path)) {
            throw new RuntimeException("Нет файла $path");
        }

        return json_decode(file_get_contents($path), true, 512, JSON_THROW_ON_ERROR);
    }
}
