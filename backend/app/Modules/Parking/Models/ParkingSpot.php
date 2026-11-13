<?php

namespace App\Modules\Parking\Models;

use App\Modules\Catalog\Models\Project;
use App\Modules\Parking\Domain\SpotKind;
use App\Modules\Sales\Domain\UnitStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Машино-место. Статусы — те же, что у квартир: в продаже, бронь, продано, снято.
 *
 * @property-read Project $project
 * @property-read ParkingLevel $parkingLevel
 */
class ParkingSpot extends Model
{
    protected $fillable = ['project_id', 'parking_level_id', 'code', 'number', 'kind', 'area', 'polygon', 'status', 'price', 'is_test'];

    protected function casts(): array
    {
        return [
            'number' => 'integer', 'kind' => SpotKind::class, 'area' => 'float', 'polygon' => 'array',
            'status' => UnitStatus::class, 'price' => 'integer', 'is_test' => 'boolean',
        ];
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function parkingLevel(): BelongsTo
    {
        return $this->belongsTo(ParkingLevel::class);
    }

    public function changes(): HasMany
    {
        return $this->hasMany(ParkingSpotStatusChange::class)->latest('created_at')->latest('id');
    }
}
