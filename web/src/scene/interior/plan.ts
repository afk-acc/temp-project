import type { Point, Rect } from '@/domain/types'
import type { RoomPlan, Side, UnitLayout } from '@/domain/rooms'
import { Passage, doorPoints } from './passage'

/**
 * Расстановка мебели в квартире — чистая геометрия плана, без three.js и без стиля: план одинаков во всех стилях,
 * его же проверяет автопроверка (scripts/check-furniture.ts). Меши строит furnish.ts.
 *
 * Правила:
 * - след предмета целиком лежит на клетках своей комнаты, спинкой к реальной грани стены с зазором 3 см
 *   (к окну — 20 см, под шторы), не заходит в зоны дверей (полотно и подход) и под окна;
 * - высокие предметы (шкафы, кухня) не заслоняют окна и откосы;
 * - после каждого крупного предмета проверяется проход не уже 0,7 м между дверями комнаты и к фасадам мебели;
 * - пары ставятся по осям: ТВ по оси дивана, кровать по центру стены, тумбочки симметрично, ковёр по центру зоны;
 * - для слитных помещений (студия, кухня-гостиная) перебираются варианты зонирования, выбирается лучший по весам.
 */

export type ItemKind =
  | 'sofa' | 'armchair' | 'coffeeTable' | 'tvUnit' | 'rug' | 'floorLamp' | 'plant' | 'artwork'
  | 'bed' | 'nightstand' | 'wardrobe' | 'desk'
  | 'kitchenRun' | 'fridge' | 'diningSet' | 'pendant'
  | 'bathtub' | 'shower' | 'toilet' | 'vanity' | 'washer'
  | 'hallUnit'

export interface Item {
  kind: ItemKind
  room: number
  /** куда ставится начало координат предмета (план) */
  x: number
  y: number
  /** поворот вокруг вертикали: лицом в +z предмета */
  rot: number
  /** стена за спиной */
  side: Side | null
  /** след на полу; null — на стене или под потолком */
  fp: Rect | null
  /** плоский (ковёр): не препятствие и не пересекается с мебелью */
  flat?: boolean
  /** высота низа над полом (картина) */
  h?: number
  /** параметры фабрики предмета: ширина, глубина… */
  a: number[]
  fridge?: 'left' | 'right' | 'none'
  /** стекло душевой — со стороны локального +x (1) или −x (−1) */
  hand?: 1 | -1
  /** точки подхода (любая): к ним должен вести проход 0,7 м */
  access?: Point[]
}

export interface UnitPlan {
  items: Item[]
  /** акцентная стена за диваном или изголовьем */
  accents: { room: number; side: Side; line: number; from: number; to: number }[]
  /** потолочные светильники: центр функциональной зоны */
  lights: { room: number; x: number; y: number; big: boolean }[]
}

export const ROT: Record<Side, number> = { N: 0, S: Math.PI, E: -Math.PI / 2, W: Math.PI / 2 }
export const OPP: Record<Side, Side> = { N: 'S', S: 'N', E: 'W', W: 'E' }
/** нормаль от стены в комнату */
export const NORMAL: Record<Side, [number, number]> = { N: [0, -1], S: [0, 1], E: [-1, 0], W: [1, 0] }
const SIDES: Side[] = ['N', 'S', 'E', 'W']
const isH = (s: Side) => s === 'N' || s === 'S'

const KIND_WALL = 1, KIND_DOOR = 2, KIND_GLASS = 3, KIND_OUT = 4

export function overlap(a: Rect, b: Rect, pad = 0) {
  return a[0] < b[2] - pad && a[2] > b[0] + pad && a[1] < b[3] - pad && a[3] > b[1] + pad
}

/** поворот, при котором лицо предмета смотрит в направлении (fx, fy) плана */
export function rotFacing(fx: number, fy: number) {
  return Math.atan2(fx, -fy)
}

/** Куда открывается дверь: +1 — в rooms[1], −1 — в rooms[0], 0 — входная (закрыта). Полотно — в большую комнату. */
export function doorSwing(layout: UnitLayout, di: number): number {
  const d = layout.doors[di]
  if (d.entrance) return 0
  const [r0, r1] = d.rooms
  const area = (i: number) => (i >= 0 ? layout.rooms[i].area : -1)
  return area(r1) >= area(r0) ? 1 : -1
}

/** Зоны перед дверью, свободные от мебели: со стороны полотна — на ширину проёма, с другой — подход 0,6 м */
export function doorZones(layout: UnitLayout, room: number): Rect[] {
  const out: Rect[] = []
  const r = layout.rooms[room]
  const small = r.kind === 'bath' || r.kind === 'closet'
  for (const di of r.doors) {
    const d = layout.doors[di]
    const [a, b, c, e] = d.rect
    const w = d.alongX ? c - a : e - b
    const sgn = d.rooms[1] === room ? 1 : -1
    const sw = doorSwing(layout, di)
    // полотно есть только у обычных дверей (0,55–1,3 м), широкий проём — просто проход
    const swingHere = sw !== 0 && (sw > 0) === (sgn > 0) && w >= 0.55 && w <= 1.3
    const depth = d.entrance ? 1.0 : swingHere ? Math.max(0.75, w + 0.05) : small ? 0.5 : 0.6
    const m = 0.1
    if (d.alongX) out.push(sgn > 0 ? [a - m, e, c + m, e + depth] : [a - m, b - depth, c + m, b])
    else out.push(sgn > 0 ? [c, b - m, c + depth, e + m] : [a - depth, b - m, a, e + m])
  }
  return out
}

/** Полоса перед окном (шторы, подоконник): depth от линии окна, с запасом по бокам */
function windowStrips(room: RoomPlan, depth: number, side: number): Rect[] {
  return room.windows.map(([x0, y0, x1, y1, s]) => {
    const [nx, ny] = NORMAL[s]
    if (isH(s)) {
      const y = y0
      return [Math.min(x0, x1) - side, ny > 0 ? y : y - depth, Math.max(x0, x1) + side, ny > 0 ? y + depth : y] as Rect
    }
    const x = x0
    return [nx > 0 ? x : x - depth, Math.min(y0, y1) - side, nx > 0 ? x + depth : x, Math.max(y0, y1) + side] as Rect
  })
}

const LIVING_KINDS = new Set(['living', 'kitchen_living', 'studio', 'living_bed', 'bedroom', 'kitchen'])
const PASSAGE_KINDS = new Set(['living', 'kitchen_living', 'studio', 'living_bed', 'bedroom', 'kitchen', 'hall'])
export const isLivingRoom = (r: RoomPlan) => LIVING_KINDS.has(r.kind)
export const needsPassage = (r: RoomPlan) => PASSAGE_KINDS.has(r.kind)

/** вес предмета при выборе варианта зонирования */
const WEIGHT: Partial<Record<ItemKind, number>> = {
  kitchenRun: 10, fridge: 1.5, bed: 9, sofa: 7, tvUnit: 3, diningSet: 4, coffeeTable: 1, armchair: 1,
  wardrobe: 2, desk: 1.5, nightstand: 0.5, floorLamp: 0.3, plant: 0.3, rug: 0.5,
  toilet: 6, bathtub: 4.5, shower: 4, vanity: 3, washer: 1.5, hallUnit: 2,
}

type Res = { r: Rect; t: 'item' | 'clear' | 'door' | 'win' | 'tallwin' }

