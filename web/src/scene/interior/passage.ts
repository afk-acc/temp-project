import type { Point, Rect } from '@/domain/types'
import type { UnitLayout } from '@/domain/rooms'

/**
 * Проходы между мебелью на растре плана (10 см). Клетка «проходима для человека», если ни одного препятствия
 * (стена, стекло, вне квартиры, след мебели) нет ближе 0,4 м от её центра — это проход не уже ~0,7 м.
 * Дверные проёмы проходимы. Связность считается внутри одной комнаты: узкая дверь не делает комнату «недоступной».
 * Чистая логика, без three.js — общая для расстановки и автопроверки.
 */
const FREE = 0, DOOR = 2

/** смещения клеток ближе 0,4 м (в клетках по 10 см: di² + dj² < 16) */
const DISK: [number, number][] = []
for (let dj = -3; dj <= 3; dj++) for (let di = -3; di <= 3; di++) if (di * di + dj * dj < 16) DISK.push([di, dj])

export class Passage {
  readonly nx: number
  readonly ny: number
  private readonly x0: number
  private readonly y0: number
  private readonly res: number
  private readonly label: Int32Array
  /** 1 — клетка пола или проёма (не стена) */
  private readonly open: Uint8Array
  /** число препятствий в радиусе 0,4 м */
  private readonly near: Int16Array
  /** число следов мебели на клетке */
  private readonly furn: Uint8Array
  private readonly seen: Int32Array
  private stamp = 0

  constructor(layout: UnitLayout) {
    const g = layout.grid
    this.nx = g.nx
    this.ny = g.ny
    this.x0 = g.x0
    this.y0 = g.y0
    this.res = g.res
    this.label = g.label
    const n = g.nx * g.ny
    this.open = new Uint8Array(n)
    for (let p = 0; p < n; p++) this.open[p] = (g.kind[p] === FREE && g.label[p] >= 0) || g.kind[p] === DOOR ? 1 : 0
    this.near = new Int16Array(n)
    this.furn = new Uint8Array(n)
    this.seen = new Int32Array(n)
    for (let j = 0; j < g.ny; j++) for (let i = 0; i < g.nx; i++) if (!this.open[j * g.nx + i]) this.bump(i, j, 1)
  }

  private bump(i: number, j: number, s: number) {
    for (const [di, dj] of DISK) {
      const a = i + di, b = j + dj
      if (a < 0 || b < 0 || a >= this.nx || b >= this.ny) continue
      const q = b * this.nx + a
      if (this.open[q]) this.near[q] += s
    }
  }

  /** клетки, центры которых внутри прямоугольника */
  private cellsOf(r: Rect): number[] {
    const out: number[] = []
    const i0 = Math.max(0, Math.ceil((r[0] - this.x0) / this.res - 0.5))
    const i1 = Math.min(this.nx - 1, Math.floor((r[2] - this.x0) / this.res - 0.5))
    const j0 = Math.max(0, Math.ceil((r[1] - this.y0) / this.res - 0.5))
    const j1 = Math.min(this.ny - 1, Math.floor((r[3] - this.y0) / this.res - 0.5))
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) out.push(j * this.nx + i)
    return out
  }

  /** след мебели становится препятствием; вернуть — unblock с тем же прямоугольником */
  block(r: Rect) {
    for (const p of this.cellsOf(r)) {
      if (!this.open[p]) continue
      if (this.furn[p]++ === 0) this.bump(p % this.nx, (p / this.nx) | 0, 1)
    }
  }

  unblock(r: Rect) {
    for (const p of this.cellsOf(r)) {
      if (!this.open[p]) continue
      if (--this.furn[p] === 0) this.bump(p % this.nx, (p / this.nx) | 0, -1)
    }
  }

  cell(x: number, y: number): number {
    const i = Math.floor((x - this.x0) / this.res), j = Math.floor((y - this.y0) / this.res)
    return i < 0 || j < 0 || i >= this.nx || j >= this.ny ? -1 : j * this.nx + i
  }

  private walkable(p: number) {
    return this.open[p] === 1 && this.furn[p] === 0 && this.near[p] === 0
  }

  /** проходимая клетка комнаты room рядом с точкой (в радиусе 0,15 м) или -1 */
  snap(pt: Point, room: number): number {
    let best = -1, bd = Infinity
    for (let dj = -2; dj <= 2; dj++) for (let di = -2; di <= 2; di++) {
      const p = this.cell(pt[0] + di * this.res, pt[1] + dj * this.res)
      if (p < 0 || !this.walkable(p) || this.label[p] !== room) continue
      const d = di * di + dj * dj
      if (d < bd && d <= 4.5) { bd = d; best = p }
    }
    return best
  }

  /** связные области проходимых клеток комнаты: метка компоненты для каждой из точек (-1 — точка непроходима) */
  components(room: number, pts: Point[]): number[] {
    const cells = pts.map((p) => this.snap(p, room))
    const comp = cells.map(() => -1)
    let id = 0
    for (let k = 0; k < cells.length; k++) {
      if (cells[k] < 0 || comp[k] >= 0) continue
      const s = ++this.stamp
      const q = [cells[k]]
      this.seen[cells[k]] = s
      while (q.length) {
        const c = q.pop()!
        const i = c % this.nx, j = (c - i) / this.nx
        for (const [a, b] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
          if (a < 0 || b < 0 || a >= this.nx || b >= this.ny) continue
          const n = b * this.nx + a
          if (this.seen[n] === s || this.label[n] !== room || !this.walkable(n)) continue
          this.seen[n] = s
          q.push(n)
        }
      }
      for (let m = k; m < cells.length; m++) if (cells[m] >= 0 && this.seen[cells[m]] === s) comp[m] = id
      id++
    }
    return comp
  }
}

/**
 * Точки у дверей комнаты, к которым нужен проход: середина проёма, сдвинутая на 0,45 м внутрь комнаты.
 * Дверь наружу из жилой комнаты (балкон, терраса) при наличии другой входной двери — необязательна: перед ней
 * остаётся свободная зона, но обходить мебель к ней не требуется.
 */
export function doorPoints(layout: UnitLayout, room: number): Point[] {
  const out: Point[] = []
  const outer = layout.doors.filter((d) => d.entrance).length
  for (const di of layout.rooms[room].doors) {
    const d = layout.doors[di]
    if (d.entrance && outer > 1 && layout.rooms[room].kind !== 'hall') continue
    const [a, b, c, e] = d.rect
    const mx = (a + c) / 2, my = (b + e) / 2
    // внутрь комнаты — сторона проёма, где эта комната
    const s = d.rooms[1] === room ? 1 : -1
    out.push(d.alongX ? [mx, s > 0 ? e + 0.45 : b - 0.45] : [s > 0 ? c + 0.45 : a - 0.45, my])
  }
  return out
}
