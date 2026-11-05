/** Форматирование для интерфейса. Цены — только в сумах (закон «О рекламе», ст. 16). */

const nf1 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 1, minimumFractionDigits: 0 })
const nf2 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 2 })
const nf0 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 })

export function formatArea(m2: number, precise = false): string {
  return `${(precise ? nf2 : nf1).format(m2)} м²`
}

export function formatSum(amount: number | null): string {
  if (amount === null) return 'по запросу'
  if (amount >= 1e9) return `${nf1.format(amount / 1e9)} млрд сум`
  if (amount >= 1e6) return `${nf1.format(amount / 1e6)} млн сум`
  return `${nf0.format(amount)} сум`
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = Math.round(minutes % 60)
  if (h === 0) return `${m} мин`
  if (m === 0) return `${h} ч`
  return `${h} ч ${m} мин`
}

export function formatDate(iso: string | null): string {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}.${m}.${y}`
}

export function plural(n: number, one: string, few: string, many: string): string {
  const a = Math.abs(n) % 100
  const b = a % 10
  if (a > 10 && a < 20) return many
  if (b > 1 && b < 5) return few
  if (b === 1) return one
  return many
}
