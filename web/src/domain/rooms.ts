/**
 * Квартира → комнаты с назначением. Чистая геометрия плана, без three.js.
 *
 * План этажа растрируется сеткой 10 см внутри контура квартиры: стены, дверные проёмы и стекло — препятствия,
 * связные свободные области — комнаты. Для каждой комнаты: наибольший вписанный прямоугольник (в нём
 * расставляется мебель), стороны с окнами, двери. Назначение — по названиям из каталога (если есть) или по
 * площади, окнам и входной двери.
 */
import type { FloorType, Point, Rect, Unit } from './types'

export type RoomKind =
  | 'living' // гостиная
  | 'kitchen_living' // кухня-гостиная
  | 'studio' // кухня + спальное место в одной комнате
  | 'living_bed' // единственная комната при отдельной кухне: спальня-гостиная
  | 'kitchen'
  | 'bedroom'
  | 'bath' // ванная / санузел
  | 'hall' // прихожая, коридор
  | 'closet' // гардеробная, кладовая
  | 'loggia'

export type Side = 'N' | 'S' | 'E' | 'W'

export interface DoorInfo {
  /** проём в метрах плана */
  rect: Rect
  /** проём идёт вдоль оси x (стена горизонтальная на плане) */
  alongX: boolean
  /** комнаты по обе стороны (индексы), -1 — вне квартиры (входная дверь) */
  rooms: [number, number]
  entrance: boolean
}

export interface RoomPlan {
  index: number
  kind: RoomKind
  area: number
  /** наибольший вписанный прямоугольник */
  rect: Rect
  /** зоны для мебели: [0] — rect, дальше — крупные прямоугольники в остатке слитной комнаты */
  zones: Rect[]
  /** наружные стороны комнаты (фасад, с окнами или глухие) — для назначения комнат */
  facade: Side[]
  /** стороны с окнами (стекло или проём в наружной стене) */
  glazed: Side[]
  /** прямоугольники клеток комнаты — для пола и плинтуса */
  cells: Rect[]
  /** отрезки границы комнаты: [x0,y0,x1,y1, сторона, что за ней: 'wall'|'door'|'window'] */
  edges: [number, number, number, number, Side, EdgeKind][]
  doors: number[]
  /** окна: остеклённые участки границы [x0,y0,x1,y1, сторона] */
  windows: [number, number, number, number, Side][]
  name?: string
}

export type EdgeKind = 'wall' | 'door' | 'window'

export interface UnitLayout {
  rooms: RoomPlan[]
  doors: DoorInfo[]
  /** что находится в точке плана: 0 — свободно (комната), 1 — стена, 2 — проём двери, 3 — стекло, 4 — вне квартиры */
  kindAt(x: number, y: number): number
  /** номер комнаты в точке или -1 */
  roomAt(x: number, y: number): number
  /** растр плана: клетки RES×RES, kind — что в клетке, label — номер комнаты или -1 */
  grid: { x0: number; y0: number; nx: number; ny: number; res: number; kind: Uint8Array; label: Int32Array }
  /**
   * Точная координата ближайшей грани стены или стекла от точки (x, y) в сторону side (N — к +y, E — к +x)
   * не дальше max; null — стены рядом нет. Растр огрублён до 10 см, а мебель ставится по реальной грани.
   */
  faceToward(x: number, y: number, side: Side, max?: number): number | null
}

const RES = 0.1
const FREE = 0, WALL = 1, DOOR = 2, GLASS = 3, OUT = 4

