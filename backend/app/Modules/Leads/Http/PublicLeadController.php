<?php

namespace App\Modules\Leads\Http;

use App\Http\Controllers\Controller;
use App\Modules\Catalog\Models\Project;
use App\Modules\Leads\Application\SubmitLead;
use App\Modules\Leads\Http\Requests\StoreLeadRequest;
use Illuminate\Http\JsonResponse;

class PublicLeadController extends Controller
{
    public function store(StoreLeadRequest $request, SubmitLead $submit): JsonResponse
    {
        $project = Project::query()->where('slug', $request->validated('project'))->firstOrFail();
        $lead = $submit->handle($project, $request->validated());

        return response()->json(['id' => $lead->id, 'status' => 'accepted'], 201);
    }
}
