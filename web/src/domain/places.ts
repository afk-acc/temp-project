import type { PlaceCategory } from './types'

export const PLACE_CATEGORY: Record<PlaceCategory, { label: string; color: string; glyph: string }> = {
  metro: { label: 'Метро', color: '#f2c79e', glyph: 'M' },
  shop: { label: 'Магазины и рынки', color: '#4ade80', glyph: '🛒' },
  bank: { label: 'Банки', color: '#60a5fa', glyph: '₸' },
  food: { label: 'Кафе и рестораны', color: '#fb923c', glyph: '☕' },
  edu: { label: 'Школы, сады, вузы', color: '#c084fc', glyph: '🎓' },
  health: { label: 'Здоровье', color: '#f87171', glyph: '✚' },
  sport: { label: 'Спорт', color: '#2dd4bf', glyph: '●' },
  auto: { label: 'Авто', color: '#94a3b8', glyph: '⛽' },
}

export function walkLabel(min: number, dist: number): string {
  return `${min} мин · ${dist < 1000 ? `${Math.round(dist / 10) * 10} м` : `${(dist / 1000).toFixed(1).replace('.', ',')} км`}`
}
