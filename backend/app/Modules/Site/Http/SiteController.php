<?php

namespace App\Modules\Site\Http;

use App\Http\Controllers\Controller;
use App\Modules\Site\Application\SitePayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/** Публичный API сайта Spliti: тексты, контакты и картинки — из базы и хранилища бэкенда. */
class SiteController extends Controller
{
    public function show(Request $request, SitePayload $payload): JsonResponse
    {
        $data = $payload->for((string) $request->query('lang', 'ru'));
        abort_if($data === null, 503, 'Контент сайта не загружен: php artisan spliti:site-import');

        return response()->json($data)->header('Cache-Control', 'public, max-age=60');
    }

    public function media(string $file): BinaryFileResponse
    {
        $path = "media/site/$file";
        abort_unless(Storage::disk('local')->exists($path), 404);
        $type = match (pathinfo($file, PATHINFO_EXTENSION)) {
            'webp' => 'image/webp', 'png' => 'image/png', 'jpg' => 'image/jpeg', default => 'image/svg+xml',
        };

        return response()->file(Storage::disk('local')->path($path), [
            'Content-Type' => $type, 'Cache-Control' => 'public, max-age=86400',
            'Content-Security-Policy' => "default-src 'none'; style-src 'unsafe-inline'",
        ]);
    }
}
