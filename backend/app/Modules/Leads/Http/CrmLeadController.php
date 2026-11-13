<?php

namespace App\Modules\Leads\Http;

use App\Http\Controllers\Controller;
use App\Modules\Catalog\Models\Project;
use App\Modules\Leads\Models\Lead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CrmLeadController extends Controller
{
    public function index(Request $request, string $slug): JsonResponse
    {
        $project = Project::query()->where('slug', $slug)->firstOrFail();
        $q = Lead::query()->where('project_id', $project->id)->with(['unit:id,number,block,floor,rooms,area', 'parkingSpot.parkingLevel:id,level'])->latest()->latest('id');
        if ($request->filled('status')) {
            $q->where('status', $request->query('status'));
        }

        return response()->json(['items' => $q->limit(200)->get()->map(fn (Lead $l) => [
            'id' => $l->id, 'name' => $l->name, 'phone' => $l->phone, 'comment' => $l->comment, 'status' => $l->status,
            'source' => $l->source, 'created_at' => $l->created_at?->toIso8601String(),
            'unit' => $l->unit ? ['id' => $l->unit->id, 'number' => $l->unit->number, 'block' => $l->unit->block,
                'floor' => $l->unit->floor, 'rooms' => $l->unit->rooms, 'area' => $l->unit->area] : null,
            'parking_spot' => $l->parkingSpot ? ['id' => $l->parkingSpot->id, 'code' => $l->parkingSpot->code,
                'level' => $l->parkingSpot->parkingLevel->level, 'kind' => $l->parkingSpot->kind->value] : null,
        ])]);
    }

    public function update(Request $request, Lead $lead): JsonResponse
    {
        $data = $request->validate(['status' => ['required', Rule::in(Lead::STATUSES)]]);
        $lead->update($data);

        return response()->json(['id' => $lead->id, 'status' => $lead->status]);
    }
}
