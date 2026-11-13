<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/** Паркинг ЖК: уровни с геометрией, места со статусом и ценой, история изменений, заявка на место. */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('parking_levels', function (Blueprint $t) {
            $t->id();
            $t->foreignId('project_id')->constrained()->cascadeOnDelete();
            $t->smallInteger('level');                       // −1, −2 …
            $t->string('name', 64);
            $t->decimal('height', 4, 2)->default(3.3);       // м, от пола до пола
            $t->json('outline');                             // контур в ENU, м
            $t->json('cores')->nullable();                   // лифты и лестницы в корпуса
            $t->json('ramps')->nullable();                   // рампы и въезд
            $t->timestamps();
            $t->unique(['project_id', 'level']);
        });

        Schema::create('parking_spots', function (Blueprint $t) {
            $t->id();
            $t->foreignId('project_id')->constrained()->cascadeOnDelete();
            $t->foreignId('parking_level_id')->constrained()->cascadeOnDelete();
            $t->string('code', 16);                          // "1-045": уровень и номер
            $t->unsignedInteger('number');
            $t->string('kind', 16);                          // standard | wide | ev | mgn
            $t->decimal('area', 6, 2);
            $t->json('polygon');                             // контур места в ENU
            $t->string('status', 16)->index();
            $t->unsignedBigInteger('price')->nullable();     // сумы
            $t->boolean('is_test')->default(false);
            $t->timestamps();
            $t->unique(['project_id', 'code']);
        });

        Schema::create('parking_spot_status_changes', function (Blueprint $t) {
            $t->id();
            $t->foreignId('parking_spot_id')->constrained()->cascadeOnDelete();
            $t->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $t->string('from_status', 16)->nullable();
            $t->string('to_status', 16);
            $t->unsignedBigInteger('from_price')->nullable();
            $t->unsignedBigInteger('to_price')->nullable();
            $t->string('comment', 500)->nullable();
            $t->timestamp('created_at')->useCurrent();
            $t->index(['parking_spot_id', 'created_at']);
        });

        Schema::table('leads', function (Blueprint $t) {
            $t->foreignId('parking_spot_id')->nullable()->after('unit_id')->constrained()->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('leads', function (Blueprint $t) {
            $t->dropConstrainedForeignId('parking_spot_id');
        });
        Schema::dropIfExists('parking_spot_status_changes');
        Schema::dropIfExists('parking_spots');
        Schema::dropIfExists('parking_levels');
    }
};
