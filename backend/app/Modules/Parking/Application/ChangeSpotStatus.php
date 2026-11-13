<?php

namespace App\Modules\Parking\Application;

use App\Models\User;
use App\Modules\Parking\Models\ParkingSpot;
use App\Modules\Parking\Models\ParkingSpotStatusChange;
use App\Modules\Sales\Domain\UnitStatus;
use Illuminate\Support\Facades\DB;

/**
 * Смена статуса и/или цены машино-места менеджером. Каждое изменение пишет запись истории (кто, когда, было → стало);
 * после первой правки место перестаёт быть тестовым. Цена проданного и снятого остаётся только в CRM.
 */
final class ChangeSpotStatus
{
    /** @param array{status?: string|null, price?: int|null, comment?: string|null} $data */
    public function __invoke(ParkingSpot $spot, array $data, ?User $by): ParkingSpot
    {
        return DB::transaction(function () use ($spot, $data, $by) {
            $spot->refresh();
            $toStatus = isset($data['status']) ? UnitStatus::from($data['status']) : $spot->status;
            $toPrice = array_key_exists('price', $data) ? $data['price'] : $spot->price;
            if ($toStatus === $spot->status && $toPrice === $spot->price && empty($data['comment'])) {
                return $spot;
            }
            ParkingSpotStatusChange::query()->create([
                'parking_spot_id' => $spot->id, 'user_id' => $by?->id,
                'from_status' => $spot->status->value, 'to_status' => $toStatus->value,
                'from_price' => $spot->price, 'to_price' => $toPrice,
                'comment' => $data['comment'] ?? null,
            ]);
            $spot->forceFill(['status' => $toStatus, 'price' => $toPrice, 'is_test' => false])->save();

            return $spot;
        });
    }
}
