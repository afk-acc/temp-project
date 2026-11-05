/**
 * Положение солнца (упрощённый алгоритм NOAA, точность ~0,5° — для теней и инсоляции достаточно).
 * Азимут — от севера по часовой, высота — над горизонтом, оба в градусах.
 */
const RAD = Math.PI / 180

export interface SunPosition {
  azimuth: number
  altitude: number
}

export function sunPosition(date: Date, lat: number, lon: number): SunPosition {
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

/** Ташкент живёт по UTC+5 круглый год */
export const TASHKENT_UTC_OFFSET = 5

export function tashkentDate(isoDay: string, hours: number): Date {
  const [y, m, d] = isoDay.split('-').map(Number)
  const h = Math.floor(hours)
  const min = Math.round((hours - h) * 60)
  return new Date(Date.UTC(y, m - 1, d, h - TASHKENT_UTC_OFFSET, min))
}

/** Единичный вектор на солнце в системе «восток, север, вверх» */
export function sunVectorENU(p: SunPosition): [number, number, number] {
  const az = p.azimuth * RAD
  const alt = p.altitude * RAD
  return [Math.cos(alt) * Math.sin(az), Math.cos(alt) * Math.cos(az), Math.sin(alt)]
}
