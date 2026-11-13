import type { Point, Rect } from '@/domain/types'
import type { Side, UnitLayout } from '@/domain/rooms'
import { Passage, doorPoints } from './passage'
import { doorZones, isLivingRoom, needsPassage, overlap, type Item, type ItemKind } from './plan'

/**
 * Автопроверка расстановки одной квартиры: пересечения, выход за клетки комнаты, перекрытые двери, проходы уже 0,7 м,
 * пустые жилые комнаты, зазор до стены. Чистая логика — запускается из scripts/check-furniture.ts и из консоли (dev).
 */
export interface UnitCheck {
  items: number
  overlaps: string[]
  outside: string[]
  blockedDoors: string[]
  narrow: string[]
  livingRooms: number
  emptyLiving: string[]
  /** жилые без главного предмета (кровать, диван, кухня) */
  incomplete: string[]
  /** зазор спинки до стены: утоплено (< 1 см) / слишком далеко (> 6 см) */
  sunk: number
  far: number
  /** санузлы без ванны и душа */
  noWash: string[]
}

const MAIN: Partial<Record<string, ItemKind[][]>> = {
  bedroom: [['bed']],
  living: [['sofa']],
  kitchen: [['kitchenRun']],
  kitchen_living: [['kitchenRun'], ['sofa']],
  studio: [['kitchenRun'], ['bed', 'sofa']],
  living_bed: [['bed', 'sofa']],
}

const solidKinds = (it: Item) => !!it.fp && !it.flat

export function checkUnit(layout: UnitLayout, items: Item[], tag = ''): UnitCheck {
  const res: UnitCheck = { items: items.length, overlaps: [], outside: [], blockedDoors: [], narrow: [], livingRooms: 0, emptyLiving: [], incomplete: [], sunk: 0, far: 0, noWash: [] }
  const floor = items.filter(solidKinds)
  const name = (it: Item) => `${tag} ${layout.rooms[it.room]?.kind ?? '?'}#${it.room}:${it.kind}`
  // пересечения
  for (let i = 0; i < floor.length; i++) for (let j = i + 1; j < floor.length; j++) {
    if (overlap(floor[i].fp!, floor[j].fp!, 0.01)) res.overlaps.push(`${name(floor[i])} × ${floor[j].kind}`)
  }
  // вне клеток своей комнаты (с допуском 6 см у стен — растр 10 см)
  for (const it of items) {
    if (!it.fp) continue
    if (!onRoomCells(layout, it.fp, it.room)) res.outside.push(name(it))
  }
  // зоны дверей
  layout.rooms.forEach((r) => {
    const zones = doorZones(layout, r.index)
    zones.forEach((z, k) => {
      const hit = floor.find((it) => it.room === r.index && overlap(z, it.fp!, 0.01))
      if (hit) res.blockedDoors.push(`${tag} ${r.kind}#${r.index} дверь ${k}: ${hit.kind}`)
    })
  })
  // проходы 0,7 м: точки у дверей, связные в пустой комнате, остаются связными; к фасадам мебели есть подход
  const pass = new Passage(layout)
  for (const r of layout.rooms) {
    if (!needsPassage(r)) continue
    const dp = doorPoints(layout, r.index)
    const base = pass.components(r.index, dp)
    const anchor = base.findIndex((c) => c >= 0)
    if (anchor < 0) continue
    const mine = floor.filter((it) => it.room === r.index)
    for (const it of mine) pass.block(it.fp!)
    const groups: [Item, number[]][] = []
    const pts: Point[] = [...dp]
    for (const it of mine) if (it.access?.length) {
      groups.push([it, it.access.map((_, i) => pts.length + i)])
      pts.push(...it.access)
    }
    const comp = pass.components(r.index, pts)
    const a = comp[anchor]
    let bad = ''
    if (a < 0) bad = 'вход в комнату'
    else {
      for (let k = 0; k < dp.length; k++) if (base[k] === base[anchor] && comp[k] !== a) bad = `дверь ${k}`
      for (const [it, g] of groups) if (!g.some((i) => comp[i] === a)) bad ||= `подход к ${it.kind}`
    }
    if (bad) res.narrow.push(`${tag} ${r.kind}#${r.index}: ${bad}`)
    for (const it of mine) pass.unblock(it.fp!)
  }
  // пустые и неполные жилые комнаты, санузлы без ванны/душа
  for (const r of layout.rooms) {
    const mine = items.filter((it) => it.room === r.index && solidKinds(it))
    if (r.kind === 'bath' && r.area >= 2.2 && !mine.some((it) => it.kind === 'bathtub' || it.kind === 'shower')) res.noWash.push(`${tag} bath#${r.index} ${r.area.toFixed(1)}м²`)
    if (!isLivingRoom(r)) continue
    res.livingRooms++
    if (!mine.length) res.emptyLiving.push(`${tag} ${r.kind}#${r.index} ${r.area.toFixed(1)}м²`)
    else if ((MAIN[r.kind] ?? []).some((alts) => !mine.some((it) => alts.includes(it.kind)))) res.incomplete.push(`${tag} ${r.kind}#${r.index} ${r.area.toFixed(1)}м²`)
  }
  // зазор до стены: у каждой стороны следа, где в 12 см есть грань стены
  for (const it of floor) {
    const fp = it.fp!
    for (const side of ['N', 'S', 'E', 'W'] as Side[]) {
      const g = gapToWall(layout, fp, side)
      if (g === null) continue
      if (g < 0.01) res.sunk++
      else if (g > 0.06 && g < 0.12) res.far++
    }
  }
  return res
}

