import * as THREE from 'three'
import type { Point } from '@/domain/types'
import { ccwTriangles } from './geometry'
import type { Materials } from './materials'

/**
 * Сады во дворе ЖК: двор вымощен плиткой (context.ts), а в свободных местах — газоны с бортиком,
 * деревьями и кустами. Планов благоустройства в открытых данных нет, поэтому раскладка условная:
 * газоны — скруглённые прямоугольники по оси корпусов, между ними дорожки, вдоль фасадов — проход.
 */

export interface Spot { x: number; y: number; s: number; base: number }
export interface Gardens { group: THREE.Group; trees: Spot[]; bushes: Spot[]; lawns: number }

const CELL = 1 // м, шаг сетки свободного места
const FACADE = 5 // м от фасада до газона: тротуар вдоль дома и входы
const EDGE = 2 // м от края площадки
const PATH = 3 // м, дорожка между газонами
const MIN_SIDE = 5 // м, газон меньше — не газон
const MAX_SIDE = 24 // м, длиннее — делим дорожкой
const LAWN_H = 0.16 // м, высота газона над плиткой

export function buildGardens(site: Point[], footprints: Point[][], mat: Materials, seed: number): Gardens {
  const group = new THREE.Group()
  group.name = 'gardens'
  const rand = rng(seed)
  const empty: Gardens = { group, trees: [], bushes: [], lawns: 0 }
  if (site.length < 3) return empty

  // локальные оси (u, v) — по преобладающему направлению стен корпусов
  const th = dominantAngle(footprints.length ? footprints : [site])
  const cos = Math.cos(th)
  const sin = Math.sin(th)
  const toUV = ([x, y]: Point): Point => [x * cos + y * sin, -x * sin + y * cos]
  const toXY = (u: number, v: number): Point => [u * cos - v * sin, u * sin + v * cos]
  const siteUV = site.map(toUV)
  const fpsUV = footprints.map((f) => f.map(toUV))

  let u0 = Infinity, v0 = Infinity, u1 = -Infinity, v1 = -Infinity
  for (const [u, v] of siteUV) {
    u0 = Math.min(u0, u); v0 = Math.min(v0, v); u1 = Math.max(u1, u); v1 = Math.max(v1, v)
  }
  const W = Math.ceil((u1 - u0) / CELL)
  const H = Math.ceil((v1 - v0) / CELL)
  if (W <= 0 || H <= 0 || W * H > 400_000) return empty

  // свободные клетки: внутри площадки, не ближе EDGE к её краю и FACADE к корпусам
  const free = new Uint8Array(W * H)
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const u = u0 + (i + 0.5) * CELL
      const v = v0 + (j + 0.5) * CELL
      if (!inPoly(u, v, siteUV) || distToRing(u, v, siteUV) < EDGE) continue
      let ok = true
      for (const f of fpsUV) {
        if (inPoly(u, v, f) || distToRing(u, v, f) < FACADE) { ok = false; break }
      }
      if (ok) free[j * W + i] = 1
    }
  }

  // жадно: самый большой свободный прямоугольник → газон, вокруг — дорожка
  const lawns: { a: number; b: number; c: number; d: number }[] = [] // u0, v0, u1, v1
  const min = Math.ceil(MIN_SIDE / CELL)
  const max = Math.floor(MAX_SIDE / CELL)
  const gap = Math.ceil(PATH / CELL)
  for (let iter = 0; iter < 80; iter++) {
    const r = largestRect(free, W, H)
    if (!r || r.w < min || r.h < min) break
    const w = Math.min(r.w, max)
    const h = Math.min(r.h, max)
    // длинный прямоугольник режем по центру, чтобы остаток лёг симметрично по обе стороны дорожки
    const i0 = r.i + (r.w > max ? Math.floor((r.w - w) / 2) : 0)
    const j0 = r.j + (r.h > max ? Math.floor((r.h - h) / 2) : 0)
    lawns.push({ a: u0 + i0 * CELL, b: v0 + j0 * CELL, c: u0 + (i0 + w) * CELL, d: v0 + (j0 + h) * CELL })
    for (let j = Math.max(0, j0 - gap); j < Math.min(H, j0 + h + gap); j++) {
      for (let i = Math.max(0, i0 - gap); i < Math.min(W, i0 + w + gap); i++) free[j * W + i] = 0
    }
  }
  if (!lawns.length) return empty

  const tops: number[] = []
  const sides: number[] = []
  const sideNor: number[] = []
  const trees: Spot[] = []
  const bushes: Spot[] = []
  for (const l of lawns) {
    const w = l.c - l.a
    const h = l.d - l.b
    const ring = roundedRect(l.a, l.b, l.c, l.d, Math.min(2.2, w / 4, h / 4)).map(([u, v]) => toXY(u, v))
    for (const t of ccwTriangles(ring)) for (const k of t) tops.push(ring[k][0], LAWN_H, -ring[k][1])
    curbWalls(ring, sides, sideNor)

    // деревья — разреженной сеткой с разбросом, кусты — группами в углах газона
    const nu = Math.max(1, Math.round((w - 3) / 7.5))
    const nv = Math.max(1, Math.round((h - 3) / 7.5))
    for (let a = 0; a < nu; a++) {
      for (let b = 0; b < nv; b++) {
        if (nu * nv > 1 && rand() < 0.15) continue
        const u = l.a + 1.8 + ((a + 0.5) / nu) * (w - 3.6) + (rand() - 0.5) * 1.6
        const v = l.b + 1.8 + ((b + 0.5) / nv) * (h - 3.6) + (rand() - 0.5) * 1.6
        const [x, y] = toXY(u, v)
        trees.push({ x, y, s: 0.75 + rand() * 0.45, base: LAWN_H })
      }
    }
    const corners: Point[] = [[l.a + 1.3, l.b + 1.3], [l.c - 1.3, l.b + 1.3], [l.c - 1.3, l.d - 1.3], [l.a + 1.3, l.d - 1.3]]
    for (const [cu, cv] of corners) {
      if (rand() < 0.45) continue
      const n = 2 + Math.floor(rand() * 2)
      for (let k = 0; k < n; k++) {
        const du = (cu < (l.a + l.c) / 2 ? 1 : -1) * rand() * 2.2
        const dv = (cv < (l.b + l.d) / 2 ? 1 : -1) * rand() * 2.2
        const [x, y] = toXY(cu + du, cv + dv)
        bushes.push({ x, y, s: 0.6 + rand() * 0.45, base: LAWN_H })
      }
    }
  }

  const top = new THREE.BufferGeometry()
  top.setAttribute('position', new THREE.Float32BufferAttribute(tops, 3))
  top.computeVertexNormals()
  const lawnMesh = new THREE.Mesh(top, mat.lawn)
  lawnMesh.receiveShadow = true
  const side = new THREE.BufferGeometry()
  side.setAttribute('position', new THREE.Float32BufferAttribute(sides, 3))
  side.setAttribute('normal', new THREE.Float32BufferAttribute(sideNor, 3))
  const curbMesh = new THREE.Mesh(side, mat.curb)
  curbMesh.receiveShadow = true
  group.add(lawnMesh, curbMesh)
  return { group, trees, bushes, lawns: lawns.length }
}

