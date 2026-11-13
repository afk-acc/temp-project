import * as THREE from 'three'
import type { Rect } from '@/domain/types'
import type { RoomPlan, Side, UnitLayout } from '@/domain/rooms'
import { styleKit, type InteriorStyle, type StyleKit } from './styles'
import * as P from './pieces'
import { NORMAL, doorSwing, planUnit, type Item, type UnitPlan } from './plan'

/**
 * Ремонт и мебель для одной квартиры. Координаты — локальные координаты здания (план (x, y) → (x, h, −y)),
 * высота — от чистого пола квартиры.
 *
 * Два слоя:
 * - отделка (стиль): полы, плитка в санузлах, плинтус, карниз, акцентная стена, двери, шторы, потолочный свет;
 * - мебель: по плану расстановки (plan.ts) — одинаковому во всех стилях. Включается и выключается отдельно,
 *   без пересборки отделки; препятствия прогулки — только от включённой мебели.
 */
export interface Furnished {
  group: THREE.Group
  /** следы мебели на плане — препятствия при прогулке (пусто, если мебель выключена) */
  readonly colliders: Rect[]
  /** показать или убрать мебель; отделка остаётся */
  setFurniture(on: boolean): void
  /** уровень искусственного света 0…1 (ночь) */
  setLight(level: number): void
  dispose(): void
}

export function furnish(layout: UnitLayout, style: Exclude<InteriorStyle, 'none'>, ceilH: number, withFurniture = true): Furnished {
  const k = styleKit(style)
  const plan = planUnit(layout)
  const group = new THREE.Group()
  group.name = 'interior'
  const finish = buildFinish(layout, plan, k, ceilH)
  group.add(finish.group)
  let furniture: Layer | null = null
  let on = false
  const colliders = plan.items.filter((it) => it.fp && !it.flat).map((it) => it.fp!)
  const setFurniture = (v: boolean) => {
    on = v
    if (v && !furniture) {
      furniture = buildFurniture(plan, k, ceilH)
      group.add(furniture.group)
    }
    if (furniture) furniture.group.visible = v
  }
  setFurniture(withFurniture)
  const shades = new Set<THREE.MeshStandardMaterial>([k.lampShade])
  const bulbs = new Set<THREE.MeshStandardMaterial>([k.bulb])
  return {
    group,
    get colliders() {
      return on ? colliders : []
    },
    setFurniture,
    setLight(level: number) {
      for (const m of bulbs) m.emissiveIntensity = 0.08 + 7 * level
      for (const m of shades) m.emissiveIntensity = 0.9 * level
    },
    dispose() {
      finish.dispose()
      furniture?.dispose()
    },
  }
}

interface Layer {
  group: THREE.Group
  dispose(): void
}

function layer(name: string): { group: THREE.Group; put: (obj: THREE.Object3D, x: number, y: number, rot: number, h?: number) => THREE.Object3D; done: () => Layer } {
  const group = new THREE.Group()
  group.name = name
  const put = (obj: THREE.Object3D, x: number, y: number, rot: number, h = 0) => {
    obj.position.set(x, obj.position.y + h, -y)
    obj.rotation.y += rot
    group.add(obj)
    return obj
  }
  return {
    group, put,
    done: () => ({
      group,
      dispose() {
        group.parent?.remove(group)
        group.traverse((o) => {
          const m = o as THREE.Mesh
          if (!m.isMesh) return
          m.geometry.dispose()
          // холст картины — свой материал на каждую
          if (!Array.isArray(m.material) && (m.material as THREE.MeshStandardMaterial).userData.owned) m.material.dispose()
        })
      },
    }),
  }
}

// ---------- отделка ----------

