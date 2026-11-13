import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import type { StyleKit } from './styles'
import { art as artTex } from './textures'

/**
 * Параметрическая мебель. Каждый предмет — группа: начало координат в центре следа на полу,
 * ширина по x, глубина по z, лицевая сторона смотрит в +z (спинкой к стене в −z).
 */
type M = THREE.Material

function mesh(geo: THREE.BufferGeometry, m: M, x: number, y: number, z: number): THREE.Mesh {
  const o = new THREE.Mesh(geo, m)
  o.position.set(x, y, z)
  o.castShadow = true
  o.receiveShadow = true
  return o
}

/** Брус: низ на высоте y, центр по x и z; r — скругление */
function B(p: THREE.Object3D, m: M, w: number, h: number, d: number, x: number, y: number, z: number, r = 0): THREE.Mesh {
  const geo = r > 0 ? new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2, h / 2, d / 2)) : new THREE.BoxGeometry(w, h, d)
  const o = mesh(geo, m, x, y + h / 2, z)
  p.add(o)
  return o
}

function C(p: THREE.Object3D, m: M, r0: number, r1: number, h: number, x: number, y: number, z: number, seg = 16): THREE.Mesh {
  const o = mesh(new THREE.CylinderGeometry(r0, r1, h, seg), m, x, y + h / 2, z)
  p.add(o)
  return o
}

function legs(p: THREE.Object3D, k: StyleKit, w: number, d: number, h: number, inset = 0.06) {
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x = sx * (w / 2 - inset), z = sz * (d / 2 - inset)
    if (k.sofaLegs === 'metal' || k.id === 'loft') C(p, k.metal, 0.012, 0.012, h, x, 0, z, 8)
    else C(p, k.id === 'neoclassic' ? k.metal : k.woodFurniture, 0.022, 0.014, h, x, 0, z, 10)
  }
}

// ---------- гостиная ----------

export function sofa(k: StyleKit, W: number, D = 0.95): THREE.Group {
  const g = new THREE.Group()
  g.name = 'sofa'
  const legH = k.sofaLegs === 'block' ? 0 : 0.12
  const arm = k.id === 'loft' ? 0.22 : 0.16
  if (legH) legs(g, k, W - 0.1, D - 0.1, legH)
  B(g, k.upholstery, W, 0.24, D, 0, legH, 0, 0.04)
  const n = W > 2.0 ? 3 : 2
  const sw = (W - arm * 2) / n
  for (let i = 0; i < n; i++) {
    const x = -W / 2 + arm + sw * (i + 0.5)
    B(g, k.upholstery, sw - 0.01, 0.16, D - 0.26, x, legH + 0.24, 0.1, 0.06)
    B(g, k.upholstery, sw - 0.01, 0.44, 0.24, x, legH + 0.26, -D / 2 + 0.16, 0.08)
  }
  for (const s of [-1, 1]) B(g, k.upholstery, arm, 0.36, D, s * (W / 2 - arm / 2), legH + 0.24, 0, 0.06)
  // декоративные подушки
  for (const s of [-1, 1]) {
    const c = B(g, k.cushion, 0.44, 0.42, 0.13, s * (W / 2 - arm - 0.3), legH + 0.42, -D / 2 + 0.36, 0.06)
    c.rotation.set(-0.25, s * 0.2, s * 0.08)
  }
  return g
}

export function armchair(k: StyleKit): THREE.Group {
  const g = new THREE.Group()
  g.name = 'armchair'
  const W = 0.82, D = 0.84
  legs(g, k, W - 0.1, D - 0.1, 0.16)
  const m = k.id === 'neoclassic' ? k.upholsteryAlt : k.id === 'loft' ? k.upholstery : k.upholsteryAlt
  B(g, m, W, 0.2, D, 0, 0.16, 0, 0.04)
  B(g, m, W - 0.3, 0.14, D - 0.24, 0, 0.36, 0.08, 0.05)
  B(g, m, W - 0.04, 0.5, 0.18, 0, 0.36, -D / 2 + 0.11, 0.07)
  for (const s of [-1, 1]) B(g, m, 0.14, 0.28, D, s * (W / 2 - 0.07), 0.36, 0, 0.05)
  return g
}

