<?php

namespace App\Modules\Leads\Application;

use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use App\Modules\Leads\Models\Lead;
use App\Support\Phone;

/** Заявка с 3D-сайта: «узнать цену / записаться на показ» по конкретной квартире. */
final class SubmitLead
{
    public function handle(Project $project, array $data): Lead
    {
        $unitId = $data['unit_id'] ?? null;
        if ($unitId && ! Unit::query()->where('project_id', $project->id)->whereKey($unitId)->exists()) {
            $unitId = null;
        }

        return Lead::query()->create([
            'project_id' => $project->id, 'unit_id' => $unitId,
            'name' => trim($data['name']), 'phone' => Phone::normalize($data['phone']),
            'comment' => $data['comment'] ?? null, 'status' => 'new', 'source' => '3d',
        ]);
    }
}
