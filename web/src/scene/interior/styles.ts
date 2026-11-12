import * as THREE from 'three'
import { brick, concrete, fabric, herringbone, marble, planks, rug, tiles } from './textures'

/**
 * Стили ремонта. «Без отделки» — белая коробка (то, что сдаёт застройщик), остальные три — готовый ремонт с мебелью.
 * Каждый стиль — набор PBR-материалов; материалы создаются один раз на стиль.
 */
export type InteriorStyle = 'none' | 'scandi' | 'neoclassic' | 'loft'

export const INTERIOR_STYLES: { id: InteriorStyle; label: string; hint: string }[] = [
  { id: 'none', label: 'Без отделки', hint: 'Белая коробка — как сдаёт застройщик' },
  { id: 'scandi', label: 'Сканди', hint: 'Светлый дуб, белые стены, лён и мягкие серые ткани' },
  { id: 'neoclassic', label: 'Неоклассика', hint: 'Паркет ёлочкой, тёплый беж, мрамор и латунь' },
  { id: 'loft', label: 'Лофт', hint: 'Тёмный дуб, бетон и кирпич, чёрный металл и кожа' },
]

export interface StyleKit {
  id: Exclude<InteriorStyle, 'none'>
  wallColor: number
  floorLiving: THREE.Material
  floorWet: THREE.Material
  wallWet: THREE.Material
  accentWall: THREE.Material | null
  skirting: THREE.Material
  ceilingTrim: boolean
  upholstery: THREE.Material
  upholsteryAlt: THREE.Material
  cushion: THREE.Material
  linen: THREE.Material
  duvet: THREE.Material
  woodFurniture: THREE.Material
  woodDark: THREE.Material
  metal: THREE.Material
  kitchenFront: THREE.Material
  countertop: THREE.Material
  backsplash: THREE.Material
  ceramic: THREE.Material
  chrome: THREE.Material
  glass: THREE.Material
  mirror: THREE.Material
  screen: THREE.Material
  rug: THREE.Material
  curtain: THREE.Material | null
  sheer: THREE.Material | null
  lampShade: THREE.MeshStandardMaterial
  bulb: THREE.MeshStandardMaterial
  plantLeaf: THREE.Material
  pot: THREE.Material
  doorLeaf: THREE.Material
  doorFrame: THREE.Material
  frontDoor: THREE.Material
  handle: THREE.Material
  frame: THREE.Material
  /** светильники: 'spots' — споты и подвесы, 'chandelier' — люстры, 'edison' — лампы на шнурах */
  lights: 'spots' | 'chandelier' | 'edison'
  sofaLegs: 'metal' | 'wood' | 'block'
}

const std = (o: THREE.MeshStandardMaterialParameters) => new THREE.MeshStandardMaterial(o)
const phys = (o: THREE.MeshPhysicalMaterialParameters) => new THREE.MeshPhysicalMaterial(o)

const kits = new Map<string, StyleKit>()

