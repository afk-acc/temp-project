<?php

namespace App\Modules\Site\Application;

use App\Modules\Site\Models\SiteContent;
use App\Modules\Site\Models\SiteSetting;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use RuntimeException;

/**
 * Стартовое наполнение сайта из resources/site: тексты (ru.json, uz.json), настройки, картинки.
 * Источник правды после импорта — база: без $force уже существующие записи не перезаписываются.
 */
final class SiteContentImporter
{
    public function handle(string $dir, bool $force = false): array
    {
        $n = ['contents' => 0, 'settings' => 0, 'media' => 0];
        DB::transaction(function () use ($dir, $force, &$n) {
            foreach (SiteContent::LANGS as $lang) {
                $exists = SiteContent::query()->where('lang', $lang)->exists();
                if (! $exists || $force) {
                    SiteContent::query()->updateOrCreate(['lang' => $lang], ['content' => $this->json("$dir/$lang.json")]);
                    $n['contents']++;
                }
            }
            foreach ($this->json("$dir/settings.json") as $key => $value) {
                $exists = SiteSetting::query()->where('key', $key)->exists();
                if (! $exists || $force) {
                    SiteSetting::query()->updateOrCreate(['key' => $key], ['value' => $value]);
                    $n['settings']++;
                }
            }
        });
        foreach (glob("$dir/media/*.{webp,png,jpg,svg}", GLOB_BRACE) ?: [] as $f) {
            $target = 'media/site/'.basename($f);
            if ($force || ! Storage::disk('local')->exists($target)) {
                Storage::disk('local')->put($target, file_get_contents($f));
                $n['media']++;
            }
        }

        return $n;
    }

    private function json(string $path): array
    {
        if (! is_file($path)) {
            throw new RuntimeException("Нет файла $path");
        }

        return json_decode(file_get_contents($path), true, 512, JSON_THROW_ON_ERROR);
    }
}
