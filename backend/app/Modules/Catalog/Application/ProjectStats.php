<?php

namespace App\Modules\Catalog\Application;

use App\Modules\Catalog\Models\Project;
use App\Modules\Leads\Models\Lead;
use App\Modules\Sales\Domain\UnitStatus;
use App\Modules\Sales\Models\UnitStatusChange;

/** Сводка для CRM: статусы, корпуса, сумма предложения, последние изменения, новые заявки. */
final class ProjectStats
{
    public function for(Project $project): array
    {
        $units = $project->units();
        $byStatus = (clone $units)->selectRaw('status, count(*) as c')->groupBy('status')->pluck('c', 'status');
        $byBlock = (clone $units)->selectRaw("block, count(*) as total, sum(case when status = 'available' then 1 else 0 end) as available, sum(case when status = 'sold' then 1 else 0 end) as sold")
            ->groupBy('block')->orderBy('block')->get()
            ->map(fn ($r) => ['block' => $r->block, 'total' => (int) $r->total, 'available' => (int) $r->available, 'sold' => (int) $r->sold]);
        $recent = UnitStatusChange::query()
            ->whereIn('unit_id', (clone $units)->select('id'))
            ->with(['user:id,name', 'unit:id,number,block,floor'])
            ->latest('created_at')->latest('id')->limit(12)->get()
            ->map(fn (UnitStatusChange $c) => [
                'id' => $c->id, 'unit_id' => $c->unit_id, 'unit_number' => $c->unit?->number, 'block' => $c->unit?->block,
                'floor' => $c->unit?->floor, 'from_status' => $c->from_status, 'to_status' => $c->to_status,
                'to_price' => $c->to_price, 'user' => $c->user?->name, 'at' => $c->created_at?->toIso8601String(),
            ]);

        return [
            'total' => (int) $byStatus->sum(),
            'by_status' => collect(UnitStatus::cases())->mapWithKeys(fn ($s) => [$s->value => (int) ($byStatus[$s->value] ?? 0)]),
            'available_value' => (int) (clone $units)->where('status', UnitStatus::Available)->sum('price'),
            'by_block' => $byBlock,
            'recent' => $recent,
            'leads_new' => Lead::query()->where('project_id', $project->id)->where('status', 'new')->count(),
        ];
    }
}
