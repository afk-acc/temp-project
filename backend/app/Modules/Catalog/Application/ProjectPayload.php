<?php

namespace App\Modules\Catalog\Application;

use App\Modules\Catalog\Models\Project;

/** Карточка проекта для 3D-сайта: сохранённые данные + живая сводка по статусам из CRM. */
final class ProjectPayload
{
    public function forPublic(Project $project): array
    {
        $payload = $project->payload;
        $byStatus = $project->units()->selectRaw('status, count(*) as c')->groupBy('status')->pluck('c', 'status')->map(fn ($c) => (int) $c);
        $payload['catalog'] = array_merge($payload['catalog'] ?? [], [
            'units_total' => (int) $byStatus->sum(),
            'by_status' => (object) $byStatus->all(),
            'source' => 'crm',
        ]);

        return $payload;
    }

    public function index(): array
    {
        return ['items' => Project::query()->orderBy('sort')->get()->map(fn (Project $p) => [
            'slug' => $p->slug, 'name' => $p->name, 'developer' => $p->developer, 'mode' => $p->mode,
        ])->all()];
    }
}
