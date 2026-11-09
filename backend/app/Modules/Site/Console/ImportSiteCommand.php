<?php

namespace App\Modules\Site\Console;

use App\Modules\Site\Application\SiteContentImporter;
use Illuminate\Console\Command;

class ImportSiteCommand extends Command
{
    protected $signature = 'spliti:site-import {--force : перезаписать тексты, настройки и картинки в базе стартовыми из resources/site}';

    protected $description = 'Стартовое наполнение сайта Spliti (тексты RU/UZ, настройки, картинки)';

    public function handle(SiteContentImporter $importer): int
    {
        $n = $importer->handle(resource_path('site'), (bool) $this->option('force'));
        $this->info('Сайт: '.json_encode($n, JSON_UNESCAPED_UNICODE));

        return self::SUCCESS;
    }
}
