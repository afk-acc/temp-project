<?php

namespace App\Modules\Parking\Http\Resources;

use App\Modules\Parking\Models\ParkingLevel;
use App\Modules\Parking\Models\ParkingSpot;
use App\Modules\Sales\Domain\UnitStatus;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Паркинг проекта: сводка, уровни с геометрией, места. Для сайта цена проданного и снятого места скрыта, для CRM — нет.
 * Если паркинга у проекта нет — пустые уровни и места.
 *
 * @property Collection<int, ParkingLevel> $resource
 */
class ParkingResource extends JsonResource
{
    /** @param Collection<int, ParkingLevel> $levels */
    public function __construct(Collection $levels, private readonly bool $crm = false)
    {
        parent::__construct($levels);
    }

    public function toArray(Request $request): array
    {
        $levels = $this->resource;
        /** @var \Illuminate\Support\Collection<int, ParkingSpot> $spots */
        $spots = $levels->flatMap(fn (ParkingLevel $l) => $l->spots);
        $spotResource = $this->crm ? CrmParkingSpotResource::class : ParkingSpotResource::class;

        return [
            'test' => $spots->contains(fn (ParkingSpot $s) => $s->is_test),
            'summary' => [
                'levels' => $levels->count(),
                'total' => $spots->count(),
                'by_status' => collect(UnitStatus::cases())->mapWithKeys(fn (UnitStatus $st) => [
                    $st->value => $spots->filter(fn (ParkingSpot $s) => $s->status === $st)->count(),
                ]),
                'price_from' => $spots->filter(fn (ParkingSpot $s) => $s->status === UnitStatus::Available)->min('price'),
            ],
            'levels' => ParkingLevelResource::collection($levels),
            'spots' => $spotResource::collection($spots),
        ];
    }
}
