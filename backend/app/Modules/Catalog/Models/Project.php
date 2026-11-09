<?php

namespace App\Modules\Catalog\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    protected $fillable = ['slug', 'name', 'developer', 'mode', 'payload', 'context', 'sort'];

    protected function casts(): array
    {
        return ['payload' => 'array', 'context' => 'array'];
    }

    public function units(): HasMany
    {
        return $this->hasMany(Unit::class);
    }

    public function blockLayouts(): HasMany
    {
        return $this->hasMany(BlockLayout::class);
    }

    public function floorTypes(): HasMany
    {
        return $this->hasMany(FloorType::class);
    }

    public function apartmentTypes(): HasMany
    {
        return $this->hasMany(ApartmentType::class);
    }
}
