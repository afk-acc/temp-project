<?php

namespace App\Modules\Parking\Http;

use App\Http\Controllers\Controller;
use App\Modules\Catalog\Models\Project;
use App\Modules\Parking\Application\BulkChangeSpotStatus;
use App\Modules\Parking\Application\ChangeSpotStatus;
use App\Modules\Parking\Application\LoadParking;
use App\Modules\Parking\Http\Requests\BulkSpotsRequest;
use App\Modules\Parking\Http\Requests\UpdateSpotRequest;
use App\Modules\Parking\Http\Resources\CrmParkingSpotResource;
use App\Modules\Parking\Http\Resources\ParkingResource;
use App\Modules\Parking\Http\Resources\SpotChangeResource;
use App\Modules\Parking\Models\ParkingSpot;
use App\Modules\Sales\Domain\UnitStatus;
use Illuminate\Http\JsonResponse;

/** Паркинг в CRM: план уровней с местами, правка статуса и цены, пачкой, история места. */
class CrmParkingController extends Controller
{
    public function index(string $slug, LoadParking $load): ParkingResource
    {
        return new ParkingResource($load(Project::query()->where('slug', $slug)->firstOrFail()), crm: true);
    }

    public function update(UpdateSpotRequest $request, ParkingSpot $spot, ChangeSpotStatus $change): CrmParkingSpotResource
    {
        return new CrmParkingSpotResource($change($spot, $request->validated(), $request->user()));
    }

    public function bulk(BulkSpotsRequest $request, BulkChangeSpotStatus $bulk): JsonResponse
    {
        $project = Project::query()->where('slug', $request->validated('project'))->firstOrFail();
        $changed = $bulk($project, $request->validated('ids'), UnitStatus::from($request->validated('status')), $request->validated('comment'), $request->user());

        return response()->json(['changed' => $changed]);
    }

    public function history(ParkingSpot $spot): JsonResponse
    {
        return response()->json(['items' => SpotChangeResource::collection($spot->changes()->with('user:id,name')->limit(50)->get())]);
    }
}
