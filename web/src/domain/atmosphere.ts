/**
 * Атмосфера сцены: сезон, погода, время суток. Чистая логика без three.js.
 *
 * Сезон задаёт дату для солнца (равноденствие/солнцестояние — по ним удобно отвечать на вопросы покупателя
 * «сколько солнца зимой») и вид ландшафта: цвет травы и листвы, снег зимой.
 */
export type Season = 'winter' | 'spring' | 'summer' | 'autumn'
export type Weather = 'clear' | 'cloudy' | 'rain' | 'snow'

export interface SeasonInfo {
  id: Season
  label: string
  /** месяц-день даты солнца */
  md: string
  dateLabel: string
  hint: string
}

export const SEASONS: SeasonInfo[] = [
  { id: 'winter', label: 'Зима', md: '12-21', dateLabel: '21 дек', hint: 'Солнце на 21 декабря — самый короткий день года' },
  { id: 'spring', label: 'Весна', md: '03-21', dateLabel: '21 мар', hint: 'Солнце на 21 марта — весеннее равноденствие' },
  { id: 'summer', label: 'Лето', md: '06-21', dateLabel: '21 июн', hint: 'Солнце на 21 июня — самый длинный день года' },
  { id: 'autumn', label: 'Осень', md: '09-23', dateLabel: '23 сен', hint: 'Солнце на 23 сентября — осеннее равноденствие' },
]

export interface WeatherInfo {
  id: Weather
  label: string
}

export const WEATHERS: WeatherInfo[] = [
  { id: 'clear', label: 'Ясно' },
  { id: 'cloudy', label: 'Облачно' },
  { id: 'rain', label: 'Дождь' },
  { id: 'snow', label: 'Снег' },
]

export function seasonDay(s: Season, year = new Date().getFullYear()): string {
  return `${year}-${SEASONS.find((x) => x.id === s)!.md}`
}

export function seasonOf(d: Date): Season {
  const m = d.getMonth() + 1
  if (m === 12 || m <= 2) return 'winter'
  if (m <= 5) return 'spring'
  if (m <= 8) return 'summer'
  return 'autumn'
}

/** Насколько небо закрыто облаками, 0…1 */
export const WEATHER_COVER: Record<Weather, number> = { clear: 0, cloudy: 0.6, rain: 1, snow: 0.92 }

/**
 * Доля квартир с включённым светом в зависимости от часа: вечером почти все дома, глубокой ночью — единицы.
 * Кусочно-линейно по опорным точкам (час → доля).
 */
const OCCUPANCY: [number, number][] = [
  [0, 0.34], [1, 0.2], [3, 0.1], [5, 0.14], [6.5, 0.42], [8, 0.3], [12, 0.22],
  [17, 0.55], [19, 0.78], [21.5, 0.8], [23, 0.55], [24, 0.34],
]

export function litFraction(hour: number): number {
  const h = ((hour % 24) + 24) % 24
  for (let i = 1; i < OCCUPANCY.length; i++) {
    const [h1, v1] = OCCUPANCY[i]
    const [h0, v0] = OCCUPANCY[i - 1]
    if (h <= h1) return v0 + ((v1 - v0) * (h - h0)) / (h1 - h0)
  }
  return OCCUPANCY[0][1]
}
