<?php

namespace App\Modules\Catalog\Console;

use App\Modules\Catalog\Application\ImportProject;
use App\Modules\Catalog\Models\Project;
use App\Modules\Parking\Application\ImportParking;
use Illuminate\Console\Command;

class ImportProjectCommand extends Command
{
    protected $signature = 'zhk:import {slugs* : проекты, например harizma c1 nrg-mirzo-ulugbek}
        {--from= : каталог сборки (по умолчанию ../data-build)}
        {--reset-statuses : перезаписать статусы и цены из сборки (иначе сохраняются из CRM)}';

    protected $description = 'Импорт проектов из сборки конвейера чертежей в CRM';

    public function handle(ImportProject $import, ImportParking $parking): int
    {
        $root = $this->option('from') ?: base_path('../data-build');
        $this->info('Логотипы брендов: '.$import->importBrands($root));
        foreach ($this->argument('slugs') as $i => $slug) {
            $n = $import->handle($root, $slug, $i, (bool) $this->option('reset-statuses'));
            $this->info("$slug: ".json_encode($n, JSON_UNESCAPED_UNICODE));
            // паркинг — если конвейер его собрал (tools/synth_parking.py)
            $file = rtrim($root, '/')."/projects/$slug/parking.json";
            if (is_file($file)) {
                $p = $parking(Project::query()->where('slug', $slug)->firstOrFail(), $file, (bool) $this->option('reset-statuses'));
                $this->info("$slug, паркинг: ".json_encode($p, JSON_UNESCAPED_UNICODE));
            }
        }

        return self::SUCCESS;
    }
}
