import * as THREE from 'three'
import { weatherize } from './atmosphere'

/** Палитра по рендеру застройщика: светлый камень, бронзовые ламели, тёмное стекло */
function woodTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 512
  const g = c.getContext('2d')!
  const plankH = 64
  for (let y = 0; y < 512; y += plankH) {
    let x = -((y / plankH) % 3) * 120
    while (x < 512) {
      const w = 260 + ((x * 7 + y * 13) % 140)
      const tone = 168 + ((x * 31 + y * 17) % 26)
      g.fillStyle = `rgb(${tone + 28}, ${tone - 14}, ${tone - 62})`
      g.fillRect(x, y, w, plankH)
      for (let i = 0; i < 9; i++) {
        g.strokeStyle = `rgba(90, 60, 30, ${0.05 + ((i * 13 + x) % 7) / 100})`
        g.beginPath()
        const yy = y + 6 + i * 6.5
        g.moveTo(x, yy)
        g.bezierCurveTo(x + w / 3, yy + 2, x + (2 * w) / 3, yy - 2, x + w, yy)
        g.stroke()
      }
      g.fillStyle = 'rgba(60, 40, 20, 0.35)'
      g.fillRect(x, y, 2, plankH)
      x += w
    }
    g.fillStyle = 'rgba(60, 40, 20, 0.4)'
    g.fillRect(0, y, 512, 2)
  }
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}

/**
 * Плитка мощения: крупный формат 2×1 м вразбежку, у каждой плиты свой тон — так мощение читается
 * и с высоты птичьего полёта, а мелких швов, которые рябят издалека, нет (512 px = 8×8 м, UV в метрах / 8).
 */
function pavingTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 512
  const g = c.getContext('2d')!
  const tw = 128
  const th = 64
  for (let row = 0; row < 512 / th; row++) {
    const shift = (row % 2) * (tw / 2)
    for (let x = -shift; x < 512; x += tw) {
      const v = 232 + ((((x + 128) * 37 + row * 59) % 17) - 8)
      g.fillStyle = `rgb(${v}, ${v - 3}, ${v - 9})`
      g.fillRect(x, row * th, tw, th)
      g.fillStyle = 'rgba(70, 64, 56, 0.26)'
      g.fillRect(x, row * th, 3, th)
    }
    g.fillStyle = 'rgba(70, 64, 56, 0.26)'
    g.fillRect(0, row * th, 512, 3)
  }
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}

/**
 * Плоские слои земли лежат в сантиметрах друг над другом: издалека буфер глубины их не различает
 * и они мерцают. Поэтому у каждого слоя свой polygonOffset — чем выше уровень, тем ближе к камере.
 * Только units (шаг точности буфера), без factor: factor на косом виде выдвигает слой на метр
 * и тот закрывает газоны и низ стен.
 */
function flat<T extends THREE.Material>(m: T, level: number): T {
  m.polygonOffset = level > 0
  m.polygonOffsetFactor = 0
  m.polygonOffsetUnits = -level * 2
  return m
}

/** Порядок слоёв земли снизу вверх (см. context.ts) */
export const GROUND_LAYER = { ground: 0, green: 1, pitch: 2, water: 3, path: 4, lane: 5, paving: 6, sidewalk: 7, road: 8 } as const

