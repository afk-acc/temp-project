import type { ParkingLevel, ParkingSpot, Point, SpotKind, UnitStatus } from './types'

/** Подписи паркинга — общие для 3D и CRM. Цвета статусов те же, что у квартир (STATUS_COLOR). */
export const SPOT_STATUS_LABEL: Record<UnitStatus, string> = {
  available: 'Свободно',
  booked: 'Бронь',
  sold: 'Продано',
  unavailable: 'Снято с продажи',
}

export const KIND_LABEL: Record<SpotKind, string> = {
  standard: 'Обычное',
  wide: 'Широкое',
  ev: 'С зарядкой',
  mgn: 'Для маломобильных',
}

export const KIND_ORDER: SpotKind[] = ['standard', 'wide', 'ev', 'mgn']

/** "−1" вместо "-1": уровни ниже земли пишем настоящим минусом */
export function levelLabel(level: number): string {
  return level < 0 ? `−${-level}` : String(level)
}

/** Ширина и глубина места по контуру (прямоугольник), м */
export function spotSize(p: Point[]): [number, number] {
  const a = Math.hypot(p[1][0] - p[0][0], p[1][1] - p[0][1])
  const b = Math.hypot(p[3][0] - p[0][0], p[3][1] - p[0][1])
  return a <= b ? [a, b] : [b, a]
}

export function spotCenter(p: Point[]): Point {
  return [p.reduce((s, q) => s + q[0], 0) / p.length, p.reduce((s, q) => s + q[1], 0) / p.length]
}

export interface SpotFilter {
  kinds: SpotKind[] // пусто — любые
  onlyAvailable: boolean
}

export function matchesSpot(s: ParkingSpot, f: SpotFilter): boolean {
  if (f.onlyAvailable && s.status !== 'available') return false
  return !f.kinds.length || f.kinds.includes(s.kind)
}

const nf1 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 1 })

/** "2,5 × 5,3 м" */
export function formatSize(p: Point[]): string {
  const [w, d] = spotSize(p)
  return `${nf1.format(w)} × ${nf1.format(d)} м`
}

/** Ближайший к месту лифт в корпус (по прямой) — первое, что спрашивает покупатель */
export function nearestCore(s: ParkingSpot, level: ParkingLevel | null | undefined): { label: string; block: string; meters: number } | null {
  if (!level?.cores.length) return null
  const [x, y] = spotCenter(s.polygon)
  let best: { label: string; block: string; meters: number } | null = null
  for (const c of level.cores) {
    const [cx, cy] = spotCenter(c.p)
    const d = Math.hypot(cx - x, cy - y)
    if (!best || d < best.meters) best = { label: c.label, block: c.block, meters: d }
  }
  return best && { ...best, meters: Math.round(best.meters) }
}