/** Бортик газона: стенки от плитки до верха газона, нормали наружу */
function curbWalls(ring: Point[], pos: number[], nor: number[]) {
  const ccw = signedArea(ring) > 0
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i]
    const b = ring[(i + 1) % ring.length]
    const len = Math.hypot(b[0] - a[0], b[1] - a[1])
    if (len < 1e-3) continue
    // наружная нормаль в ENU для обхода против часовой: (dy, -dx)
    let nx = (b[1] - a[1]) / len
    let ny = -(b[0] - a[0]) / len
    if (!ccw) { nx = -nx; ny = -ny }
    const [p, q] = ccw ? [a, b] : [b, a]
    const quad: [number, number, number][] = [
      [p[0], 0, -p[1]], [q[0], 0, -q[1]], [q[0], LAWN_H, -q[1]],
      [p[0], 0, -p[1]], [q[0], LAWN_H, -q[1]], [p[0], LAWN_H, -p[1]],
    ]
    for (const v of quad) {
      pos.push(...v)
      nor.push(nx, 0, -ny)
    }
  }
}

function roundedRect(a: number, b: number, c: number, d: number, r: number): Point[] {
  const out: Point[] = []
  const arc = (cx: number, cy: number, from: number) => {
    for (let k = 0; k <= 4; k++) {
      const t = from + (k / 4) * (Math.PI / 2)
      out.push([cx + Math.cos(t) * r, cy + Math.sin(t) * r])
    }
  }
  arc(c - r, b + r, -Math.PI / 2)
  arc(c - r, d - r, 0)
  arc(a + r, d - r, Math.PI / 2)
  arc(a + r, b + r, Math.PI)
  return out
}