export function coffeeTable(k: StyleKit, W = 1.1, D = 0.6): THREE.Group {
  const g = new THREE.Group()
  g.name = 'coffeeTable'
  if (k.id === 'neoclassic') {
    B(g, k.countertop, W, 0.03, D, 0, 0.4, 0, 0.01)
    for (const s of [-1, 1]) B(g, k.metal, 0.03, 0.4, D - 0.1, s * (W / 2 - 0.08), 0, 0)
  } else if (k.id === 'loft') {
    B(g, k.woodDark, W, 0.06, D, 0, 0.36, 0, 0.005)
    for (const s of [-1, 1]) {
      B(g, k.metal, 0.04, 0.36, 0.04, s * (W / 2 - 0.08), 0, -D / 2 + 0.06)
      B(g, k.metal, 0.04, 0.36, 0.04, s * (W / 2 - 0.08), 0, D / 2 - 0.06)
      B(g, k.metal, 0.04, 0.04, D - 0.08, s * (W / 2 - 0.08), 0.02, 0)
    }
  } else {
    B(g, k.woodFurniture, W, 0.035, D, 0, 0.38, 0, 0.015)
    legs(g, k, W, D, 0.38, 0.08)
  }
  // книги и ваза
  B(g, k.upholsteryAlt, 0.26, 0.04, 0.2, -W * 0.22, 0.42, 0)
  B(g, k.cushion, 0.24, 0.03, 0.18, -W * 0.22, 0.46, 0.01)
  C(g, k.pot, 0.05, 0.04, 0.16, W * 0.25, 0.41, 0.05)
  return g
}

export function tvUnit(k: StyleKit, W: number): THREE.Group {
  const g = new THREE.Group()
  g.name = 'tvUnit'
  const D = 0.4
  const body = k.id === 'loft' ? k.woodDark : k.id === 'neoclassic' ? k.woodFurniture : k.woodFurniture
  B(g, body, W, 0.42, D, 0, 0.12, 0, 0.01)
  if (k.id !== 'loft') legs(g, k, W - 0.1, D - 0.1, 0.12)
  else B(g, k.metal, W - 0.1, 0.12, D - 0.1, 0, 0, 0)
  for (let i = 1; i < 3; i++) B(g, k.metal, 0.005, 0.36, 0.005, -W / 2 + (W * i) / 3, 0.15, D / 2)
  // телевизор на стене
  const tw = Math.min(1.45, W - 0.2)
  B(g, k.screen, tw, tw * 0.565, 0.035, 0, 0.9, -D / 2 + 0.03, 0.005)
  return g
}

export function rugMesh(k: StyleKit, W: number, D: number): THREE.Mesh {
  const geo = new THREE.BoxGeometry(W, 0.012, D)
  const uv = geo.attributes.uv as THREE.BufferAttribute
  void uv
  const m = mesh(geo, k.rug, 0, 0.025, 0)
  m.castShadow = false
  return m
}

export function floorLamp(k: StyleKit): THREE.Group {
  const g = new THREE.Group()
  g.name = 'floorLamp'
  C(g, k.metal, 0.14, 0.15, 0.025, 0, 0, 0, 24)
  C(g, k.metal, 0.012, 0.012, 1.45, 0, 0.02, 0, 8)
  const shade = C(g, k.lampShade, 0.17, 0.23, 0.3, 0, 1.4, 0, 28)
  shade.castShadow = false
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 8), k.bulb)
  bulb.position.set(0, 1.5, 0)
  g.add(bulb)
  return g
}

export function plant(k: StyleKit, h = 1.2): THREE.Group {
  const g = new THREE.Group()
  g.name = 'plant'
  C(g, k.pot, 0.17, 0.13, 0.36, 0, 0, 0, 20)
  const r = mulberry(Math.round(h * 1000))
  for (let i = 0; i < 26; i++) {
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.45, 4, 1, true), k.plantLeaf)
    const a = r() * Math.PI * 2
    const t = 0.25 + r() * 0.75
    leaf.position.set(Math.cos(a) * 0.12 * t, 0.36 + t * (h - 0.45), Math.sin(a) * 0.12 * t)
    leaf.rotation.set(Math.cos(a) * (0.5 + r() * 0.6), 0, -Math.sin(a) * (0.5 + r() * 0.6))
    leaf.scale.set(1, 1, 0.25)
    leaf.castShadow = true
    g.add(leaf)
  }
  return g
}

