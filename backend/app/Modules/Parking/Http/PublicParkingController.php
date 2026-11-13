<?php

namespace App\Modules\Parking\Http;

use App\Http\Controllers\Controller;
use App\Modules\Catalog\Models\Project;
use App\Modules\Parking\Application\LoadParking;
use App\Modules\Parking\Http\Resources\ParkingResource;

/** GET /api/projects/{slug}/parking — паркинг для 3D-сайта (контракт backend/docs/public-api.md). */
class PublicParkingController extends Controller
{
    public function __invoke(string $slug, LoadParking $load): ParkingResource
    {
        return new ParkingResource($load(Project::query()->where('slug', $slug)->firstOrFail()));
    }
}
