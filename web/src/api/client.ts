import type { BlockLayout, Context, FloorType, Project, ProjectIndexItem, UnitsResponse } from '@/domain/types'

/**
 * Клиент API. Базовый адрес — /api: на этапе 0 его отдаёт заглушка (api-stub), дальше — Laravel.
 * Типы этажей кешируются в памяти на время сессии: геометрия неизменна, это не хранение данных.
 */
// База API от адреса приложения: в разработке /api, на сервере /nrg-bi/api.
// Статическая выкладка отдаёт ответы файлами <путь>.json (nginx: try_files $uri $uri.json).
const BASE = `${import.meta.env.BASE_URL}api`

/** Ссылки на файлы API в данных (например, логотипы /api/brands/...) — под текущую базу */
export function apiAsset(path: string): string {
  return path.startsWith('/api/') ? `${BASE}${path.slice(4)}` : path
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`API ${path}: ${res.status}`)
  return (await res.json()) as T
}

const floorTypeCache = new Map<string, Promise<FloorType>>()

export const api = {
  projects: () => get<{ items: ProjectIndexItem[] }>('/projects/index'),
  project: (slug: string) => get<Project>(`/projects/${slug}`),
  units: (slug: string) => get<UnitsResponse>(`/projects/${slug}/units`),
  context: (slug: string) => get<Context>(`/projects/${slug}/context`),
  block: (slug: string, id: string) => get<BlockLayout>(`/projects/${slug}/blocks/${id}`),
  floorType(slug: string, id: string): Promise<FloorType> {
    const key = `${slug}/${id}`
    if (!floorTypeCache.has(key)) floorTypeCache.set(key, get<FloorType>(`/projects/${slug}/floor-types/${id}`))
    return floorTypeCache.get(key)!
  },
}
