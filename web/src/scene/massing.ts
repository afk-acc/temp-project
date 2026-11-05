import * as THREE from 'three'
import type { Block, Point, Project } from '@/domain/types'
import { Builder, ccwTriangles } from './geometry'
import type { Materials } from './materials'

/**
 * ЖК без поэтажных планов: корпуса по контурам OSM, фасад собирается процедурно —
 * стеклянная оболочка, простенки, межэтажные пояса, парапет. Координаты контуров — ENU,
 * в мире: (x, высота, -y).
 */
export interface BlockSide {
  name: string
  short: string
  azimuth: number
  mid: Point
  normal: Point
  length: number
}

interface BlockRuntime {
  block: Block
  group: THREE.Group
  glass: THREE.Mesh
  pick: THREE.Mesh
  sides: BlockSide[]
  ring: THREE.Mesh | null
}

const SIDE_NAMES = ['север', 'северо-восток', 'восток', 'юго-восток', 'юг', 'юго-запад', 'запад', 'северо-запад']
const SIDE_SHORT = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']

export class MassingView {
  readonly root = new THREE.Group()
  readonly items: BlockRuntime[] = []
  private hover: string | null = null
  private selected: string | null = null
  private ringMat = new THREE.MeshStandardMaterial({
    color: 0xd39a68, emissive: 0xc8875a, emissiveIntensity: 0.9, transparent: true, opacity: 0.85,
  })

  constructor(private project: Project, private mat: Materials) {
    this.root.name = 'massing'
    for (const b of project.building.blocks ?? []) this.addBlock(b)
  }

  private addBlock(b: Block) {
    const ring = ccw(b.footprint)
    const H = b.height
    const h1 = b.first_floor
    const glassB = new Builder()
    const stoneB = new Builder()
    const bandB = new Builder()
    const roofB = new Builder()
    const pickB = new Builder()

    for (let i = 0; i < ring.length; i++) {
      const a = ring[i]
      const c = ring[(i + 1) % ring.length]
      const L = Math.hypot(c[0] - a[0], c[1] - a[1])
      if (L < 0.3) continue
      const t: Point = [(c[0] - a[0]) / L, (c[1] - a[1]) / L]
      const n: Point = [t[1], -t[0]] // наружу для обхода против часовой
      // стеклянная оболочка чуть внутри контура
      edgeQuad(glassB, a, t, n, 0, L, -0.12, 0, H)
      // простенки
      const k = Math.max(2, Math.round(L / 1.9))
      for (let j = 0; j <= k; j++) {
        const s = (L * j) / k
        const w = j === 0 || j === k ? 0.7 : 0.48
        edgeBox(stoneB, a, t, n, s - w / 2, s + w / 2, 0.1, 0.3, b.retail_ground ? h1 : 0, H)
      }
      // межэтажные пояса
      for (let f = 2; f <= b.levels; f++) {
        const e = h1 + (f - 2) * b.floor_height
        edgeBox(bandB, a, t, n, -0.14, L + 0.14, 0.14, 0.3, e - 0.12, e + 0.26)
      }
      if (b.retail_ground) edgeBox(stoneB, a, t, n, -0.2, L + 0.2, 0.22, 0.3, h1 - 0.25, h1 + 0.35)
      // парапет
      edgeBox(stoneB, a, t, n, -0.16, L + 0.16, 0.16, 0.35, H, H + b.parapet)
      // объём для выбора
      edgeQuad(pickB, a, t, n, 0, L, 0, 0, H + b.parapet)
    }
    for (const [i, j, k] of ccwTriangles(ring)) {
      roofB.tri([ring[i][0], H + 0.02, -ring[i][1]], [ring[j][0], H + 0.02, -ring[j][1]], [ring[k][0], H + 0.02, -ring[k][1]], [0, 1, 0], 0.2)
      pickB.tri([ring[i][0], H + b.parapet, -ring[i][1]], [ring[j][0], H + b.parapet, -ring[j][1]], [ring[k][0], H + b.parapet, -ring[k][1]], [0, 1, 0])
    }

    const group = new THREE.Group()
    group.name = `block-${b.id}`
    const glass = new THREE.Mesh(glassB.geometry(), this.mat.glass)
    glass.renderOrder = 2
    const stone = new THREE.Mesh(stoneB.geometry(), this.mat.stone)
    const band = new THREE.Mesh(bandB.geometry(), this.mat.band)
    const roof = new THREE.Mesh(roofB.geometry(), this.mat.slab)
    for (const m of [stone, band, roof]) {
      m.castShadow = true
      m.receiveShadow = true
    }
    const pick = new THREE.Mesh(pickB.geometry(), this.mat.pick)
    pick.userData.block = b.id
    group.add(glass, stone, band, roof, pick)
    this.root.add(group)
    this.items.push({ block: b, group, glass, pick, sides: sidesOf(ring), ring: null })
  }

