<?php

namespace App\Modules\Site\Application;

use App\Modules\Site\Models\SiteContent;
use App\Modules\Site\Models\SiteSetting;

/** Ответ для страницы сайта: тексты на языке посетителя (или русском) + настройки. */
final class SitePayload
{
    public function for(string $lang): ?array
    {
        $lang = in_array($lang, SiteContent::LANGS, true) ? $lang : 'ru';
        $content = SiteContent::query()->where('lang', $lang)->first() ?? SiteContent::query()->where('lang', 'ru')->first();
        if (! $content) {
            return null;
        }
        $settings = SiteSetting::query()->pluck('value', 'key');

        return [
            'lang' => $content->lang,
            'langs' => SiteContent::query()->orderBy('id')->pluck('lang')->all(),
            'content' => $content->content,
            'contacts' => array_filter((array) ($settings['contacts'] ?? []), fn ($v) => is_string($v) && trim($v) !== ''),
            'demo_url' => $settings['demo_url'] ?? null,
            'crm_url' => $settings['crm_url'] ?? null,
            'updated_at' => $content->updated_at?->toIso8601String(),
        ];
    }
}