export function artwork(k: StyleKit, W: number, H: number, variant: number): THREE.Group {
  const g = new THREE.Group()
  g.name = 'artwork'
  B(g, k.frame, W, H, 0.035, 0, 0, 0.0175)
  const canvas = new THREE.Mesh(
    new THREE.PlaneGeometry(W - 0.06, H - 0.06),
    new THREE.MeshStandardMaterial({ map: artTex(k.id, variant), roughness: 0.85, userData: { owned: true } }),
  )
  canvas.position.set(0, H / 2, 0.036)
  g.add(canvas)
  return g
}

// ---------- спальня ----------

export function bed(k: StyleKit, W: number, L = 2.05): THREE.Group {
  const g = new THREE.Group()
  g.name = 'bed'
  const frame = k.id === 'loft' ? k.woodDark : k.id === 'neoclassic' ? k.upholstery : k.upholsteryAlt
  B(g, frame, W + 0.08, 0.28, L, 0, 0.06, 0, 0.03)
  legs(g, k, W, L - 0.1, 0.06)
  B(g, k.linen, W - 0.04, 0.22, L - 0.12, 0, 0.32, 0.02, 0.06)
  // одеяло со свесом и отворот
  B(g, k.duvet, W + 0.04, 0.07, L * 0.66, 0, 0.5, L / 2 - L * 0.33 - 0.02, 0.035)
  B(g, k.duvet, W + 0.06, 0.2, 0.03, 0, 0.32, L / 2 - 0.035, 0.012)
  for (const s of [-1, 1]) B(g, k.duvet, 0.03, 0.2, L * 0.66, s * (W / 2 + 0.035), 0.32, L / 2 - L * 0.33 - 0.02, 0.012)
  B(g, k.linen, W + 0.02, 0.05, 0.3, 0, 0.52, L / 2 - L * 0.66 - 0.02, 0.025)
  // подушки
  const n = W >= 1.3 ? 2 : 1
  for (let i = 0; i < n; i++) {
    const x = n === 1 ? 0 : (i - 0.5) * (W / 2)
    B(g, k.linen, W / n - 0.12, 0.15, 0.42, x, 0.52, -L / 2 + 0.3, 0.07)
    const c = B(g, k.cushion, W / n - 0.3, 0.3, 0.12, x, 0.58, -L / 2 + 0.52, 0.05)
    c.rotation.x = -0.3
  }
  // изголовье
  const hh = k.id === 'neoclassic' ? 1.25 : 1.05
  const head = B(g, k.id === 'loft' ? k.woodDark : frame, W + 0.2, hh, 0.09, 0, 0, -L / 2 - 0.045, k.id === 'loft' ? 0.01 : 0.04)
  void head
  if (k.id === 'neoclassic') for (let i = -2; i <= 2; i++) B(g, k.upholstery, 0.012, hh - 0.35, 0.02, (i * (W + 0.2)) / 5.5, 0.45, -L / 2 + 0.005)
  return g
}

export function nightstand(k: StyleKit, withLamp = true): THREE.Group {
  const g = new THREE.Group()
  g.name = 'nightstand'
  const m = k.id === 'loft' ? k.woodDark : k.woodFurniture
  B(g, m, 0.46, 0.42, 0.4, 0, 0.12, 0, 0.01)
  if (k.id === 'loft') B(g, k.metal, 0.42, 0.12, 0.36, 0, 0, 0)
  else legs(g, k, 0.46, 0.4, 0.12)
  B(g, k.handle, 0.12, 0.012, 0.012, 0, 0.42, 0.205)
  if (withLamp) {
    C(g, k.id === 'neoclassic' ? k.metal : k.pot, 0.06, 0.07, 0.26, 0, 0.54, -0.04, 20)
    const shade = C(g, k.lampShade, 0.1, 0.14, 0.18, 0, 0.78, -0.04, 24)
    shade.castShadow = false
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), k.bulb)
    bulb.position.set(0, 0.84, -0.04)
    g.add(bulb)
  }
  return g
}

