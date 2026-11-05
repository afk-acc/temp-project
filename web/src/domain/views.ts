import type { Context, FloorType, OutlineSeg, Point, Poi } from './types'
import { angleDiff, planNormalAzimuth, planToENU, sideName } from './geo'
import { distToPolygon } from './units'

/** Фасадный отрезок квартиры: середина (план), нормаль, азимут, длина */
export interface Facade {
  mid: Point
  normal: Point
  azimuth: number
  length: number
}

/** Участки периметра этажа, принадлежащие квартире (середина отрезка ближе 0,8 м к контуру квартиры) */
export function unitFacades(ft: FloorType, polygon: Point[], azimuthDeg: number): Facade[] {
  const out: Facade[] = []
  for (const seg of ft.outline) {
    for (const piece of splitSeg(seg, 1.5)) {
      const [x0, y0, x1, y1, nx, ny] = piece
      const mx = (x0 + x1) / 2
      const my = (y0 + y1) / 2
      // точка чуть внутрь от фасада должна лежать у контура квартиры
      if (distToPolygon(mx - nx * 0.3, my - ny * 0.3, polygon) > 0.8 && !inside(mx - nx * 0.6, my - ny * 0.6, polygon)) continue
      out.push({ mid: [mx, my], normal: [nx, ny], azimuth: planNormalAzimuth(nx, ny, azimuthDeg), length: Math.hypot(x1 - x0, y1 - y0) })
    }
  }
  return out
}

function inside(x: number, y: number, p: Point[]): boolean {
  let c = false
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    if (p[i][1] > y !== p[j][1] > y && x < ((p[j][0] - p[i][0]) * (y - p[i][1])) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]) c = !c
  }
  return c
}

function splitSeg(seg: OutlineSeg, step: number): OutlineSeg[] {
  const [x0, y0, x1, y1, nx, ny] = seg
  const len = Math.hypot(x1 - x0, y1 - y0)
  const n = Math.max(1, Math.round(len / step))
  const out: OutlineSeg[] = []
  for (let i = 0; i < n; i++) {
    const a = i / n
    const b = (i + 1) / n
    out.push([x0 + (x1 - x0) * a, y0 + (y1 - y0) * a, x0 + (x1 - x0) * b, y0 + (y1 - y0) * b, nx, ny])
  }
  return out
}

export interface ViewSummary {
  sides: string[] // «юг», «запад»
  sidesShort: string[]
  highlights: string[] // «парк Bobur nomidagi eko bog'i, 450 м»
  openness: string // «выше соседних домов» / «напротив дома в 25 м»
}

/** Что видно из окон: стороны света, заметные объекты в секторе ±35°, соседи по высоте */
export function summarizeView(facades: Facade[], ctx: Context, azimuthDeg: number, eyeHeight: number, origin: Point = [0, 0]): ViewSummary {
  const weight = new Map<string, number>()
  for (const f of facades) {
    const s = sideName(f.azimuth)
    weight.set(s, (weight.get(s) ?? 0) + f.length)
  }
  const sides = [...weight.entries()].filter(([, w]) => w >= 1.2).sort((a, b) => b[1] - a[1]).map(([s]) => s)

  const dirs = unique(facades.map((f) => Math.round(f.azimuth / 15) * 15))
  const found = new Map<string, number>()
  for (const poi of ctx.pois) {
    const d = Math.hypot(poi.x - origin[0], poi.y - origin[1])
    if (d > 1500) continue
    const az = ((Math.atan2(poi.x - origin[0], poi.y - origin[1]) * 180) / Math.PI + 360) % 360
    const halfWidth = (Math.atan2(poi.r, d) * 180) / Math.PI
    if (dirs.some((a) => angleDiff(a, az) <= 35 + halfWidth)) {
      const label = poiLabel(poi)
      const dist = Math.max(0, d - poi.r * 0.5)
      if (!found.has(label) || found.get(label)! > dist) found.set(label, dist)
    }
  }
  const highlights = [...found.entries()].sort((a, b) => a[1] - b[1]).slice(0, 3)
    .map(([l, d]) => `${l} — ${d < 1000 ? `${Math.round(d / 10) * 10} м` : `${(d / 1000).toFixed(1).replace('.', ',')} км`}`)

  // ближайшие соседи по направлениям окон
  let nearestBlocking = Infinity
  let tallerAround = false
  const local = facades.length ? planToENU(facades[0].mid[0], facades[0].mid[1], azimuthDeg) : [0, 0]
  const center = [local[0] + origin[0], local[1] + origin[1]]
  for (const b of ctx.buildings) {
    const c = b.p.reduce((s, q) => [s[0] + q[0] / b.p.length, s[1] + q[1] / b.p.length], [0, 0])
    const d = Math.hypot(c[0] - center[0], c[1] - center[1])
    if (d > 250) continue
    const az = ((Math.atan2(c[0] - center[0], c[1] - center[1]) * 180) / Math.PI + 360) % 360
    if (!dirs.some((a) => angleDiff(a, az) <= 40)) continue
    if (b.h >= eyeHeight - 1) {
      tallerAround = true
      nearestBlocking = Math.min(nearestBlocking, d)
    }
  }
  const openness = tallerAround
    ? `напротив дом выше уровня окон, ~${Math.round(nearestBlocking / 10) * 10} м`
    : `окна выше соседних домов (${Math.round(eyeHeight)} м над землёй)`

  return { sides, sidesShort: sides.map((s) => sideName(sideAz(s), true)), highlights, openness }
}

function poiLabel(p: Poi): string {
  if (p.kind === 'water') return p.name
  return p.name === 'парк' ? 'парк' : `парк «${p.name}»`
}

function unique<T>(a: T[]): T[] {
  return [...new Set(a)]
}

function sideAz(name: string): number {
  return ['север', 'северо-восток', 'восток', 'юго-восток', 'юг', 'юго-запад', 'запад', 'северо-запад'].indexOf(name) * 45
}
