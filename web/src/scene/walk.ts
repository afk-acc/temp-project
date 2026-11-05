import * as THREE from 'three'

/**
 * Прогулка от первого лица: WASD/стрелки + перетаскивание мышью, на телефоне — джойстик и свайп.
 * Столкновения решает функция resolve (мировые координаты → допустимая точка).
 */
export class WalkController {
  enabled = false
  yaw = 0
  pitch = 0
  readonly pos = new THREE.Vector3()
  private keys = new Set<string>()
  private stick = new THREE.Vector2()
  private drag: { id: number; x: number; y: number } | null = null
  private resolve: (p: THREE.Vector3) => THREE.Vector3 = (p) => p

  constructor(private camera: THREE.PerspectiveCamera, private dom: HTMLElement) {
    window.addEventListener('keydown', this.onKey)
    window.addEventListener('keyup', this.onKey)
    dom.addEventListener('pointerdown', this.onDown)
    window.addEventListener('pointermove', this.onMove)
    window.addEventListener('pointerup', this.onUp)
    window.addEventListener('pointercancel', this.onUp)
  }

  start(pos: THREE.Vector3, yaw: number, resolve: (p: THREE.Vector3) => THREE.Vector3) {
    this.enabled = true
    this.pos.copy(pos)
    this.yaw = yaw
    this.pitch = -0.04
    this.resolve = resolve
    this.keys.clear()
    this.stick.set(0, 0)
    this.apply()
  }

  stop() {
    this.enabled = false
    this.keys.clear()
    this.drag = null
  }

  setStick(x: number, y: number) {
    this.stick.set(x, y)
  }

  look(dx: number, dy: number) {
    this.yaw -= dx * 0.0042
    this.pitch = THREE.MathUtils.clamp(this.pitch - dy * 0.0036, -1.25, 1.1)
  }

  update(dt: number) {
    if (!this.enabled) return
    let f = 0
    let s = 0
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) f += 1
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) f -= 1
    if (this.keys.has('KeyA')) s -= 1
    if (this.keys.has('KeyD')) s += 1
    if (this.keys.has('ArrowLeft')) this.yaw += 1.8 * dt
    if (this.keys.has('ArrowRight')) this.yaw -= 1.8 * dt
    f += -this.stick.y
    s += this.stick.x
    const len = Math.hypot(f, s)
    if (len > 1) {
      f /= len
      s /= len
    }
    if (len > 0.01) {
      const speed = (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') ? 3.2 : 1.7) * dt
      const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw))
      const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw))
      // шагаем по осям по очереди — так скользим вдоль стен, а не застреваем
      const step = fwd.multiplyScalar(f * speed).add(right.multiplyScalar(s * speed))
      const nx = this.resolve(this.pos.clone().add(new THREE.Vector3(step.x, 0, 0)))
      this.pos.copy(nx)
      const nz = this.resolve(this.pos.clone().add(new THREE.Vector3(0, 0, step.z)))
      this.pos.copy(nz)
    }
    this.apply()
  }

  private apply() {
    this.camera.position.copy(this.pos)
    this.camera.rotation.order = 'YXZ'
    this.camera.rotation.set(this.pitch, this.yaw, 0)
  }

  private onKey = (e: KeyboardEvent) => {
    if (!this.enabled) return
    if ((e.target as HTMLElement)?.tagName === 'INPUT') return
    if (e.type === 'keydown') this.keys.add(e.code)
    else this.keys.delete(e.code)
    if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault()
  }

  private onDown = (e: PointerEvent) => {
    if (!this.enabled) return
    this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY }
  }

  private onMove = (e: PointerEvent) => {
    if (!this.enabled || !this.drag || e.pointerId !== this.drag.id) return
    this.look(e.clientX - this.drag.x, e.clientY - this.drag.y)
    this.drag.x = e.clientX
    this.drag.y = e.clientY
  }

  private onUp = (e: PointerEvent) => {
    if (this.drag && e.pointerId === this.drag.id) this.drag = null
  }

  dispose() {
    window.removeEventListener('keydown', this.onKey)
    window.removeEventListener('keyup', this.onKey)
    this.dom.removeEventListener('pointerdown', this.onDown)
    window.removeEventListener('pointermove', this.onMove)
    window.removeEventListener('pointerup', this.onUp)
    window.removeEventListener('pointercancel', this.onUp)
  }
}

/** Отталкивание круга радиуса r от прямоугольников (координаты плана) */
export function pushOut(x: number, y: number, r: number, rects: [number, number, number, number][]): [number, number] {
  for (let iter = 0; iter < 3; iter++) {
    let moved = false
    for (const [x0, y0, x1, y1] of rects) {
      const cx = Math.max(x0, Math.min(x, x1))
      const cy = Math.max(y0, Math.min(y, y1))
      const dx = x - cx
      const dy = y - cy
      const d2 = dx * dx + dy * dy
      if (d2 >= r * r) continue
      if (d2 > 1e-10) {
        const d = Math.sqrt(d2)
        x = cx + (dx / d) * r
        y = cy + (dy / d) * r
      } else {
        // центр внутри прямоугольника: выталкиваем по ближайшей стороне
        const opts: [number, number, number][] = [
          [x0 - r, y, x - x0], [x1 + r, y, x1 - x], [x, y0 - r, y - y0], [x, y1 + r, y1 - y],
        ]
        opts.sort((a, b) => a[2] - b[2])
        x = opts[0][0]
        y = opts[0][1]
      }
      moved = true
    }
    if (!moved) break
  }
  return [x, y]
}