export function layoutUnit(ft: FloorType, unit: Unit): UnitLayout {
  const poly = unit.polygon!
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const [x, y] of poly) {
    x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y)
  }
  x0 -= 0.6; y0 -= 0.6; x1 += 0.6; y1 += 0.6
  const nx = Math.ceil((x1 - x0) / RES)
  const ny = Math.ceil((y1 - y0) / RES)
  const kind = new Uint8Array(nx * ny)
  const cx = (i: number) => x0 + (i + 0.5) * RES
  const cy = (j: number) => y0 + (j + 0.5) * RES
  const idx = (i: number, j: number) => j * nx + i
  const inGrid = (i: number, j: number) => i >= 0 && j >= 0 && i < nx && j < ny

  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) kind[idx(i, j)] = inPoly(cx(i), cy(j), poly) ? FREE : OUT
  const paint = (rects: Rect[], k: number, grow: number) => {
    for (const [a, b, c, d] of rects) {
      if (c < x0 || a > x1 || d < y0 || b > y1) continue
      const i0 = Math.max(0, Math.floor((a - grow - x0) / RES))
      const i1 = Math.min(nx - 1, Math.floor((c + grow - x0) / RES))
      const j0 = Math.max(0, Math.floor((b - grow - y0) / RES))
      const j1 = Math.min(ny - 1, Math.floor((d + grow - y0) / RES))
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const X = cx(i), Y = cy(j)
        if (X >= a - grow && X <= c + grow && Y >= b - grow && Y <= d + grow) {
          const p = idx(i, j)
          if (kind[p] === OUT && k !== DOOR) continue
          kind[p] = k
        }
      }
    }
  }
  // стены без учёта контура квартиры: глухая наружная стена или проём в ней
  const rawWall = new Uint8Array(nx * ny)
  for (const [a, b, c, d] of [...ft.walls_int, ...ft.walls_ext]) {
    if (c < x0 || a > x1 || d < y0 || b > y1) continue
    for (let j = Math.max(0, Math.floor((b - y0) / RES)); j <= Math.min(ny - 1, Math.floor((d - y0) / RES)); j++)
      for (let i = Math.max(0, Math.floor((a - x0) / RES)); i <= Math.min(nx - 1, Math.floor((c - x0) / RES)); i++) {
        const X = cx(i), Y = cy(j)
        if (X >= a - 0.03 && X <= c + 0.03 && Y >= b - 0.03 && Y <= d + 0.03) rawWall[idx(i, j)] = 1
      }
  }
  paint(ft.walls_int, WALL, 0.03)
  paint(ft.walls_ext, WALL, 0.03)
  paint(ft.glass, GLASS, 0.03)
  paint(ft.door_heads, DOOR, 0.02)
  // снаружи перекрытия — улица: для поиска окон
  const outside = new Uint8Array(nx * ny)
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const X = cx(i), Y = cy(j)
    outside[idx(i, j)] = ft.slab.some(([a, b, c, d]) => X >= a && X <= c && Y >= b && Y <= d) ? 0 : 1
  }

  // ---------- комнаты: связные свободные области ----------
  const label = new Int32Array(nx * ny).fill(-1)
  const comps: number[][] = []
  for (let p = 0; p < kind.length; p++) {
    if (kind[p] !== FREE || label[p] >= 0) continue
    const id = comps.length
    const list: number[] = []
    const q = [p]
    label[p] = id
    while (q.length) {
      const c = q.pop()!
      list.push(c)
      const i = c % nx, j = (c - i) / nx
      for (const [di, dj] of DIRS) {
        const a = i + di, b = j + dj
        if (!inGrid(a, b)) continue
        const n = idx(a, b)
        if (kind[n] === FREE && label[n] < 0) {
          label[n] = id
          q.push(n)
        }
      }
    }
    comps.push(list)
  }
  // мелкие обрывки (< 1 м²) — не комнаты
  const keep = comps.map((c) => c.length * RES * RES >= 1.0)
  const remap = new Map<number, number>()
  comps.forEach((_, k) => keep[k] && remap.set(k, remap.size))
  for (let p = 0; p < label.length; p++) label[p] = label[p] >= 0 && keep[label[p]] ? remap.get(label[p])! : -1

  const rooms: RoomPlan[] = []
  comps.forEach((cells, k) => {
    if (!keep[k]) return
    const index = remap.get(k)!
    const mask = (i: number, j: number) => inGrid(i, j) && label[idx(i, j)] === index
    let mi0 = nx, mi1 = 0, mj0 = ny, mj1 = 0
    for (const c of cells) {
      const i = c % nx, j = (c - i) / nx
      mi0 = Math.min(mi0, i); mi1 = Math.max(mi1, i); mj0 = Math.min(mj0, j); mj1 = Math.max(mj1, j)
    }
    // наибольший вписанный прямоугольник; в большой слитной области — ещё одна-две зоны в остатке
    const taken = new Set<number>()
    const zones: Rect[] = []
    for (let z = 0; z < 3; z++) {
      // под мебель нужен прямоугольник не уже 1,6 м; если такого нет — просто наибольший
      const m = (i: number, j: number) => mask(i, j) && !taken.has(idx(i, j))
      const r = largestRect(m, mi0, mi1, mj0, mj1, Math.round(1.6 / RES)) ?? (z === 0 ? largestRect(m, mi0, mi1, mj0, mj1) : null)
      if (!r) break
      const [a, b, c, d] = r
      const w = (c - a + 1) * RES, h = (d - b + 1) * RES
      if (z > 0 && (w * h < 6 || Math.min(w, h) < 1.8)) break
      zones.push([x0 + a * RES, y0 + b * RES, x0 + (c + 1) * RES, y0 + (d + 1) * RES])
      for (let j = b; j <= d; j++) for (let i = a; i <= c; i++) taken.add(idx(i, j))
    }
    const rect = zones[0]

    // клетки комнаты прямоугольниками (склейка пробегов) — пол
    const cellRects: Rect[] = []
    for (let j = mj0; j <= mj1; j++) {
      let i = mi0
      while (i <= mi1) {
        if (!mask(i, j)) { i++; continue }
        let e = i
        while (e + 1 <= mi1 && mask(e + 1, j)) e++
        cellRects.push([x0 + i * RES, y0 + j * RES, x0 + (e + 1) * RES, y0 + (j + 1) * RES])
        i = e + 1
      }
    }

    // граница: что за каждой гранью клетки; окна — стекло или улица в пределах 0,5 м
    const edges: RoomPlan['edges'] = []
    const facadeCount: Record<Side, number> = { N: 0, S: 0, E: 0, W: 0 }
    const glazedCount: Record<Side, number> = { N: 0, S: 0, E: 0, W: 0 }
    const winRuns: RoomPlan['windows'] = []
    const sideInfo: [Side, number, number][] = [['N', 0, 1], ['S', 0, -1], ['E', 1, 0], ['W', -1, 0]]
    const byRow = [...cells].sort((p, q) => p - q)
    const byCol = [...cells].sort((p, q) => (p % nx) - (q % nx) || p - q)
    for (const [side, di, dj] of sideInfo) {
      // пробеги вдоль стороны: клетки по порядку вдоль неё
      const runs = new Map<string, { a: number; b: number; fixed: number; kind: EdgeKind }>()
      for (const c of dj !== 0 ? byRow : byCol) {
        const i = c % nx, j = (c - i) / nx
        if (mask(i + di, j + dj)) continue
        const nk = inGrid(i + di, j + dj) ? kind[idx(i + di, j + dj)] : OUT
        let ek: EdgeKind = nk === DOOR ? 'door' : nk === GLASS ? 'window' : 'wall'
        // фасад — наружная сторона (для назначения комнат); окно — стекло или проём в наружной стене
        // (за глухой наружной стеной — улица, но это стена: у неё плинтус, к ней можно ставить шкаф)
        let exterior = ek === 'window'
        if (ek === 'wall') {
          let solid = false
          for (let s = 1; s <= 5; s++) {
            const a = i + di * s, b = j + dj * s
            if (!inGrid(a, b)) break
            const q = idx(a, b)
            if (kind[q] === GLASS) { ek = 'window'; exterior = true; break }
            if (outside[q]) { exterior = true; if (!solid) ek = 'window'; break }
            if (rawWall[q]) solid = true
            if (kind[q] === FREE && label[q] !== index) break
          }
        }
        if (exterior) facadeCount[side]++
        if (ek === 'window') glazedCount[side]++
        // ключ — линия границы и вид
        const fixed = dj !== 0 ? j + (dj > 0 ? 1 : 0) : i + (di > 0 ? 1 : 0)
        const along = dj !== 0 ? i : j
        const key = `${fixed}:${ek}`
        const r = runs.get(key)
        if (r && r.b === along) r.b = along + 1
        else {
          if (r) pushRun(r, side, dj !== 0)
          runs.set(key, { a: along, b: along + 1, fixed, kind: ek })
        }
      }
      for (const r of runs.values()) pushRun(r, side, dj !== 0)
    }
    function pushRun(r: { a: number; b: number; fixed: number; kind: EdgeKind }, side: Side, horiz: boolean) {
      const seg: [number, number, number, number] = horiz
        ? [x0 + r.a * RES, y0 + r.fixed * RES, x0 + r.b * RES, y0 + r.fixed * RES]
        : [x0 + r.fixed * RES, y0 + r.a * RES, x0 + r.fixed * RES, y0 + r.b * RES]
      edges.push([...seg, side, r.kind])
      if (r.kind === 'window' && (r.b - r.a) * RES >= 0.5) winRuns.push([...seg, side])
    }
    // сторона прямоугольника считается фасадной, если вдоль неё есть окно
    const facade = (['N', 'S', 'E', 'W'] as Side[]).filter((s) => facadeCount[s] * RES >= 0.6)
    const glazed = (['N', 'S', 'E', 'W'] as Side[]).filter((s) => glazedCount[s] * RES >= 0.5)
    rooms.push({ index, kind: 'living', area: cells.length * RES * RES, rect, zones, facade, glazed, cells: cellRects, edges, doors: [], windows: winRuns })
  })

  // ---------- двери ----------
  const doors: DoorInfo[] = []
  const seen = new Uint8Array(nx * ny)
  for (let p = 0; p < kind.length; p++) {
    if (kind[p] !== DOOR || seen[p]) continue
    const q = [p]
    seen[p] = 1
    let a = nx, b = ny, c = 0, d = 0
    const list: number[] = []
    while (q.length) {
      const cc = q.pop()!
      list.push(cc)
      const i = cc % nx, j = (cc - i) / nx
      a = Math.min(a, i); b = Math.min(b, j); c = Math.max(c, i); d = Math.max(d, j)
      for (const [di, dj] of DIRS) {
        const ii = i + di, jj = j + dj
        if (inGrid(ii, jj) && kind[idx(ii, jj)] === DOOR && !seen[idx(ii, jj)]) {
          seen[idx(ii, jj)] = 1
          q.push(idx(ii, jj))
        }
      }
    }
    const alongX = c - a >= d - b
    // комнаты по обе стороны: смотрим за проём по нормали
    const mi = Math.round((a + c) / 2), mj = Math.round((b + d) / 2)
    const probe = (s: number): number => {
      for (let k = 1; k <= 4; k++) {
        const i = alongX ? mi : s < 0 ? a - k : c + k
        const j = alongX ? (s < 0 ? b - k : d + k) : mj
        if (!inGrid(i, j)) return -2
        const kk = kind[idx(i, j)]
        if (kk === FREE) return label[idx(i, j)]
        if (kk === OUT) return -1
      }
      return -2
    }
    const r0 = probe(-1), r1 = probe(1)
    if (r0 < 0 && r1 < 0) continue
    if (r0 === -2 || r1 === -2) continue
    const di = doors.length
    doors.push({
      rect: [x0 + a * RES, y0 + b * RES, x0 + (c + 1) * RES, y0 + (d + 1) * RES],
      alongX,
      rooms: [r0, r1],
      entrance: r0 === -1 || r1 === -1,
    })
    for (const r of [r0, r1]) if (r >= 0) rooms[r].doors.push(di)
  }

  classify(rooms, doors, unit)
  const solids = [...ft.walls_int, ...ft.walls_ext, ...ft.glass].filter(([a, b, c, d]) => !(c < x0 || a > x1 || d < y0 || b > y1))
  const faceToward = (x: number, y: number, side: Side, max = 0.3): number | null => {
    let best: number | null = null
    for (const [a, b, c, d] of solids) {
      if (side === 'N' || side === 'S') {
        if (x < a - 1e-6 || x > c + 1e-6) continue
        if (side === 'N' && d > y && b - y <= max && (best === null || b < best)) best = b
        if (side === 'S' && b < y && y - d <= max && (best === null || d > best)) best = d
      } else {
        if (y < b - 1e-6 || y > d + 1e-6) continue
        if (side === 'E' && c > x && a - x <= max && (best === null || a < best)) best = a
        if (side === 'W' && a < x && x - c <= max && (best === null || c > best)) best = c
      }
    }
    return best
  }
  // границы комнат — на реальную грань стены: плинтус и плитка вплотную к стене, без щели растра
  for (const r of rooms) for (const e of r.edges) {
    if (e[5] === 'door') continue
    const horiz = e[4] === 'N' || e[4] === 'S'
    const mx = (e[0] + e[2]) / 2, my = (e[1] + e[3]) / 2
    const back = e[4] === 'N' || e[4] === 'E' ? -0.06 : 0.06
    const f = horiz ? faceToward(mx, my + back, e[4], 0.2) : faceToward(mx + back, my, e[4], 0.2)
    if (f === null) continue
    const cur = horiz ? my : mx
    if (Math.abs(f - cur) > 0.12) continue
    if (horiz) e[1] = e[3] = f
    else e[0] = e[2] = f
  }
  return {
    faceToward,
    grid: { x0, y0, nx, ny, res: RES, kind, label },
    rooms,
    doors,
    kindAt(x, y) {
      const i = Math.floor((x - x0) / RES), j = Math.floor((y - y0) / RES)
      return inGrid(i, j) ? kind[idx(i, j)] : OUT
    },
    roomAt(x, y) {
      const i = Math.floor((x - x0) / RES), j = Math.floor((y - y0) / RES)
      return inGrid(i, j) ? label[idx(i, j)] : -1
    },
  }
}

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]]

