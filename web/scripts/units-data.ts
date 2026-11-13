/**
 * Загрузка квартир для автопроверки расстановки: C1 (все квартиры) и Harizma (типовые: по одной на планировку
 * в каждом корпусе). Данные — из работающего API (по умолчанию http://localhost:8010/api).
 */
import type { BlockLayout, FloorType, Project, Unit, UnitsResponse } from '@/domain/types'

export interface CaseUnit {
  project: string
  unit: Unit
  ft: FloorType
  ceil: number
}

const API = process.env.API ?? 'http://localhost:8010/api'
async function get<T>(path: string): Promise<T> {
  const r = await fetch(API + path)
  if (!r.ok) throw new Error(`${path}: ${r.status}`)
  return (await r.json()) as T
}

export async function loadCases(): Promise<CaseUnit[]> {
  const out: CaseUnit[] = []
  // C1: поэтажные планы
  const c1 = await get<Project>('/projects/c1')
  const c1u = await get<UnitsResponse>('/projects/c1/units')
  const types = new Map<string, FloorType>()
  for (const id of new Set(c1.building.floors.map((f) => f.type))) types.set(id, await get<FloorType>(`/projects/c1/floor-types/${id}`))
  for (const u of c1u.items) {
    const f = c1.building.floors.find((x) => x.n === u.floor)
    if (!f || !u.polygon) continue
    out.push({ project: 'c1', unit: u, ft: types.get(f.type)!, ceil: f.height - c1.building.slab })
  }
  // Harizma: корпуса с типовыми этажами, квартиры с реальными планировками
  const hz = await get<Project>('/projects/harizma')
  const hzu = await get<UnitsResponse>('/projects/harizma/units')
  const seen = new Set<string>()
  for (const b of hz.building.blocks ?? []) {
    const lay = await get<BlockLayout>(`/projects/harizma/blocks/${b.id}`)
    for (const u of hzu.items) {
      if (u.block !== b.id || !u.polygon) continue
      const f = lay.floors.find((x) => x.n === u.floor)
      if (!f) continue
      const key = `${b.id}:${f.type}:${u.type_code}:${JSON.stringify(u.polygon)}`
      if (seen.has(key)) continue
      seen.add(key)
      out.push({ project: 'harizma', unit: u, ft: lay.floor_types[f.type], ceil: f.height - lay.slab })
    }
  }
  return out
}
