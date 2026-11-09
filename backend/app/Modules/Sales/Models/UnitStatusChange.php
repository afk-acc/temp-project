<?php

namespace App\Modules\Sales\Models;

use App\Models\User;
use App\Modules\Catalog\Models\Unit;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/** Запись истории: кто, когда и что поменял у квартиры. Только добавляется, не редактируется. */
class UnitStatusChange extends Model
{
    public const UPDATED_AT = null;

    protected $fillable = ['unit_id', 'user_id', 'from_status', 'to_status', 'from_price', 'to_price', 'comment'];

    protected function casts(): array
    {
        return ['from_price' => 'integer', 'to_price' => 'integer', 'created_at' => 'datetime'];
    }

    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
