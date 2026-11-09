<?php

namespace App\Modules\Catalog\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/** Геометрия хранится как есть (JSON по контракту API): её строит конвейер чертежей, CRM её не редактирует. */
class BlockLayout extends Model
{
    public $timestamps = false;

    protected $fillable = ['project_id', 'key', 'payload'];

    protected function casts(): array
    {
        return ['payload' => 'array'];
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
