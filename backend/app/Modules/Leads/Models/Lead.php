<?php

namespace App\Modules\Leads\Models;

use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use App\Modules\Parking\Models\ParkingSpot;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lead extends Model
{
    public const STATUSES = ['new', 'in_progress', 'done'];

    protected $fillable = ['project_id', 'unit_id', 'parking_spot_id', 'name', 'phone', 'comment', 'status', 'source'];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class);
    }

    public function parkingSpot(): BelongsTo
    {
        return $this->belongsTo(ParkingSpot::class);
    }
}
