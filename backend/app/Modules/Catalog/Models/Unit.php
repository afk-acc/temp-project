<?php

namespace App\Modules\Catalog\Models;

use App\Modules\Sales\Domain\UnitStatus;
use App\Modules\Sales\Models\UnitStatusChange;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Unit extends Model
{
    public $incrementing = false;

    protected $fillable = [
        'id', 'project_id', 'block', 'number', 'floor', 'section', 'rooms', 'area', 'type_code',
        'polygon', 'room_list', 'status', 'price', 'is_test',
    ];

    protected function casts(): array
    {
        return [
            'polygon' => 'array', 'room_list' => 'array', 'status' => UnitStatus::class,
            'area' => 'float', 'price' => 'integer', 'is_test' => 'boolean',
        ];
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function changes(): HasMany
    {
        return $this->hasMany(UnitStatusChange::class)->latest('created_at')->latest('id');
    }

    /** Квартира в формате контракта API 3D-сайта */
    /** Для 3D-сайта: цена проданных и снятых квартир — коммерческая тайна, остаётся только в CRM */
    public function toPublic(): array
    {
        $data = $this->toContract();
        if (! $this->status->priceIsPublic()) {
            $data['price'] = null;
        }

        return $data;
    }

    public function toContract(): array
    {
        return [
            'id' => $this->id, 'number' => $this->number, 'floor' => $this->floor, 'section' => $this->section,
            'block' => $this->block, 'rooms' => $this->rooms, 'area' => $this->area, 'type_code' => $this->type_code,
            'status' => $this->status->value, 'price' => $this->price, 'polygon' => $this->polygon,
            'room_list' => $this->room_list, 'observed_at' => $this->updated_at?->toDateString(),
            'source' => 'crm', 'test' => $this->is_test,
        ];
    }
}
