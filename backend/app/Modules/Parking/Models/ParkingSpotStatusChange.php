<?php

namespace App\Modules\Parking\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/** Запись истории машино-места: кто, когда и что поменял. Только добавляется. */
class ParkingSpotStatusChange extends Model
{
    public const UPDATED_AT = null;

    protected $fillable = ['parking_spot_id', 'user_id', 'from_status', 'to_status', 'from_price', 'to_price', 'comment'];

    protected function casts(): array
    {
        return ['from_price' => 'integer', 'to_price' => 'integer', 'created_at' => 'datetime'];
    }

    public function parkingSpot(): BelongsTo
    {
        return $this->belongsTo(ParkingSpot::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
