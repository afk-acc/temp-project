/**
 * Положение солнца по упрощённому алгоритму NOAA / Astronomical Almanac (точность ~0,01° на 1950–2050 гг.)
 * с поправкой на атмосферную рефракцию: у горизонта воздух «приподнимает» солнце на ~0,5°,
 * поэтому видимый восход раньше геометрического на 2–3 минуты.
 * Азимут — от севера по часовой, высота — видимая, над горизонтом, оба в градусах.
 */
const RAD = Math.PI / 180

export interface SunPosition {
  azimuth: number
  /** видимая высота (с рефракцией) */
  altitude: number
}

/** Истинная (геометрическая) позиция без рефракции */
function trueSun(date: Date, lat: number, lon: number): SunPosition {
  const jd = date.getTime() / 86400000 + 2440587.5
  const n = jd - 2451545.0
  const L = (280.46 + 0.9856474 * n) % 360
  const g = ((357.528 + 0.9856003 * n) % 360) * RAD
  const lambda = (L + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * RAD
  const eps = (23.439 - 0.0000004 * n) * RAD
  const ra = Math.atan2(Math.cos(eps) * Math.sin(lambda), Math.cos(lambda))
  const dec = Math.asin(Math.sin(eps) * Math.sin(lambda))
  const gmst = (18.697374558 + 24.06570982441908 * n) % 24
  const lst = (gmst * 15 + lon) * RAD
  const ha = lst - ra
  const phi = lat * RAD
  const alt = Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(ha))
  const az = Math.atan2(-Math.sin(ha), Math.tan(dec) * Math.cos(phi) - Math.sin(phi) * Math.cos(ha))
  return { azimuth: ((az / RAD) + 360) % 360, altitude: alt / RAD }
}

/**
 * Атмосферная рефракция по формуле Сэмундссона (угловые минуты → градусы), стандартные 10 °C и 1010 гПа.
 * Ниже −1° не применяется: солнце уже под горизонтом.
 */
export function refraction(trueAltitude: number): number {
  const h = trueAltitude
  if (h < -1) return 0
  return 1.02 / Math.tan((h + 10.3 / (h + 5.11)) * RAD) / 60
}

export function sunPosition(date: Date, lat: number, lon: number): SunPosition {
  const p = trueSun(date, lat, lon)
  return { azimuth: p.azimuth, altitude: p.altitude + refraction(p.altitude) }
}

/** Ташкент живёт по UTC+5 круглый год */
export const TASHKENT_UTC_OFFSET = 5

export function tashkentDate(isoDay: string, hours: number): Date {
  const [y, m, d] = isoDay.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d) + (hours - TASHKENT_UTC_OFFSET) * 3600000)
}

/** Единичный вектор на солнце в системе «восток, север, вверх» */
export function sunVectorENU(p: SunPosition): [number, number, number] {
  const az = p.azimuth * RAD
  const alt = p.altitude * RAD
  return [Math.cos(alt) * Math.sin(az), Math.cos(alt) * Math.cos(az), Math.sin(alt)]
}

export interface SunDay {
  /** часы по местному времени, null — полярный день/ночь (в Ташкенте не бывает) */
  sunrise: number | null
  sunset: number | null
  /** истинный полдень и высота солнца в нём */
  noon: number
  noonAltitude: number
  /** длина светового дня, часы */
  dayLength: number
}

/**
 * Восход, закат, полдень. Восход/закат — когда верхний край диска касается горизонта: истинный центр на −0,833°
 * (0,567° рефракции + 0,266° радиус диска) — так считают астрономические ежегодники и timeanddate.
 * Корни ищутся бисекцией до 1 секунды.
 */
export function sunDay(isoDay: string, lat: number, lon: number): SunDay {
  const alt = (h: number) => trueSun(tashkentDate(isoDay, h), lat, lon).altitude
  // полдень: максимум высоты (золотое сечение на 6…18 ч)
  let a = 6, b = 18
  const gr = (Math.sqrt(5) - 1) / 2
  for (let i = 0; i < 60; i++) {
    const c = b - gr * (b - a)
    const d = a + gr * (b - a)
    if (alt(c) > alt(d)) b = d
    else a = c
  }
  const noon = (a + b) / 2
  const H0 = -0.833
  const root = (lo: number, hi: number, rising: boolean): number | null => {
    const f = (h: number) => alt(h) - H0
    if ((f(lo) > 0) === (f(hi) > 0)) return null
    for (let i = 0; i < 40; i++) {
      const m = (lo + hi) / 2
      if ((f(m) > 0) === rising) hi = m
      else lo = m
    }
    return (lo + hi) / 2
  }
  const sunrise = root(noon - 12, noon, true)
  const sunset = root(noon, noon + 12, false)
  return {
    sunrise,
    sunset,
    noon,
    noonAltitude: alt(noon) + refraction(alt(noon)),
    dayLength: sunrise !== null && sunset !== null ? sunset - sunrise : alt(noon) > 0 ? 24 : 0,
  }
}

/** «7:54» из часов */
export function clockLabel(hours: number): string {
  const total = Math.round(hours * 60)
  const h = Math.floor(total / 60) % 24
  const m = total % 60
  return `${h}:${String(m).padStart(2, '0')}`
}
