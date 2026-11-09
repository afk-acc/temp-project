<?php

namespace App\Modules\Inquiries\Models;

use Illuminate\Database\Eloquent\Model;

/** Обращение застройщика с сайта Spliti. */
class Inquiry extends Model
{
    protected $fillable = ['name', 'company', 'phone', 'message', 'lang', 'status'];
}
