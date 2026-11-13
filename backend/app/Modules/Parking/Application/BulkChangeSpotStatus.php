<?php

namespace App\Modules\Parking\Application;

use App\Models\User;
use App\Modules\Catalog\Models\Project;
use App\Modules\Parking\Models\ParkingSpot;
use App\Modules\Sales\Domain\UnitStatus;

/** Один статус сразу для нескольких мест проекта (например, весь ряд снять с продажи). Возвращает, сколько мест поменялось. */
final class BulkChangeSpotStatus
{
    public function __construct(private readonly ChangeSpotStatus $change) {}

    /** @param list<int> $ids */
    public function __invoke(Project $project, array $ids, UnitStatus $status, ?string $comment, ?User $by): int
    {
        $changed = 0;
        ParkingSpot::query()->where('project_id', $project->id)->whereIn('id', $ids)->each(function (ParkingSpot $spot) use ($status, $comment, $by, &$changed) {
            $before = $spot->status;
            ($this->change)($spot, ['status' => $status->value, 'comment' => $comment], $by);
            if ($before !== $status) {
                $changed++;
            }
        });

        return $changed;
    }
}
