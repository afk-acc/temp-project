<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/** Сайт Spliti: тексты по языкам и настройки (контакты, ссылка на демо). Картинки — в хранилище media/site. */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('site_contents', function (Blueprint $t) {
            $t->id();
            $t->string('lang', 2)->unique();
            $t->json('content');
            $t->timestamps();
        });
        Schema::create('site_settings', function (Blueprint $t) {
            $t->id();
            $t->string('key', 64)->unique();
            $t->json('value');
            $t->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('site_settings');
        Schema::dropIfExists('site_contents');
    }
};