function buildFinish(layout: UnitLayout, plan: UnitPlan, k: StyleKit, ceilH: number): Layer {
  const L = layer('interior-finish')
  const { group, put } = L
  // полы: чистовой пол на 6 мм выше черновой плиты прогулки — без мерцания совпадающих граней;
  // клетки расширены на 9 см: пол доходит до грани стены (растр 10 см) и уходит под неё
  const floorBy = new Map<THREE.Material, THREE.BufferGeometry[]>()
  const addFloor = (r: Rect, m: THREE.Material, grow = 0.09) => {
    const g = boxGeo(r[0] - grow, r[1] - grow, r[2] + grow, r[3] + grow, 0.004, 0.018)
    if (!floorBy.has(m)) floorBy.set(m, [])
    floorBy.get(m)!.push(g)
  }
  const floorMat = (room: RoomPlan) => {
    if (room.kind === 'bath' || room.kind === 'loggia') return k.floorWet
    if (k.id === 'neoclassic' && (room.kind === 'kitchen' || room.kind === 'hall')) return k.floorWet
    return k.floorLiving
  }
  for (const room of layout.rooms) for (const c of room.cells) addFloor(c, floorMat(room))
  // пороги в дверных проёмах
  for (const d of layout.doors) {
    const r = d.rooms.find((i) => i >= 0)
    if (r !== undefined) addFloor(d.rect, floorMat(layout.rooms[r]), 0.03)
  }
  for (const [m, list] of floorBy) {
    const o = new THREE.Mesh(merge(list), m)
    o.receiveShadow = true
    group.add(o)
  }

  const skirtH = k.id === 'neoclassic' ? 0.12 : 0.08
  const wet = new Builder2()
  const trim = new Builder2()
  const skirt = new Builder2()
  for (const room of layout.rooms) {
    for (const [x0, y0, x1, y1, side, kind] of room.edges) {
      if (kind === 'door') continue
      const len = Math.hypot(x1 - x0, y1 - y0)
      if (len < 0.15) continue
      if (room.kind === 'bath' && kind === 'wall') {
        wet.wall(x0, y0, x1, y1, side, 0, ceilH, 0.008)
        continue
      }
      if (kind === 'wall') skirt.band(x0, y0, x1, y1, side, 0, skirtH, 0.015)
      if (k.ceilingTrim && room.kind !== 'loggia') trim.band(x0, y0, x1, y1, side, ceilH - 0.09, ceilH, 0.07)
    }
  }
  // акцентная стена за диваном и изголовьем
  const accent = new Builder2()
  if (k.accentWall) for (const a of plan.accents) {
    for (const [x0, y0, x1, y1, sd, kind] of layout.rooms[a.room].edges) {
      if (sd !== a.side || kind !== 'wall') continue
      const horiz = sd === 'N' || sd === 'S'
      if (Math.abs((horiz ? y0 : x0) - a.line) > 0.05) continue
      const a0 = Math.max(horiz ? Math.min(x0, x1) : Math.min(y0, y1), a.from)
      const a1 = Math.min(horiz ? Math.max(x0, x1) : Math.max(y0, y1), a.to)
      if (a1 - a0 < 0.3) continue
      if (horiz) accent.wall(a0, y0, a1, y1, sd, 0, ceilH, 0.01)
      else accent.wall(x0, a0, x1, a1, sd, 0, ceilH, 0.01)
    }
  }
  for (const [b, m] of [[wet, k.wallWet], [skirt, k.skirting], [trim, k.skirting], [accent, k.accentWall]] as [Builder2, THREE.Material | null][]) {
    if (!b.count || !m) continue
    const o = new THREE.Mesh(b.geometry(), m)
    o.receiveShadow = true
    group.add(o)
  }

  // двери: полотно приоткрыто в большую из комнат, входная — закрыта
  layout.doors.forEach((d, di) => {
    const [a, b, c, e] = d.rect
    const w = d.alongX ? c - a : e - b
    const thick = d.alongX ? e - b : c - a
    if (w < 0.55 || w > 1.3) return
    const into = doorSwing(layout, di)
    const door = P.interiorDoor(k, w, thick, into === 0 ? 0 : d.alongX ? into * 1.45 : -into * 1.45, d.entrance)
    put(door, (a + c) / 2, (b + e) / 2, d.alongX ? 0 : Math.PI / 2)
  })

  // потолочный свет — по центрам функциональных зон
  for (const l of plan.lights) put(P.ceilingLight(k, ceilH, l.big), l.x, l.y, 0)

  // шторы на окнах жилых комнат
  if (k.curtain) for (const room of layout.rooms) {
    if (!['living', 'kitchen_living', 'studio', 'living_bed', 'bedroom', 'kitchen'].includes(room.kind)) continue
    for (const [x0, y0, x1, y1, side] of room.windows) {
      const len = Math.hypot(x1 - x0, y1 - y0)
      if (len < 0.8) continue
      put(P.curtains(k, len, ceilH - 0.08), (x0 + x1) / 2, (y0 + y1) / 2, ROT_OF[side])
    }
  }
  return L.done()
}

