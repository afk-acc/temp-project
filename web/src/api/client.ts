import type { ApartmentType, BlockLayout, Context, FloorType, Parking, Project, ProjectIndexItem, UnitsResponse } from '@/domain/types'
import { BASE, get, send } from './http'

/**
 * Клиент публичного API 3D-сайта. Данные отдаёт только бэкенд (Laravel); на статической выкладке — его выгрузка (zhk:export).
 * Типы этажей кешируются в памяти на время сессии: геометрия неизменна, это не хранение данных.
 */
export { ApiError } from './http'

/** Ссылки на файлы API в данных (логотипы /api/brands/..., чертежи /api/projects/...) — под текущую базу */
export function apiAsset(path: string): string {
  return path.startsWith('/api/') ? `${BASE}${path.slice(4)}` : path
}

const floorTypeCache = new Map<string, Promise<FloorType>>()

export const api = {
  projects: () => get<{ items: ProjectIndexItem[] }>('/projects/index'),
  project: (slug: string) => get<Project>(`/projects/${slug}`),
  units: (slug: string) => get<UnitsResponse>(`/projects/${slug}/units`),
  context: (slug: string) => get<Context>(`/projects/${slug}/context`),
  block: (slug: string, id: string) => get<BlockLayout>(`/projects/${slug}/blocks/${id}`),
  apartmentTypes: (slug: string) => get<{ items: ApartmentType[] }>(`/projects/${slug}/apartment-types`),
  parking: (slug: string) => get<Parking>(`/projects/${slug}/parking`),
  floorType(slug: string, id: string): Promise<FloorType> {
    const key = `${slug}/${id}`
    if (!floorTypeCache.has(key)) floorTypeCache.set(key, get<FloorType>(`/projects/${slug}/floor-types/${id}`))
    return floorTypeCache.get(key)!
  },
  lead: (body: { project: string; unit_id?: number | null; parking_spot_id?: number | null; name: string; phone: string; comment?: string }) =>
    send<{ id: number; status: string }>('POST', '/leads', body),
}
