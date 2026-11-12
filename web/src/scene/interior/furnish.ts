import * as THREE from 'three'
import type { Rect } from '@/domain/types'
import type { RoomPlan, Side, UnitLayout } from '@/domain/rooms'
import { styleKit, type InteriorStyle, type StyleKit } from './styles'
import * as P from './pieces'

/**
 * Ремонт и мебель для одной квартиры. Координаты — локальные координаты здания (план (x, y) → (x, h, −y)),
 * высота — от чистого пола квартиры.
 *
 * Расстановка: в каждой комнате берётся её наибольший прямоугольник (и дополнительные зоны слитных помещений),
 * предметы ставятся спинкой к глухой стене, не перекрывая двери (зона 0,9 м перед проёмом) и окна (высокие предметы),
 * с проходами перед фасадами шкафов и кухни.
 */
export interface Furnished {
  group: THREE.Group
  /** следы мебели на плане — препятствия при прогулке */
  colliders: Rect[]
  /** уровень искусственного света 0…1 (ночь) */
  setLight(level: number): void
  dispose(): void
}

const WALL = 1, DOOR = 2, GLASS = 3, OUT = 4

interface Placement {
  fp: Rect
  side: Side | null
  cx: number
  cy: number
  rot: number
}

const ROT: Record<Side, number> = { N: 0, S: Math.PI, E: -Math.PI / 2, W: Math.PI / 2 }
const OPP: Record<Side, Side> = { N: 'S', S: 'N', E: 'W', W: 'E' }
const NORMAL: Record<Side, [number, number]> = { N: [0, -1], S: [0, 1], E: [-1, 0], W: [1, 0] }

function overlap(a: Rect, b: Rect, pad = 0) {
  return a[0] < b[2] - pad && a[2] > b[0] + pad && a[1] < b[3] - pad && a[3] > b[1] + pad
}