export function wardrobe(k: StyleKit, W: number, H = 2.35, D = 0.6): THREE.Group {
  const g = new THREE.Group()
  g.name = 'wardrobe'
  const front = k.id === 'loft' ? k.woodDark : k.id === 'neoclassic' ? k.woodFurniture : k.kitchenFront
  B(g, front, W, H - 0.08, D, 0, 0.08, 0)
  B(g, k.skirting, W - 0.04, 0.08, D - 0.06, 0, 0, -0.03)
  const doors = Math.max(2, Math.round(W / 0.5))
  for (let i = 1; i < doors; i++) B(g, k.metal, 0.004, H - 0.12, 0.004, -W / 2 + (W * i) / doors, 0.1, D / 2)
  for (let i = 0; i < doors; i++) {
    const x = -W / 2 + (W * (i + 0.5)) / doors + (i % 2 ? -1 : 1) * (W / doors / 2 - 0.05)
    B(g, k.handle, 0.014, 0.32, 0.02, x, 1.0, D / 2 + 0.01)
  }
  if (k.id === 'neoclassic') for (let i = 0; i < doors; i++) {
    const x = -W / 2 + (W * (i + 0.5)) / doors
    B(g, k.skirting, W / doors - 0.14, 0.012, 0.01, x, 0.4, D / 2 + 0.002)
    B(g, k.skirting, W / doors - 0.14, 0.012, 0.01, x, H - 0.4, D / 2 + 0.002)
  }
  return g
}

export function desk(k: StyleKit, W = 1.2): THREE.Group {
  const g = new THREE.Group()
  g.name = 'desk'
  B(g, k.id === 'loft' ? k.woodDark : k.woodFurniture, W, 0.03, 0.6, 0, 0.72, 0, 0.008)
  legs(g, k, W, 0.6, 0.72, 0.04)
  // ноутбук и лампа
  B(g, k.metal, 0.33, 0.012, 0.23, -0.1, 0.75, 0.05)
  const lid = B(g, k.screen, 0.33, 0.22, 0.008, -0.1, 0.76, -0.06)
  lid.rotation.x = -0.25
  C(g, k.metal, 0.06, 0.07, 0.02, W / 2 - 0.15, 0.75, -0.15, 16)
  C(g, k.metal, 0.008, 0.008, 0.38, W / 2 - 0.15, 0.77, -0.15, 6)
  const sh = C(g, k.lampShade, 0.05, 0.08, 0.1, W / 2 - 0.15, 1.12, -0.1, 16)
  sh.castShadow = false
  g.add(chair(k).translateZ(0.42).rotateY(Math.PI))
  return g
}

export function chair(k: StyleKit): THREE.Group {
  const g = new THREE.Group()
  g.name = 'chair'
  const seat = k.id === 'neoclassic' ? k.upholstery : k.id === 'loft' ? k.upholstery : k.upholsteryAlt
  legs(g, k, 0.44, 0.44, 0.45, 0.03)
  B(g, seat, 0.46, 0.06, 0.46, 0, 0.44, 0, 0.025)
  B(g, k.id === 'scandi' ? k.woodFurniture : seat, 0.44, 0.42, 0.05, 0, 0.5, -0.21, 0.02)
  return g
}

// ---------- кухня ----------

export interface KitchenOpts {
  fridge: 'left' | 'right' | 'none'
  upper: boolean
}

