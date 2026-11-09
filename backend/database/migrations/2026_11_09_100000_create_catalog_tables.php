<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $t) {
            $t->id();
            $t->string('slug')->unique();
            $t->string('name');
            $t->string('developer');
            $t->string('mode', 16);             // plans | massing
            $t->json('payload');                 // карточка проекта по контракту API (без живой сводки)
            $t->json('context')->nullable();     // окружение OSM и места рядом
            $t->unsignedSmallInteger('sort')->default(0);
            $t->timestamps();
        });

        Schema::create('block_layouts', function (Blueprint $t) {
            $t->id();
            $t->foreignId('project_id')->constrained()->cascadeOnDelete();
            $t->string('key', 32);
            $t->json('payload');
            $t->unique(['project_id', 'key']);
        });

        Schema::create('floor_types', function (Blueprint $t) {
            $t->id();
            $t->foreignId('project_id')->constrained()->cascadeOnDelete();
            $t->string('key', 32);
            $t->json('payload');
            $t->unique(['project_id', 'key']);
        });

        Schema::create('apartment_types', function (Blueprint $t) {
            $t->id();
            $t->foreignId('project_id')->constrained()->cascadeOnDelete();
            $t->string('code', 32);
            $t->json('payload');
            $t->unique(['project_id', 'code']);
        });

        Schema::create('units', function (Blueprint $t) {
            $t->unsignedBigInteger('id')->primary();       // внешний идентификатор квартиры (как в каталоге застройщика)
            $t->foreignId('project_id')->constrained()->cascadeOnDelete();
            $t->string('block', 32)->nullable();
            $t->unsignedInteger('number');
            $t->unsignedSmallInteger('floor');
            $t->unsignedSmallInteger('section')->default(1);
            $t->unsignedTinyInteger('rooms');
            $t->decimal('area', 8, 2);
            $t->string('type_code', 32)->nullable();
            $t->json('polygon')->nullable();
            $t->json('room_list')->nullable();
            $t->string('status', 16)->index();
            $t->unsignedBigInteger('price')->nullable();   // сумы
            $t->boolean('is_test')->default(false);
            $t->timestamps();
            $t->index(['project_id', 'block', 'floor']);
        });

        Schema::create('unit_status_changes', function (Blueprint $t) {
            $t->id();
            $t->unsignedBigInteger('unit_id');
            $t->foreign('unit_id')->references('id')->on('units')->cascadeOnDelete();
            $t->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $t->string('from_status', 16)->nullable();
            $t->string('to_status', 16);
            $t->unsignedBigInteger('from_price')->nullable();
            $t->unsignedBigInteger('to_price')->nullable();
            $t->string('comment', 500)->nullable();
            $t->timestamp('created_at')->useCurrent();
            $t->index(['unit_id', 'created_at']);
        });

        Schema::create('leads', function (Blueprint $t) {
            $t->id();
            $t->foreignId('project_id')->constrained()->cascadeOnDelete();
            $t->unsignedBigInteger('unit_id')->nullable();
            $t->foreign('unit_id')->references('id')->on('units')->nullOnDelete();
            $t->string('name', 120);
            $t->string('phone', 20);
            $t->string('comment', 500)->nullable();
            $t->string('status', 16)->default('new')->index();
            $t->string('source', 32)->default('3d');
            $t->timestamps();
        });
    }

    public function down(): void
    {
        foreach (['leads', 'unit_status_changes', 'units', 'apartment_types', 'floor_types', 'block_layouts', 'projects'] as $t) {
            Schema::dropIfExists($t);
        }
    }
};
