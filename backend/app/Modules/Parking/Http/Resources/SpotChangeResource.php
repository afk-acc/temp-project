<?php

namespace App\Modules\Parking\Http\Resources;

use App\Modules\Parking\Models\ParkingSpotStatusChange;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin ParkingSpotStatusChange */
class SpotChangeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'from_status' => $this->from_status,
            'to_status' => $this->to_status,
            'from_price' => $this->from_price,
            'to_price' => $this->to_price,
            'comment' => $this->comment,
            'user' => $this->user?->name,
            'at' => $this->created_at?->toIso8601String(),
        ];
    }
}