/** Наибольший прямоугольник из клеток маски (гистограммы по строкам), индексы клеток включительно */
function largestRect(mask: (i: number, j: number) => boolean, i0: number, i1: number, j0: number, j1: number, minSide = 0): [number, number, number, number] | null {
  const W = i1 - i0 + 1
  const h = new Int32Array(W)
  let best = 0
  let out: [number, number, number, number] | null = null
  for (let j = j0; j <= j1; j++) {
    for (let i = 0; i < W; i++) h[i] = mask(i0 + i, j) ? h[i] + 1 : 0
    const st: number[] = []
    for (let i = 0; i <= W; i++) {
      const cur = i < W ? h[i] : 0
      while (st.length && h[st.at(-1)!] >= cur) {
        const hh = h[st.pop()!]
        const left = st.length ? st.at(-1)! + 1 : 0
        const area = hh * (i - left)
        if (area > best && hh >= minSide && i - left >= minSide) {
          best = area
          out = [i0 + left, j - hh + 1, i0 + i - 1, j]
        }
      }
      st.push(i)
    }
  }
  return out
}

function inPoly(x: number, y: number, p: Point[]) {
  let c = false
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    if (p[i][1] > y !== p[j][1] > y && x < ((p[j][0] - p[i][0]) * (y - p[i][1])) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]) c = !c
  }
  return c
}

