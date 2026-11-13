import * as THREE from 'three'
import type { Context, ContextLine, Point } from '@/domain/types'
import type { Season } from '@/domain/atmosphere'
import { extrudedBuildings, flatPolygons, ribbons, worldUV } from './geometry'
import { buildGardens, distToSeg, rng, type Spot } from './landscape'
import type { Materials } from './materials'

/**
 * Окружение из OSM: земля, зелень, вода, дороги с тротуарами, мощёная площадка ЖК с садами,
 * дома-"макет", деревья по сезонам. Слои земли лежат в порядке GROUND_LAYER (materials.ts), у каждого свой
 * polygonOffset — иначе издалека они мерцают.
 */

/** Пешеходное: рисуется светлой дорожкой */
const MINOR = new Set(['footway', 'path', 'cycleway', 'steps', 'pedestrian', 'track', 'bridleway'])
/** Проезды без тротуаров: внутриквартальные, жилые зоны */
const LOCAL = new Set(['service', 'living_street'])
/** Ширина тротуара с каждой стороны, м (остальные классы — без тротуара) */
const SIDEWALK: Record<string, number> = { trunk: 5, primary: 4.5, secondary: 4, tertiary: 3.5, residential: 3, unclassified: 2.5 }
const PAVE_TILE = 8 // м на один повтор текстуры плитки
const YARD_MARGIN = 6 // м площадки ЖК за линией корпусов

export function buildContext(
  ctx: Context, mat: Materials, site: Point[], footprints: Point[][],
): { group: THREE.Group; occluders: THREE.Mesh; trees: Trees; ground: GroundQuery } {
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
  addFlat(group, ribbons(ctx.water_lines, 0.04), mat.water)

  const kind = (r: ContextLine) => r.k ?? ''
  const paths = ctx.roads.filter((r) => MINOR.has(kind(r)))
  const lanes = ctx.roads.filter((r) => LOCAL.has(kind(r)))
  const streets = ctx.roads.filter((r) => !MINOR.has(kind(r)) && !LOCAL.has(kind(r)))
  addFlat(group, ribbons(paths, 0.06), mat.path)
  addFlat(group, ribbons(lanes, 0.07), mat.lane)

  // площадка ЖК: вся мощёная, внутриквартальные проезды OSM уходят под плитку
  const yard = offsetConvex(site, YARD_MARGIN)
  addFlat(group, worldUV(flatPolygons([yard], 0.08), PAVE_TILE), mat.paving)

  // тротуары — полосой шире проезжей части под ней; дороги сверху
  const walks = streets
    .filter((r) => (SIDEWALK[kind(r)] ?? 0) > 0)
    .map((r) => ({ p: r.p, w: r.w + 2 * SIDEWALK[kind(r)] }))
  addFlat(group, worldUV(ribbons(walks, 0.09), PAVE_TILE), mat.sidewalk)
  addFlat(group, ribbons(streets, 0.1), mat.road)

  const houses = new THREE.Mesh(extrudedBuildings(ctx.buildings), mat.context)
  houses.castShadow = true
  houses.receiveShadow = true
  group.add(houses)

  const gardens = buildGardens(site, footprints, mat, 20261112)
  group.add(gardens.group)

  const carriageway = new RoadIndex([...streets, ...lanes])
  const trees = buildTrees(ctx, mat, yard, carriageway, streets, gardens)
  group.add(trees.group)
  const query: GroundQuery = {
    onRoad: (x, y, margin = 0.3) => carriageway.hits(x, y, margin),
    inYard: (x, y) => inPoly(x, y, yard),
  }
  return { group, occluders: houses, trees, ground: query }
}

/** Где можно ставить фонари и прочее на землю (для atmosphere.ts) */
export interface GroundQuery {
  /** точка на проезжей части с запасом margin от края */
  onRoad(x: number, y: number, margin?: number): boolean
  /** точка внутри мощёной площадки ЖК (там свои сады и дорожки) */
  inYard(x: number, y: number): boolean
}

function addFlat(group: THREE.Group, g: THREE.BufferGeometry, m: THREE.Material) {
  const mesh = new THREE.Mesh(g, m)
  mesh.receiveShadow = true
  group.add(mesh)
}

