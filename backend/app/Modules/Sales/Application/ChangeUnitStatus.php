<?php

namespace App\Modules\Sales\Application;

use App\Models\User;
use App\Modules\Catalog\Models\Unit;
use App\Modules\Sales\Domain\UnitStatus;
use App\Modules\Sales\Models\UnitStatusChange;
use Illuminate\Support\Facades\DB;

/**
 * Смена статуса и/или цены квартиры. Каждое изменение пишет запись истории (кто, когда, было → стало).
 * Цена у проданной и снятой квартиры на сайте не показывается, но в CRM сохраняется.
 */
final class ChangeUnitStatus
{
    /** @param array{status?: string|null, price?: int|null, comment?: string|null} $data */
    public function handle(Unit $unit, array $data, ?User $by): Unit
    {
        return DB::transaction(function () use ($unit, $data, $by) {
            $unit->refresh();
            $toStatus = isset($data['status']) ? UnitStatus::from($data['status']) : $unit->status;
            $toPrice = array_key_exists('price', $data) ? $data['price'] : $unit->price;
            if ($toStatus === $unit->status && $toPrice === $unit->price && empty($data['comment'])) {
                return $unit;
            }
            UnitStatusChange::query()->create([
                'unit_id' => $unit->id, 'user_id' => $by?->id,
                'from_status' => $unit->status->value, 'to_status' => $toStatus->value,
                'from_price' => $unit->price, 'to_price' => $toPrice,
                'comment' => $data['comment'] ?? null,
            ]);
            $unit->forceFill(['status' => $toStatus, 'price' => $toPrice, 'is_test' => false])->save();

            return $unit;
        });
    }

    /** @param list<int> $ids */
    public function bulk(int $projectId, array $ids, string $status, ?string $comment, ?User $by): int
    {
        $count = 0;
        Unit::query()->where('project_id', $projectId)->whereIn('id', $ids)->each(function (Unit $u) use ($status, $comment, $by, &$count) {
            $before = $u->status->value;
            $this->handle($u, ['status' => $status, 'comment' => $comment], $by);
            if ($before !== $status) {
                $count++;
            }
        });

        return $count;
    }
}