export function furnish(layout: UnitLayout, style: Exclude<InteriorStyle, 'none'>, ceilH: number): Furnished {
  const k = styleKit(style)
  const group = new THREE.Group()
  group.name = 'interior-furnishing'
  const colliders: Rect[] = []
  const owned: THREE.BufferGeometry[] = []

  const put = (obj: THREE.Object3D, x: number, y: number, rot: number, h = 0) => {
    obj.position.set(x, obj.position.y + h, -y)
    obj.rotation.y += rot
    group.add(obj)
    return obj
  }

  // ---------- отделка: полы, плинтус, плитка, карнизы ----------
  const floorBy = new Map<THREE.Material, THREE.BufferGeometry[]>()
  const addFloor = (r: Rect, m: THREE.Material) => {
    // чистовой пол на 6 мм выше черновой плиты прогулки — без мерцания совпадающих граней
    const g = boxGeo(r[0] - 0.05, r[1] - 0.05, r[2] + 0.05, r[3] + 0.05, 0.004, 0.018)
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
    if (r !== undefined) addFloor(d.rect, floorMat(layout.rooms[r]))
  }
  for (const [m, list] of floorBy) {
    const geo = merge(list)
    owned.push(geo)
    const o = new THREE.Mesh(geo, m)
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
  for (const [b, m] of [[wet, k.wallWet], [skirt, k.skirting], [trim, k.skirting]] as [Builder2, THREE.Material][]) {
    if (!b.count) continue
    const geo = b.geometry()
    owned.push(geo)
    const o = new THREE.Mesh(geo, m)
    o.receiveShadow = true
    group.add(o)
  }

  // ---------- двери ----------
  for (const d of layout.doors) {
    const [a, b, c, e] = d.rect
    const w = d.alongX ? c - a : e - b
    const thick = d.alongX ? e - b : c - a
    if (w < 0.55 || w > 1.3) continue
    // полотно открывается в большую из комнат
    const [r0, r1] = d.rooms
    const area = (i: number) => (i >= 0 ? layout.rooms[i].area : -1)
    const into = d.entrance ? 0 : area(r1) >= area(r0) ? 1 : -1
    const door = P.interiorDoor(k, w, thick, into === 0 ? 0 : d.alongX ? into * 1.45 : -into * 1.45, d.entrance)
    put(door, (a + c) / 2, (b + e) / 2, d.alongX ? 0 : Math.PI / 2)
  }

  // ---------- мебель по комнатам ----------
  for (const room of layout.rooms) furnishRoom(room)

  function furnishRoom(room: RoomPlan) {
    const zones = room.zones.length ? room.zones : [room.rect]
    const used: Rect[] = []
    // зоны перед дверями — свободны
    // в санузлах и кладовых хватает 0,55 м перед дверью, в остальных — 0,9 м
    const dz = room.kind === 'bath' || room.kind === 'closet' ? 0.55 : 0.9
    for (const di of room.doors) {
      const d = layout.doors[di]
      const [a, b, c, e] = d.rect
      used.push(d.alongX ? [a - 0.05, b - dz, c + 0.05, e + dz] : [a - dz, b - 0.05, c + dz, e + 0.05])
    }
    const ctx: RoomCtx = { room, used, layout }
    const main = zones[0]
    const second = zones[1]
    const kind = room.kind
    switch (kind) {
      case 'living':
        livingSet(ctx, main, true)
        break
      case 'kitchen_living':
        if (second) {
          kitchenSet(ctx, second, true)
          livingSet(ctx, main, true)
        } else {
          kitchenSet(ctx, main, false)
          livingSet(ctx, main, false)
          diningOnly(ctx, main)
        }
        break
      case 'studio':
        if (second) {
          kitchenSet(ctx, second, true)
          bedSet(ctx, main, false)
          livingSet(ctx, main, false)
        } else {
          kitchenSet(ctx, main, false)
          bedSet(ctx, main, false)
          livingSet(ctx, main, false, true)
        }
        break
      case 'living_bed':
        bedSet(ctx, main, true)
        livingSet(ctx, second ?? main, false, true)
        break
      case 'kitchen':
        kitchenSet(ctx, main, true)
        break
      case 'bedroom':
        bedSet(ctx, main, true)
        break
      case 'bath':
        bathSet(ctx, main)
        break
      case 'hall':
        hallSet(ctx, main)
        break
      case 'closet':
        tryWall(ctx, main, (W) => P.wardrobe(k, W, 2.3, 0.55), { w: [0.8, 2.4], d: 0.55, clear: 0.5, tall: true })
        break
      case 'loggia':
        tryCorner(ctx, main, () => P.plant(k, 0.9), 0.4)
        break
    }
    // свет
    if (kind !== 'loggia' && kind !== 'closet') {
      const z = main
      const big = ['living', 'kitchen_living', 'studio', 'living_bed', 'bedroom'].includes(kind)
      put(P.ceilingLight(k, ceilH, big), (z[0] + z[2]) / 2, (z[1] + z[3]) / 2, 0)
    }
    // шторы на окнах жилых комнат
    if (['living', 'kitchen_living', 'studio', 'living_bed', 'bedroom', 'kitchen'].includes(kind) && k.curtain) {
      for (const [x0, y0, x1, y1, side] of room.windows) {
        const len = Math.hypot(x1 - x0, y1 - y0)
        if (len < 0.8) continue
        put(P.curtains(k, len, ceilH - 0.08), (x0 + x1) / 2, (y0 + y1) / 2, ROT[side])
      }
    }
  }

  // ---------- наборы ----------

  function livingSet(c: RoomCtx, z: Rect, full: boolean, compact = false) {
    const long = Math.max(z[2] - z[0], z[3] - z[1])
    const sofaW = compact ? 1.7 : Math.min(2.6, Math.max(1.8, long * 0.55))
    // диван — к глухой стене; если её нет (окна и двери), то под окно: низкая спинка свет не закрывает
    const s = tryWall(c, z, (W) => P.sofa(k, W, 0.95), { w: [compact ? 1.5 : 1.8, sofaW], d: 0.95, clear: 0.3, noWindow: true, prefer: 'long' })
      ?? tryWall(c, z, (W) => P.sofa(k, W, 0.95), { w: [1.5, sofaW], d: 0.95, clear: 0.3, prefer: 'long' })
    if (!s?.side) return
    // телевизор напротив
    const tvSide = OPP[s.side]
    const tvW = Math.min(1.8, sofaW)
    const tv = tryWall(c, z, (W) => P.tvUnit(k, W), { w: [1.2, tvW], d: 0.42, clear: 0.3, sides: [tvSide], align: s })
    // журнальный столик и ковёр между диваном и телевизором
    const [nx, ny] = NORMAL[s.side]
    const tx = s.cx + nx * (0.95 / 2 + 0.45 + 0.3)
    const ty = s.cy + ny * (0.95 / 2 + 0.45 + 0.3)
    const horiz = s.side === 'N' || s.side === 'S'
    const tW = 1.1, tD = 0.6
    const tfp: Rect = horiz ? [tx - tW / 2, ty - tD / 2, tx + tW / 2, ty + tD / 2] : [tx - tD / 2, ty - tW / 2, tx + tD / 2, ty + tW / 2]
    const rugW = Math.min(sofaW + 0.5, 2.6), rugD = 1.8
    const rx = s.cx + nx * (0.95 / 2 + 0.75), ry = s.cy + ny * (0.95 / 2 + 0.75)
    let rfp: Rect = horiz ? [rx - rugW / 2, ry - rugD / 2, rx + rugW / 2, ry + rugD / 2] : [rx - rugD / 2, ry - rugW / 2, rx + rugD / 2, ry + rugW / 2]
    rfp = [Math.max(rfp[0], z[0] + 0.1), Math.max(rfp[1], z[1] + 0.1), Math.min(rfp[2], z[2] - 0.1), Math.min(rfp[3], z[3] - 0.1)]
    if (rfp[2] - rfp[0] > 1 && rfp[3] - rfp[1] > 1) {
      const rug = P.rugMesh(k, rfp[2] - rfp[0], rfp[3] - rfp[1])
      put(rug, (rfp[0] + rfp[2]) / 2, (rfp[1] + rfp[3]) / 2, 0)
    }
    if (inside(tfp, z) && !c.used.some((u) => overlap(u, tfp, 0.02))) {
      put(P.coffeeTable(k, tW, tD), tx, ty, ROT[s.side])
      colliders.push(tfp)
    }
    // зона отдыха: от дивана до столика и проход за ним — свободна
    c.used.push(expand(s.fp, s.side, 1.6, 0))
    // торшер у дивана, картина над диваном
    const along: [number, number] = horiz ? [1, 0] : [0, 1]
    for (const sd of [1, -1]) {
      const lx = s.cx + along[0] * sd * (sofaW / 2 + 0.25)
      const ly = s.cy + along[1] * sd * (sofaW / 2 + 0.25)
      const fp: Rect = [lx - 0.18, ly - 0.18, lx + 0.18, ly + 0.18]
      if (inside(fp, z) && !c.used.some((u) => overlap(u, fp))) {
        put(P.floorLamp(k), lx, ly, 0)
        c.used.push(fp)
        colliders.push(fp)
        break
      }
    }
    const art = P.artwork(k, Math.min(1.2, sofaW * 0.5), 0.8, 1)
    put(art, s.cx - nx * 0.47, s.cy - ny * 0.47, ROT[s.side], 1.3)
    if (k.accentWall && s.side) accentWall(c.room, s.side, s, sofaW + 1.0)
    if (full) {
      // кресло сбоку от столика
      const ax = tx + along[0] * (tW / 2 + 0.75) - nx * 0.05
      const ay = ty + along[1] * (tW / 2 + 0.75) - ny * 0.05
      const afp: Rect = [ax - 0.45, ay - 0.45, ax + 0.45, ay + 0.45]
      if (inside(afp, z) && !c.used.some((u) => overlap(u, afp))) {
        const facing = horiz ? (along[0] > 0 ? 'E' : 'W') : (along[1] > 0 ? 'N' : 'S')
        put(P.armchair(k), ax, ay, ROT[facing as Side])
        c.used.push(afp)
        colliders.push(afp)
      }
      tryCorner(c, z, () => P.plant(k, 1.3), 0.45, true)
    }
    void tv
  }

  function kitchenSet(c: RoomCtx, z: Rect, withTable: boolean) {
    const w = z[2] - z[0], d = z[3] - z[1]
    const long = Math.max(w, d)
    const L = Math.min(3.4, long - 0.1)
    const run = tryWall(c, z, (W, side) => P.kitchenRun(k, W, { fridge: fridgeSide(c, z, side), upper: true }), {
      w: [1.6, L], d: 0.62, clear: 0.9, noWindow: true, prefer: 'long', kitchen: true,
    })
    if (withTable) {
      const short = Math.min(w, d)
      const seats = short > 2.6 && long > 3 ? 4 : 2
      const tw = seats === 4 ? 1.3 : 0.8, td = seats === 4 ? 0.85 : 0.7
      // след стола со стульями: стол tw × td, стулья выступают на 0,45 м с двух длинных сторон
      const fw = tw + 0.1, fd = td + 0.9
      const t = tryFree(c, z, fw, fd, run, true)
      if (t) {
        const alongX = Math.abs((t[2] - t[0]) - fw) < 1e-6
        const cx = (t[0] + t[2]) / 2, cy = (t[1] + t[3]) / 2
        put(P.diningSet(k, seats), cx, cy, alongX ? 0 : Math.PI / 2)
        colliders.push(alongX ? [cx - tw / 2, cy - td / 2, cx + tw / 2, cy + td / 2] : [cx - td / 2, cy - tw / 2, cx + td / 2, cy + tw / 2])
        put(P.pendant(k, ceilH, 0.9), cx, cy, 0)
      }
    }
  }

  /** Обеденный стол в оставшемся месте кухни-гостиной */
  function diningOnly(c: RoomCtx, z: Rect) {
    const tw = 1.3, td = 0.85
    for (const [w, d, seats] of [[tw + 0.1, td + 0.9, 4], [0.9, 1.6, 2]] as [number, number, 2 | 4][]) {
      const t = tryFree(c, z, w, d, null, true)
      if (!t) continue
      const alongX = Math.abs((t[2] - t[0]) - w) < 1e-6
      const cx = (t[0] + t[2]) / 2, cy = (t[1] + t[3]) / 2
      const ww = seats === 4 ? tw : 0.8, dd = seats === 4 ? td : 0.7
      put(P.diningSet(k, seats), cx, cy, alongX ? 0 : Math.PI / 2)
      colliders.push(alongX ? [cx - ww / 2, cy - dd / 2, cx + ww / 2, cy + dd / 2] : [cx - dd / 2, cy - ww / 2, cx + dd / 2, cy + ww / 2])
      put(P.pendant(k, ceilH, 0.9), cx, cy, 0)
      return
    }
  }

  function fridgeSide(c: RoomCtx, z: Rect, side: Side): 'left' | 'right' {
    // холодильник — к дальнему от окна концу гарнитура
    const fac = c.room.facade
    const horiz = side === 'N' || side === 'S'
    if (horiz) {
      const winRight = fac.includes('E'), winLeft = fac.includes('W')
      const right = side === 'N' ? 'right' : 'left' // локальный +x гарнитура = план +x для N, −x для S
      if (winRight && !winLeft) return right === 'right' ? 'left' : 'right'
      return right === 'right' ? 'right' : 'left'
    }
    const winTop = fac.includes('N'), winBottom = fac.includes('S')
    // для E локальный +x = план +y, для W — план −y
    const plusIsTop = side === 'E'
    if (winTop && !winBottom) return plusIsTop ? 'left' : 'right'
    void z
    return plusIsTop ? 'right' : 'left'
  }

  function bedSet(c: RoomCtx, z: Rect, full: boolean) {
    const short = Math.min(z[2] - z[0], z[3] - z[1])
    const bw0 = short >= 3.0 ? 1.8 : short >= 2.6 ? 1.6 : short >= 2.2 ? 1.4 : 1.2
    const L = 2.05
    // кровать: сначала с тумбочками по бокам, потом уже и без них; проход у изножья — от 0,5 м
    let b: Placement | null = null
    let bw = bw0
    for (const [w, sc] of [[bw0, 0.5], [bw0, 0.2], [Math.max(1.4, bw0 - 0.2), 0.2], [1.2, 0]] as [number, number][]) {
      b = tryWall(c, z, (W) => P.bed(k, W, L), { w: [w, w], d: L, clear: 0.5, prefer: 'short', sideClear: sc, headboard: true })
      if (b) { bw = w; break }
    }
    if (!b?.side) return
    const horiz = b.side === 'N' || b.side === 'S'
    const along: [number, number] = horiz ? [1, 0] : [0, 1]
    const [nx, ny] = NORMAL[b.side]
    // тумбочки
    for (const sd of [-1, 1]) {
      const x = b.cx + along[0] * sd * (bw / 2 + 0.33) + nx * (-L / 2 + 0.22)
      const y = b.cy + along[1] * sd * (bw / 2 + 0.33) + ny * (-L / 2 + 0.22)
      const fp: Rect = horiz ? [x - 0.23, y - 0.2, x + 0.23, y + 0.2] : [x - 0.2, y - 0.23, x + 0.2, y + 0.23]
      if (inside(fp, z) && !c.used.some((u) => overlap(u, fp))) {
        put(P.nightstand(k), x, y, ROT[b.side])
        c.used.push(fp)
        colliders.push(fp)
      }
    }
    // ковёр под нижние две трети кровати
    const rx = b.cx + nx * 0.35, ry = b.cy + ny * 0.35
    const rw = bw + 1.0, rd = 1.7
    let rfp: Rect = horiz ? [rx - rw / 2, ry - rd / 2, rx + rw / 2, ry + rd / 2] : [rx - rd / 2, ry - rw / 2, rx + rd / 2, ry + rw / 2]
    rfp = [Math.max(rfp[0], z[0] + 0.05), Math.max(rfp[1], z[1] + 0.05), Math.min(rfp[2], z[2] - 0.05), Math.min(rfp[3], z[3] - 0.05)]
    put(P.rugMesh(k, rfp[2] - rfp[0], rfp[3] - rfp[1]), (rfp[0] + rfp[2]) / 2, (rfp[1] + rfp[3]) / 2, 0)
    put(P.artwork(k, Math.min(1.4, bw), 0.6, 2), b.cx - nx * (L / 2 + 0.05), b.cy - ny * (L / 2 + 0.05), ROT[b.side], k.id === 'neoclassic' ? 1.45 : 1.3)
    if (full) {
      tryWall(c, z, (W) => P.wardrobe(k, W), { w: [1.0, 2.2], d: 0.6, clear: 0.6, noWindow: true, tall: true })
      const area = (z[2] - z[0]) * (z[3] - z[1])
      if (area >= 11) tryWall(c, z, () => P.desk(k, 1.1), { w: [1.1, 1.1], d: 0.6, clear: 0.7, windowOnly: true })
      tryCorner(c, z, () => P.plant(k, 1.0), 0.4, true)
    }
  }

  function bathSet(c: RoomCtx, z: Rect) {
    const w = z[2] - z[0], d = z[3] - z[1]
    const long = Math.max(w, d), short = Math.min(w, d)
    if (long >= 1.6 && short >= 1.3) {
      // ванна вдоль короткой стены во всю ширину
      const L = Math.min(1.8, short >= 1.65 && long >= 2.2 ? long : short)
      const tub = tryWall(c, z, (W) => P.bathtub(k, W, 0.72), { w: [1.4, Math.min(1.8, L - 0.02)], d: 0.72, clear: 0.05, prefer: 'short', fitWall: true })
      if (!tub) tryCornerWall(c, z, () => P.shower(k, 0.9, 0.9), 0.9, 0.9)
    } else if (short >= 0.85) {
      tryCornerWall(c, z, () => P.shower(k, 0.85, 0.85), 0.85, 0.85)
    }
    tryWall(c, z, () => P.toilet(k), { w: [0.42, 0.42], d: 0.6, clear: 0.45 })
    tryWall(c, z, (W) => P.vanity(k, W), { w: [0.5, 0.9], d: 0.48, clear: 0.5 })
    tryWall(c, z, () => P.washer(k), { w: [0.6, 0.6], d: 0.56, clear: 0.6 })
  }

  function hallSet(c: RoomCtx, z: Rect) {
    const short = Math.min(z[2] - z[0], z[3] - z[1])
    if (short >= 1.7) tryWall(c, z, (W) => P.wardrobe(k, W, 2.4, 0.6), { w: [1.0, 2.0], d: 0.6, clear: 0.9, tall: true, noWindow: true })
    tryWall(c, z, (W) => P.hallUnit(k, W), { w: [0.8, 1.2], d: 0.35, clear: 0.8 })
  }

  function accentWall(room: RoomPlan, side: Side, s: Placement, span: number) {
    const b = new Builder2()
    for (const [x0, y0, x1, y1, sd, kind] of room.edges) {
      if (sd !== side || kind !== 'wall') continue
      const horiz = sd === 'N' || sd === 'S'
      const a0 = horiz ? Math.max(x0, s.cx - span / 2) : Math.max(y0, s.cy - span / 2)
      const a1 = horiz ? Math.min(x1, s.cx + span / 2) : Math.min(y1, s.cy + span / 2)
      if (a1 - a0 < 0.3) continue
      if (horiz) b.wall(a0, y0, a1, y1, sd, 0, ceilH, 0.01)
      else b.wall(x0, a0, x1, a1, sd, 0, ceilH, 0.01)
    }
    if (!b.count) return
    const geo = b.geometry()
    owned.push(geo)
    const o = new THREE.Mesh(geo, k.accentWall!)
    o.receiveShadow = true
    group.add(o)
  }

  // ---------- поиск места ----------

  interface WallOpts {
    w: [number, number]
    d: number
    clear: number
    noWindow?: boolean
    windowOnly?: boolean
    tall?: boolean
    prefer?: 'long' | 'short'
    sides?: Side[]
    align?: Placement
    sideClear?: number
    headboard?: boolean
    kitchen?: boolean
    fitWall?: boolean
  }

  function tryWall(c: RoomCtx, z: Rect, make: (W: number, side: Side) => THREE.Object3D, o: WallOpts): Placement | null {
    const sides: Side[] = o.sides ?? (['N', 'S', 'E', 'W'] as Side[])
    const len = (s: Side) => (s === 'N' || s === 'S' ? z[2] - z[0] : z[3] - z[1])
    const depthRoom = (s: Side) => (s === 'N' || s === 'S' ? z[3] - z[1] : z[2] - z[0])
    const order = [...sides].sort((a, b) => {
      const fa = c.room.facade.includes(a) ? 1 : 0, fb = c.room.facade.includes(b) ? 1 : 0
      if (o.windowOnly) return fb - fa
      if (fa !== fb) return fa - fb
      return o.prefer === 'short' ? len(a) - len(b) : len(b) - len(a)
    })
    for (const side of order) {
      if (depthRoom(side) < o.d + Math.min(o.clear, 0.6)) continue
      const facadeSide = c.room.facade.includes(side)
      if (o.windowOnly && !facadeSide) continue
      const maxW = Math.min(o.w[1], len(side) - (o.sideClear ? o.sideClear * 2 : 0.05))
      for (let W = maxW; W >= o.w[0] - 1e-6; W -= 0.2) {
        const p = slide(c, z, side, W, o.d, o, facadeSide)
        if (!p) continue
        const obj = make(W, side)
        put(obj, p.cx, p.cy, p.rot)
        c.used.push(expand(p.fp, side, o.clear, 0))
        colliders.push(p.fp)
        return p
      }
    }
    return null
  }

  function slide(c: RoomCtx, z: Rect, side: Side, W: number, D: number, o: WallOpts, facadeSide: boolean): Placement | null {
    const horiz = side === 'N' || side === 'S'
    const lo = (horiz ? z[0] : z[1]) + W / 2 + (o.sideClear ?? 0)
    const hi = (horiz ? z[2] : z[3]) - W / 2 - (o.sideClear ?? 0)
    if (hi < lo - 1e-6) return null
    const mid = o.align ? (horiz ? o.align.cx : o.align.cy) : (lo + hi) / 2
    const steps: number[] = []
    for (let s = 0; s <= hi - lo + 0.001; s += 0.1) steps.push(s)
    const cands = [Math.min(hi, Math.max(lo, mid))]
    for (const s of steps) cands.push(mid + s, mid - s)
    if (o.fitWall) cands.unshift(lo, hi)
    for (const t of cands) {
      if (t < lo - 1e-6 || t > hi + 1e-6) continue
      const fp: Rect = side === 'N' ? [t - W / 2, z[3] - D, t + W / 2, z[3]]
        : side === 'S' ? [t - W / 2, z[1], t + W / 2, z[1] + D]
          : side === 'E' ? [z[2] - D, t - W / 2, z[2], t + W / 2]
            : [z[0], t - W / 2, z[0] + D, t + W / 2]
      if (c.used.some((u) => overlap(u, fp, 0.01))) continue
      // за спиной — стена (не проём и не открытое пространство)
      const back = backing(c, fp, side)
      if (back.door || back.solid < 0.75) continue
      const winBehind = back.glass > 0.15 || (facadeSide && windowOverlap(c.room, fp, side))
      if ((o.noWindow || o.tall || o.headboard || o.kitchen) && winBehind) continue
      const cx = (fp[0] + fp[2]) / 2, cy = (fp[1] + fp[3]) / 2
      return { fp, side, cx, cy, rot: ROT[side] }
    }
    return null
  }

  function backing(c: RoomCtx, fp: Rect, side: Side) {
    const horiz = side === 'N' || side === 'S'
    const n = 8
    let solid = 0, glass = 0, door = false
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n
      const x = horiz ? fp[0] + (fp[2] - fp[0]) * t : side === 'E' ? fp[2] + 0.15 : fp[0] - 0.15
      const y = horiz ? (side === 'N' ? fp[3] + 0.15 : fp[1] - 0.15) : fp[1] + (fp[3] - fp[1]) * t
      const kd = c.layout.kindAt(x, y)
      if (kd === DOOR) door = true
      if (kd === WALL || kd === GLASS || kd === OUT) solid++
      if (kd === GLASS) glass++
    }
    return { solid: solid / n, glass: glass / n, door }
  }

  function tryFree(c: RoomCtx, z: Rect, W: number, D: number, avoid: Placement | null, nearWindow: boolean): Rect | null {
    const cands: Rect[] = []
    for (const [w, d] of [[W, D], [D, W]]) {
      for (let x = z[0] + w / 2; x <= z[2] - w / 2 + 1e-6; x += 0.1) for (let y = z[1] + d / 2; y <= z[3] - d / 2 + 1e-6; y += 0.1) {
        cands.push([x - w / 2, y - d / 2, x + w / 2, y + d / 2])
      }
    }
    let best: Rect | null = null
    let bestScore = -Infinity
    for (const fp of cands) {
      if (c.used.some((u) => overlap(u, fp, 0.01))) continue
      const cx = (fp[0] + fp[2]) / 2, cy = (fp[1] + fp[3]) / 2
      let score = 0
      if (nearWindow) for (const s of c.room.facade) {
        const dist = s === 'N' ? z[3] - cy : s === 'S' ? cy - z[1] : s === 'E' ? z[2] - cx : cx - z[0]
        score -= dist
      }
      if (avoid) score += Math.hypot(cx - avoid.cx, cy - avoid.cy) * 0.3
      if (score > bestScore) {
        bestScore = score
        best = fp
      }
    }
    if (best) c.used.push(best)
    return best
  }

  function tryCorner(c: RoomCtx, z: Rect, make: () => THREE.Object3D, size: number, nearWindow = false) {
    const corners: [number, number, Side, Side][] = [
      [z[0] + size / 2 + 0.05, z[1] + size / 2 + 0.05, 'S', 'W'],
      [z[2] - size / 2 - 0.05, z[1] + size / 2 + 0.05, 'S', 'E'],
      [z[0] + size / 2 + 0.05, z[3] - size / 2 - 0.05, 'N', 'W'],
      [z[2] - size / 2 - 0.05, z[3] - size / 2 - 0.05, 'N', 'E'],
    ]
    corners.sort((a, b) => {
      const sa = (c.room.facade.includes(a[2]) ? 1 : 0) + (c.room.facade.includes(a[3]) ? 1 : 0)
      const sb = (c.room.facade.includes(b[2]) ? 1 : 0) + (c.room.facade.includes(b[3]) ? 1 : 0)
      return nearWindow ? sb - sa : sa - sb
    })
    for (const [x, y] of corners) {
      const fp: Rect = [x - size / 2, y - size / 2, x + size / 2, y + size / 2]
      if (c.used.some((u) => overlap(u, fp, 0.01))) continue
      put(make(), x, y, 0)
      c.used.push(fp)
      colliders.push(fp)
      return true
    }
    return false
  }

  function tryCornerWall(c: RoomCtx, z: Rect, make: () => THREE.Object3D, w: number, d: number) {
    for (const side of ['N', 'S', 'E', 'W'] as Side[]) {
      const p = slide(c, z, side, w, d, { w: [w, w], d, clear: 0.1, fitWall: true }, false)
      if (!p) continue
      put(make(), p.cx, p.cy, p.rot)
      c.used.push(p.fp)
      colliders.push(p.fp)
      return p
    }
    return null
  }

  // ---------- свет ----------
  const shades = new Set<THREE.MeshStandardMaterial>([k.lampShade])
  const bulbs = new Set<THREE.MeshStandardMaterial>([k.bulb])
  return {
    group,
    colliders,
    setLight(level: number) {
      for (const m of bulbs) m.emissiveIntensity = 0.08 + 7 * level
      for (const m of shades) m.emissiveIntensity = 0.9 * level
    },
    dispose() {
      for (const g of owned) g.dispose()
      group.traverse((o) => {
        const m = o as THREE.Mesh
        if (m.isMesh && !owned.includes(m.geometry)) m.geometry.dispose()
      })
    },
  }
}

interface RoomCtx {
  room: RoomPlan
  used: Rect[]
  layout: UnitLayout
}

function inside(a: Rect, z: Rect) {
  return a[0] >= z[0] - 1e-6 && a[1] >= z[1] - 1e-6 && a[2] <= z[2] + 1e-6 && a[3] <= z[3] + 1e-6
}

function expand(fp: Rect, side: Side, front: number, sides: number): Rect {
  const [nx, ny] = NORMAL[side]
  const r: Rect = [...fp]
  if (nx > 0) r[2] += front
  if (nx < 0) r[0] -= front
  if (ny > 0) r[3] += front
  if (ny < 0) r[1] -= front
  if (nx === 0) { r[0] -= sides; r[2] += sides } else { r[1] -= sides; r[3] += sides }
  return r
}

function windowOverlap(room: RoomPlan, fp: Rect, side: Side): boolean {
  const horiz = side === 'N' || side === 'S'
  for (const [x0, y0, x1, y1, s] of room.windows) {
    if (s !== side) continue
    if (horiz && Math.min(x1, fp[2]) - Math.max(x0, fp[0]) > 0.2) return true
    if (!horiz && Math.min(y1, fp[3]) - Math.max(y0, fp[1]) > 0.2) return true
  }
  return false
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