/** Кухонный гарнитур вдоль стены длиной L */
export function kitchenRun(k: StyleKit, L: number, o: KitchenOpts): THREE.Group {
  const g = new THREE.Group()
  g.name = 'kitchenRun'
  const D = 0.62
  let a = -L / 2, b = L / 2
  if (o.fridge !== 'none' && L >= 1.8) {
    const fx = o.fridge === 'right' ? L / 2 - 0.32 : -L / 2 + 0.32
    const fr = k.id === 'loft' ? k.chrome : k.kitchenFront
    B(g, fr, 0.62, 2.05, 0.66, fx, 0, 0.02, 0.01)
    B(g, k.metal, 0.6, 0.004, 0.004, fx, 1.2, 0.36)
    B(g, k.handle, 0.015, 0.4, 0.02, fx + (o.fridge === 'right' ? -0.26 : 0.26), 1.3, 0.37)
    B(g, k.handle, 0.015, 0.3, 0.02, fx + (o.fridge === 'right' ? -0.26 : 0.26), 0.85, 0.37)
    if (o.fridge === 'right') b -= 0.64
    else a += 0.64
  }
  const run = b - a
  const cx = (a + b) / 2
  // мойка — ближе к холодильнику, варочная — ближе к другому торцу; между ними рабочая зона ≥ 0,25 м
  const fromFridge = o.fridge === 'right' ? -1 : 1
  const start = o.fridge === 'right' ? b : a, end = o.fridge === 'right' ? a : b
  const sinkOff = Math.max(0.35, run * 0.28), hobOff = Math.max(0.4, run * 0.26)
  const sx = start + fromFridge * Math.max(0.3, Math.min(sinkOff, run - hobOff - 0.85))
  const hx = end - fromFridge * hobOff
  B(g, k.skirting, run, 0.1, D - 0.08, cx, 0, -0.04)
  B(g, k.kitchenFront, run, 0.76, D - 0.02, cx, 0.1, 0)
  // швы фасадов
  const n = Math.max(2, Math.round(run / 0.6))
  for (let i = 1; i < n; i++) B(g, k.metal, 0.004, 0.74, 0.004, a + (run * i) / n, 0.11, D / 2 - 0.01)
  B(g, k.metal, run, 0.004, 0.004, cx, 0.62, D / 2 - 0.01)
  for (let i = 0; i < n; i++) B(g, k.handle, 0.16, 0.012, 0.02, a + (run * (i + 0.5)) / n, 0.78, D / 2)
  // столешница
  B(g, k.countertop, run + 0.02, 0.04, D + 0.02, cx, 0.86, 0.01, 0.004)
  // мойка и смеситель
  B(g, k.chrome, 0.5, 0.005, 0.4, sx, 0.9, 0.03)
  B(g, k.screen, 0.44, 0.004, 0.34, sx, 0.902, 0.03)
  C(g, k.chrome, 0.018, 0.022, 0.3, sx, 0.9, -0.22, 12)
  B(g, k.chrome, 0.02, 0.02, 0.2, sx, 1.18, -0.13)
  // варочная панель и духовка
  B(g, k.screen, 0.58, 0.006, 0.5, hx, 0.9, 0.02, 0.003)
  B(g, k.screen, 0.58, 0.5, 0.01, hx, 0.2, D / 2 + 0.002)
  // фартук
  if (o.upper) {
    B(g, k.backsplash, run, 0.58, 0.012, cx, 0.9, -D / 2 + 0.006)
    B(g, k.kitchenFront, run, 0.72, 0.34, cx, 1.48, -D / 2 + 0.17)
    for (let i = 1; i < n; i++) B(g, k.metal, 0.004, 0.7, 0.004, a + (run * i) / n, 1.49, -D / 2 + 0.345)
    // подсветка под шкафами
    B(g, k.bulb, run - 0.1, 0.01, 0.02, cx, 1.47, -D / 2 + 0.3)
    // вытяжка
    B(g, k.id === 'loft' ? k.metal : k.chrome, 0.6, 0.06, 0.32, hx, 1.42, -D / 2 + 0.16)
  }
  return g
}

/** Отдельный холодильник: 0,62 × 0,66 м */
export function fridge(k: StyleKit): THREE.Group {
  const g = new THREE.Group()
  g.name = 'fridge'
  const fr = k.id === 'loft' ? k.chrome : k.kitchenFront
  B(g, fr, 0.6, 2.0, 0.64, 0, 0, 0, 0.01)
  B(g, k.metal, 0.58, 0.004, 0.004, 0, 1.2, 0.322)
  B(g, k.handle, 0.015, 0.4, 0.02, -0.25, 1.3, 0.33)
  B(g, k.handle, 0.015, 0.3, 0.02, -0.25, 0.85, 0.33)
  return g
}

