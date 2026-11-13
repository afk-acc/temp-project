<?php

namespace App\Modules\Parking\Http\Resources;

use App\Modules\Parking\Models\ParkingLevel;
use App\Modules\Parking\Models\ParkingSpot;
use App\Modules\Sales\Domain\UnitStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin ParkingLevel */
class ParkingLevelResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'level' => $this->level,
            'name' => $this->name,
            'height' => $this->height,
            'outline' => $this->outline,
            'cores' => $this->cores ?? [],
            'ramps' => $this->ramps ?? [],
            'columns' => $this->columns ?? [],
            'total' => $this->spots->count(),
            'available' => $this->spots->filter(fn (ParkingSpot $s) => $s->status === UnitStatus::Available)->count(),
        ];
    }
}