interface WallOpts {
  w: [number, number]
  d: number
  /** свободная зона перед фасадом */
  clear: number
  noWindow?: boolean
  windowOnly?: boolean
  tall?: boolean
  prefer?: 'long' | 'short'
  sides?: Side[]
  /** ось вдоль стены, к которой предмет должен стоять строго (±2 см) */
  align?: number
  /** запас по бокам (тумбочки и т. п.) */
  sideClear?: number
  /** бонус за упор торцом в стену (кухня, ванна) */
  corner?: number
  /** предпочитать центр стены */
  center?: number
  /** проверка дополнительных условий кандидата */
  extra?: (p: Spot) => boolean
}

export interface Spot {
  fp: Rect
  side: Side
  /** координата вдоль стены (центр) */
  t: number
  /** грань стены за спиной */
  wall: number
  W: number
  D: number
  windowBehind: boolean
  /** концы упираются в стены */
  endLo: boolean
  endHi: boolean
}

interface Run {
  side: Side
  kind: 'wall' | 'window'
  /** линия стены (грань) или окна */
  line: number
  a: number
  b: number
}

interface RoomState {
  runs?: Run[]
  room: RoomPlan
  zones: Rect[]
  doorPts: Point[]
  /** door points, проходимые в пустой комнате, и их компоненты */
  baseComp: number[]
  anchor: number
  access: Point[][]
  lights: { x: number; y: number; big: boolean }[]
  accents: UnitPlan['accents']
}

export function planUnit(layout: UnitLayout): UnitPlan {
  return new Planner(layout).run()
}

export class Planner {
  readonly pass: Passage
  items: Item[] = []
  used: Res[] = []
  blocked: Rect[] = []
  st!: RoomState
  debug?: (msg: string) => void

  constructor(readonly layout: UnitLayout) {
    this.pass = new Passage(layout)
  }

  run(): UnitPlan {
    const out: UnitPlan = { items: [], accents: [], lights: [] }
    // комнаты независимы: клетки не пересекаются, проходы считаются внутри комнаты
    for (const room of this.layout.rooms) {
      this.items = []
      this.used = []
      this.blocked = []
      this.beginRoom(room)
      this.furnishRoom(room)
      out.items.push(...this.items)
      out.accents.push(...this.st.accents)
      for (const l of this.st.lights) out.lights.push({ room: room.index, ...l })
      for (const r of this.blocked) this.pass.unblock(r)
    }
    return out
  }

  beginRoom(room: RoomPlan) {
    const zones = room.zones.length ? room.zones : [room.rect]
    for (const r of doorZones(this.layout, room.index)) this.used.push({ r, t: 'door' })
    if (room.kind !== 'loggia') {
      for (const r of windowStrips(room, 0.2, 0.05)) this.used.push({ r, t: 'win' })
      for (const r of windowStrips(room, 0.7, 0.15)) this.used.push({ r, t: 'tallwin' })
    }
    const doorPts = doorPoints(this.layout, room.index)
    const baseComp = this.pass.components(room.index, doorPts)
    const anchor = baseComp.findIndex((c) => c >= 0)
    this.st = { room, zones, doorPts, baseComp, anchor, access: [], lights: [], accents: [] }
  }

  // ---------- состояние и откат ----------

  mark() {
    return { items: this.items.length, used: this.used.length, blocked: this.blocked.length, access: this.st.access.length, lights: this.st.lights.length, accents: this.st.accents.length }
  }

  rollback(m: ReturnType<Planner['mark']>) {
    this.items.length = m.items
    this.used.length = m.used
    while (this.blocked.length > m.blocked) this.pass.unblock(this.blocked.pop()!)
    this.st.access.length = m.access
    this.st.lights.length = m.lights
    this.st.accents.length = m.accents
  }

  /** проход 0,7 м: двери комнаты связаны между собой и с подходами к мебели */
  passageOk(): boolean {
    const s = this.st
    if (!needsPassage(s.room) || s.anchor < 0) return true
    const pts: Point[] = [...s.doorPts]
    const groups: number[][] = []
    for (const a of s.access) {
      groups.push(a.map((_, i) => pts.length + i))
      pts.push(...a)
    }
    const comp = this.pass.components(s.room.index, pts)
    const base = comp[s.anchor]
    if (base < 0) return false
    for (let k = 0; k < s.doorPts.length; k++) if (s.baseComp[k] === s.baseComp[s.anchor] && comp[k] !== base) return false
    return groups.every((g) => g.some((i) => comp[i] === base))
  }

  /** Поставить предмет: след — в препятствия и проходы; access — подходы; false и откат, если проход перекрыт */
  add(it: Item, clear: Rect | null = null, check = true): boolean {
    const m = this.mark()
    this.items.push(it)
    if (it.fp && !it.flat) {
      this.used.push({ r: it.fp, t: 'item' })
      this.pass.block(it.fp)
      this.blocked.push(it.fp)
    }
    if (clear) this.used.push({ r: clear, t: 'clear' })
    if (it.access) this.st.access.push(it.access)
    if (check && it.fp && !it.flat && !this.passageOk()) {
      this.rollback(m)
      return false
    }
    return true
  }

  // ---------- проверки следа ----------

