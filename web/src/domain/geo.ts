/**
 * Системы координат.
 *  - План: метры, X вправо по плану, Y вверх по плану, начало — центр лифтового ядра.
 *  - Мир (ENU): метры, x — восток, y — север от точки госреестра.
 * Верх плана смотрит на азимут building.azimuth_deg.
 */
const RAD = Math.PI / 180

export function planToENU(x: number, y: number, azimuthDeg: number): [number, number] {
  const a = azimuthDeg * RAD
  return [x * Math.cos(a) + y * Math.sin(a), -x * Math.sin(a) + y * Math.cos(a)]
}

export function enuToPlan(e: number, n: number, azimuthDeg: number): [number, number] {
  const a = azimuthDeg * RAD
  return [e * Math.cos(a) - n * Math.sin(a), e * Math.sin(a) + n * Math.cos(a)]
}

/** Азимут направления нормали плана (nx, ny) */
export function planNormalAzimuth(nx: number, ny: number, azimuthDeg: number): number {
  const [e, n] = planToENU(nx, ny, azimuthDeg)
  return ((Math.atan2(e, n) / RAD) + 360) % 360
}

const SIDES = ['север', 'северо-восток', 'восток', 'юго-восток', 'юг', 'юго-запад', 'запад', 'северо-запад']
const SIDES_SHORT = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']

export function sideName(azimuth: number, short = false): string {
  const i = Math.round(((azimuth % 360) + 360) % 360 / 45) % 8
  return short ? SIDES_SHORT[i] : SIDES[i]
}

export function angleDiff(a: number, b: number): number {
  const d = (((a - b) % 360) + 540) % 360 - 180
  return Math.abs(d)
}
