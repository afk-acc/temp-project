<?php

namespace App\Modules\Site\Models;

use Illuminate\Database\Eloquent\Model;

/** Тексты сайта Spliti на одном языке (вся страница — один JSON). */
class SiteContent extends Model
{
    public const LANGS = ['ru', 'uz'];

    protected $fillable = ['lang', 'content'];

    protected $casts = ['content' => 'array'];
}
