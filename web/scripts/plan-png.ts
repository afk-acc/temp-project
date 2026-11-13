/**
 * Отладка расстановки: план квартиры с мебелью в PNG (вид сверху, 40 px/м). Стены — тёмные, окна — синие,
 * зоны дверей — оранжевые, мебель — цветные прямоугольники, светильники — жёлтые точки.
 * npx esbuild scripts/plan-png.ts --bundle --platform=node --format=esm --tsconfig=tsconfig.json | node --input-type=module - c1 30,245 /tmp
 */
import { deflateSync } from 'node:zlib'
import { writeFileSync } from 'node:fs'
import { loadCases } from './units-data'
import { layoutUnit } from '@/domain/rooms'
import { planUnit, doorZones } from '@/scene/interior/plan'
import type { Rect } from '@/domain/types'

const [proj, num, out] = process.argv.slice(2)
const cases = await loadCases()
const nums = num.split(',').map(Number)
for (const [ci, c] of cases.entries()) {
  if (c.project !== proj || !nums.includes(c.unit.number)) continue
  const n = `${c.unit.number}-${c.unit.block ?? ''}${ci}`
  const L = layoutUnit(c.ft, c.unit)
  const plan = planUnit(L)
  const g = L.grid
  const S = 40
  const W = Math.ceil(g.nx * g.res * S), H = Math.ceil(g.ny * g.res * S)
  const px = new Uint8Array(W * H * 3).fill(255)
  const X = (x: number) => Math.round((x - g.x0) * S), Y = (y: number) => H - Math.round((y - g.y0) * S)
  const fill = (r: Rect, col: number[], a = 1, outline = false) => {
    const x0 = Math.max(0, X(r[0])), x1 = Math.min(W - 1, X(r[2])), y0 = Math.max(0, Y(r[3])), y1 = Math.min(H - 1, Y(r[1]))
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      if (outline && x > x0 && x < x1 && y > y0 && y < y1) continue
      const p = (y * W + x) * 3
      for (let k = 0; k < 3; k++) px[p + k] = Math.round(px[p + k] * (1 - a) + col[k] * a)
    }
  }
  const KC: Record<number, number[]> = { 1: [60, 60, 60], 2: [230, 160, 60], 3: [80, 170, 255], 4: [200, 200, 200] }
  for (let j = 0; j < g.ny; j++) for (let i = 0; i < g.nx; i++) {
    const k = g.kind[j * g.nx + i]
    const r: Rect = [g.x0 + i * g.res, g.y0 + j * g.res, g.x0 + (i + 1) * g.res, g.y0 + (j + 1) * g.res]
    if (k) fill(r, KC[k])
    else if (g.label[j * g.nx + i] >= 0) { const l = g.label[j * g.nx + i]; fill(r, [235 - (l * 37) % 40, 235 - (l * 53) % 40, 225]) }
  }
  for (const room of L.rooms) for (const z of doorZones(L, room.index)) fill(z, [255, 120, 0], 0.18)
  for (const room of L.rooms) for (const [x0, y0, x1, y1] of room.windows) fill([Math.min(x0, x1) - 0.03, Math.min(y0, y1) - 0.03, Math.max(x0, x1) + 0.03, Math.max(y0, y1) + 0.03], [0, 120, 255])
  const COL: Record<string, number[]> = { sofa: [200, 60, 60], bed: [60, 90, 200], kitchenRun: [40, 150, 60], fridge: [20, 100, 40], diningSet: [150, 100, 40], tvUnit: [30, 30, 30], wardrobe: [120, 60, 160], rug: [240, 200, 120], bathtub: [0, 180, 200], shower: [0, 140, 220], toilet: [100, 100, 100], vanity: [200, 140, 200] }
  for (const it of plan.items) if (it.fp && it.flat) fill(it.fp, COL.rug, 0.6)
  for (const it of plan.items) if (it.fp && !it.flat) { fill(it.fp, COL[it.kind] ?? [140, 140, 140], 0.75); fill(it.fp, [0, 0, 0], 1, true) }
  for (const l of plan.lights) fill([l.x - 0.08, l.y - 0.08, l.x + 0.08, l.y + 0.08], [255, 220, 0])
  // PNG
  const raw = Buffer.alloc((W * 3 + 1) * H)
  for (let y = 0; y < H; y++) { raw[y * (W * 3 + 1)] = 0; Buffer.from(px.buffer, y * W * 3, W * 3).copy(raw, y * (W * 3 + 1) + 1) }
  const crc = (b: Buffer) => { let c = ~0; for (const x of b) { c ^= x; for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1)) } return ~c >>> 0 }
  const chunk = (t: string, d: Buffer) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const cc = Buffer.alloc(4); cc.writeUInt32BE(crc(td)); return Buffer.concat([l, td, cc]) }
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4); ihdr[8] = 8; ihdr[9] = 2
  const png = Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))])
  const file = (out ?? '.') + `/${proj}-${n}.png`
  writeFileSync(file, png)
  console.log(file, c.unit.rooms, 'комн', c.unit.area, L.rooms.map((r) => `${r.index}:${r.kind}${r.name ? '(' + r.name + ')' : ''} ${r.area.toFixed(1)} z[${r.zones.map((z) => (z[2] - z[0]).toFixed(1) + 'x' + (z[3] - z[1]).toFixed(1)).join(',')}] gl:${r.glazed.join('')}`).join(' | '))
  console.log('  ', plan.items.filter((i) => i.fp && !i.flat).map((i) => `${i.room}:${i.kind}`).join(' '))
}
