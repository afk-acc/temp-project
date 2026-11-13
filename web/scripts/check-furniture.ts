/**
 * Автопроверка расстановки мебели по всем квартирам C1 и типовым квартирам Harizma.
 * Запуск: npm run check:furniture (нужен работающий бэкенд, API=http://localhost:8010/api по умолчанию).
 * Цели: 0 пересечений, 0 перекрытых дверей, пустых жилых комнат < 3 %.
 */
import { loadCases } from './units-data'
import { layoutUnit } from '@/domain/rooms'
import { planUnit } from '@/scene/interior/plan'
import { checkUnit, summarize } from '@/scene/interior/check'

const cases = await loadCases()
const t0 = performance.now()
const list = cases.map((c) => {
  const L = layoutUnit(c.ft, c.unit)
  return checkUnit(L, planUnit(L).items, `${c.project}#${c.unit.number}`)
})
const ms = performance.now() - t0
const r = summarize(list)
const pct = (a: number, b: number) => `${((100 * a) / Math.max(b, 1)).toFixed(1)}%`
console.log(`Квартир: ${r.units}, жилых комнат: ${r.livingRooms}, предметов: ${r.items}, расстановка ${(ms / r.units).toFixed(0)} мс/кв.`)
console.log(`  пересечения предметов:   ${r.overlaps}`)
console.log(`  вне клеток комнаты:      ${r.outside}`)
console.log(`  перекрытые двери:        ${r.blockedDoors}`)
console.log(`  узкие проходы (< 0,7 м): ${r.narrow}`)
console.log(`  пустые жилые комнаты:    ${r.emptyLiving} (${pct(r.emptyLiving, r.livingRooms)})`)
console.log(`  без главного предмета:   ${r.incomplete} (${pct(r.incomplete, r.livingRooms)})`)
console.log(`  санузлы без ванны/душа:  ${r.noWash}`)
console.log(`  зазор до стены: утоплено ${r.sunk}, дальше 6 см ${r.far}`)
if (process.argv.includes('-v')) console.log(JSON.stringify(r.samples, null, 1))
const ok = r.overlaps === 0 && r.blockedDoors === 0 && r.emptyLiving / Math.max(r.livingRooms, 1) < 0.03
console.log(ok ? 'OK: цели выполнены' : 'НЕ ВЫПОЛНЕНО')
process.exitCode = ok ? 0 : 1
