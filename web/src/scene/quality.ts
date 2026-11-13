/**
 * Адаптивное качество: разрешение рендера (pixelRatio) подстраивается под видеокарту.
 *
 * Раз в секунду смотрим средний FPS. Ниже 48 — снижаем pixelRatio на шаг, выше 57 три секунды подряд —
 * пробуем поднять. Уровень, на котором уже была просадка, на 30 с запоминается как «потолок»: так качество
 * не качается туда-обратно каждые пару секунд. Секунды с длинным кадром (компиляция шейдеров при входе
 * в квартиру, переключение вкладки) в расчёт не идут.
 *
 * Режим 'high' — всегда максимум (для мощной машины или снимков экрана).
 */
export type QualityMode = 'auto' | 'high'

const STEP = 0.25
const LOW_FPS = 48
const HIGH_FPS = 57
const CEIL_MS = 30_000

export class AdaptiveQuality {
  mode: QualityMode = 'auto'
  private pr: number
  private frames = 0
  private acc = 0
  private spike = false
  private goodSecs = 0
  private ceil = Infinity
  private ceilUntil = 0

  constructor(
    readonly max: number,
    readonly min = 1,
  ) {
    this.pr = max
  }

  get pixelRatio() {
    return this.pr
  }

  setMode(mode: QualityMode): number {
    this.mode = mode
    this.reset()
    this.ceil = Infinity
    this.pr = this.max
    return this.pr
  }

  /** сбросить окно замера (смена режима сцены: первые кадры не показательны) */
  reset() {
    this.window()
    this.goodSecs = 0
  }

  private window() {
    this.frames = 0
    this.acc = 0
    this.spike = false
  }

  /** dtMs — реальная длительность кадра; возвращает новый pixelRatio, если его надо сменить */
  frame(dtMs: number, now = performance.now()): number | null {
    if (this.mode !== 'auto' || this.max <= this.min) return null
    if (dtMs > 250) this.spike = true
    this.frames++
    this.acc += dtMs
    if (this.acc < 1000) return null
    const fps = (this.frames * 1000) / this.acc
    const spike = this.spike
    this.window()
    if (spike) return null
    if (now > this.ceilUntil) this.ceil = Infinity
    if (fps < LOW_FPS && this.pr > this.min) {
      this.ceil = this.pr
      this.ceilUntil = now + CEIL_MS
      // сильная просадка — сразу на два шага
      const step = fps < LOW_FPS * 0.7 ? STEP * 2 : STEP
      this.pr = Math.max(this.min, round(this.pr - step))
      this.goodSecs = 0
      return this.pr
    }
    if (fps < HIGH_FPS) this.goodSecs = 0
    else if (this.pr < this.max) {
      this.goodSecs++
      const next = Math.min(this.max, round(this.pr + STEP))
      if (this.goodSecs >= 3 && next < this.ceil) {
        this.goodSecs = 0
        this.pr = next
        return this.pr
      }
    }
    return null
  }
}

const round = (x: number) => Math.round(x * 100) / 100
