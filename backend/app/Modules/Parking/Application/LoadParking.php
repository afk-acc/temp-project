<?php

namespace App\Modules\Parking\Application;

use App\Modules\Catalog\Models\Project;
use App\Modules\Parking\Models\ParkingLevel;
use Illuminate\Database\Eloquent\Collection;

/** Паркинг проекта целиком: уровни сверху вниз (−1, −2 …), у каждого — места по номеру. Пусто, если паркинга нет. */
final class LoadParking
{
    /** @return Collection<int, ParkingLevel> */
    public function __invoke(Project $project): Collection
    {
        $levels = ParkingLevel::query()->where('project_id', $project->id)->orderByDesc('level')->with('spots')->get();
        // место знает свой уровень без лишних запросов
        $levels->each(fn (ParkingLevel $l) => $l->spots->each->setRelation('parkingLevel', $l));

        return $levels;
    }
}