/** след на клетках комнаты (точки сетки 8 см внутри следа, отступ 6 см от краёв) */
export function onRoomCells(layout: UnitLayout, fp: Rect, room: number): boolean {
  const ins = 0.06
  const x0 = fp[0] + ins, x1 = fp[2] - ins, y0 = fp[1] + ins, y1 = fp[3] - ins
  if (x1 < x0 || y1 < y0) return layout.roomAt((fp[0] + fp[2]) / 2, (fp[1] + fp[3]) / 2) === room
  const nx = Math.max(1, Math.ceil((x1 - x0) / 0.08)), ny = Math.max(1, Math.ceil((y1 - y0) / 0.08))
  for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
    if (layout.roomAt(x0 + ((x1 - x0) * i) / nx, y0 + ((y1 - y0) * j) / ny) !== room) return false
  }
  return true
}

/** зазор от края следа до грани стены по стороне side (по середине края); null — стены ближе 12 см нет */
function gapToWall(layout: UnitLayout, fp: Rect, side: Side): number | null {
  const mx = (fp[0] + fp[2]) / 2, my = (fp[1] + fp[3]) / 2
  // от точки чуть внутри следа
  if (side === 'N') { const f = layout.faceToward(mx, fp[3] - 0.08, 'N', 0.2); return f === null ? null : f - fp[3] }
  if (side === 'S') { const f = layout.faceToward(mx, fp[1] + 0.08, 'S', 0.2); return f === null ? null : fp[1] - f }
  if (side === 'E') { const f = layout.faceToward(fp[2] - 0.08, my, 'E', 0.2); return f === null ? null : f - fp[2] }
  const f = layout.faceToward(fp[0] + 0.08, my, 'W', 0.2)
  return f === null ? null : fp[0] - f
}

export interface Report {
  units: number
  livingRooms: number
  items: number
  overlaps: number
  outside: number
  blockedDoors: number
  narrow: number
  emptyLiving: number
  incomplete: number
  sunk: number
  far: number
  noWash: number
  samples: Record<string, string[]>
}

export function summarize(list: UnitCheck[]): Report {
  const sum = (f: (c: UnitCheck) => number) => list.reduce((s, c) => s + f(c), 0)
  const pick = (f: (c: UnitCheck) => string[]) => list.flatMap(f).slice(0, 12)
  return {
    units: list.length,
    livingRooms: sum((c) => c.livingRooms),
    items: sum((c) => c.items),
    overlaps: sum((c) => c.overlaps.length),
    outside: sum((c) => c.outside.length),
    blockedDoors: sum((c) => c.blockedDoors.length),
    narrow: sum((c) => c.narrow.length),
    emptyLiving: sum((c) => c.emptyLiving.length),
    incomplete: sum((c) => c.incomplete.length),
    sunk: sum((c) => c.sunk),
    far: sum((c) => c.far),
    noWash: sum((c) => c.noWash.length),
    samples: {
      overlaps: pick((c) => c.overlaps),
      outside: pick((c) => c.outside),
      blockedDoors: pick((c) => c.blockedDoors),
      narrow: pick((c) => c.narrow),
      emptyLiving: pick((c) => c.emptyLiving),
      incomplete: pick((c) => c.incomplete),
      noWash: pick((c) => c.noWash),
    },
  }
}
