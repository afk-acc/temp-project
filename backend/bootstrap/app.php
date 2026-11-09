<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withCommands([
        __DIR__.'/../app/Modules/Catalog/Console',
        __DIR__.'/../app/Modules/Identity/Console',
        __DIR__.'/../app/Modules/Inquiries/Console',
        __DIR__.'/../app/Modules/Site/Console',
    ])
    ->withMiddleware(function (Middleware $middleware): void {
        // CRM и 3D-сайт ходят с того же домена: сессия Sanctum + CSRF
        $middleware->statefulApi();
        // на сервере перед приложением Nginx Proxy Manager и шлюз: доверяем X-Forwarded-* (https, IP посетителя для лимитов).
        // Безопасно, потому что php-fpm доступен только шлюзу, а шлюз — только с моста Docker (172.17.0.1), не из интернета.
        $middleware->trustProxies(at: '*');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->shouldRenderJsonWhen(
            fn (Request $request) => $request->is('api/*') || $request->expectsJson(),
        );
    })->create();