export function diningSet(k: StyleKit, seats: 2 | 4 | 6): THREE.Group {
  const g = new THREE.Group()
  g.name = 'diningSet'
  const W = seats === 6 ? 1.8 : seats === 4 ? 1.3 : 0.8
  const D = seats === 2 ? 0.7 : 0.85
  const top = k.id === 'neoclassic' ? k.countertop : k.id === 'loft' ? k.woodDark : k.woodFurniture
  B(g, top, W, 0.04, D, 0, 0.73, 0, k.id === 'scandi' ? 0.02 : 0.006)
  if (k.id === 'loft') for (const s of [-1, 1]) {
    B(g, k.metal, 0.05, 0.73, 0.05, s * (W / 2 - 0.1), 0, -D / 2 + 0.08)
    B(g, k.metal, 0.05, 0.73, 0.05, s * (W / 2 - 0.1), 0, D / 2 - 0.08)
    B(g, k.metal, 0.05, 0.05, D - 0.1, s * (W / 2 - 0.1), 0.05, 0)
  } else legs(g, k, W, D, 0.73, 0.07)
  const per = seats / 2
  for (const s of [-1, 1]) for (let i = 0; i < per; i++) {
    const x = per === 1 ? 0 : -W / 2 + (W * (i + 0.5)) / per
    const c = chair(k)
    c.position.set(x, 0, s * (D / 2 + 0.12))
    c.rotation.y = s > 0 ? Math.PI : 0
    g.add(c)
  }
  // ваза с фруктами
  C(g, k.pot, 0.12, 0.08, 0.08, 0, 0.77, 0, 24)
  return g
}

// ---------- санузел ----------

export function bathtub(k: StyleKit, L = 1.7, W = 0.75): THREE.Group {
  const g = new THREE.Group()
  g.name = 'bathtub'
  const h = 0.56, t = 0.07
  B(g, k.ceramic, L, 0.06, W, 0, 0, 0)
  B(g, k.ceramic, L, h, t, 0, 0, -W / 2 + t / 2, 0.02)
  B(g, k.ceramic, L, h, t, 0, 0, W / 2 - t / 2, 0.02)
  B(g, k.ceramic, t, h, W, -L / 2 + t / 2, 0, 0, 0.02)
  B(g, k.ceramic, t, h, W, L / 2 - t / 2, 0, 0, 0.02)
  // смеситель на стене
  B(g, k.chrome, 0.2, 0.05, 0.08, L / 2 - 0.4, 0.75, -W / 2 - 0.02, 0.01)
  return g
}

/** Душевой поддон со стеклом: боковое стекло со стороны hand (локальный ±x), спереди — неподвижная половина */
export function shower(k: StyleKit, W = 0.9, D = 0.9, hand: 1 | -1 = 1): THREE.Group {
  const g = new THREE.Group()
  g.name = 'shower'
  B(g, k.ceramic, W, 0.05, D, 0, 0, 0, 0.01)
  B(g, k.glass, 0.01, 1.95, D, hand * (W / 2 - 0.005), 0.05, 0)
  B(g, k.glass, W * 0.5, 1.95, 0.01, hand * W * 0.25, 0.05, D / 2 - 0.005)
  B(g, k.chrome, 0.012, 0.012, D, hand * (W / 2 - 0.005), 2.0, 0)
  B(g, k.chrome, W * 0.5, 0.012, 0.012, hand * W * 0.25, 2.0, D / 2 - 0.005)
  C(g, k.chrome, 0.012, 0.012, 0.35, 0, 1.75, -D / 2 + 0.05, 8)
  C(g, k.chrome, 0.12, 0.12, 0.015, 0, 2.08, -D / 2 + 0.2, 24)
  B(g, k.chrome, 0.012, 0.012, 0.16, 0, 2.09, -D / 2 + 0.12)
  return g
}

export function toilet(k: StyleKit): THREE.Group {
  const g = new THREE.Group()
  g.name = 'toilet'
  // подвесной унитаз с инсталляцией
  B(g, k.ceramic, 0.36, 0.34, 0.54, 0, 0.32, 0.05, 0.12)
  B(g, k.ceramic, 0.37, 0.025, 0.5, 0, 0.66, 0.06, 0.1)
  B(g, k.ceramic, 0.22, 0.15, 0.01, 0, 1.0, -0.2)
  return g
}

