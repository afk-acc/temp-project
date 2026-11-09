<?php

namespace App\Modules\Catalog\Http;

use App\Http\Controllers\Controller;
use App\Modules\Catalog\Application\PublicCatalog;
use App\Modules\Catalog\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/** Публичный API 3D-сайта (контракт — backend/docs/public-api.md). */
class PublicCatalogController extends Controller
{
    public function __construct(private readonly PublicCatalog $catalog) {}

    public function index(): JsonResponse
    {
        return response()->json($this->catalog->index());
    }

    public function show(string $slug): JsonResponse
    {
        return response()->json($this->catalog->project($this->project($slug)));
    }

    public function units(string $slug): JsonResponse
    {
        return response()->json($this->catalog->units($this->project($slug)))->header('Cache-Control', 'no-store');
    }

    public function context(string $slug): JsonResponse
    {
        return response()->json($this->catalog->context($this->project($slug)));
    }

    public function floorType(string $slug, string $key): JsonResponse
    {
        return response()->json($this->project($slug)->floorTypes()->where('key', $key)->firstOrFail()->payload);
    }

    public function block(string $slug, string $key): JsonResponse
    {
        return response()->json($this->project($slug)->blockLayouts()->where('key', $key)->firstOrFail()->payload);
    }

    public function apartmentTypes(string $slug): JsonResponse
    {
        return response()->json($this->catalog->apartmentTypes($this->project($slug)));
    }

    public function typeImage(string $slug, string $file): BinaryFileResponse
    {
        return $this->file("media/projects/$slug/types/$file", 'image/png');
    }

    public function brand(string $file): BinaryFileResponse
    {
        return $this->file("media/brands/$file", str_ends_with($file, '.svg') ? 'image/svg+xml' : 'image/png');
    }

    private function project(string $slug): Project
    {
        return $this->catalog->find($slug);
    }

    private function file(string $path, string $type): BinaryFileResponse
    {
        abort_unless(Storage::disk('local')->exists($path), 404);

        return response()->file(Storage::disk('local')->path($path), [
            'Content-Type' => $type, 'Cache-Control' => 'public, max-age=3600',
            'Content-Security-Policy' => "default-src 'none'; style-src 'unsafe-inline'",
        ]);
    }
}
