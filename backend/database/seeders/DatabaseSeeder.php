<?php

namespace Database\Seeders;

use App\Modules\Site\Application\SiteContentImporter;
use Illuminate\Database\Seeder;

/**
 * Стартовые данные: только контент сайта Spliti. ЖК — командой zhk:import, менеджер CRM — zhk:admin
 * (учётных записей с известным паролем сид не создаёт).
 */
class DatabaseSeeder extends Seeder
{
    public function run(SiteContentImporter $site): void
    {
        $site->handle(resource_path('site'));
    }
}
