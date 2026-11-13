<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/** Колонны каркаса на уровне паркинга: контуры в ENU (для плана в CRM и 3D). */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('parking_levels', function (Blueprint $t) {
            $t->json('columns')->nullable()->after('ramps');
        });
    }

    public function down(): void
    {
        Schema::table('parking_levels', function (Blueprint $t) {
            $t->dropColumn('columns');
        });
    }
};
