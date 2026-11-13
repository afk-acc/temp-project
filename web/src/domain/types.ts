/** Типы API-контракта (backend/docs/public-api.md). Фронт ничего не хранит — только представляет эти ответы. */

export type Rect = [number, number, number, number] // x0, y0, x1, y1 — метры в системе плана
/** x0, y0, x1, y1, nx, ny — отрезок периметра и нормаль наружу */
export type OutlineSeg = [number, number, number, number, number, number]
export type Point = [number, number]

export type UnitStatus = 'available' | 'booked' | 'sold' | 'unavailable'

export interface Unit {
  id: number
  number: number
  floor: number
  section: number
  rooms: number
  area: number
  status: UnitStatus
  price: number | null // сумы; null — «по запросу»
  polygon: Point[] | null
  observed_at: string
  source: string
  block?: string
  type_code?: string | null
  test?: boolean
  room_list?: { name: string; area: number }[]
}

/** Паркинг ЖК (GET /projects/{slug}/parking): уровни с геометрией в ENU и машино-места; статусы — из CRM, как у квартир */
export type SpotKind = 'standard' | 'wide' | 'ev' | 'mgn'

export interface ParkingSpot {
  id: number
  code: string // "1-045": уровень и номер
  number: number
  level: number // −1, −2 …
  kind: SpotKind
  area: number
  polygon: Point[]
  status: UnitStatus
  price: number | null // сумы; null у проданных и снятых
  test: boolean
}

export interface ParkingLevel {
  level: number
  name: string
  height: number
  outline: Point[]
  cores: { block: string; label: string; p: Point[] }[]
  ramps: { label: string; p: Point[]; entry: Point | null }[]
  /** колонны каркаса 0,5 × 0,5 м */
  columns: Point[][]
  total: number
  available: number
}

export interface Parking {
  test: boolean
  summary: { levels: number; total: number; by_status: Record<UnitStatus, number>; price_from: number | null }
  levels: ParkingLevel[]
  spots: ParkingSpot[]
}

/** Реальная планировка квартиры из каталога застройщика */
export interface ApartmentType {
  code: string
  title: string
  rooms: number
  area: number
  room_list: { name: string; area: number }[]
  image: string
  width: number
  depth: number
  facade: string
  source: string
}

/** Тестовая планировка корпуса (ЖК без планов застройщика): этажи и типы этажей в системе плана корпуса */
export interface BlockLayout {
  id: string
  origin: Point
  azimuth_deg: number
  length: number
  width: number
  slab: number
  crown_height: number
  height: number
  floors: FloorInfo[]
  floor_types: Record<string, FloorType>
}

export interface UnitsResponse {
  observed_at: string
  source: string
  test?: boolean
  items: Unit[]
}

export interface Room {
  x: number
  y: number
  area: number
}

export interface FloorType {
  id: string
  kind: 'tower' | 'mixed' | 'podium'
  label: string
  cell: number
  walls_ext: Rect[]
  walls_int: Rect[]
  glass: Rect[]
  door_heads: Rect[]
  slab: Rect[]
  outline: OutlineSeg[]
  rooms: Room[]
  bbox: Rect
}

export interface FloorInfo {
  n: number
  type: string
  elevation: number
  height: number
  residential: boolean
}

/** Корпус ЖК без поэтажных планов: контур в мировых метрах (ENU) и этажность */
export interface Block {
  id: string
  n: number
  label: string
  address: string
  levels: number
  first_floor: number
  floor_height: number
  height: number
  parapet: number
  footprint: Point[]
  retail_ground: boolean
  osm: string
}

export interface Building {
  mode?: 'plans' | 'massing'
  style?: 'c1' | 'plain'
  blocks?: Block[]
  center?: Point
  floors_total?: number
  palette?: { stone?: string; band?: string; glass?: string }
  azimuth_deg: number
  slab: number
  crown_height: number
  height: number
  floors: FloorInfo[]
  assumed: string[]
}

export interface Project {
  slug: string
  name: string
  developer: { brand: string; legal_name: string }
  address: string
  district: string
  location: { lat: number; lon: number }
  gov_registry: {
    object_id: number
    status: string
    status_ru: string
    deadline: string | null
    floors: number
    apartments: number | null
    source: string
    observed_at: string
    designer?: string
    contractor?: string
  }
  catalog: { units_total: number; by_status: Partial<Record<UnitStatus, number>>; price_policy: string; test?: boolean }
  building: Building
  floor_types: Record<string, { label: string; kind: string }>
  sources: { what: string; source: string; date: string }[]
  assumptions: string[]
  disclaimer: string
  /** «Как собран макет»: источники по шагам, для окна «О данных» */
  about?: { title: string; text: string }[]
}

export interface ContextBuilding { p: Point[]; h: number; g: boolean; name?: string | null }
export interface ContextLine { p: Point[]; w: number; k?: string; name?: string | null }
export interface ContextArea { p: Point[]; k?: string; name?: string | null }
export interface Poi { kind: 'park' | 'water'; name: string; x: number; y: number; r: number }

export type PlaceCategory = 'metro' | 'shop' | 'bank' | 'food' | 'edu' | 'health' | 'sport' | 'auto'

export interface Place {
  name: string
  brand: string | null
  category: PlaceCategory
  known: boolean
  x: number
  y: number
  dist: number
  walk_min: number
  osm: string
  logo?: string | null // путь API к логотипу бренда
}

export interface ProjectIndexItem {
  slug: string
  name: string
  developer: string
  mode: 'plans' | 'massing'
}

export interface Context {
  origin: { lat: number; lon: number }
  buildings: ContextBuilding[]
  roads: ContextLine[]
  water_lines: ContextLine[]
  water_areas: ContextArea[]
  green: ContextArea[]
  pois: Poi[]
  places?: Place[]
  center?: Point
  attribution: string
  observed_at: string
}
