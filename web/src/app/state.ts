import { computed, reactive, shallowRef } from 'vue'
import type { ApartmentType, BlockLayout, Context, FloorInfo, FloorType, Parking, PlaceCategory, Project, ProjectIndexItem, Unit, UnitStatus } from '@/domain/types'
import type { SpotFilter } from '@/domain/parking'
import { matchesFilter, type UnitFilter } from '@/domain/units'
import type { Mode, SunHours } from '@/scene/Engine'
import { seasonDay, seasonOf, type Season, type Weather } from '@/domain/atmosphere'
import type { InteriorStyle } from '@/scene/interior/styles'

const startSeason = seasonOf(new Date())

/** Состояние представления. Данные приходят из API и живут только на время сессии. */
export const state = reactive({
  loading: true,
  progress: 0,
  error: '' as string,
  mode: 'building' as Mode,
  floor: null as number | null,
  unitId: null as number | null,
  hoverFloor: null as number | null,
  hoverUnit: null as number | null,
  tip: { x: 0, y: 0 },
  filter: { rooms: [], onlyAvailable: false } as UnitFilter,
  sun: { day: seasonDay(startSeason), hour: 15 },
  /** сезон (дата солнца + ландшафт), погода, автопрокрутка суток */
  atmo: { season: startSeason as Season, weather: 'clear' as Weather, playing: false, sunPath: false },
  /** стиль ремонта при прогулке по квартире */
  interior: 'scandi' as InteriorStyle,
  /** чистый вид: панели скрыты, на экране только сцена */
  uiHidden: false,
  xrSupported: false,
  xrActive: false,
  touched: false,
  showData: false,
  showLead: false,
  /** прямое солнце в окнах выбранной квартиры на дату сезона */
  sunHours: null as SunHours | null,
  // режим «массинг»: корпуса без поэтажных планов
  blockId: null as string | null,
  hoverBlock: null as string | null,
  blockFloor: 1,
  viewSide: 0,
  blockSun: null as SunHours[] | null,
  places: { on: true, all: false, cats: ['metro', 'shop', 'bank', 'food', 'edu', 'health', 'sport', 'auto'] as PlaceCategory[] },
  // паркинг: уровень, выбранное и наведённое место, фильтр по типу и "только свободные"
  parking: { level: null as number | null, spotId: null as number | null, hoverSpot: null as number | null, filter: { kinds: [], onlyAvailable: false } as SpotFilter },
})

export const data = {
  project: shallowRef<Project | null>(null),
  units: shallowRef<Unit[]>([]),
  context: shallowRef<Context | null>(null),
  types: shallowRef<Map<string, FloorType>>(new Map()),
  observedAt: shallowRef(''),
  projects: shallowRef<ProjectIndexItem[]>([]),
  blockLayouts: shallowRef<Map<string, BlockLayout>>(new Map()),
  /** Реальные планировки застройщика (код типа → чертёж и комнаты); есть не у всех ЖК */
  aptTypes: shallowRef<Map<string, ApartmentType>>(new Map()),
  /** Паркинг ЖК: уровни и места со статусами из CRM; null — паркинга нет */
  parking: shallowRef<Parking | null>(null),
}

export const isMassing = computed(() => data.project.value?.building.mode === 'massing')
/** Активный «дом»: у C1 — здание целиком, у ЖК с корпусами — выбранный корпус с тестовой планировкой */
export const activeLayout = computed(() => (isMassing.value && state.blockId ? data.blockLayouts.value.get(state.blockId) ?? null : null))
export const activeFloors = computed<FloorInfo[]>(() => activeLayout.value?.floors ?? (isMassing.value ? [] : data.project.value?.building.floors ?? []))
export const activeAzimuth = computed(() => activeLayout.value?.azimuth_deg ?? data.project.value?.building.azimuth_deg ?? 0)
export function activeType(typeId: string): FloorType | undefined {
  return activeLayout.value ? activeLayout.value.floor_types[typeId] : data.types.value.get(typeId)
}
export const scopeUnits = computed(() => (isMassing.value ? data.units.value.filter((u) => u.block === state.blockId) : data.units.value))
export const isTestData = computed(() => data.units.value.some((u) => u.test))
/** Статусы приходят из CRM застройщика (Laravel), а не из статичного снимка */
export const isLive = computed(() => data.units.value.some((u) => u.source === 'crm'))

export const hasParking = computed(() => (data.parking.value?.levels.length ?? 0) > 0)
export const parkingLevel = computed(() => data.parking.value?.levels.find((l) => l.level === state.parking.level) ?? null)
export const selectedSpot = computed(() => data.parking.value?.spots.find((s) => s.id === state.parking.spotId) ?? null)
export const hoveredSpot = computed(() => data.parking.value?.spots.find((s) => s.id === state.parking.hoverSpot) ?? null)

export const selectedBlock = computed(() => data.project.value?.building.blocks?.find((b) => b.id === state.blockId) ?? null)

export interface FloorStat {
  n: number
  residential: boolean
  total: number
  available: number
  matching: number
  statuses: UnitStatus[]
}

export const floorStats = computed<FloorStat[]>(() => {
  const floors = activeFloors.value
  if (!floors.length) return []
  const byFloor = new Map<number, Unit[]>()
  for (const u of scopeUnits.value) {
    if (!byFloor.has(u.floor)) byFloor.set(u.floor, [])
    byFloor.get(u.floor)!.push(u)
  }
  return [...floors].reverse().map((f) => {
    const list = (byFloor.get(f.n) ?? []).sort((a, b) => a.number - b.number)
    return {
      n: f.n,
      residential: list.length > 0,
      total: list.length,
      available: list.filter((u) => u.status === 'available').length,
      matching: list.filter((u) => matchesFilter(u, state.filter)).length,
      statuses: list.map((u) => u.status),
    }
  })
})

export const selectedUnit = computed(() => scopeUnits.value.find((u) => u.id === state.unitId) ?? null)
export const hoveredUnit = computed(() => scopeUnits.value.find((u) => u.id === state.hoverUnit) ?? null)

export const totals = computed(() => {
  const units = data.units.value
  const by: Record<UnitStatus, number> = { available: 0, booked: 0, sold: 0, unavailable: 0 }
  for (const u of units) by[u.status]++
  return { total: units.length, by, matching: units.filter((u) => matchesFilter(u, state.filter)).length }
})