  onCells(fp: Rect): boolean {
    const room = this.st.room.index
    const ins = 0.06
    const x0 = fp[0] + ins, x1 = fp[2] - ins, y0 = fp[1] + ins, y1 = fp[3] - ins
    if (x1 < x0 || y1 < y0) return this.layout.roomAt((fp[0] + fp[2]) / 2, (fp[1] + fp[3]) / 2) === room
    const nx = Math.max(1, Math.ceil((x1 - x0) / 0.08)), ny = Math.max(1, Math.ceil((y1 - y0) / 0.08))
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      if (this.layout.roomAt(x0 + ((x1 - x0) * i) / nx, y0 + ((y1 - y0) * j) / ny) !== room) return false
    }
    return true
  }

  /** свободно для предмета: не на мебели, не в зонах дверей и окон (и откосов — для высоких) */
  freeFor(fp: Rect, tall = false): boolean {
    for (const u of this.used) {
      if (u.t === 'tallwin' && !tall) continue
      if (overlap(u.r, fp, 0.005)) return false
    }
    return true
  }

  /** зона перед фасадом не должна заходить на мебель */
  clearOk(clear: Rect): boolean {
    return !this.used.some((u) => u.t === 'item' && overlap(u.r, clear, 0.005))
  }

  /** Что за спиной следа: доля стены/стекла/улицы и есть ли проём */
  backing(fp: Rect, side: Side, wall: number) {
    const n = 8
    let solid = 0, door = false
    // за линией стены (окна) на 6 см
    const out = side === 'N' || side === 'E' ? wall + 0.06 : wall - 0.06
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n
      const x = isH(side) ? fp[0] + (fp[2] - fp[0]) * t : out
      const y = isH(side) ? out : fp[1] + (fp[3] - fp[1]) * t
      const kd = this.layout.kindAt(x, y)
      if (kd === KIND_DOOR) door = true
      if (kd === KIND_WALL || kd === KIND_GLASS || kd === KIND_OUT) solid++
    }
    return { solid: solid / n, door }
  }

  windowBehind(fp: Rect, side: Side): boolean {
    for (const [x0, y0, x1, y1, s] of this.st.room.windows) {
      if (s !== side) continue
      const ov = isH(side) ? Math.min(Math.max(x0, x1), fp[2]) - Math.max(Math.min(x0, x1), fp[0]) : Math.min(Math.max(y0, y1), fp[3]) - Math.max(Math.min(y0, y1), fp[1])
      if (ov > 0.1) return true
    }
    return false
  }

  /** Отрезки стен и окон комнаты: соседние куски одной линии и вида склеены */
  runs(): Run[] {
    if (this.st.runs) return this.st.runs
    const map = new Map<string, Run[]>()
    for (const [x0, y0, x1, y1, side, kind] of this.st.room.edges) {
      if (kind === 'door') continue
      const h = isH(side)
      const line = h ? y0 : x0
      const a = h ? Math.min(x0, x1) : Math.min(y0, y1), b = h ? Math.max(x0, x1) : Math.max(y0, y1)
      const key = `${side}|${kind}|${line.toFixed(2)}`
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push({ side, kind, line, a, b })
    }
    const out: Run[] = []
    for (const list of map.values()) {
      list.sort((p, q) => p.a - q.a)
      let cur = { ...list[0] }
      for (const r of list.slice(1)) {
        if (r.a - cur.b <= 0.11) cur.b = Math.max(cur.b, r.b)
        else { out.push(cur); cur = { ...r } }
      }
      out.push(cur)
    }
    this.st.runs = out.filter((r) => r.b - r.a >= 0.3)
    return this.st.runs
  }

  /** границы вдоль отрезка: у торца, упёртого в стену, — зазор 3 см от её грани */
  runRange(run: Run, depth: number) {
    const h = isH(run.side)
    const [nx, ny] = NORMAL[run.side]
    const across = run.line + (h ? ny : nx) * Math.min(depth / 2, 0.3)
    const fLo = h ? this.layout.faceToward(run.a + 0.15, across, 'W', 0.32) : this.layout.faceToward(across, run.a + 0.15, 'S', 0.32)
    const fHi = h ? this.layout.faceToward(run.b - 0.15, across, 'E', 0.32) : this.layout.faceToward(across, run.b - 0.15, 'N', 0.32)
    const wallLo = fLo !== null && Math.abs(fLo - run.a) < 0.16
    const wallHi = fHi !== null && Math.abs(fHi - run.b) < 0.16
    return { lo: wallLo ? fLo! + 0.03 : run.a, hi: wallHi ? fHi! - 0.03 : run.b, wallLo, wallHi }
  }

  /** след у отрезка стены: ширина W, глубина D, центр вдоль стены t; у окна — отступ 20 см под шторы */
  spotAt(run: Run, W: number, D: number, t: number, rng: { lo: number; hi: number; wallLo: boolean; wallHi: boolean }): Spot {
    const side = run.side
    const a = t - W / 2, b = t + W / 2
    const win = run.kind === 'window'
    const gap = win ? 0.2 : 0.03
    const wall = run.line
    const back = side === 'N' || side === 'E' ? wall - gap : wall + gap
    const front = side === 'N' || side === 'E' ? back - D : back + D
    const fp: Rect = isH(side)
      ? [a, Math.min(back, front), b, Math.max(back, front)]
      : [Math.min(back, front), a, Math.max(back, front), b]
    return {
      fp, side, t, wall, W, D, windowBehind: win,
      endLo: rng.wallLo && Math.abs(a - rng.lo) < 0.02,
      endHi: rng.wallHi && Math.abs(b - rng.hi) < 0.02,
    }
  }

  /**
   * Все допустимые места у стен комнаты (без проверки проходов), лучшие — первыми.
   * z — часть комнаты (зона зонирования): след должен лежать в ней; null — вся комната.
   */
  wallSpots(z: Rect | null, o: WallOpts): { s: Spot; score: number }[] {
    const sides = o.sides ?? SIDES
    const out: { s: Spot; score: number }[] = []
    const zz: Rect | null = z ? [z[0] - 0.3, z[1] - 0.3, z[2] + 0.3, z[3] + 0.3] : null
    for (const run of this.runs()) {
      if (!sides.includes(run.side)) continue
      const win = run.kind === 'window'
      if (win && (o.noWindow || o.tall)) continue
      if (o.windowOnly && !win) continue
      const h = isH(run.side)
      if (zz && (h ? run.line < zz[1] || run.line > zz[3] : run.line < zz[0] || run.line > zz[2])) continue
      const rng = this.runRange(run, o.d)
      if (z) {
        const zl = h ? z[0] : z[1], zh = h ? z[2] : z[3]
        if (rng.lo < zl - 0.05) { rng.lo = zl; rng.wallLo = false }
        if (rng.hi > zh + 0.05) { rng.hi = zh; rng.wallHi = false }
      }
      const len = run.b - run.a
      const sc = o.sideClear ?? 0
      const maxW = Math.min(o.w[1], rng.hi - rng.lo - 2 * sc)
      let found = 0
      for (let W = Math.round(maxW * 20) / 20; W >= o.w[0] - 1e-6 && found < 3; W -= 0.1) {
        const lo = rng.lo + W / 2 + sc, hi = rng.hi - W / 2 - sc
        if (hi < lo - 1e-6) continue
        const mid = (lo + hi) / 2
        const ts: number[] = []
        if (o.align !== undefined) {
          if (o.align >= lo - 0.02 && o.align <= hi + 0.02) ts.push(Math.min(hi, Math.max(lo, o.align)))
        } else {
          ts.push(lo, hi)
          for (let s = 0; s <= hi - lo + 1e-6; s += 0.05) ts.push(mid + s, mid - s)
        }
        let any = 0
        for (const t0 of ts) {
          if (any >= 8) break
          // торец в 3–15 см от боковой стены — вплотную к ней (3 см), без «щели»
          let t = t0
          if (rng.wallLo && o.align === undefined && t - W / 2 - sc - rng.lo > 0 && t - W / 2 - sc - rng.lo < 0.15) t = lo
          if (rng.wallHi && o.align === undefined && rng.hi - (t + W / 2 + sc) > 0 && rng.hi - (t + W / 2 + sc) < 0.15) t = hi
          if (t < lo - 1e-6 || t > hi + 1e-6) continue
          const s = this.spotAt(run, W, o.d, t, rng)
          if (zz && !(s.fp[0] >= zz[0] && s.fp[1] >= zz[1] && s.fp[2] <= zz[2] && s.fp[3] <= zz[3])) continue
          if (!this.okSpot(s, o)) continue
          any++
          // оценка: шире, по центру стены, не у окна, длинная/короткая стена, упор в угол
          let score = W * 2 - Math.abs(t - mid) * (o.center ?? 0.6)
          if (win) score += o.windowOnly ? 1 : -1.5
          if (o.prefer === 'long') score += len * 0.4
          if (o.prefer === 'short') score -= len * 0.4
          if (o.corner && (s.endLo || s.endHi)) score += o.corner
          out.push({ s, score })
        }
        if (any) found++
      }
    }
    out.sort((a, b) => b.score - a.score)
    return out
  }

  okSpot(s: Spot, o: WallOpts): boolean {
    if ((o.noWindow || o.tall) && s.windowBehind) return false
    if (o.windowOnly && !s.windowBehind) return false
    if (!this.freeFor(s.fp, !!o.tall)) return false
    if (o.clear > 0 && !this.clearOk(clearRect(s, o.clear))) return false
    const back = this.backing(s.fp, s.side, s.wall)
    if (back.door || back.solid < 0.75) return false
    if (o.extra && !o.extra(s)) return false
    return this.onCells(s.fp) && this.wallGapOk(s.fp)
  }

  /** до стен со всех сторон следа — не меньше 2 см (ничто не утоплено в стену) */
  wallGapOk(fp: Rect, min = 0.02): boolean {
    const mx = (fp[0] + fp[2]) / 2, my = (fp[1] + fp[3]) / 2
    for (const [x, y] of [[mx, my], [fp[0] + 0.1, fp[1] + 0.1], [fp[2] - 0.1, fp[3] - 0.1]] as Point[]) {
      const n = this.layout.faceToward(x, fp[3] - 0.08, 'N', 0.2)
      if (n !== null && n - fp[3] < min) return false
      const s = this.layout.faceToward(x, fp[1] + 0.08, 'S', 0.2)
      if (s !== null && fp[1] - s < min) return false
      const e = this.layout.faceToward(fp[2] - 0.08, y, 'E', 0.2)
      if (e !== null && e - fp[2] < min) return false
      const w = this.layout.faceToward(fp[0] + 0.08, y, 'W', 0.2)
      if (w !== null && fp[0] - w < min) return false
    }
    return true
  }

  /** свободное место для отдельно стоящего предмета */
  freeSpot(fp: Rect): boolean {
    return this.freeFor(fp) && this.onCells(fp) && this.wallGapOk(fp, 0.03)
  }

  /** Поставить у стены первый проходимый из лучших кандидатов */
  placeWall(zs: (Rect | null)[], o: WallOpts, make: (s: Spot) => Item | Item[], limit = 60): Spot | null {
    const cands = zs.flatMap((z) => this.wallSpots(z, o))
    cands.sort((a, b) => b.score - a.score)
    for (const { s } of cands.slice(0, limit)) {
      const m = this.mark()
      const its = [make(s)].flat()
      let ok = true
      for (let i = 0; i < its.length && ok; i++) {
        const f = its[i].fp
        // сопутствующие предметы (тумбочки) проверяются так же, как основной
        if (i > 0 && f && !(this.onCells(f) && this.freeFor(f, !!o.tall))) ok = false
        else ok = this.add(its[i], i === 0 && o.clear > 0 ? clearRect(s, o.clear) : null)
      }
      if (ok) return s
      this.rollback(m)
    }
    return null
  }

  item(kind: ItemKind, s: Spot, a: number[], extra: Partial<Item> = {}, originOffset = 0): Item {
    const [nx, ny] = NORMAL[s.side]
    const cx = (s.fp[0] + s.fp[2]) / 2 + nx * originOffset, cy = (s.fp[1] + s.fp[3]) / 2 + ny * originOffset
    return { kind, room: this.st.room.index, x: cx, y: cy, rot: ROT[s.side], side: s.side, fp: s.fp, a, ...extra }
  }

  // ---------- комната ----------

  furnishRoom(room: RoomPlan) {
    const z = this.st.zones
    switch (room.kind) {
      case 'living':
        this.best([
          () => { this.livingSet(null, { full: true }); if (z[1]) this.diningSet(z.slice(1), false) },
          () => { this.livingSet(null, { full: true }) },
        ], 0.45)
        break
      case 'kitchen_living':
        this.best(this.kitchenLivingScenarios(), 0.42)
        break
      case 'studio':
        this.best(this.studioScenarios(), 0.36)
        break
      case 'living_bed':
        this.best([
          () => { this.bedSet(null, false); this.livingSet(z[1] ?? null, { compact: true }) },
          () => { this.bedSet(null, true) },
          () => { this.livingSet(null, { full: true }) },
          ...this.splits(z[0], [2.6, 3.0], 3.2).map(([a, b]) => () => { this.bedSet(b, false); this.livingSet(a, { compact: true }) }),
        ], 0.38)
        break
      case 'kitchen':
        this.best([
          () => { this.kitchenSet(null); this.diningSet([null], true) },
          () => { this.kitchenSet(null) },
        ], 0.5)
        break
      case 'bedroom':
        // проходная или узкая спальня, где кровать перекрывает проход, — диван-кровать или кабинет
        this.best([() => this.bedSet(null, true), () => this.bedSet(null, false), () => this.livingSet(null, { compact: true }), () => this.studyCorner()], 0.5)
        break
      case 'bath':
        this.bathSet()
        break
      case 'hall':
        this.hallSet()
        break
      case 'closet':
        for (let i = 0; i < 2; i++) this.placeWall([null], { w: [0.8, 2.4], d: 0.55, clear: 0.55, tall: true, prefer: 'long' }, (s) => this.item('wardrobe', s, [s.W, 2.3, 0.55], { access: [front(s, 0.45)] }))
        break
      case 'loggia':
        this.plantCorner(null, 0.9)
        break
    }
    if (!this.st.lights.length && room.kind !== 'loggia' && room.kind !== 'closet') {
      const m = z[0]
      this.st.lights.push({ x: (m[0] + m[2]) / 2, y: (m[1] + m[3]) / 2, big: isLivingRoom(room) && room.kind !== 'kitchen' })
    }
  }

  /** Перебор вариантов зонирования: каждый — в чистую комнату, побеждает больший вес минус теснота */
  best(scenarios: (() => void)[], maxCover: number) {
    const m = this.mark()
    let bestI = -1, bestS = -Infinity
    scenarios.forEach((fn, i) => {
      fn()
      const s = this.score(maxCover)
      this.debug?.(`  вариант ${i}: ${s.toFixed(1)} — ${this.items.filter((it) => it.fp && !it.flat).map((it) => it.kind).join(' ')}`)
      if (s > bestS + 1e-6) { bestS = s; bestI = i }
      this.rollback(m)
    })
    if (bestI >= 0) scenarios[bestI]()
  }

  score(maxCover: number): number {
    let s = 0, area = 0
    for (const it of this.items) {
      s += WEIGHT[it.kind] ?? 0
      if (it.kind === 'sofa' && it.a[2] === 1) s -= 3 // под окном
      if (it.kind === 'diningSet') s += it.a[0] * 0.2
      // в спальне и единственной жилой комнате (студия, комната при отдельной кухне) кровать важнее дивана
      if (it.kind === 'bed' && ['studio', 'living_bed', 'bedroom'].includes(this.st.room.kind)) s += 6
      if (it.fp && !it.flat) area += (it.fp[2] - it.fp[0]) * (it.fp[3] - it.fp[1])
    }
    const cover = area / Math.max(this.st.room.area, 1)
    if (cover > maxCover) s -= (cover - maxCover) * 40
    return s
  }

  /** Разрезы прямоугольника поперёк длинной стороны: [часть длиной a у одного торца, остаток ≥ rest] */
  splits(z: Rect, as: number[], rest: number): [Rect, Rect][] {
    const w = z[2] - z[0], h = z[3] - z[1]
    const out: [Rect, Rect][] = []
    for (const a of as) {
      if (w >= h && w - a >= rest) {
        out.push([[z[0], z[1], z[0] + a, z[3]], [z[0] + a, z[1], z[2], z[3]]])
        out.push([[z[2] - a, z[1], z[2], z[3]], [z[0], z[1], z[2] - a, z[3]]])
      }
      if (h > w && h - a >= rest) {
        out.push([[z[0], z[1], z[2], z[1] + a], [z[0], z[1] + a, z[2], z[3]]])
        out.push([[z[0], z[3] - a, z[2], z[3]], [z[0], z[1], z[2], z[3] - a]])
      }
    }
    return out
  }

  kitchenLivingScenarios(): (() => void)[] {
    const z = this.st.zones
    const out: (() => void)[] = [
      () => { this.kitchenSet(null); this.livingSet(null, { full: true }); this.diningSet([...z.slice(1), null], true) },
    ]
    // зоны слитной комнаты: кухня, гостиная, столовая — в разных прямоугольниках
    for (let k = 0; k < z.length; k++) for (let l = 0; l < z.length; l++) {
      if (k === l) continue
      const rest = z.filter((_, i) => i !== k && i !== l)
      out.push(() => { this.kitchenSet(z[k]); this.livingSet(z[l], { full: true }); this.diningSet([...rest, z[k], z[l]], true) })
    }
    // большая комната: режем главную зону на кухню (+ столовую) и гостиную
    for (const [a, b] of this.splits(z[0], [2.6, 3.0, 3.4], 3.4)) {
      out.push(() => { this.kitchenSet(a); this.livingSet(b, { full: true }); this.diningSet([a, b, ...z.slice(1)], true) })
      out.push(() => { this.kitchenSet(a); this.diningSet([b, ...z.slice(1)], true); this.livingSet(b, { full: true }) })
    }
    // очень длинная: кухня | столовая | гостиная
    for (const [a, rest] of this.splits(z[0], [2.8, 3.2], 5.6)) {
      for (const [d, l] of this.splits(rest, [2.6, 3.0], 3.2)) {
        if (!touches(d, a)) continue
        out.push(() => { this.kitchenSet(a); this.diningSet([d], true); this.livingSet(l, { full: true }) })
      }
    }
    return out
  }

  studioScenarios(): (() => void)[] {
    const z = this.st.zones
    const out: (() => void)[] = [
      () => { this.kitchenSet(null); this.bedSet(null, false); this.livingSet(null, { compact: true }) },
      () => { this.kitchenSet(null); this.bedSet(null, false) },
      () => { this.kitchenSet(null); this.livingSet(null, { compact: true }); this.diningSet([null], true) },
      () => { this.kitchenSet(null); this.livingSet(null, { compact: true }) },
    ]
    if (z[1]) {
      out.push(() => { this.kitchenSet(z[1]); this.bedSet(z[0], false); this.livingSet(z[0], { compact: true }) })
      out.push(() => { this.kitchenSet(z[1]); this.bedSet(z[0], false); this.diningSet([z[1], ...z.slice(2), null], true) })
    }
    for (const [a, b] of this.splits(z[0], [2.2, 2.6, 3.0], 2.6)) {
      out.push(() => { this.kitchenSet(a); this.bedSet(b, false); this.livingSet(b, { compact: true }) })
      out.push(() => { this.kitchenSet(a); this.diningSet([a], true); this.bedSet(b, false) })
      out.push(() => { this.kitchenSet(a); this.livingSet(b, { compact: true }); this.diningSet([a, b], true) })
      out.push(() => { this.kitchenSet(a); this.bedSet(b, false); this.diningSet([a], true); this.livingSet(b, { compact: true }) })
    }
    return out
  }

  // ---------- гостиная ----------

  livingSet(zone: Rect | null, o: { full?: boolean; compact?: boolean }) {
    const z = zone ?? this.st.room.rect
    const long = Math.max(z[2] - z[0], z[3] - z[1])
    const maxW = o.compact ? 1.9 : Math.min(2.6, Math.max(1.9, long * 0.5))
    const minW = o.compact ? 1.6 : 1.8
    const D = 0.95
    type Cand = { s: Spot; tv: Spot | null; float: boolean; score: number }
    const cands: Cand[] = []
    const tvOpts = (W: number): WallOpts => ({ w: [1.2, Math.min(1.8, W)], d: 0.42, clear: 0, noWindow: true })
    // 1) диван у стены, ТВ напротив по той же оси
    for (const { s, score } of this.wallSpots(zone, { w: [minW, maxW], d: D, clear: 0, center: 1.2 })) {
      const ax = s.t
      let tv: Spot | null = null
      for (const c of this.wallSpots(zone, { ...tvOpts(s.W), sides: [OPP[s.side]], align: ax })) {
        const dist = Math.abs(centerAcross(c.s) - centerAcross(s)) - (D + 0.42) / 2
        if (dist >= 1.5 && dist <= 4.3) { tv = c.s; break }
      }
      cands.push({ s, tv, float: false, score: score + (tv ? 4 : 0) + 3 - (s.windowBehind ? 4 : 0) })
    }
    // 2) ТВ у стены, диван «островом» напротив на расстоянии просмотра — в больших зонах
    for (const { s: tv, score } of this.wallSpots(zone, { ...tvOpts(maxW), w: [1.4, 1.8], center: 1.2 })) {
      const across = isH(tv.side) ? z[3] - z[1] : z[2] - z[0]
      for (const view of [2.8, 2.4]) {
        if (across < 0.42 + view + D + 0.9) continue
        const [nx, ny] = NORMAL[tv.side]
        const tvFront = tv.wall + (isH(tv.side) ? ny : nx) * (0.03 + 0.42)
        const sofaFront = tvFront + (isH(tv.side) ? ny : nx) * view
        const sofaBack = sofaFront + (isH(tv.side) ? ny : nx) * D
        for (const W of [maxW, Math.max(minW, maxW - 0.4)]) {
          const a = tv.t - W / 2, b = tv.t + W / 2
          const fp: Rect = isH(tv.side) ? [a, Math.min(sofaFront, sofaBack), b, Math.max(sofaFront, sofaBack)] : [Math.min(sofaFront, sofaBack), a, Math.max(sofaFront, sofaBack), b]
          if (!this.freeSpot(fp)) continue
          const s: Spot = { fp, side: OPP[tv.side], t: tv.t, wall: NaN, W, D, windowBehind: false, endLo: false, endHi: false }
          cands.push({ s, tv, float: true, score: score + W * 2 + 4 + 1 })
          break
        }
      }
    }
    cands.sort((a, b) => b.score - a.score)
    for (const c of cands.slice(0, 30)) {
      const m = this.mark()
      if (this.livingFrom(zone, c.s, c.tv, c.float, o)) return true
      this.rollback(m)
    }
    return false
  }

  livingFrom(zone: Rect | null, s: Spot, tv: Spot | null, float: boolean, o: { full?: boolean; compact?: boolean }): boolean {
    const side = s.side
    const [nx, ny] = NORMAL[side]
    const h = isH(side)
    const D = s.D
    const sofa = this.item('sofa', s, [s.W, D, s.windowBehind ? 1 : 0])
    if (!this.add(sofa)) return false
    if (tv && !this.add(this.item('tvUnit', tv, [tv.W]))) tv = null
    // ось и фронты вдоль нормали
    const n = h ? ny : nx
    const sofaFront = (h ? (side === 'N' ? s.fp[1] : s.fp[3]) : side === 'E' ? s.fp[0] : s.fp[2])
    const tvFront = tv ? (h ? (tv.side === 'N' ? tv.fp[1] : tv.fp[3]) : tv.side === 'E' ? tv.fp[0] : tv.fp[2]) : sofaFront + n * 2.6
    const gapLen = Math.abs(tvFront - sofaFront)
    const ax = s.t
    const at = (along: number, across: number): Point => (h ? [along, across] : [across, along])
    const rectAt = (c0: number, c1: number, a0: number, a1: number): Rect => {
      // c — вдоль оси дивана (поперёк стены), a — вдоль стены
      const lo = Math.min(c0, c1), hi = Math.max(c0, c1)
      return h ? [a0, lo, a1, hi] : [lo, a0, hi, a1]
    }
    // журнальный столик по оси, 0,42 м от дивана
    let table: Item | null = null
    for (const [tW, tD] of [[1.1, 0.6], [0.9, 0.5]]) {
      if (gapLen < 0.42 + tD + 0.55) continue
      const c0 = sofaFront + n * 0.42, c1 = c0 + n * tD
      const fp = rectAt(c0, c1, ax - tW / 2, ax + tW / 2)
      if (!this.freeSpot(fp)) continue
      const [cx, cy] = at(ax, (c0 + c1) / 2)
      const ends: Point[] = [at(ax - tW / 2 - 0.45, (c0 + c1) / 2), at(ax + tW / 2 + 0.45, (c0 + c1) / 2)]
      table = { kind: 'coffeeTable', room: this.st.room.index, x: cx, y: cy, rot: ROT[side], side: null, fp, a: [tW, tD], access: ends }
      if (this.add(table)) break
      table = null
    }
    // зона отдыха между диваном и ТВ — свободна от прочей мебели
    this.used.push({ r: rectAt(sofaFront, tv ? tvFront : sofaFront + n * Math.min(1.6, gapLen), ax - s.W / 2, ax + s.W / 2), t: 'clear' })
    // картина над диваном и акцентная стена
    if (!float && !s.windowBehind) {
      const [wx, wy] = at(ax, s.wall)
      this.items.push({ kind: 'artwork', room: this.st.room.index, x: wx, y: wy, rot: ROT[side], side, fp: null, h: 1.25, a: [Math.min(1.2, s.W * 0.5), 0.8, 1] })
      this.st.accents.push({ room: this.st.room.index, side, line: s.wall, from: ax - (s.W + 1.0) / 2, to: ax + (s.W + 1.0) / 2 })
    }
    // свет — над центром зоны отдыха
    const [lx, ly] = at(ax, (sofaFront + tvFront) / 2)
    this.st.lights.push({ x: lx, y: ly, big: true })
    // кресло у торца столика, лицом к оси
    let chairSide = 0
    if (o.full && table) {
      const tc = (h ? table.fp![1] + table.fp![3] : table.fp![0] + table.fp![2]) / 2
      const tW = table.a[0]
      for (const sd of [1, -1]) {
        const ca = ax + sd * (tW / 2 + 0.3 + 0.43)
        const fp = rectAt(tc - 0.43, tc + 0.43, ca - 0.43, ca + 0.43)
        if (!this.freeSpot(fp)) continue
        const [cx, cy] = at(ca, tc)
        const [fx, fy] = h ? [-sd, 0] : [0, -sd]
        const it: Item = { kind: 'armchair', room: this.st.room.index, x: cx, y: cy, rot: rotFacing(fx, fy), side: null, fp, a: [] }
        if (this.add(it)) { chairSide = sd; break }
      }
    }
    // торшер у торца дивана (там, где нет кресла)
    if (!float) for (const sd of chairSide ? [-chairSide, chairSide] : [1, -1]) {
      const la = ax + sd * (s.W / 2 + 0.05 + 0.18)
      const c0 = h ? (side === 'N' ? s.fp[3] : s.fp[1]) : side === 'E' ? s.fp[2] : s.fp[0]
      const fp = rectAt(c0, c0 + n * 0.36, la - 0.18, la + 0.18)
      if (!this.freeSpot(fp)) continue
      const [cx, cy] = at(la, c0 + n * 0.18)
      if (this.add({ kind: 'floorLamp', room: this.st.room.index, x: cx, y: cy, rot: 0, side: null, fp, a: [] })) break
    }
    // ковёр по центру зоны отдыха, симметрично оси
    const rugTo = tv ? Math.min(Math.abs(tvFront - sofaFront) - 0.3, 2.3) : 2.0
    this.rug(at, rectAt, ax, sofaFront - n * 0.25, sofaFront + n * rugTo, Math.min(s.W + 0.6, 3.0), ['sofa', 'coffeeTable', 'armchair', 'floorLamp'])
    if (o.full) this.plantCorner(zone, 1.3)
    return true
  }

  /** ковёр: прямоугольник по оси ax от c0 до c1, ширина W; сжимается симметрично, пока не ляжет на клетки комнаты */
  rug(at: (a: number, c: number) => Point, rectAt: (c0: number, c1: number, a0: number, a1: number) => Rect, ax: number, c0: number, c1: number, W: number, under: ItemKind[]) {
    const len = Math.abs(c1 - c0), sgn = Math.sign(c1 - c0) || 1
    for (let shrink = 0; shrink <= 0.8; shrink += 0.1) {
      const w = W - shrink * 2, l = len - shrink
      if (w < 1.0 || l < 1.0) break
      const fp = rectAt(c0, c0 + sgn * l, ax - w / 2, ax + w / 2)
      if (!this.onCells(fp)) continue
      // ковёр не заходит в зоны дверей и под мебель, кроме той, что стоит на нём
      if (this.used.some((u) => u.t === 'door' && overlap(u.r, fp, 0.005))) continue
      if (this.items.some((it) => it.fp && !it.flat && !under.includes(it.kind) && overlap(it.fp, fp, 0.005))) continue
      const [cx, cy] = at(ax, c0 + (sgn * l) / 2)
      this.items.push({ kind: 'rug', room: this.st.room.index, x: cx, y: cy, rot: 0, side: null, fp, flat: true, a: [fp[2] - fp[0], fp[3] - fp[1]] })
      return
    }
  }

  /** растение в углу: углы — концы отрезков стен, упёртые в соседнюю стену */
  plantCorner(z: Rect | null, h: number) {
    const s = 0.42
    const cs: Point[] = []
    for (const run of this.runs()) {
      if (run.kind !== 'wall') continue
      const rng = this.runRange(run, s)
      const [nx, ny] = NORMAL[run.side]
      const c = run.line + (isH(run.side) ? ny : nx) * (0.03 + s / 2)
      for (const [t, ok] of [[rng.lo + s / 2, rng.wallLo], [rng.hi - s / 2, rng.wallHi]] as [number, boolean][]) {
        if (!ok) continue
        const p: Point = isH(run.side) ? [t, c] : [c, t]
        if (z && !(p[0] >= z[0] && p[0] <= z[2] && p[1] >= z[1] && p[1] <= z[3])) continue
        cs.push(p)
      }
    }
    // ближе к окнам — лучше
    const g = this.st.room.windows
    const dist = (p: Point) => g.length ? Math.min(...g.map(([x0, y0, x1, y1]) => Math.hypot(p[0] - (x0 + x1) / 2, p[1] - (y0 + y1) / 2))) : 0
    cs.sort((a, b) => dist(a) - dist(b))
    for (const [x, y] of cs) {
      const fp: Rect = [x - s / 2, y - s / 2, x + s / 2, y + s / 2]
      if (!this.freeSpot(fp)) continue
      if (this.add({ kind: 'plant', room: this.st.room.index, x, y, rot: 0, side: null, fp, a: [h] })) return true
    }
    return false
  }

  // ---------- кухня и столовая ----------

  kitchenSet(zone: Rect | null): boolean {
    const z = zone ?? this.st.room.rect
    const long = Math.max(z[2] - z[0], z[3] - z[1])
    const glazed = this.st.room.glazed
    const make = (fridge: boolean) => (s: Spot): Item[] => {
      // холодильник — у торца, упёртого в стену; иначе — дальше от окна
      let fr: 'left' | 'right' | 'none' = 'none'
      if (fridge) {
        // локальный +x предмета в плане: N → +x, S → −x, E → −y, W → +y
        const plusIsHi = s.side === 'N' || s.side === 'W'
        let hiEnd = s.endHi && !s.endLo ? true : s.endLo && !s.endHi ? false : null
        if (hiEnd === null) {
          const hiDir: Side = isH(s.side) ? 'E' : 'N', loDir: Side = isH(s.side) ? 'W' : 'S'
          hiEnd = glazed.includes(loDir) && !glazed.includes(hiDir) ? true : !glazed.includes(loDir) && glazed.includes(hiDir) ? false : true
        }
        fr = hiEnd === plusIsHi ? 'right' : 'left'
      }
      return [this.item('kitchenRun', s, [s.W], { fridge: fr, access: [front(s, 0.45)] })]
    }
    const L = zone ? Math.min(3.6, long - 0.06) : 3.6
    const o: WallOpts = { w: [2.3, L], d: 0.62, clear: 0.95, noWindow: true, tall: true, prefer: 'long', corner: 2, center: 0.2 }
    if (this.placeWall([zone], o, make(true))) {
      this.st.lights.push({ ...centerOf(z), big: false })
      return true
    }
    // короткая стена: гарнитур без холодильника + отдельный холодильник
    const s = this.placeWall([zone], { ...o, w: [1.5, Math.min(2.2, L)] }, make(false))
    if (!s) return false
    this.st.lights.push({ ...centerOf(z), big: false })
    this.placeWall([zone], { w: [0.62, 0.62], d: 0.66, clear: 0.8, tall: true, noWindow: true, corner: 1.5 }, (f) => this.item('fridge', f, [], { access: [front(f, 0.45)] }))
    return true
  }

  /** Обеденная группа в одной из зон: по центру короткой оси зоны, ближе к окну; стулья задвинуты */
  diningSet(zones: (Rect | null)[], nearWindow: boolean): boolean {
    const zs = zones.map((z) => z ?? this.bbox())
    const sizes: [number, 2 | 4 | 6, number, number][] = [[6, 6, 1.8, 0.9], [4, 4, 1.3, 0.85], [2, 2, 0.8, 0.7]]
    const g = this.st.room.windows
    for (const [, seats, tw, td] of sizes) {
      if (seats === 6 && this.st.room.area < 30) continue
      const fw = tw + 0.1, fd = td + 0.72
      type C = { fp: Rect; alongX: boolean; score: number }
      const cands: C[] = []
      for (const z of zs) {
        for (const alongX of [true, false]) {
          const w = alongX ? fw : fd, d = alongX ? fd : fw
          if (z[2] - z[0] < w || z[3] - z[1] < d) continue
          const mx = (z[0] + z[2]) / 2, my = (z[1] + z[3]) / 2
          for (let x = z[0] + w / 2; x <= z[2] - w / 2 + 1e-6; x += 0.1) for (let y = z[1] + d / 2; y <= z[3] - d / 2 + 1e-6; y += 0.1) {
            const fp: Rect = [x - w / 2, y - d / 2, x + w / 2, y + d / 2]
            // по оси зоны: центр на короткой оси (поперёк длинной стороны зоны)
            const zw = z[2] - z[0], zh = z[3] - z[1]
            let score = -(zw < zh ? Math.abs(x - mx) : Math.abs(y - my)) * 2
            if (nearWindow && g.length) score -= Math.min(...g.map(([x0, y0, x1, y1]) => Math.hypot(x - (x0 + x1) / 2, y - (y0 + y1) / 2))) * 0.25
            // длинная сторона стола — вдоль длинной стороны зоны
            if ((alongX ? 1 : 0) !== (zw >= zh ? 1 : 0)) score -= 0.3
            cands.push({ fp, alongX, score })
          }
        }
      }
      cands.sort((a, b) => b.score - a.score)
      let tries = 0
      for (const c of cands) {
        if (tries > 25) break
        if (!this.freeSpot(c.fp)) continue
        tries++
        const cx = (c.fp[0] + c.fp[2]) / 2, cy = (c.fp[1] + c.fp[3]) / 2
        const [w, d] = c.alongX ? [fw, fd] : [fd, fw]
        const access: Point[] = [[cx, c.fp[1] - 0.4], [cx, c.fp[3] + 0.4], [c.fp[0] - 0.4, cy], [c.fp[2] + 0.4, cy]]
        void w; void d
        const it: Item = { kind: 'diningSet', room: this.st.room.index, x: cx, y: cy, rot: c.alongX ? 0 : Math.PI / 2, side: null, fp: c.fp, a: [seats], access }
        if (this.add(it)) {
          this.items.push({ kind: 'pendant', room: this.st.room.index, x: cx, y: cy, rot: 0, side: null, fp: null, a: [seats === 6 ? 1 : 0] })
          return true
        }
      }
    }
    return false
  }

  /** габарит клеток комнаты */
  bbox(): Rect {
    const b: Rect = [Infinity, Infinity, -Infinity, -Infinity]
    for (const c of this.st.room.cells) { b[0] = Math.min(b[0], c[0]); b[1] = Math.min(b[1], c[1]); b[2] = Math.max(b[2], c[2]); b[3] = Math.max(b[3], c[3]) }
    return b
  }

  // ---------- спальня ----------

  bedSet(zone: Rect | null, full: boolean): boolean {
    const z = zone ?? this.st.room.rect
    const short = Math.min(z[2] - z[0], z[3] - z[1])
    const bw0 = short >= 3.0 ? 1.8 : short >= 2.6 ? 1.6 : short >= 2.2 ? 1.4 : 1.2
    const L = 2.05, D = L + 0.09
    let placed: Spot | null = null
    for (const [bw, stands] of [[bw0, true], [Math.max(1.4, bw0 - 0.2), true], [bw0, false], [Math.max(1.2, bw0 - 0.2), false], [1.2, false]] as [number, boolean][]) {
      if (bw > bw0) continue
      // след — по изголовью (шире рамы на 0,2 м), тумбочки — в 3 см от него
      const sc = stands ? 0.03 + 0.46 : 0
      const s = this.placeWall([zone], { w: [bw + 0.2, bw + 0.2], d: D, clear: 0, noWindow: true, sideClear: sc, center: 3 }, (s) => {
        const W = s.W - 0.2
        const its: Item[] = [this.item('bed', s, [W, L], { access: bedAccess(s) }, 0.045)]
        if (stands) for (const sd of [-1, 1]) {
          const ns = this.sideSpot(s, sd, 0.03, 0.46, 0.4)
          its.push(this.item('nightstand', ns, []))
        }
        return its
      }, 150)
      if (s) {
        placed = s
        break
      }
    }
    if (!placed) return false
    const s = placed
    const h = isH(s.side)
    const [nx, ny] = NORMAL[s.side]
    const n = h ? ny : nx
    const at = (along: number, across: number): Point => (h ? [along, across] : [across, along])
    const rectAt = (c0: number, c1: number, a0: number, a1: number): Rect => {
      const lo = Math.min(c0, c1), hi = Math.max(c0, c1)
      return h ? [a0, lo, a1, hi] : [lo, a0, hi, a1]
    }
    const back = h ? (s.side === 'N' ? s.fp[3] : s.fp[1]) : s.side === 'E' ? s.fp[2] : s.fp[0]
    const bw = s.W - 0.2
    // картина над изголовьем, акцентная стена
    const [wx, wy] = at(s.t, s.wall)
    this.items.push({ kind: 'artwork', room: this.st.room.index, x: wx, y: wy, rot: ROT[s.side], side: s.side, fp: null, h: 1.35, a: [Math.min(1.4, bw), 0.6, 2] })
    this.st.accents.push({ room: this.st.room.index, side: s.side, line: s.wall, from: s.t - bw / 2 - 0.7, to: s.t + bw / 2 + 0.7 })
    // ковёр под нижние две трети кровати, по её оси
    this.rug(at, rectAt, s.t, back + n * 0.75, back + n * (D + 0.6), bw + 1.1, ['bed', 'nightstand'])
    this.st.lights.push({ ...centerOf(z), big: true })
    if (full) {
      this.placeWall([zone], { w: [1.0, 2.2], d: 0.6, clear: 0.6, noWindow: true, tall: true, center: 0.2, corner: 1 }, (w) => this.item('wardrobe', w, [w.W], { access: [front(w, 0.45)] }))
      const area = (z[2] - z[0]) * (z[3] - z[1])
      if (area >= 11) this.placeWall([zone], { w: [1.0, 1.2], d: 0.6 + 0.45, clear: 0.3, windowOnly: true, center: 1 }, (d) => this.item('desk', d, [d.W], { access: [front(d, 0.4)] }, -0.225))
      this.plantCorner(zone, 1.0)
    }
    return true
  }

  /** кабинет: шкаф, стол у окна, растение — когда кровать не встаёт */
  studyCorner() {
    this.placeWall([null], { w: [1.0, 2.2], d: 0.6, clear: 0.6, noWindow: true, tall: true, center: 0.2, corner: 1 }, (w) => this.item('wardrobe', w, [w.W], { access: [front(w, 0.45)] }))
    this.placeWall([null], { w: [1.0, 1.2], d: 1.05, clear: 0.3, center: 1 }, (d) => this.item('desk', d, [d.W], { access: [front(d, 0.4)] }, -0.225))
    this.plantCorner(null, 1.0)
  }

  /** место сбоку от предмета у той же стены: sd — сторона (−1/1 вдоль стены), gap — зазор, w × d */
  sideSpot(s: Spot, sd: number, gap: number, w: number, d: number): Spot {
    const h = isH(s.side)
    const t = s.t + sd * (s.W / 2 + gap + w / 2)
    const back = h ? (s.side === 'N' ? s.fp[3] : s.fp[1]) : s.side === 'E' ? s.fp[2] : s.fp[0]
    const [nx, ny] = NORMAL[s.side]
    const fr = back + (h ? ny : nx) * d
    const lo = Math.min(back, fr), hi = Math.max(back, fr)
    const fp: Rect = h ? [t - w / 2, lo, t + w / 2, hi] : [lo, t - w / 2, hi, t + w / 2]
    return { ...s, fp, t, W: w, D: d }
  }

  // ---------- санузел ----------

  /**
   * Санузел: перебираем лучшие места для ванны или душа (в углу, во всю ширину короткой стены) и к каждому —
   * унитаз, раковину, стиральную машину; выбираем самый полный набор. Узкий санузел получает душ.
   */
  bathSet() {
    type Wash = { o: WallOpts; make: (s: Spot) => Item }
    const washes: Wash[] = [{ o: { w: [1.4, 1.8], d: 0.72, clear: 0.05, prefer: 'short', corner: 4, center: 0 }, make: (s) => this.item('bathtub', s, [s.W, 0.72]) }]
    for (const [w, d] of [[0.9, 0.9], [0.8, 0.8], [0.9, 0.75], [0.75, 0.9], [0.7, 0.8]]) {
      washes.push({
        o: { w: [w, w], d, clear: 0.05, corner: 4, center: 0 },
        make: (s) => {
          // стекло — со стороны, где нет стены
          const plusIsHi = s.side === 'N' || s.side === 'W'
          const glassHi = s.endLo ? true : s.endHi ? false : true
          return this.item('shower', s, [w, d], { hand: glassHi === plusIsHi ? 1 : -1 })
        },
      })
    }
    const m = this.mark()
    let best: { s: Spot; w: Wash } | null = null, bestScore = -Infinity
    const rest = () => {
      this.toilet()
      this.vanity()
      this.placeWall([null], { w: [0.6, 0.6], d: 0.56, clear: 0.6, center: 0 }, (s) => this.item('washer', s, []))
    }
    for (const w of washes) {
      for (const { s } of this.wallSpots(null, w.o).slice(0, 8)) {
        if (!this.add(w.make(s), clearRect(s, w.o.clear))) { this.rollback(m); continue }
        rest()
        const sc = this.score(0.75) + (this.items.some((it) => it.kind === 'toilet') ? 0 : -3)
        if (sc > bestScore + 1e-6) { bestScore = sc; best = { s, w } }
        this.rollback(m)
      }
    }
    rest()
    const plain = this.score(0.75)
    this.rollback(m)
    if (best && bestScore >= plain) this.add(best.w.make(best.s), clearRect(best.s, best.w.o.clear))
    rest()
  }

  toilet() {
    // след 0,6 м: от оси унитаза до стены или соседнего прибора — 0,3 м
    return !!this.placeWall([null], { w: [0.6, 0.6], d: 0.62, clear: 0.5, center: 0.3 }, (s) => this.item('toilet', s, [], {}, -0.09))
  }

  vanity() {
    return !!this.placeWall([null], { w: [0.5, 0.9], d: 0.48, clear: 0.55, center: 0.3 }, (s) => this.item('vanity', s, [s.W]))
  }

  // ---------- прихожая ----------

  hallSet() {
    const z = this.st.zones
    const ent = this.layout.doors.find((d, i) => d.entrance && this.st.room.doors.includes(i))
    const ec: Point | null = ent ? [(ent.rect[0] + ent.rect[2]) / 2, (ent.rect[1] + ent.rect[3]) / 2] : null
    const near = (s: Spot) => (ec ? Math.hypot((s.fp[0] + s.fp[2]) / 2 - ec[0], (s.fp[1] + s.fp[3]) / 2 - ec[1]) : 0)
    const short = Math.min(z[0][2] - z[0][0], z[0][3] - z[0][1])
    if (short >= 1.55) this.placeWall([null], { w: [1.0, 2.2], d: 0.6, clear: 0.8, tall: true, noWindow: true, corner: 1, center: 0.1, extra: (s) => near(s) < 4 }, (s) => this.item('wardrobe', s, [s.W, 2.4, 0.6], { access: [front(s, 0.45)] }))
    this.placeWall([null], { w: [0.8, 1.2], d: 0.35, clear: 0.7, center: 0.2 }, (s) => this.item('hallUnit', s, [s.W]))
  }
}