export function vanity(k: StyleKit, W = 0.8): THREE.Group {
  const g = new THREE.Group()
  g.name = 'vanity'
  const body = k.id === 'loft' ? k.woodDark : k.id === 'neoclassic' ? k.woodFurniture : k.woodFurniture
  B(g, body, W, 0.45, 0.46, 0, 0.38, 0, 0.01)
  B(g, k.ceramic, W, 0.06, 0.48, 0, 0.83, 0.01, 0.02)
  B(g, k.screen, W * 0.55, 0.004, 0.3, 0, 0.885, 0.03)
  C(g, k.chrome, 0.016, 0.02, 0.22, 0, 0.89, -0.17, 12)
  B(g, k.chrome, 0.02, 0.02, 0.14, 0, 1.09, -0.12)
  // зеркало с подсветкой
  B(g, k.mirror, W, 0.9, 0.02, 0, 1.05, -0.22)
  B(g, k.bulb, W - 0.06, 0.02, 0.02, 0, 1.97, -0.2)
  return g
}

export function washer(k: StyleKit): THREE.Group {
  const g = new THREE.Group()
  g.name = 'washer'
  B(g, k.ceramic, 0.6, 0.85, 0.55, 0, 0, 0, 0.02)
  const door = C(g, k.screen, 0.17, 0.17, 0.02, 0, 0, 0, 32)
  door.rotation.x = Math.PI / 2
  door.position.set(0, 0.42, 0.28)
  return g
}

// ---------- прихожая ----------

export function hallUnit(k: StyleKit, W = 1.0): THREE.Group {
  const g = new THREE.Group()
  g.name = 'hallUnit'
  const m = k.id === 'loft' ? k.woodDark : k.woodFurniture
  B(g, m, W, 0.45, 0.35, 0, 0.1, 0, 0.01)
  B(g, k.skirting, W - 0.04, 0.1, 0.3, 0, 0, -0.02)
  B(g, k.mirror, Math.min(0.6, W - 0.2), 1.0, 0.015, 0, 0.95, -0.165)
  B(g, k.frame, Math.min(0.64, W - 0.16), 1.04, 0.012, 0, 0.93, -0.172)
  for (let i = 0; i < 4; i++) C(g, k.handle, 0.012, 0.012, 0.06, -W / 2 + 0.15 + i * 0.2, 1.72, -0.15, 8).rotateX(Math.PI / 2)
  return g
}

// ---------- текстиль, свет, двери ----------

/** Шторы: два собранных полотна по краям окна + карниз (+ тюль во всю ширину) */
export function curtains(k: StyleKit, W: number, H: number): THREE.Group {
  const g = new THREE.Group()
  g.name = 'curtains'
  if (!k.curtain) return g
  const panel = (w: number, m: M, folds: number, amp: number) => {
    const geo = new THREE.PlaneGeometry(w, H, Math.max(8, folds * 6), 1)
    const pos = geo.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin((pos.getX(i) / w) * folds * Math.PI * 2) * amp)
    geo.computeVertexNormals()
    const o = new THREE.Mesh(geo, m)
    o.castShadow = true
    o.receiveShadow = true
    return o
  }
  if (k.sheer) {
    const s = panel(W, k.sheer, Math.round(W * 4), 0.02)
    s.position.set(0, H / 2, 0.06)
    s.castShadow = false
    g.add(s)
  }
  const pw = Math.min(0.45, W * 0.22)
  for (const sd of [-1, 1]) {
    const p = panel(pw, k.curtain, 3, 0.035)
    p.position.set(sd * (W / 2 - pw / 2 + 0.08), H / 2, 0.14)
    g.add(p)
  }
  C(g, k.metal, 0.012, 0.012, W + 0.3, 0, H + 0.02, 0.12, 8).rotateZ(Math.PI / 2)
  return g
}