export function createMaterials() {
  const wood = woodTexture()
  wood.repeat.set(0.5, 0.5)
  const paving = pavingTexture()
  const L = GROUND_LAYER
  return {
    stone: weatherize(new THREE.MeshStandardMaterial({ color: 0xd6c3a6, roughness: 0.82, metalness: 0 }), { snow: 1, wet: 0.35, uplight: true }),
    band: weatherize(new THREE.MeshStandardMaterial({ color: 0xc9b597, roughness: 0.7, metalness: 0.05 }), { snow: 1, wet: 0.35, uplight: true }),
    bronze: weatherize(new THREE.MeshStandardMaterial({ color: 0x9c6b46, roughness: 0.38, metalness: 0.65 }), { snow: 0.7, wet: 0.2 }),
    slab: weatherize(new THREE.MeshStandardMaterial({ color: 0xbfb6a8, roughness: 0.9 }), { snow: 1, wet: 0.6 }),
    glass: weatherize(new THREE.MeshPhysicalMaterial({
      color: 0x3f5463, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.78,
      envMapIntensity: 1.4, side: THREE.DoubleSide, depthWrite: false,
    }), { windows: 'glass' }),
    glassHover: new THREE.MeshPhysicalMaterial({
      color: 0xd99a62, emissive: 0xc8875a, emissiveIntensity: 0.55, roughness: 0.1, metalness: 0.1,
      transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false,
    }),
    glassInside: new THREE.MeshPhysicalMaterial({
      color: 0xdfe9ef, roughness: 0.02, metalness: 0, transparent: true, opacity: 0.12,
      side: THREE.DoubleSide, depthWrite: false,
    }),
    wallInt: new THREE.MeshStandardMaterial({ color: 0xebe6de, roughness: 0.92 }),
    wallCut: new THREE.MeshStandardMaterial({ color: 0x2a2d33, roughness: 0.85 }),
    floorWood: new THREE.MeshStandardMaterial({ map: wood, color: 0xfff0e0, roughness: 0.55, metalness: 0 }),
    floorCut: new THREE.MeshStandardMaterial({ color: 0xe9e4dc, roughness: 0.95 }),
    ceiling: new THREE.MeshStandardMaterial({ color: 0xf6f4f0, roughness: 0.95, side: THREE.DoubleSide }),
    // крыша подиума C1 (не слой земли)
    plaza: weatherize(new THREE.MeshStandardMaterial({ color: 0xd9d1c2, roughness: 0.9 }), { snow: 0.9, wet: 1 }),
    // слои земли: порядок — GROUND_LAYER (flat), снег и мокрый асфальт — weatherize (atmosphere.ts)
    ground: flat(weatherize(new THREE.MeshStandardMaterial({ color: 0xc9c2b4, roughness: 1 }), { snow: 1, wet: 0.7 }), L.ground),
    green: flat(weatherize(new THREE.MeshStandardMaterial({ color: 0x8aa66a, roughness: 1 }), { snow: 1, wet: 0.35 }), L.green),
    pitch: flat(weatherize(new THREE.MeshStandardMaterial({ color: 0x6f9a6a, roughness: 1 }), { snow: 1, wet: 0.4 }), L.pitch),
    water: flat(new THREE.MeshStandardMaterial({ color: 0x3f6f86, roughness: 0.12, metalness: 0.35 }), L.water),
    path: flat(weatherize(new THREE.MeshStandardMaterial({ color: 0xc7beae, roughness: 1 }), { snow: 0.85, wet: 0.9 }), L.path),
    lane: flat(weatherize(new THREE.MeshStandardMaterial({ color: 0x55585d, roughness: 0.95 }), { snow: 0.5, wet: 1 }), L.lane),
    paving: flat(weatherize(new THREE.MeshStandardMaterial({ map: paving, color: 0xe6dccb, roughness: 0.92 }), { snow: 0.9, wet: 1 }), L.paving),
    sidewalk: flat(weatherize(new THREE.MeshStandardMaterial({ map: paving, color: 0xd2cdc4, roughness: 0.95 }), { snow: 0.9, wet: 1 }), L.sidewalk),
    road: flat(weatherize(new THREE.MeshStandardMaterial({ color: 0x4a4d52, roughness: 0.95 }), { snow: 0.5, wet: 1 }), L.road),
    // сады во дворе: газон на 16 см выше плитки, бортик из светлого камня
    lawn: weatherize(new THREE.MeshStandardMaterial({ color: 0x93b86a, roughness: 1 }), { snow: 1, wet: 0.35 }),
    curb: weatherize(new THREE.MeshStandardMaterial({ color: 0xe9e3d8, roughness: 0.85 }), { snow: 1, wet: 0.6 }),
    context: weatherize(new THREE.MeshStandardMaterial({ color: 0xe2ddd4, roughness: 0.9 }), { snow: 1, wet: 0.45, windows: 'context' }),
    // цвет кроны и куста задаётся по экземплярам (сезон), материал — белый множитель
    treeCrown: weatherize(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true }), { snow: 1, wet: 0.2 }),
    bush: weatherize(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true }), { snow: 1, wet: 0.2 }),
    treeTrunk: new THREE.MeshStandardMaterial({ color: 0x6b5442, roughness: 1 }),
    lampPole: weatherize(new THREE.MeshStandardMaterial({ color: 0x3a3d42, roughness: 0.5, metalness: 0.6 }), { snow: 0.6, wet: 0.3 }),
    pick: new THREE.MeshBasicMaterial({ visible: false }),
  }
}

export type Materials = ReturnType<typeof createMaterials>
