<?php

namespace App\Modules\Catalog\Http;

use App\Http\Controllers\Controller;
use App\Modules\Catalog\Application\ProjectStats;
use App\Modules\Catalog\Models\Project;
use Illuminate\Http\JsonResponse;

class CrmProjectController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(['items' => Project::query()->orderBy('sort')->withCount('units')->get()->map(fn (Project $p) => [
            'slug' => $p->slug, 'name' => $p->name, 'developer' => $p->developer, 'mode' => $p->mode, 'units' => $p->units_count,
            'blocks' => collect($p->payload['building']['blocks'] ?? [])->map(fn ($b) => ['id' => $b['id'], 'label' => $b['label'], 'levels' => $b['levels']])->values(),
        ])]);
    }

    public function stats(string $slug, ProjectStats $stats): JsonResponse
    {
        return response()->json($stats->for(Project::query()->where('slug', $slug)->firstOrFail()));
    }
}
