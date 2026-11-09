<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/** Обращения застройщиков с сайта Spliti («Покажем ваш ЖК в 3D»). Не путать с leads — заявками покупателей по квартире. */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inquiries', function (Blueprint $t) {
            $t->id();
            $t->string('name', 120);
            $t->string('company', 160)->nullable();
            $t->string('phone', 32);
            $t->text('message')->nullable();
            $t->string('lang', 2)->default('ru');
            $t->string('status', 16)->default('new');
            $t->timestamps();
            $t->index(['status', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};
