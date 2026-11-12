import * as THREE from 'three'
import type { Context, Point } from '@/domain/types'
import type { Season } from '@/domain/atmosphere'
import { extrudedBuildings, flatPolygons, ribbons } from './geometry'
import type { Materials } from './materials'

/** Окружение из OSM: земля, дороги, канал, зелень, дома-«макет», деревья. */
export function buildContext(ctx: Context, mat: Materials, site: Point[]): { group: THREE.Group; occluders: THREE.Mesh; trees: Trees } {
  const group = new THREE.Group()
  group.name = 'context'

  const ground = new THREE.Mesh(new THREE.CircleGeometry(2400, 64), mat.ground)
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  group.add(ground)

  const green = ctx.green.filter((g) => g.k !== 'pitch' && g.k !== 'playground')
  const pitches = ctx.green.filter((g) => g.k === 'pitch' || g.k === 'playground')
  addFlat(group, flatPolygons(green.map((g) => g.p), 0.02), mat.green)
  addFlat(group, flatPolygons(pitches.map((g) => g.p), 0.03), mat.pitch)
  addFlat(group, flatPolygons(ctx.water_areas.map((g) => g.p), 0.04), mat.water)
  addFlat(group, ribbons(ctx.water_lines, 0.05), mat.water)

  const minor = new Set(['footway', 'path', 'cycleway', 'steps', 'pedestrian'])
  addFlat(group, ribbons(ctx.roads.filter((r) => minor.has(r.k ?? '')), 0.06), mat.path)
  addFlat(group, ribbons(ctx.roads.filter((r) => !minor.has(r.k ?? '')), 0.08), mat.road)

  // площадка вокруг подиума
  const plaza = flatPolygons([inflate(site, 9)], 0.1)
  addFlat(group, plaza, mat.plaza)

  const houses = new THREE.Mesh(extrudedBuildings(ctx.buildings), mat.context)
  houses.castShadow = true
  houses.receiveShadow = true
  group.add(houses)

  const trees = buildTrees(ctx, mat, site)
  group.add(trees.group)
  return { group, occluders: houses, trees }
}

function addFlat(group: THREE.Group, g: THREE.BufferGeometry, m: THREE.Material) {
  const mesh = new THREE.Mesh(g, m)
  mesh.receiveShadow = true
  group.add(mesh)
}

function inflate(p: Point[], d: number): Point[] {
  const cx = p.reduce((s, q) => s + q[0], 0) / p.length
  const cy = p.reduce((s, q) => s + q[1], 0) / p.length
  return p.map(([x, y]) => {
    const l = Math.hypot(x - cx, y - cy) || 1
    return [x + ((x - cx) / l) * d, y + ((y - cy) / l) * d]
  })
}

// ---------- деревья: детерминированный разброс по паркам и вдоль крупных улиц ----------

function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

function inPoly(x: number, y: number, p: Point[]) {
  let c = false
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    if (p[i][1] > y !== p[j][1] > y && x < ((p[j][0] - p[i][0]) * (y - p[i][1])) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]) c = !c
  }
  return c
}

function bbox(p: Point[]) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const [x, y] of p) {
    x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y)
  }
  return { x0, y0, x1, y1 }
}

