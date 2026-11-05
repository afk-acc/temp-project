import * as THREE from 'three'

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

export function createMaterials() {
  const wood = woodTexture()
  wood.repeat.set(0.5, 0.5)
  return {
    stone: new THREE.MeshStandardMaterial({ color: 0xd6c3a6, roughness: 0.82, metalness: 0 }),
    band: new THREE.MeshStandardMaterial({ color: 0xc9b597, roughness: 0.7, metalness: 0.05 }),
    bronze: new THREE.MeshStandardMaterial({ color: 0x9c6b46, roughness: 0.38, metalness: 0.65 }),
    slab: new THREE.MeshStandardMaterial({ color: 0xbfb6a8, roughness: 0.9 }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0x3f5463, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.78,
      envMapIntensity: 1.4, side: THREE.DoubleSide, depthWrite: false,
    }),
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
    ground: new THREE.MeshStandardMaterial({ color: 0xc9c2b4, roughness: 1 }),
    plaza: new THREE.MeshStandardMaterial({ color: 0xd9d1c2, roughness: 0.9 }),
    road: new THREE.MeshStandardMaterial({ color: 0x4a4d52, roughness: 0.95 }),
    path: new THREE.MeshStandardMaterial({ color: 0xc7beae, roughness: 1 }),
    water: new THREE.MeshStandardMaterial({ color: 0x3f6f86, roughness: 0.12, metalness: 0.35 }),
    green: new THREE.MeshStandardMaterial({ color: 0x8aa66a, roughness: 1 }),
    pitch: new THREE.MeshStandardMaterial({ color: 0x6f9a6a, roughness: 1 }),
    context: new THREE.MeshStandardMaterial({ color: 0xe2ddd4, roughness: 0.9 }),
    treeCrown: new THREE.MeshStandardMaterial({ color: 0x6f8f4e, roughness: 0.95, flatShading: true }),
    treeTrunk: new THREE.MeshStandardMaterial({ color: 0x6b5442, roughness: 1 }),
    pick: new THREE.MeshBasicMaterial({ visible: false }),
  }
}

export type Materials = ReturnType<typeof createMaterials>