/** Выпуклый многоугольник, раздвинутый наружу на d (рёбра параллельно, углы — пересечением) */
function offsetConvex(raw: Point[], d: number): Point[] {
  const p = signedArea(raw) < 0 ? [...raw].reverse() : raw
  const n = p.length
  if (n < 3) return p
  const lines = p.map((a, i) => {
    const b = p[(i + 1) % n]
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const nx = (b[1] - a[1]) / len // наружу для обхода против часовой
    const ny = -(b[0] - a[0]) / len
    return { ax: a[0] + nx * d, ay: a[1] + ny * d, dx: (b[0] - a[0]) / len, dy: (b[1] - a[1]) / len, nx, ny }
  })
  return p.map((v, i) => {
    const L1 = lines[(i - 1 + n) % n]
    const L2 = lines[i]
    const den = L1.dx * L2.dy - L1.dy * L2.dx
    // почти параллельные рёбра (лишние точки оболочки) — просто сдвиг по средней нормали
    if (Math.abs(den) < 1e-3) {
      const mx = L1.nx + L2.nx
      const my = L1.ny + L2.ny
      const ml = Math.hypot(mx, my) || 1
      return [v[0] + (mx / ml) * d, v[1] + (my / ml) * d] as Point
    }
    const t = ((L2.ax - L1.ax) * L2.dy - (L2.ay - L1.ay) * L2.dx) / den
    return [L1.ax + L1.dx * t, L1.ay + L1.dy * t] as Point
  })
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

/** Проезжая часть всех дорог, разложенная по сетке — чтобы быстро не ставить деревья на асфальт */
class RoadIndex {
  private cells = new Map<string, { ax: number; ay: number; bx: number; by: number; hw: number }[]>()
  private static readonly CELL = 24

  constructor(roads: ContextLine[]) {
    const C = RoadIndex.CELL
    for (const r of roads) {
      const hw = r.w / 2
      for (let i = 0; i < r.p.length - 1; i++) {
        const [ax, ay] = r.p[i]
        const [bx, by] = r.p[i + 1]
        const seg = { ax, ay, bx, by, hw }
        const pad = hw + 2
        for (let cx = Math.floor((Math.min(ax, bx) - pad) / C); cx <= Math.floor((Math.max(ax, bx) + pad) / C); cx++) {
          for (let cy = Math.floor((Math.min(ay, by) - pad) / C); cy <= Math.floor((Math.max(ay, by) + pad) / C); cy++) {
            const key = `${cx}:${cy}`
            const list = this.cells.get(key)
            if (list) list.push(seg)
            else this.cells.set(key, [seg])
          }
        }
      }
    }
  }

  /** точка на проезжей части (с запасом margin от края) */
  hits(x: number, y: number, margin: number): boolean {
    const C = RoadIndex.CELL
    const list = this.cells.get(`${Math.floor(x / C)}:${Math.floor(y / C)}`)
    if (!list) return false
    for (const s of list) if (distToSeg(x, y, s.ax, s.ay, s.bx, s.by) < s.hw + margin) return true
    return false
  }
}

// ---------- деревья: парки, тротуары вдоль улиц, сады во дворе ----------

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

function buildTrees(
  ctx: Context, mat: Materials, yard: Point[], carriageway: RoadIndex, streets: ContextLine[],
  gardens: { trees: Spot[]; bushes: Spot[] },
): Trees {
  const rand = rng(20261104)
  const spots: Spot[] = []
  const blds = ctx.buildings.map((b) => ({ p: b.p, bb: bbox(b.p) }))
  // во двор ЖК деревья ставят только сады; на асфальт — никогда
  const blocked = (x: number, y: number) => {
    if (Math.hypot(x, y) > 1300) return true
    if (inPoly(x, y, yard)) return true
    if (carriageway.hits(x, y, 0.8)) return true
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
      if (inPoly(x, y, g.p) && !blocked(x, y)) spots.push({ x, y, s: 0.8 + rand() * 0.6, base: 0 })
    }
  }

  // аллеи: по тротуару у бордюра, если тротуар не уже 3 м
  for (const r of streets) {
    const sw = SIDEWALK[r.k ?? ''] ?? 0
    if (sw < 3) continue
    const off = r.w / 2 + 1.3
    for (let i = 0; i < r.p.length - 1; i++) {
      const [ax, ay] = r.p[i]
      const [bx, by] = r.p[i + 1]
      const len = Math.hypot(bx - ax, by - ay)
      if (len < 1) continue
      const nx = -(by - ay) / len
      const ny = (bx - ax) / len
      for (let t = 5; t < len - 2; t += 10) {
        for (const side of [-1, 1]) {
          const tt = t + (rand() - 0.5) * 2
          const x = ax + ((bx - ax) * tt) / len + nx * off * side
          const y = ay + ((by - ay) * tt) / len + ny * off * side
          if (!blocked(x, y)) spots.push({ x, y, s: 0.75 + rand() * 0.4, base: 0 })
        }
      }
    }
  }
  spots.push(...gardens.trees)

  const crownGeo = new THREE.IcosahedronGeometry(1, 1)
  const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 1, 6)
  const crowns = new THREE.InstancedMesh(crownGeo, mat.treeCrown, spots.length)
  const trunks = new THREE.InstancedMesh(trunkGeo, mat.treeTrunk, spots.length)
  const bushes = new THREE.InstancedMesh(crownGeo, mat.bush, gardens.bushes.length)
  const m = new THREE.Matrix4()
  const q = new THREE.Quaternion()
  spots.forEach((p, i) => {
    const h = 6 * p.s
    m.compose(new THREE.Vector3(p.x, p.base + h * 0.25, -p.y), q, new THREE.Vector3(1, h * 0.5, 1))
    trunks.setMatrixAt(i, m)
  })
  crowns.castShadow = true
  trunks.castShadow = true
  bushes.castShadow = true
  const g = new THREE.Group()
  g.add(crowns, trunks, bushes)
  const seeds = (n: number) => Array.from({ length: n }, () => [rand(), rand(), rand(), rand()])
  const trees = new Trees(
    g,
    { mesh: crowns, spots, seeds: seeds(spots.length) },
    { mesh: bushes, spots: gardens.bushes, seeds: seeds(gardens.bushes.length) },
  )
  trees.setSeason('summer')
  return trees
}

