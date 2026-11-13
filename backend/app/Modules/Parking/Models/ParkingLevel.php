<?php

namespace App\Modules\Parking\Models;

use App\Modules\Catalog\Models\Project;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Уровень паркинга: −1, −2 … Контур, ядра (лифт и лестница в корпус), рампы и колонны — в ENU, метры.
 *
 * @property-read Project $project
 */
class ParkingLevel extends Model
{
    protected $fillable = ['project_id', 'level', 'name', 'height', 'outline', 'cores', 'ramps', 'columns'];

    protected function casts(): array
    {
        return ['level' => 'integer', 'height' => 'float', 'outline' => 'array', 'cores' => 'array', 'ramps' => 'array', 'columns' => 'array'];
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function spots(): HasMany
    {
        return $this->hasMany(ParkingSpot::class)->orderBy('number');
    }
}