/** Светильник под потолком; h — высота потолка от пола */
export function ceilingLight(k: StyleKit, h: number, big: boolean): THREE.Group {
  const g = new THREE.Group()
  g.name = 'ceilingLight'
  if (k.lights === 'chandelier' && big) {
    C(g, k.metal, 0.08, 0.08, 0.04, 0, h - 0.04, 0, 20)
    C(g, k.metal, 0.006, 0.006, 0.45, 0, h - 0.48, 0, 6)
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.012, 8, 40), k.metal)
    ring.rotation.x = Math.PI / 2
    ring.position.set(0, h - 0.5, 0)
    g.add(ring)
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2
      const x = Math.cos(a) * 0.32, z = Math.sin(a) * 0.32
      C(g, k.ceramic, 0.018, 0.018, 0.08, x, h - 0.5, z, 10)
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.025, 10, 8), k.bulb)
      bulb.scale.y = 1.6
      bulb.position.set(x, h - 0.38, z)
      g.add(bulb)
    }
  } else if (k.lights === 'edison') {
    const n = big ? 3 : 1
    for (let i = 0; i < n; i++) {
      const x = (i - (n - 1) / 2) * 0.35
      const drop = 0.7 + (i % 2) * 0.15
      C(g, k.metal, 0.003, 0.003, drop, x, h - drop, 0, 4)
      const sh = C(g, k.lampShade, 0.04, 0.14, 0.16, x, h - drop - 0.16, 0, 20)
      sh.castShadow = false
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), k.bulb)
      bulb.scale.y = 1.3
      bulb.position.set(x, h - drop - 0.2, 0)
      g.add(bulb)
    }
  } else {
    // споты по сетке
    const s = big ? 1.2 : 0.8
    for (const dx of [-s / 2, s / 2]) for (const dz of [-s / 2, s / 2]) {
      C(g, k.metal, 0.045, 0.045, 0.012, dx, h - 0.012, dz, 16)
      C(g, k.bulb, 0.03, 0.03, 0.004, dx, h - 0.016, dz, 16)
    }
  }
  return g
}

/** Подвес над столом или островом */
export function pendant(k: StyleKit, h: number, drop = 0.9): THREE.Group {
  const g = new THREE.Group()
  g.name = 'pendant'
  C(g, k.metal, 0.003, 0.003, drop, 0, h - drop, 0, 4)
  const shade = k.lights === 'chandelier'
    ? C(g, k.metal, 0.06, 0.22, 0.2, 0, h - drop - 0.2, 0, 28)
    : C(g, k.lampShade, 0.05, 0.2, 0.18, 0, h - drop - 0.18, 0, 28)
  shade.castShadow = false
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), k.bulb)
  bulb.position.set(0, h - drop - 0.17, 0)
  g.add(bulb)
  return g
}

/** Межкомнатная дверь в проёме ширины w: коробка, наличники, полотно приоткрыто на angle */
export function interiorDoor(k: StyleKit, w: number, thick: number, angle: number, front = false): THREE.Group {
  const g = new THREE.Group()
  g.name = 'interiorDoor'
  const H = 2.08
  const jamb = front ? k.frontDoor : k.doorFrame
  for (const s of [-1, 1]) {
    B(g, jamb, 0.05, H, thick + 0.02, s * (w / 2 - 0.025), 0, 0)
    for (const f of [-1, 1]) B(g, jamb, 0.07, H + 0.07, 0.012, s * (w / 2 + 0.02), 0, f * (thick / 2 + 0.006))
  }
  B(g, jamb, w, 0.05, thick + 0.02, 0, H, 0)
  for (const f of [-1, 1]) B(g, jamb, w + 0.2, 0.07, 0.012, 0, H + 0.0, f * (thick / 2 + 0.006))
  const leafW = w - 0.1
  const hinge = new THREE.Group()
  hinge.position.set(-w / 2 + 0.05, 0, 0)
  const leaf = B(hinge, front ? k.frontDoor : k.doorLeaf, leafW, H - 0.02, 0.04, leafW / 2, 0.01, 0, 0.004)
  void leaf
  B(hinge, k.handle, 0.12, 0.02, 0.05, leafW - 0.1, 1.0, 0, 0.005)
  if (k.id === 'neoclassic' && !front) for (const y of [0.25, 1.2]) B(hinge, k.doorFrame, leafW - 0.18, 0.7, 0.05, leafW / 2, y, 0, 0.01)
  hinge.rotation.y = angle
  g.add(hinge)
  return g
}

function mulberry(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