  get blocks(): Block[] {
    return this.items.map((i) => i.block)
  }

  item(id: string): BlockRuntime | undefined {
    return this.items.find((i) => i.block.id === id)
  }

  pickables(): THREE.Object3D[] {
    return this.items.map((i) => i.pick)
  }

  /** Объёмы корпусов — препятствия для солнца */
  occluders(): THREE.Object3D[] {
    return this.items.map((i) => i.pick)
  }

  setBlockVisible(id: string, visible: boolean) {
    const it = this.item(id)
    if (it) it.group.visible = visible
  }

  setHover(id: string | null) {
    if (this.hover === id) return
    this.hover = id
    this.restyle()
  }

  select(id: string | null, floor: number | null) {
    this.selected = id
    for (const it of this.items) {
      if (it.ring) {
        it.group.remove(it.ring)
        it.ring.geometry.dispose()
        it.ring = null
      }
    }
    const it = id ? this.item(id) : undefined
    if (it && floor) {
      const b = it.block
      const e = floorElevation(b, floor)
      const h = floor === 1 ? b.first_floor : b.floor_height
      const rb = new Builder()
      const ring = ccw(b.footprint)
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i]
        const c = ring[(i + 1) % ring.length]
        const L = Math.hypot(c[0] - a[0], c[1] - a[1])
        if (L < 0.3) continue
        const t: Point = [(c[0] - a[0]) / L, (c[1] - a[1]) / L]
        const n: Point = [t[1], -t[0]]
        edgeBox(rb, a, t, n, -0.3, L + 0.3, 0.32, 0.05, e + 0.1, e + h - 0.1)
      }
      it.ring = new THREE.Mesh(rb.geometry(), this.ringMat)
      it.ring.renderOrder = 3
      it.group.add(it.ring)
    }
    this.restyle()
  }

  private restyle() {
    for (const it of this.items) {
      const on = it.block.id === this.hover || it.block.id === this.selected
      it.glass.material = on ? this.mat.glassHover : this.mat.glass
    }
  }

  center(id?: string): THREE.Vector3 {
    if (id) {
      const b = this.item(id)!.block
      const [x, y] = centroid(b.footprint)
      return new THREE.Vector3(x, b.height / 2, -y)
    }
    const c = this.project.building.center ?? [0, 0]
    return new THREE.Vector3(c[0], 14, -c[1])
  }

  /** Точка обзора у фасада: середина стороны, 0,4 м наружу, на высоте глаз выбранного этажа */
  viewPoint(id: string, floor: number, sideIdx: number): { pos: THREE.Vector3; yaw: number } {
    const it = this.item(id)!
    const side = it.sides[Math.min(sideIdx, it.sides.length - 1)]
    const h = floorElevation(it.block, floor) + 1.55
    const pos = new THREE.Vector3(side.mid[0] + side.normal[0] * 0.45, h, -(side.mid[1] + side.normal[1] * 0.45))
    const yaw = Math.atan2(-side.normal[0], side.normal[1])
    return { pos, yaw }
  }
}