const ROT_OF = { N: 0, S: Math.PI, E: -Math.PI / 2, W: Math.PI / 2 } as const

// ---------- мебель ----------

function buildFurniture(plan: UnitPlan, k: StyleKit, ceilH: number): Layer {
  const L = layer('interior-furniture')
  for (const it of plan.items) {
    const obj = makeItem(it, k, ceilH)
    if (obj) L.put(obj, it.x, it.y, it.rot, it.h ?? 0)
  }
  return L.done()
}

function makeItem(it: Item, k: StyleKit, ceilH: number): THREE.Object3D | null {
  const a = it.a
  switch (it.kind) {
    case 'sofa': return P.sofa(k, a[0], a[1])
    case 'armchair': return P.armchair(k)
    case 'coffeeTable': return P.coffeeTable(k, a[0], a[1])
    case 'tvUnit': return P.tvUnit(k, a[0])
    case 'rug': return P.rugMesh(k, a[0], a[1])
    case 'floorLamp': return P.floorLamp(k)
    case 'plant': return P.plant(k, a[0])
    case 'artwork': return P.artwork(k, a[0], a[1], a[2])
    case 'bed': return P.bed(k, a[0], a[1])
    case 'nightstand': return P.nightstand(k)
    case 'wardrobe': return P.wardrobe(k, a[0], a[1], a[2])
    case 'desk': return P.desk(k, a[0])
    case 'kitchenRun': return P.kitchenRun(k, a[0], { fridge: it.fridge ?? 'none', upper: true })
    case 'fridge': return P.fridge(k)
    case 'diningSet': return P.diningSet(k, a[0] as 2 | 4 | 6)
    case 'pendant': return P.pendant(k, ceilH, a[0] ? 1.0 : 0.9)
    case 'bathtub': return P.bathtub(k, a[0], a[1])
    case 'shower': return P.shower(k, a[0], a[1], it.hand ?? 1)
    case 'toilet': return P.toilet(k)
    case 'vanity': return P.vanity(k, a[0])
    case 'washer': return P.washer(k)
    case 'hallUnit': return P.hallUnit(k, a[0])
  }
  return null
}

// ---------- геометрия отделки: UV в метрах ----------

function boxGeo(x0: number, y0: number, x1: number, y1: number, h0: number, h1: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(x1 - x0, h1 - h0, y1 - y0)
  // UV верхней грани — в метрах плана
  const pos = g.attributes.position as THREE.BufferAttribute
  const uv = g.attributes.uv as THREE.BufferAttribute
  const nor = g.attributes.normal as THREE.BufferAttribute
  g.translate((x0 + x1) / 2, (h0 + h1) / 2, -(y0 + y1) / 2)
  for (let i = 0; i < pos.count; i++) {
    if (Math.abs(nor.getY(i)) > 0.5) uv.setXY(i, pos.getX(i), -pos.getZ(i))
  }
  return g
}

