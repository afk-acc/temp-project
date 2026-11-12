<?php

namespace App\Modules\Site\Application;

use App\Modules\Site\Models\SiteContent;
use App\Modules\Site\Models\SiteSetting;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use RuntimeException;

/**
 * Стартовое наполнение сайта из resources/site: тексты (ru.json, uz.json), настройки, картинки.
 * Источник правды после импорта — база: без $force правки в базе не перезаписываются,
 * но ключи, которых в базе ещё нет (новые подписи после обновления сайта), дописываются из файлов.
 */
final class SiteContentImporter
{
    public function handle(string $dir, bool $force = false): array
    {
        $n = ['contents' => 0, 'settings' => 0, 'media' => 0];
        DB::transaction(function () use ($dir, $force, &$n) {
            foreach (SiteContent::LANGS as $lang) {
                $seed = $this->json("$dir/$lang.json");
                $row = SiteContent::query()->where('lang', $lang)->first();
                $content = ! $row || $force ? $seed : self::fillMissing($row->content, $seed);
                if (! $row || $content !== $row->content) {
                    SiteContent::query()->updateOrCreate(['lang' => $lang], ['content' => $content]);
                    $n['contents']++;
                }
            }
            foreach ($this->json("$dir/settings.json") as $key => $seed) {
                $row = SiteSetting::query()->where('key', $key)->first();
                $value = ! $row || $force ? $seed : self::fillMissing($row->value, $seed);
                if (! $row || $value !== $row->value) {
                    SiteSetting::query()->updateOrCreate(['key' => $key], ['value' => $value]);
                    $n['settings']++;
                }
            }
        });
        // без GLOB_BRACE: на Alpine (musl) такой константы нет
        $media = preg_grep('/\.(webp|png|jpg|svg)$/', glob("$dir/media/*") ?: []);
        foreach ($media as $f) {
            $target = 'media/site/'.basename($f);
            if ($force || ! Storage::disk('local')->exists($target)) {
                Storage::disk('local')->put($target, file_get_contents($f));
                $n['media']++;
            }
        }

        return $n;
    }

    /**
     * Дописать в $current ключи из $seed, которых там нет. Значения из базы не меняются;
     * вложенные объекты обходятся рекурсивно, списки (вопросы, шаги) — целиком как в базе.
     */
    private static function fillMissing(mixed $current, mixed $seed): mixed
    {
        if (! is_array($current) || ! is_array($seed) || array_is_list($current) || array_is_list($seed)) {
            return $current;
        }
        foreach ($seed as $key => $value) {
            $current[$key] = array_key_exists($key, $current) ? self::fillMissing($current[$key], $value) : $value;
        }

        return $current;
    }

    private function json(string $path): array
    {
        if (! is_file($path)) {
            throw new RuntimeException("Нет файла $path");
        }

        return json_decode(file_get_contents($path), true, 512, JSON_THROW_ON_ERROR);
    }
}
