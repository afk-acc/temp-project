<?php

namespace App\Modules\Catalog\Application;

use App\Modules\Catalog\Models\Project;

/**
 * Ответы публичного API 3D-сайта (контракт — docs/public-api.md). Одни и те же для HTTP и для статической выгрузки (zhk:export),
 * чтобы выложенная копия не расходилась с бэкендом.
 */
final class PublicCatalog
{
    public function __construct(private readonly ProjectPayload $payloads) {}

    /** @param list<string>|null $only */
    public function index(?array $only = null): array
    {
        $index = $this->payloads->index();
        if ($only !== null) {
            $index['items'] = array_values(array_filter($index['items'], fn ($p) => in_array($p['slug'], $only, true)));
        }

        return $index;
    }

    public function project(Project $project): array
    {
        return $this->payloads->forPublic($project);
    }

    public function units(Project $project): array
    {
        $items = $project->units()->orderBy('block')->orderBy('floor')->orderBy('number')->get()->map->toPublic();

        return ['observed_at' => now()->toDateString(), 'source' => 'CRM', 'test' => $items->contains('test', true), 'items' => $items->all()];
    }

    public function context(Project $project): array|object
    {
        return $project->context ?? (object) [];
    }

    public function apartmentTypes(Project $project): array
    {
        return ['items' => $project->apartmentTypes()->orderBy('id')->get()->pluck('payload')->all()];
    }

    public function find(string $slug): Project
    {
        return Project::query()->where('slug', $slug)->firstOrFail();
    }
}
