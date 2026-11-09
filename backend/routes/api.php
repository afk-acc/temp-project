<?php

use App\Modules\Catalog\Http\CrmProjectController;
use App\Modules\Catalog\Http\PublicCatalogController;
use App\Modules\Identity\Http\AuthController;
use App\Modules\Inquiries\Http\PublicInquiryController;
use App\Modules\Leads\Http\CrmLeadController;
use App\Modules\Leads\Http\PublicLeadController;
use App\Modules\Sales\Http\CrmUnitController;
use App\Modules\Site\Http\SiteController;
use Illuminate\Support\Facades\Route;

// Публичный API 3D-сайта (контракт backend/docs/public-api.md)
Route::prefix('projects')->controller(PublicCatalogController::class)->group(function () {
    Route::get('index', 'index');
    Route::get('{slug}', 'show');
    Route::get('{slug}/units', 'units');
    Route::get('{slug}/context', 'context');
    Route::get('{slug}/floor-types/{key}', 'floorType');
    Route::get('{slug}/blocks/{key}', 'block');
    Route::get('{slug}/apartment-types', 'apartmentTypes');
    Route::get('{slug}/types/{file}', 'typeImage')->where('file', '[A-Za-z0-9-]+\.png');
});
Route::get('brands/{file}', [PublicCatalogController::class, 'brand'])->where('file', '[a-z0-9-]+\.(svg|png)');
Route::post('leads', [PublicLeadController::class, 'store'])->middleware('throttle:10,1');

// Сайт Spliti: тексты, контакты и картинки из базы; обращения застройщиков
Route::get('site', [SiteController::class, 'show']);
Route::get('site/media/{file}', [SiteController::class, 'media'])->where('file', '[a-z0-9-]+\.(webp|png|jpg|svg)');
Route::post('inquiries', [PublicInquiryController::class, 'store'])->middleware('throttle:5,1');

// CRM
Route::prefix('crm')->group(function () {
    Route::post('login', [AuthController::class, 'login'])->middleware('throttle:10,1');
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('me', [AuthController::class, 'me']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::get('projects', [CrmProjectController::class, 'index']);
        Route::get('projects/{slug}/stats', [CrmProjectController::class, 'stats']);
        Route::get('projects/{slug}/units', [CrmUnitController::class, 'index']);
        Route::get('projects/{slug}/leads', [CrmLeadController::class, 'index']);
        Route::patch('units/{unit}', [CrmUnitController::class, 'update']);
        Route::post('units/bulk', [CrmUnitController::class, 'bulk']);
        Route::get('units/{unit}/history', [CrmUnitController::class, 'history']);
        Route::patch('leads/{lead}', [CrmLeadController::class, 'update']);
    });
});
