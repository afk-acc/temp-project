<?php

namespace App\Modules\Parking\Http\Resources;

use App\Modules\Parking\Models\ParkingSpot;
use Illuminate\Http\Request;

/**
 * Машино-место для CRM: цена всегда (и у проданных), время последнего изменения.
 *
 * @mixin ParkingSpot
 */
class CrmParkingSpotResource extends ParkingSpotResource
{
    public function toArray(Request $request): array
    {
        return ['price' => $this->price, 'updated_at' => $this->updated_at?->toIso8601String()] + parent::toArray($request);
    }
}