// ---------- назначение комнат ----------

const NAME_KIND: [RegExp, RoomKind][] = [
  [/кухня.?гостин|кухня.?столов/i, 'kitchen_living'],
  [/кухн/i, 'kitchen'],
  [/гостин|зал/i, 'living'],
  [/спальн|детск|кабинет/i, 'bedroom'],
  [/с\/у|сану|ванн|туалет|душ/i, 'bath'],
  [/прихож|коридор|холл/i, 'hall'],
  [/гардер|кладов/i, 'closet'],
  [/лодж|балк/i, 'loggia'],
]

function classify(rooms: RoomPlan[], doors: DoorInfo[], unit: Unit) {
  const dims = (r: RoomPlan) => {
    const w = r.rect[2] - r.rect[0], d = r.rect[3] - r.rect[1]
    return { min: Math.min(w, d), max: Math.max(w, d) }
  }
  const hasEntrance = (r: RoomPlan) => r.doors.some((d) => doors[d].entrance)

  // 1. Названия из каталога: жадно сопоставляем по площади
  if (unit.room_list?.length) {
    const named = unit.room_list.map((n) => ({ ...n, kind: NAME_KIND.find(([re]) => re.test(n.name))?.[1] ?? 'living' as RoomKind }))
    const free = new Set(rooms.map((r) => r.index))
    const pairs: [number, number, number][] = []
    named.forEach((n, ni) => rooms.forEach((r) => pairs.push([Math.abs(r.area - n.area) / Math.max(n.area, 1), ni, r.index])))
    pairs.sort((a, b) => a[0] - b[0])
    const usedN = new Set<number>()
    // жилая комната должна вмещать мебель: полоска уже 1,6 м — это коридор, а не зал
    const roomy = (r: RoomPlan) => r.zones.some((z) => Math.min(z[2] - z[0], z[3] - z[1]) >= 1.6)
    const needsRoom = new Set<RoomKind>(['living', 'kitchen_living', 'bedroom', 'kitchen', 'studio'])
    for (const [err, ni, ri] of pairs) {
      if (err > 0.45 || usedN.has(ni) || !free.has(ri)) continue
      if (needsRoom.has(named[ni].kind) && !roomy(rooms[ri])) continue
      usedN.add(ni)
      free.delete(ri)
      rooms[ri].kind = named[ni].kind
      rooms[ri].name = named[ni].name
    }
    // несопоставленные — по геометрии ниже, но только они
    const rest = rooms.filter((r) => free.has(r.index))
    for (const r of rest) r.kind = guessSmall(r) ?? (roomy(r) ? 'living' : 'hall')
    // комната из каталога слилась с кухней (одна большая область) — делаем кухню-гостиную
    for (const r of rooms) if (r.kind === 'living' && !rooms.some((x) => x.kind === 'kitchen' || x.kind === 'kitchen_living') && r.area > 18) r.kind = 'kitchen_living'
    return
  }

  function guessSmall(r: RoomPlan): RoomKind | null {
    const { min, max } = dims(r)
    if (r.facade.length && r.area < 3.2) return 'loggia'
    if (r.facade.length) return null
    if (hasEntrance(r)) return 'hall'
    if (r.area < 1.8) return 'closet'
    if (max / Math.max(min, 0.1) > 2.4 && min < 1.6) return 'hall'
    if (r.area <= 8.5) return 'bath'
    return 'hall'
  }

  // 2. Геометрия: жилые — с окнами; их число известно из каталога (unit.rooms)
  for (const r of rooms) {
    const g = guessSmall(r)
    if (g) r.kind = g
  }
  const lit = rooms.filter((r) => r.facade.length && r.kind !== 'loggia').sort((a, b) => b.area - a.area)
  if (!lit.length) return
  const n = Math.max(1, unit.rooms)
  let kitchen: RoomPlan | null = null
  if (lit.length > n) {
    // лишняя комната с окном — кухня: самая маленькая подходящая
    kitchen = [...lit].reverse().find((r) => r.area >= 5 && r.area <= 18) ?? null
    if (kitchen) kitchen.kind = 'kitchen'
  }
  const living = lit.filter((r) => r !== kitchen)
  if (n === 1 || living.length === 1) {
    living[0].kind = kitchen ? 'living_bed' : 'studio'
    for (const r of living.slice(1)) r.kind = 'bedroom'
    return
  }
  living[0].kind = kitchen ? 'living' : 'kitchen_living'
  for (const r of living.slice(1)) r.kind = 'bedroom'
  // ванные: самая большая — с ванной, остальные — душ
}

export const ROOM_LABEL: Record<RoomKind, string> = {
  living: 'Гостиная',
  kitchen_living: 'Кухня-гостиная',
  studio: 'Студия',
  living_bed: 'Комната',
  kitchen: 'Кухня',
  bedroom: 'Спальня',
  bath: 'Санузел',
  hall: 'Прихожая',
  closet: 'Гардеробная',
  loggia: 'Лоджия',
}