interface Plants { mesh: THREE.InstancedMesh; spots: Spot[]; seeds: number[][] }

/**
 * Деревья и кусты по сезонам. Деревья: весной свежая листва и цветущие (урюк, вишня), летом густая зелень,
 * осенью жёлто-оранжевая листва, зимой голые кроны (меньше и серо-коричневые, сверху ложится снег).
 * Кусты в садах двора: летом тёмно-зелёные, весной часть цветёт, осенью часть краснеет (барбарис),
 * зимой остаются тускло-зелёными (самшит, можжевельник).
 */
export class Trees {
  constructor(
    readonly group: THREE.Group,
    private crowns: Plants,
    private bushes: Plants,
  ) {}

  setSeason(season: Season) {
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const color = new THREE.Color()
    this.crowns.spots.forEach((p, i) => {
      const [a, b, c, d] = this.crowns.seeds[i]
      const h = 6 * p.s
      const r = 2.4 * p.s * (season === 'winter' ? 0.72 : season === 'spring' ? 0.92 : 1)
      m.compose(new THREE.Vector3(p.x, p.base + h * 0.62, -p.y), q, new THREE.Vector3(r, r * 1.15, r))
      this.crowns.mesh.setMatrixAt(i, m)
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
      this.crowns.mesh.setColorAt(i, color)
    })
    finish(this.crowns.mesh)

    this.bushes.spots.forEach((p, i) => {
      const [a, b, c, d] = this.bushes.seeds[i]
      const k = season === 'winter' ? 0.9 : 1
      m.compose(new THREE.Vector3(p.x, p.base + 0.45 * p.s * k, -p.y), q, new THREE.Vector3(1.1 * p.s * k, 0.75 * p.s * k, 1.1 * p.s * k))
      this.bushes.mesh.setMatrixAt(i, m)
      if (season === 'spring' && d < 0.3) color.setHSL(0.92 + a * 0.05, 0.5, 0.74 + b * 0.08) // цветёт
      else if (season === 'autumn' && d < 0.45) color.setHSL(0.02 + a * 0.05, 0.55, 0.36 + b * 0.08) // барбарис
      else if (season === 'winter') color.setHSL(0.3 + a * 0.03, 0.16 + b * 0.06, 0.22 + c * 0.05)
      else color.setHSL(0.25 + a * 0.04, 0.32 + b * 0.1, 0.28 + c * 0.07)
      this.bushes.mesh.setColorAt(i, color)
    })
    finish(this.bushes.mesh)
  }
}

function finish(mesh: THREE.InstancedMesh) {
  mesh.instanceMatrix.needsUpdate = true
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  mesh.computeBoundingSphere()
}
