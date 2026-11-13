<?php

namespace App\Modules\Parking\Application;

use App\Modules\Catalog\Models\Project;
use App\Modules\Parking\Models\ParkingLevel;
use App\Modules\Parking\Models\ParkingSpot;
use Illuminate\Support\Facades\DB;

/**
 * Паркинг проекта из сборки конвейера (`data-build/projects/<slug>/parking.json`): уровни с геометрией и места.
 * Статус и цена уже заведённых мест берутся из CRM (если не задан resetStatuses) — меняются только тип, площадь и контур.
 * Места и уровни, которых в сборке больше нет, удаляются (заявки на них остаются без ссылки на место).
 */
final class ImportParking
{
    /** @return array{levels: int, spots_new: int, spots_kept: int, spots_removed: int} */
    public function __invoke(Project $project, string $file, bool $resetStatuses = false): array
    {
        $data = json_decode((string) file_get_contents($file), true, 512, JSON_THROW_ON_ERROR);

        return DB::transaction(function () use ($project, $data, $resetStatuses) {
            $n = ['levels' => 0, 'spots_new' => 0, 'spots_kept' => 0, 'spots_removed' => 0];
            $levels = [];
            foreach ($data['levels'] as $l) {
                $levels[$l['level']] = ParkingLevel::query()->updateOrCreate(
                    ['project_id' => $project->id, 'level' => $l['level']],
                    [
                        'name' => $l['name'], 'height' => $l['height'], 'outline' => $l['outline'],
                        'cores' => $l['cores'] ?? [], 'ramps' => $l['ramps'] ?? [], 'columns' => $l['columns'] ?? [],
                    ],
                );
                $n['levels']++;
            }
            $codes = [];
            foreach ($data['spots'] as $s) {
                $codes[] = $s['code'];
                $static = [
                    'parking_level_id' => $levels[$s['level']]->id, 'number' => $s['number'], 'kind' => $s['kind'],
                    'area' => $s['area'], 'polygon' => $s['polygon'],
                ];
                $spot = ParkingSpot::query()->where('project_id', $project->id)->where('code', $s['code'])->first();
                if ($spot && ! $resetStatuses) {
                    $spot->fill($static)->save();
                    $n['spots_kept']++;
                } else {
                    ParkingSpot::query()->updateOrCreate(['project_id' => $project->id, 'code' => $s['code']], $static + [
                        'status' => $s['status'], 'price' => $s['price'] ?? null, 'is_test' => (bool) ($s['test'] ?? false),
                    ]);
                    $n['spots_new']++;
                }
            }
            $n['spots_removed'] = ParkingSpot::query()->where('project_id', $project->id)->whereNotIn('code', $codes)->delete();
            ParkingLevel::query()->where('project_id', $project->id)->whereNotIn('level', array_keys($levels))->delete();

            return $n;
        });
    }
}