function merge(list: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const pos: number[] = [], nor: number[] = [], uv: number[] = []
  for (const g of list) {
    const ng = g.index ? g.toNonIndexed() : g
    pos.push(...(ng.attributes.position.array as Float32Array))
    nor.push(...(ng.attributes.normal.array as Float32Array))
    uv.push(...(ng.attributes.uv.array as Float32Array))
    g.dispose()
    if (ng !== g) ng.dispose()
  }
  const out = new THREE.BufferGeometry()
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  out.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3))
  out.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2))
  return out
}

/**
 * Облицовка, плинтус, карниз вдоль границы комнаты. Отрезок границы лежит на линии стены; сторона — где стена
 * относительно комнаты (N — стена севернее), облицовка смотрит в комнату.
 */
class Builder2 {
  private pos: number[] = []
  private nor: number[] = []
  private uv: number[] = []
  count = 0

  /** плоская облицовка стены с отступом inset внутрь комнаты */
  wall(x0: number, y0: number, x1: number, y1: number, side: Side, h0: number, h1: number, inset: number) {
    const [nx, ny] = NORMAL[side]
    const ax = x0 + nx * inset, ay = y0 + ny * inset
    const bx = x1 + nx * inset, by = y1 + ny * inset
    const len = Math.hypot(bx - ax, by - ay)
    // нормаль в мире: (nx, 0, −ny)
    const v = (x: number, y: number, h: number) => [x, h, -y]
    let A = v(ax, ay, h0), Bv = v(bx, by, h0), Cv = v(bx, by, h1), D = v(ax, ay, h1)
    // порядок вершин: лицом к нормали
    const ux = Bv[0] - A[0], uz = Bv[2] - A[2]
    const cross = ux * (-ny) * 0 + (uz * 0 - 0) // заглушка, ниже проверка по знаку
    void cross
    const faceN = [nx, 0, -ny]
    const e1 = [Bv[0] - A[0], Bv[1] - A[1], Bv[2] - A[2]]
    const e2 = [D[0] - A[0], D[1] - A[1], D[2] - A[2]]
    const cr = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]]
    if (cr[0] * faceN[0] + cr[1] * faceN[1] + cr[2] * faceN[2] < 0) {
      ;[A, Bv] = [Bv, A]
      ;[D, Cv] = [Cv, D]
    }
    const tri = [A, Bv, Cv, A, Cv, D]
    const uvs = [[0, h0], [len, h0], [len, h1], [0, h0], [len, h1], [0, h1]]
    tri.forEach((p, i) => {
      this.pos.push(p[0], p[1], p[2])
      this.nor.push(faceN[0], faceN[1], faceN[2])
      this.uv.push(uvs[i][0], uvs[i][1])
    })
    this.count++
  }

  /** брусок вдоль стены: лицевая грань + верх */
  band(x0: number, y0: number, x1: number, y1: number, side: Side, h0: number, h1: number, depth: number) {
    this.wall(x0, y0, x1, y1, side, h0, h1, depth)
    const [nx, ny] = NORMAL[side]
    // верхняя грань
    const p = [
      [x0, h1, -y0], [x1, h1, -y1], [x1 + nx * depth, h1, -(y1 + ny * depth)],
      [x0, h1, -y0], [x1 + nx * depth, h1, -(y1 + ny * depth)], [x0 + nx * depth, h1, -(y0 + ny * depth)],
    ]
    // порядок для нормали вверх
    const e1 = [p[1][0] - p[0][0], p[1][2] - p[0][2]], e2 = [p[2][0] - p[0][0], p[2][2] - p[0][2]]
    const up = e1[1] * e2[0] - e1[0] * e2[1]
    const tris = up >= 0 ? p : [p[0], p[2], p[1], p[3], p[5], p[4]]
    for (const q of tris) {
      this.pos.push(q[0], q[1], q[2])
      this.nor.push(0, 1, 0)
      this.uv.push(q[0], q[2])
    }
  }

  geometry(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3))
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3))
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2))
    return g
  }
}

export type { StyleKit }
