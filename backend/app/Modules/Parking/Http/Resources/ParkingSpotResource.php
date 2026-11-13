<?php

namespace App\Modules\Parking\Http\Resources;

use App\Modules\Parking\Models\ParkingSpot;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Машино-место для сайта: цена видна только у мест в продаже и в брони.
 *
 * @mixin ParkingSpot
 */
class ParkingSpotResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'number' => $this->number,
            'level' => $this->parkingLevel->level,
            'kind' => $this->kind->value,
            'area' => $this->area,
            'polygon' => $this->polygon,
            'status' => $this->status->value,
            'price' => $this->status->priceIsPublic() ? $this->price : null,
            'test' => $this->is_test,
        ];
    }
}