export function styleKit(id: Exclude<InteriorStyle, 'none'>): StyleKit {
  const hit = kits.get(id)
  if (hit) return hit
  const common = {
    ceramic: phys({ color: 0xf7f7f5, roughness: 0.12, clearcoat: 0.8, clearcoatRoughness: 0.08 }),
    chrome: std({ color: 0xdedede, roughness: 0.12, metalness: 1 }),
    glass: phys({ color: 0xe8f0f2, roughness: 0.02, transmission: 0.9, thickness: 0.01, transparent: true, opacity: 0.25 }),
    mirror: std({ color: 0xdfe6ea, roughness: 0.02, metalness: 1 }),
    screen: phys({ color: 0x0b0c0e, roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05 }),
    plantLeaf: std({ color: 0x3f6b3a, roughness: 0.7, side: THREE.DoubleSide, flatShading: true }),
    bulb: std({ color: 0xfff1d6, emissive: 0xffd9a0, emissiveIntensity: 0.4, roughness: 0.3 }),
  }
  let kit: StyleKit
  if (id === 'scandi') {
    const oak = planks([214, 182, 140], 0.2, 1.6, 0.08)
    kit = {
      id,
      ...common,
      wallColor: 0xf1efea,
      floorLiving: std({ map: oak, roughness: 0.48 }),
      floorWet: std({ map: tiles([196, 194, 188], [168, 166, 160], 0.6, 0.6, false, 0.03, 60), roughness: 0.35 }),
      wallWet: std({ map: tiles([240, 240, 236], [214, 212, 206], 0.3, 0.6, false, 0.02), roughness: 0.15 }),
      accentWall: null,
      skirting: std({ color: 0xf3f2ef, roughness: 0.5 }),
      ceilingTrim: false,
      upholstery: std({ map: fabric([178, 176, 170]), roughness: 0.95 }),
      upholsteryAlt: std({ map: fabric([212, 196, 168]), roughness: 0.95 }),
      cushion: std({ map: fabric([196, 160, 92]), roughness: 0.9 }),
      linen: std({ map: fabric([244, 242, 236], 0.6), roughness: 0.92 }),
      duvet: std({ map: fabric([168, 180, 168]), roughness: 0.95 }),
      woodFurniture: std({ map: planks([222, 196, 156], 0.6, 2, 0.05), roughness: 0.55 }),
      woodDark: std({ color: 0x8c6a4a, roughness: 0.6 }),
      metal: std({ color: 0x1d1d1f, roughness: 0.45, metalness: 0.7 }),
      kitchenFront: std({ color: 0xf4f3f0, roughness: 0.45 }),
      countertop: std({ map: planks([206, 172, 128], 0.6, 2, 0.04), roughness: 0.4 }),
      backsplash: std({ map: tiles([242, 242, 238], [200, 198, 192], 0.075, 0.3, true, 0.03), roughness: 0.1 }),
      rug: std({ map: rug('scandi'), roughness: 1 }),
      curtain: std({ map: fabric([236, 232, 222], 0.8), roughness: 0.95, side: THREE.DoubleSide }),
      sheer: std({ color: 0xffffff, roughness: 0.9, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false }),
      lampShade: std({ color: 0xf6f4ef, roughness: 0.8, emissive: 0xffe2b8, emissiveIntensity: 0, side: THREE.DoubleSide }),
      pot: std({ color: 0xe9e6df, roughness: 0.6 }),
      doorLeaf: std({ color: 0xf2f1ee, roughness: 0.4 }),
      doorFrame: std({ color: 0xf2f1ee, roughness: 0.4 }),
      frontDoor: std({ color: 0x55585c, roughness: 0.5, metalness: 0.4 }),
      handle: std({ color: 0x1d1d1f, roughness: 0.4, metalness: 0.8 }),
      frame: std({ color: 0xd9c7a6, roughness: 0.6 }),
      lights: 'spots',
      sofaLegs: 'wood',
    }
  } else if (id === 'neoclassic') {
    const parquet = herringbone([170, 122, 78])
    const mar = marble([238, 234, 228], [150, 140, 128])
    const brass = std({ color: 0xc8a165, roughness: 0.28, metalness: 1 })
    kit = {
      id,
      ...common,
      chrome: brass,
      wallColor: 0xe6dccb,
      floorLiving: std({ map: parquet, roughness: 0.42 }),
      floorWet: std({ map: mar, roughness: 0.18 }),
      wallWet: std({ map: mar, roughness: 0.15 }),
      accentWall: null,
      skirting: std({ color: 0xf5f1ea, roughness: 0.4 }),
      ceilingTrim: true,
      upholstery: std({ map: fabric([226, 216, 198], 0.7), roughness: 0.85 }),
      upholsteryAlt: std({ map: fabric([92, 112, 104], 0.7), roughness: 0.75 }),
      cushion: std({ map: fabric([46, 66, 92], 0.7), roughness: 0.7 }),
      linen: std({ map: fabric([246, 242, 234], 0.6), roughness: 0.9 }),
      duvet: std({ map: fabric([214, 200, 178], 0.7), roughness: 0.9 }),
      woodFurniture: std({ color: 0xf1ebe0, roughness: 0.35 }),
      woodDark: std({ map: planks([110, 74, 48], 0.6, 2, 0.06), roughness: 0.4 }),
      metal: brass,
      kitchenFront: std({ color: 0x8e9c8c, roughness: 0.4 }),
      countertop: std({ map: mar, roughness: 0.12 }),
      backsplash: std({ map: mar, roughness: 0.12 }),
      rug: std({ map: rug('neoclassic'), roughness: 1 }),
      curtain: std({ map: fabric([196, 176, 148], 0.8), roughness: 0.85, side: THREE.DoubleSide }),
      sheer: std({ color: 0xfffaf0, roughness: 0.9, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false }),
      lampShade: std({ color: 0xf3e9d6, roughness: 0.8, emissive: 0xffd7a0, emissiveIntensity: 0, side: THREE.DoubleSide }),
      pot: std({ color: 0xece6da, roughness: 0.3 }),
      doorLeaf: std({ color: 0xf4efe6, roughness: 0.35 }),
      doorFrame: std({ color: 0xf4efe6, roughness: 0.35 }),
      frontDoor: std({ color: 0x5b4636, roughness: 0.45 }),
      handle: brass,
      frame: brass,
      lights: 'chandelier',
      sofaLegs: 'wood',
    }
  } else {
    const dark = planks([96, 74, 56], 0.24, 2.0, 0.14)
    kit = {
      id,
      ...common,
      chrome: std({ color: 0x1c1c1e, roughness: 0.35, metalness: 0.8 }),
      wallColor: 0xbdb9b2,
      floorLiving: std({ map: dark, roughness: 0.55 }),
      floorWet: std({ map: tiles([92, 92, 94], [70, 70, 72], 0.6, 1.2, false, 0.05, 20), roughness: 0.4 }),
      wallWet: std({ map: concrete([150, 148, 144]), roughness: 0.6 }),
      accentWall: std({ map: brick(), roughness: 0.9 }),
      skirting: std({ color: 0x2a2a2c, roughness: 0.5 }),
      ceilingTrim: false,
      upholstery: std({ color: 0x7a4527, roughness: 0.45, map: fabric([200, 140, 100], 0.3) }),
      upholsteryAlt: std({ map: fabric([70, 72, 74]), roughness: 0.95 }),
      cushion: std({ map: fabric([160, 150, 132]), roughness: 0.95 }),
      linen: std({ map: fabric([210, 206, 198], 0.7), roughness: 0.95 }),
      duvet: std({ map: fabric([62, 66, 70]), roughness: 0.95 }),
      woodFurniture: std({ map: planks([120, 90, 62], 0.5, 2, 0.12), roughness: 0.6 }),
      woodDark: std({ map: planks([82, 60, 42], 0.5, 2, 0.12), roughness: 0.6 }),
      metal: std({ color: 0x1a1a1c, roughness: 0.5, metalness: 0.75 }),
      kitchenFront: std({ color: 0x3a3d41, roughness: 0.55 }),
      countertop: std({ map: planks([124, 92, 64], 0.6, 2, 0.08), roughness: 0.45 }),
      backsplash: std({ map: tiles([28, 30, 32], [80, 80, 80], 0.075, 0.15, true, 0.06), roughness: 0.2 }),
      rug: std({ map: rug('loft'), roughness: 1 }),
      curtain: std({ map: fabric([86, 88, 90]), roughness: 0.95, side: THREE.DoubleSide }),
      sheer: null,
      lampShade: std({ color: 0x1a1a1c, roughness: 0.4, metalness: 0.6, emissive: 0xffb36b, emissiveIntensity: 0, side: THREE.DoubleSide }),
      pot: std({ map: concrete([130, 128, 124]), roughness: 0.8 }),
      doorLeaf: std({ color: 0x2a2b2d, roughness: 0.5 }),
      doorFrame: std({ color: 0x2a2b2d, roughness: 0.5 }),
      frontDoor: std({ color: 0x1f2022, roughness: 0.45, metalness: 0.5 }),
      handle: std({ color: 0xa0a0a0, roughness: 0.3, metalness: 1 }),
      frame: std({ color: 0x1a1a1c, roughness: 0.5 }),
      lights: 'edison',
      sofaLegs: 'block',
      bulb: std({ color: 0xffd9a0, emissive: 0xffa040, emissiveIntensity: 0.6, roughness: 0.2 }),
    }
  }
  kits.set(id, kit)
  return kit
}
