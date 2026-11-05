import type { Point, Unit, UnitStatus } from './types'

export const STATUS_LABEL: Record<UnitStatus, string> = {
  available: 'В продаже',
  booked: 'Бронь',
  sold: 'Продана',
  unavailable: 'Снята с продажи',
}

/** Цвета статусов — общие для 3D и интерфейса */
export const STATUS_COLOR: Record<UnitStatus, string> = {
  available: '#3ddc97',
  booked: '#f5b841',
  sold: '#e5484d',
  unavailable: '#6b7280',
}

export interface UnitFilter {
  rooms: number[] // пусто — любые; 5 означает «5 и больше»
  onlyAvailable: boolean
}

export function matchesFilter(u: Unit, f: UnitFilter): boolean {
  if (f.onlyAvailable && u.status !== 'available') return false
  if (f.rooms.length && !f.rooms.some((r) => (r >= 5 ? u.rooms >= 5 : u.rooms === r))) return false
  return true
}

export function roomsLabel(rooms: number): string {
  if (rooms === 1) return '1-комнатная'
  return `${rooms}-комнатная`
}

export function polygonCentroid(p: Point[]): Point {
  let a = 0
  let cx = 0
  let cy = 0
  for (let i = 0; i < p.length; i++) {
    const [x1, y1] = p[i]
    const [x2, y2] = p[(i + 1) % p.length]
    const f = x1 * y2 - x2 * y1
    a += f
    cx += (x1 + x2) * f
    cy += (y1 + y2) * f
  }
  if (Math.abs(a) < 1e-9) {
    const n = p.length
    return [p.reduce((s, q) => s + q[0], 0) / n, p.reduce((s, q) => s + q[1], 0) / n]
  }
  a *= 0.5
  return [cx / (6 * a), cy / (6 * a)]
}

export function pointInPolygon(x: number, y: number, p: Point[]): boolean {
  let inside = false
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [xi, yi] = p[i]
    const [xj, yj] = p[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 1e-12) + xi) inside = !inside
  }
  return inside
}

/** Расстояние от точки до границы многоугольника */
export function distToPolygon(x: number, y: number, p: Point[]): number {
  let best = Infinity
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [ax, ay] = p[j]
    const [bx, by] = p[i]
    const dx = bx - ax
    const dy = by - ay
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy || 1)))
    best = Math.min(best, Math.hypot(x - (ax + t * dx), y - (ay + t * dy)))
  }
  return best
}