export function floorElevation(b: Block, floor: number): number {
  return floor <= 1 ? 0 : b.first_floor + (floor - 2) * b.floor_height
}

function ccw(p: Point[]): Point[] {
  let a = 0
  for (let i = 0; i < p.length; i++) {
    const [x1, y1] = p[i]
    const [x2, y2] = p[(i + 1) % p.length]
    a += x1 * y2 - x2 * y1
  }
  return a >= 0 ? p : [...p].reverse()
}

function centroid(p: Point[]): Point {
  return [p.reduce((s, q) => s + q[0], 0) / p.length, p.reduce((s, q) => s + q[1], 0) / p.length]
}

/** Стороны корпуса по восьми румбам: самая длинная грань каждого направления */
function sidesOf(ring: Point[]): BlockSide[] {
  const byDir = new Map<number, BlockSide>()
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i]
    const c = ring[(i + 1) % ring.length]
    const L = Math.hypot(c[0] - a[0], c[1] - a[1])
    if (L < 3) continue
    const n: Point = [(c[1] - a[1]) / L, -(c[0] - a[0]) / L]
    const az = ((Math.atan2(n[0], n[1]) * 180) / Math.PI + 360) % 360
    const k = Math.round(az / 45) % 8
    const prev = byDir.get(k)
    if (!prev || prev.length < L) {
      byDir.set(k, { name: SIDE_NAMES[k], short: SIDE_SHORT[k], azimuth: az, mid: [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], normal: n, length: L })
    }
  }
  return [...byDir.values()].sort((x, y) => y.length - x.length).slice(0, 4).sort((x, y) => x.azimuth - y.azimuth)
}

/** Плоскость вдоль грани: от s0 до s1 по грани, на смещении off по нормали, между высотами */
function edgeQuad(b: Builder, a: Point, t: Point, n: Point, s0: number, s1: number, off: number, y0: number, y1: number) {
  const p0: Point = [a[0] + t[0] * s0 + n[0] * off, a[1] + t[1] * s0 + n[1] * off]
  const p1: Point = [a[0] + t[0] * s1 + n[0] * off, a[1] + t[1] * s1 + n[1] * off]
  b.quadAuto([p0[0], y0, -p0[1]], [p1[0], y0, -p1[1]], [p1[0], y1, -p1[1]], [p0[0], y1, -p0[1]], [n[0], 0, -n[1]])
}

/** Брус вдоль грани: по длине s0..s1, от -inward до +out по нормали, между высотами */
function edgeBox(b: Builder, a: Point, t: Point, n: Point, s0: number, s1: number, out: number, inward: number, y0: number, y1: number) {
  const P = (s: number, o: number): [number, number] => [a[0] + t[0] * s + n[0] * o, a[1] + t[1] * s + n[1] * o]
  const A = P(s0, -inward), B = P(s1, -inward), C = P(s1, out), D = P(s0, out)
  const v = (p: [number, number], y: number): THREE.Vector3Tuple => [p[0], y, -p[1]]
  const N: THREE.Vector3Tuple = [n[0], 0, -n[1]]
  const T: THREE.Vector3Tuple = [t[0], 0, -t[1]]
  b.quadAuto(v(D, y0), v(C, y0), v(C, y1), v(D, y1), N)                       // наружная
  b.quadAuto(v(B, y0), v(A, y0), v(A, y1), v(B, y1), [-N[0], 0, -N[2]])       // внутренняя
  b.quadAuto(v(C, y0), v(B, y0), v(B, y1), v(C, y1), T)                       // торец +t
  b.quadAuto(v(A, y0), v(D, y0), v(D, y1), v(A, y1), [-T[0], 0, -T[2]])       // торец -t
  b.quadAuto(v(A, y1), v(B, y1), v(C, y1), v(D, y1), [0, 1, 0])              // верх
  b.quadAuto(v(D, y0), v(C, y0), v(B, y0), v(A, y0), [0, -1, 0])             // низ
}
