<?php

namespace App\Modules\Site\Models;

use Illuminate\Database\Eloquent\Model;

/** Настройка сайта Spliti: contacts (telegram, phone, email), demo_url. */
class SiteSetting extends Model
{
    public const KEYS = ['contacts', 'demo_url'];

    protected $fillable = ['key', 'value'];

    protected $casts = ['value' => 'json'];
}
