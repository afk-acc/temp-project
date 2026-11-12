<?php

namespace App\Modules\Site\Console;

use App\Modules\Site\Models\SiteSetting;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;

/**
 * Настройки сайта Spliti в базе. Примеры:
 *   php artisan spliti:site-set                         — показать все
 *   php artisan spliti:site-set contacts.telegram spliti_uz
 *   php artisan spliti:site-set contacts.phone ""        — убрать телефон с сайта
 *   php artisan spliti:site-set demo_url https://lab.edu-start.org/nrg-bi/
 */
class SetSiteSettingCommand extends Command
{
    protected $signature = 'spliti:site-set {key? : contacts.telegram | contacts.phone | contacts.email | demo_url | crm_url} {value? : новое значение; пустая строка — убрать}';

    protected $description = 'Показать или изменить настройки сайта Spliti (контакты, ссылка на демо)';

    private const ALLOWED = ['contacts.telegram', 'contacts.phone', 'contacts.email', 'demo_url', 'crm_url'];

    public function handle(): int
    {
        $key = $this->argument('key');
        if ($key === null) {
            foreach (SiteSetting::query()->orderBy('key')->get() as $s) {
                $this->line($s->key.' = '.json_encode($s->value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
            }

            return self::SUCCESS;
        }
        if (! in_array($key, self::ALLOWED, true)) {
            $this->error('Можно менять: '.implode(', ', self::ALLOWED));

            return self::INVALID;
        }
        $value = trim((string) $this->argument('value'));
        if ($key === 'contacts.telegram') {
            $value = ltrim(preg_replace('#^https?://t\.me/#', '', $value), '@');
        }
        [$root] = explode('.', $key, 2);
        $setting = SiteSetting::query()->firstOrNew(['key' => $root]);
        if ($root === 'contacts') {
            $data = (array) ($setting->value ?? []);
            Arr::set($data, substr($key, strlen('contacts.')), $value);
            $setting->value = $data;
        } else {
            $setting->value = $value;
        }
        $setting->save();
        $this->info("$key = ".($value === '' ? '(убрано)' : $value));

        return self::SUCCESS;
    }
}
