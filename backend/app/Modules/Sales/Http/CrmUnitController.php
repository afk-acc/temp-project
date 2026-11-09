<?php

namespace App\Modules\Sales\Http;

use App\Http\Controllers\Controller;
use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use App\Modules\Sales\Application\ChangeUnitStatus;
use App\Modules\Sales\Http\Requests\BulkUpdateRequest;
use App\Modules\Sales\Http\Requests\UpdateUnitRequest;
use App\Modules\Sales\Models\UnitStatusChange;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CrmUnitController extends Controller
{
    public function __construct(private readonly ChangeUnitStatus $change) {}

    public function index(Request $request, string $slug): JsonResponse
    {
        $project = Project::query()->where('slug', $slug)->firstOrFail();
        $q = $project->units()->orderBy('block')->orderByDesc('floor')->orderBy('number');
        foreach (['block', 'floor', 'status', 'rooms'] as $f) {
            if ($request->filled($f)) {
                $q->where($f, $request->query($f));
            }
        }

        return response()->json(['items' => $q->get()->map(fn (Unit $u) => $u->toContract() + ['updated_at' => $u->updated_at?->toIso8601String()])]);
    }

    public function update(UpdateUnitRequest $request, Unit $unit): JsonResponse
    {
        $unit = $this->change->handle($unit, $request->validated(), $request->user());

        return response()->json($unit->toContract() + ['updated_at' => $unit->updated_at?->toIso8601String()]);
    }

    public function bulk(BulkUpdateRequest $request): JsonResponse
    {
        $project = Project::query()->where('slug', $request->validated('project'))->firstOrFail();
        $changed = $this->change->bulk($project->id, $request->validated('ids'), $request->validated('status'), $request->validated('comment'), $request->user());

        return response()->json(['changed' => $changed]);
    }

    public function history(Unit $unit): JsonResponse
    {
        return response()->json(['items' => $unit->changes()->with('user:id,name')->limit(50)->get()->map(fn (UnitStatusChange $c) => [
            'id' => $c->id, 'from_status' => $c->from_status, 'to_status' => $c->to_status, 'from_price' => $c->from_price,
            'to_price' => $c->to_price, 'comment' => $c->comment, 'user' => $c->user?->name, 'at' => $c->created_at?->toIso8601String(),
        ])]);
    }
}