/** Преобладающее направление стен (по модулю 90°), взвешенное по длине */
function dominantAngle(polys: Point[][]): number {
  const bins = new Float64Array(90)
  for (const p of polys) {
    for (let i = 0; i < p.length; i++) {
      const [ax, ay] = p[i]
      const [bx, by] = p[(i + 1) % p.length]
      const len = Math.hypot(bx - ax, by - ay)
      if (len < 0.5) continue
      let deg = (Math.atan2(by - ay, bx - ax) * 180) / Math.PI
      deg = ((deg % 90) + 90) % 90
      bins[Math.floor(deg) % 90] += len
    }
  }
  let best = 0
  for (let i = 1; i < 90; i++) if (bins[i] > bins[best]) best = i
  return ((best + 0.5) * Math.PI) / 180
}

/** Самый большой прямоугольник из единиц (гистограммы по строкам, O(W·H)) */
function largestRect(m: Uint8Array, W: number, H: number): { i: number; j: number; w: number; h: number } | null {
  const hist = new Int32Array(W)
  let best: { i: number; j: number; w: number; h: number } | null = null
  let bestArea = 0
  const stack: number[] = []
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) hist[i] = m[j * W + i] ? hist[i] + 1 : 0
    stack.length = 0
    for (let i = 0; i <= W; i++) {
      const cur = i < W ? hist[i] : 0
      while (stack.length && hist[stack[stack.length - 1]] >= cur) {
        const hh = hist[stack.pop()!]
        const left = stack.length ? stack[stack.length - 1] + 1 : 0
        const ww = i - left
        // предпочитаем "нормальные" пропорции: вытянутую полосу считаем меньше
        const area = Math.min(ww, hh * 4) * Math.min(hh, ww * 4)
        if (hh > 0 && area > bestArea) {
          bestArea = area
          best = { i: left, j: j - hh + 1, w: ww, h: hh }
        }
      }
      stack.push(i)
    }
  }
  return best
}

function signedArea(p: Point[]): number {
  let s = 0
  for (let i = 0; i < p.length; i++) {
    const [ax, ay] = p[i]
    const [bx, by] = p[(i + 1) % p.length]
    s += ax * by - bx * ay
  }
  return s / 2
}

function inPoly(x: number, y: number, p: Point[]) {
  let c = false
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    if (p[i][1] > y !== p[j][1] > y && x < ((p[j][0] - p[i][0]) * (y - p[i][1])) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]) c = !c
  }
  return c
}

function distToRing(x: number, y: number, p: Point[]): number {
  let d = Infinity
  for (let i = 0; i < p.length; i++) {
    const [ax, ay] = p[i]
    const [bx, by] = p[(i + 1) % p.length]
    d = Math.min(d, distToSeg(x, y, ax, ay, bx, by))
  }
  return d
}

export function distToSeg(x: number, y: number, ax: number, ay: number, bx: number, by: number): number {
  const dx = bx - ax
  const dy = by - ay
  const l2 = dx * dx + dy * dy
  const t = l2 ? Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / l2)) : 0
  return Math.hypot(x - (ax + t * dx), y - (ay + t * dy))
}

export function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}