function clearRect(s: Spot, depth: number): Rect {
  const [nx, ny] = NORMAL[s.side]
  const r: Rect = [...s.fp]
  if (nx > 0) { r[0] = s.fp[2]; r[2] = s.fp[2] + depth }
  if (nx < 0) { r[2] = s.fp[0]; r[0] = s.fp[0] - depth }
  if (ny > 0) { r[1] = s.fp[3]; r[3] = s.fp[3] + depth }
  if (ny < 0) { r[3] = s.fp[1]; r[1] = s.fp[1] - depth }
  return r
}

/** точка перед фасадом предмета на расстоянии dist */
function front(s: Spot, dist: number): Point {
  const [nx, ny] = NORMAL[s.side]
  const cx = (s.fp[0] + s.fp[2]) / 2, cy = (s.fp[1] + s.fp[3]) / 2
  const half = isH(s.side) ? (s.fp[3] - s.fp[1]) / 2 : (s.fp[2] - s.fp[0]) / 2
  return [cx + nx * (half + dist), cy + ny * (half + dist)]
}

function bedAccess(s: Spot): Point[] {
  const cx = (s.fp[0] + s.fp[2]) / 2, cy = (s.fp[1] + s.fp[3]) / 2
  const out: Point[] = [front(s, 0.45)]
  if (isH(s.side)) out.push([s.fp[0] - 0.45, cy], [s.fp[2] + 0.45, cy])
  else out.push([cx, s.fp[1] - 0.45], [cx, s.fp[3] + 0.45])
  return out
}

function centerAcross(s: Spot) {
  return isH(s.side) ? (s.fp[1] + s.fp[3]) / 2 : (s.fp[0] + s.fp[2]) / 2
}

function centerOf(z: Rect) {
  return { x: (z[0] + z[2]) / 2, y: (z[1] + z[3]) / 2 }
}

function touches(a: Rect, b: Rect) {
  return a[0] <= b[2] + 1e-6 && a[2] >= b[0] - 1e-6 && a[1] <= b[3] + 1e-6 && a[3] >= b[1] - 1e-6
}
