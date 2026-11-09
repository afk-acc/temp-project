<?php

namespace App\Modules\Leads\Models;

use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lead extends Model
{
    public const STATUSES = ['new', 'in_progress', 'done'];

    protected $fillable = ['project_id', 'unit_id', 'name', 'phone', 'comment', 'status', 'source'];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class);
    }
}
