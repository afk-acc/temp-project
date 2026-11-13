/** Форматирование для интерфейса. Цены — только в сумах (закон «О рекламе», ст. 16). */

const nf1 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 1, minimumFractionDigits: 0 })
const nf2 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 2 })
const nf0 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 })
const nf2max = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 0 })

export function formatArea(m2: number, precise = false): string {
  return `${(precise ? nf2 : nf1).format(m2)} м²`
}

export function formatSum(amount: number | null): string {
  if (amount === null) return 'по запросу'
  // 1,03 млрд, а не «1 млрд»: у дорогих квартир разница в десятки миллионов
  if (amount >= 1e9) return `${nf2max.format(amount / 1e9)} млрд сум`
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

/**
 * Юрлицо из госреестра — коротко, для подписи покупателю:
 * "\"NRG-BI\" MAS'ULIYATI CHEKLANGAN JAMIYAT XORIJIY KORXONA" → "NRG-BI МЧЖ ИП".
 */
export function shortLegalName(name: string | null | undefined): string {
  if (!name) return '—'
  return name
    .replace(/MAS[`'ʻʼ‘’]?ULIYATI\s+CHEKLANGAN\s+JAMIYAT/giu, 'МЧЖ')
    .replace(/XORIJIY\s+KORXONA/giu, 'ИП')
    .replace(/[«»"“”]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Дата в будущем (ISO yyyy-mm-dd) — для сроков сдачи: прошедший срок из госреестра не показываем как обещание */
export function isFuture(iso: string | null | undefined, now = new Date()): boolean {
  if (!iso) return false
  return iso > now.toISOString().slice(0, 10)
}