function buildTrees(ctx: Context, mat: Materials, site: Point[]): Trees {
  const rand = rng(20261104)
  const spots: { x: number; y: number; s: number }[] = []
  const blds = ctx.buildings.map((b) => ({ p: b.p, bb: bbox(b.p) }))
  const siteBig = inflate(site, 6)
  const blocked = (x: number, y: number) => {
    if (Math.hypot(x, y) > 1300) return true
    if (inPoly(x, y, siteBig)) return true
    for (const b of blds) {
      if (x < b.bb.x0 - 2 || x > b.bb.x1 + 2 || y < b.bb.y0 - 2 || y > b.bb.y1 + 2) continue
      if (inPoly(x, y, b.p)) return true
    }
    return false
  }

  for (const g of ctx.green) {
    if (g.k === 'pitch' || g.k === 'playground') continue
    const bb = bbox(g.p)
    const area = (bb.x1 - bb.x0) * (bb.y1 - bb.y0)
    const n = Math.min(600, Math.round(area / (g.k === 'park' || g.k === 'forest' ? 90 : 220)))
    for (let i = 0; i < n; i++) {
      const x = bb.x0 + rand() * (bb.x1 - bb.x0)
      const y = bb.y0 + rand() * (bb.y1 - bb.y0)
      if (inPoly(x, y, g.p) && !blocked(x, y)) spots.push({ x, y, s: 0.8 + rand() * 0.6 })
    }
  }
  const avenues = new Set(['primary', 'secondary', 'tertiary', 'trunk', 'residential'])
  for (const r of ctx.roads) {
    if (!avenues.has(r.k ?? '')) continue
    for (let i = 0; i < r.p.length - 1; i++) {
      const [ax, ay] = r.p[i]
      const [bx, by] = r.p[i + 1]
      const len = Math.hypot(bx - ax, by - ay)
      const nx = -(by - ay) / (len || 1)
      const ny = (bx - ax) / (len || 1)
      for (let t = 4; t < len; t += 11) {
        for (const side of [-1, 1]) {
          const off = r.w / 2 + 2.5
          const x = ax + ((bx - ax) * t) / len + nx * off * side
          const y = ay + ((by - ay) * t) / len + ny * off * side
          if (!blocked(x, y)) spots.push({ x, y, s: 0.75 + rand() * 0.4 })
        }
      }
    }
  }

  const crownGeo = new THREE.IcosahedronGeometry(1, 1)
  const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 1, 6)
  const crowns = new THREE.InstancedMesh(crownGeo, mat.treeCrown, spots.length)
  const trunks = new THREE.InstancedMesh(trunkGeo, mat.treeTrunk, spots.length)
  const m = new THREE.Matrix4()
  const q = new THREE.Quaternion()
  const seeds = spots.map(() => [rand(), rand(), rand(), rand()])
  spots.forEach((p, i) => {
    const h = 6 * p.s
    m.compose(new THREE.Vector3(p.x, h * 0.25, -p.y), q, new THREE.Vector3(1, h * 0.5, 1))
    trunks.setMatrixAt(i, m)
  })
  crowns.castShadow = true
  trunks.castShadow = true
  const g = new THREE.Group()
  g.add(crowns, trunks)
  const trees = new Trees(g, crowns, spots, seeds)
  trees.setSeason('summer')
  return trees
}

/** Деревья по сезонам: весной свежая листва и цветущие (урюк, вишня), летом густая зелень,
 * осенью жёлто-оранжевая листва, зимой голые кроны (меньше и серо-коричневые, сверху ложится снег). */
export class Trees {
  constructor(
    readonly group: THREE.Group,
    private crowns: THREE.InstancedMesh,
    private spots: { x: number; y: number; s: number }[],
    private seeds: number[][],
  ) {}

  setSeason(season: Season) {
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const color = new THREE.Color()
    this.spots.forEach((p, i) => {
      const [a, b, c, d] = this.seeds[i]
      const h = 6 * p.s
      const r = 2.4 * p.s * (season === 'winter' ? 0.72 : season === 'spring' ? 0.92 : 1)
      m.compose(new THREE.Vector3(p.x, h * 0.62, -p.y), q, new THREE.Vector3(r, r * 1.15, r))
      this.crowns.setMatrixAt(i, m)
      if (season === 'summer') color.setHSL(0.24 + a * 0.05, 0.32 + b * 0.12, 0.3 + c * 0.1)
      else if (season === 'spring') {
        if (d < 0.14) color.setHSL(0.93 + a * 0.04, 0.45, 0.8 + b * 0.08) // розовый цвет
        else if (d < 0.22) color.setHSL(0.12, 0.15, 0.88) // белый цвет
        else color.setHSL(0.25 + a * 0.04, 0.45 + b * 0.15, 0.42 + c * 0.08)
      } else if (season === 'autumn') {
        if (d < 0.2) color.setHSL(0.22 + a * 0.04, 0.3, 0.32 + b * 0.06) // ещё зелёные
        else if (d < 0.38) color.setHSL(0.02 + a * 0.03, 0.62, 0.38 + b * 0.08) // красные
        else color.setHSL(0.07 + a * 0.06, 0.68 + b * 0.15, 0.42 + c * 0.1) // жёлто-оранжевые
      } else color.setHSL(0.07 + a * 0.03, 0.1 + b * 0.06, 0.25 + c * 0.06)
      this.crowns.setColorAt(i, color)
    })
    this.crowns.instanceMatrix.needsUpdate = true
    if (this.crowns.instanceColor) this.crowns.instanceColor.needsUpdate = true
    this.crowns.computeBoundingSphere()
  }
}
