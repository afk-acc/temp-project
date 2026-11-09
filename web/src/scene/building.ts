import * as THREE from 'three'
import type { FloorInfo, FloorType, Project, Rect, Unit } from '@/domain/types'
import { STATUS_COLOR, matchesFilter, type UnitFilter } from '@/domain/units'
import { boxes, fins, outlineBands, planPolygon, planPolygonOutline, skin } from './geometry'
import type { Materials } from './materials'

interface TypeGeo {
  slab: THREE.BufferGeometry
  walls: THREE.BufferGeometry // единичная высота
  glass: THREE.BufferGeometry // единичная высота
  fins: THREE.BufferGeometry | null
  band: THREE.BufferGeometry
}

export interface FloorRuntime {
  info: FloorInfo
  type: FloorType
  group: THREE.Group
  walls: THREE.Mesh
  glass: THREE.Mesh
  fins: THREE.Mesh | null
  pick: THREE.Mesh
}

const CUT_WALL = 1.4

/**
 * Здание из типов этажей. Корневая группа повёрнута на азимут, внутри неё — координаты плана:
 * (x, y_плана) → (x, высота, -y_плана).
 */
export class BuildingView {
  readonly root = new THREE.Group()
  readonly floors: FloorRuntime[] = []
  private typeGeo = new Map<string, TypeGeo>()
  private overlay: THREE.Group | null = null
  private interior: THREE.Group | null = null
  private unitMeshes = new Map<number, { fill: THREE.Mesh; line: THREE.LineSegments; unit: Unit }>()
  private hoverFloor: number | null = null
  private cutFloor: number | null = null
  private walkFloor: number | null = null
  private crown = new THREE.Group()
  private readonly slab: number

  constructor(private project: Project, private types: Map<string, FloorType>, private mat: Materials) {
    const b = project.building
    this.slab = b.slab
    this.root.name = 'building'
    this.root.rotation.y = -THREE.MathUtils.degToRad(b.azimuth_deg)
    for (const info of b.floors) this.addFloor(info)
    this.addRoofs()
  }

  private geoFor(t: FloorType): TypeGeo {
    let g = this.typeGeo.get(t.id)
    if (!g) {
      g = {
        slab: boxes(t.slab, 0, this.slab),
        walls: boxes(t.walls_ext, 0, 1, { top: false, bottom: false }),
        glass: skin(t.outline, 0, 1, 0.14),
        fins: t.kind === 'podium' || this.project.building.style === 'plain' ? null : fins(t.walls_ext, t.outline, 0, 1),
        band: outlineBands(t.outline, -0.02, this.slab + 0.12, 0.06, 0.25),
      }
      this.typeGeo.set(t.id, g)
    }
    return g
  }

  private addFloor(info: FloorInfo) {
    const type = this.types.get(info.type)!
    const geo = this.geoFor(type)
    const group = new THREE.Group()
    group.name = `floor-${info.n}`
    const wallH = info.height - this.slab

    const slab = new THREE.Mesh(geo.slab, this.mat.slab)
    slab.position.y = info.elevation
    const band = new THREE.Mesh(geo.band, this.mat.band)
    band.position.y = info.elevation
    const walls = new THREE.Mesh(geo.walls, type.kind === 'podium' ? this.mat.band : this.mat.stone)
    walls.position.y = info.elevation + this.slab
    walls.scale.y = wallH
    const glass = new THREE.Mesh(geo.glass, this.mat.glass)
    glass.position.y = info.elevation + this.slab
    glass.scale.y = wallH
    glass.renderOrder = 2
    let finMesh: THREE.Mesh | null = null
    if (geo.fins) {
      finMesh = new THREE.Mesh(geo.fins, this.mat.bronze)
      finMesh.position.y = info.elevation + this.slab
      finMesh.scale.y = wallH
      finMesh.castShadow = true
      group.add(finMesh)
    }
    for (const m of [slab, band, walls]) {
      m.castShadow = true
      m.receiveShadow = true
    }
    group.add(slab, band, walls, glass)

    const [x0, y0, x1, y1] = type.bbox
    const pick = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, info.height, y1 - y0), this.mat.pick)
    pick.position.set((x0 + x1) / 2, info.elevation + info.height / 2, -(y0 + y1) / 2)
    pick.userData.floor = info.n
    group.add(pick)

    this.root.add(group)
    this.floors.push({ info, type, group, walls, glass, fins: finMesh, pick })
  }

  private addRoofs() {
    const b = this.project.building
    const top = b.floors[b.floors.length - 1]
    const topType = this.types.get(top.type)!
    const roofY = top.elevation + top.height
    const roof = new THREE.Mesh(boxes(topType.slab, 0, this.slab), this.mat.slab)
    roof.position.y = roofY
    const plain = b.style === 'plain'
    const parapet = new THREE.Mesh(outlineBands(topType.outline, 0, b.crown_height, 0.08, 0.35), plain ? this.mat.stone : this.mat.bronze)
    parapet.position.y = roofY
    // техническая надстройка над ядром
    const core = new THREE.Mesh(new THREE.BoxGeometry(plain ? 6 : 9, plain ? 2.6 : 3.2, plain ? 5 : 7), this.mat.band)
    core.position.set(0, roofY + 1.6 + this.slab, 0)
    for (const m of [roof, parapet, core]) {
      m.castShadow = true
      m.receiveShadow = true
    }
    this.crown.add(roof, parapet, core)

    // кровля подиума: контур 5 этажа на отметке 6 этажа
    const f6 = b.floors.find((f) => f.n === 6)
    const f5 = b.floors.find((f) => f.n === 5)
    if (f5 && f6 && this.types.get(f5.type)!.kind !== 'tower') {
      const t5 = this.types.get(f5.type)!
      const podRoof = new THREE.Mesh(boxes(t5.slab, 0, 0.15), this.mat.plaza)
      podRoof.position.y = f6.elevation
      podRoof.receiveShadow = true
      podRoof.castShadow = true
      const podParapet = new THREE.Mesh(outlineBands(t5.outline, 0, 1.1, 0.04, 0.2), this.mat.band)
      podParapet.position.y = f6.elevation
      podParapet.castShadow = true
      this.crown.add(podRoof, podParapet)
      this.podiumRoof = podRoof
      this.podiumParapet = podParapet
    }
    this.root.add(this.crown)
  }

  private podiumRoof: THREE.Mesh | null = null
  private podiumParapet: THREE.Mesh | null = null

  // ---------- координаты ----------

  planToWorld(x: number, y: number, h: number): THREE.Vector3 {
    this.root.updateMatrixWorld()
    return this.root.localToWorld(new THREE.Vector3(x, h, -y))
  }

  worldToPlan(v: THREE.Vector3): [number, number] {
    this.root.updateMatrixWorld()
    const l = this.root.worldToLocal(v.clone())
    return [l.x, -l.z]
  }

  floor(n: number): FloorRuntime | undefined {
    return this.floors.find((f) => f.info.n === n)
  }

  floorCenterWorld(n: number): THREE.Vector3 {
    const f = this.floor(n)!
    const [x0, y0, x1, y1] = f.type.kind === 'podium' ? f.type.bbox : this.towerBox(f.type)
    return this.planToWorld((x0 + x1) / 2, (y0 + y1) / 2, f.info.elevation)
  }

  private towerBox(t: FloorType): Rect {
    return t.bbox
  }

  get slabThickness(): number {
    return this.slab
  }

  get height(): number {
    return this.project.building.height
  }

  // ---------- режимы ----------

  pickables(): THREE.Object3D[] {
    return this.floors.filter((f) => f.group.visible).map((f) => f.pick)
  }

  unitPickables(): THREE.Object3D[] {
    return [...this.unitMeshes.values()].map((u) => u.fill)
  }

  setHoverFloor(n: number | null) {
    if (this.hoverFloor === n) return
    if (this.hoverFloor !== null) {
      const f = this.floor(this.hoverFloor)
      if (f && this.walkFloor !== f.info.n) f.glass.material = this.mat.glass
    }
    this.hoverFloor = n
    if (n !== null && this.cutFloor === null && this.walkFloor === null) {
      const f = this.floor(n)
      if (f) f.glass.material = this.mat.glassHover
    }
  }

  /** Весь дом целиком */
  showAll() {
    this.clearInterior()
    this.cutFloor = null
    this.walkFloor = null
    for (const f of this.floors) {
      f.group.visible = true
      f.walls.material = f.type.kind === 'podium' ? this.mat.band : this.mat.stone
      f.glass.visible = true
      f.glass.material = this.mat.glass
      if (f.fins) f.fins.visible = true
    }
    this.crown.visible = true
  }

  private setVisibleUpTo(n: number) {
    for (const f of this.floors) {
      f.group.visible = f.info.n <= n
      f.walls.material = f.type.kind === 'podium' ? this.mat.band : this.mat.stone
      f.glass.visible = true
      f.glass.material = this.mat.glass
      if (f.fins) f.fins.visible = true
    }
    this.crown.visible = false
    // кровля подиума видна, если срез выше подиума
    const f6 = this.project.building.floors.find((f) => f.n === 6)
    if (this.podiumRoof && f6) {
      this.podiumRoof.visible = n >= 6
      this.podiumParapet!.visible = n >= 6
      if (n >= 6) this.crown.visible = true
      this.crown.children.forEach((c) => {
        if (c !== this.podiumRoof && c !== this.podiumParapet) c.visible = false
      })
    }
  }

  private restoreCrownChildren() {
    this.crown.children.forEach((c) => (c.visible = true))
  }

  /** Разрез: этажи выше скрыты, этаж n виден сверху со стенами и подсветкой квартир */
  cutAt(n: number, units: Unit[], filter: UnitFilter) {
    this.clearInterior()
    this.restoreCrownChildren()
    this.cutFloor = n
    this.walkFloor = null
    this.setVisibleUpTo(n)
    const f = this.floor(n)!
    f.glass.visible = false
    if (f.fins) f.fins.visible = false

    const g = new THREE.Group()
    const wallH = Math.min(CUT_WALL, f.info.height - this.slab)
    const base = f.info.elevation + this.slab
    const walls = new THREE.Mesh(boxes(f.type.walls_int, base, base + wallH, { bottom: false }), this.mat.wallInt)
    walls.castShadow = true
    walls.receiveShadow = true
    const floorTop = new THREE.Mesh(boxes(f.type.slab, base, base + 0.01, { bottom: false }), this.mat.floorCut)
    floorTop.receiveShadow = true
    g.add(walls, floorTop)

    this.overlay = new THREE.Group()
    for (const u of units.filter((u) => u.floor === n && u.polygon)) {
      const color = new THREE.Color(STATUS_COLOR[u.status])
      const fill = new THREE.Mesh(
        planPolygon(u.polygon!, base + 0.05),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.42, depthWrite: false }),
      )
      fill.renderOrder = 3
      fill.userData.unitId = u.id
      const line = new THREE.LineSegments(
        planPolygonOutline(u.polygon!, base + 0.07),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.95 }),
      )
      line.renderOrder = 4
      this.overlay.add(fill, line)
      this.unitMeshes.set(u.id, { fill, line, unit: u })
    }
    g.add(this.overlay)
    this.interior = g
    this.root.add(g)
    this.styleUnits(filter, null, null)
  }

  /** Свежие статусы из API: меши этажа остаются, меняются только данные для подсветки */
  updateUnits(units: Unit[]) {
    const byId = new Map(units.map((u) => [u.id, u]))
    for (const m of this.unitMeshes.values()) m.unit = byId.get(m.unit.id) ?? m.unit
  }

  styleUnits(filter: UnitFilter, hoverId: number | null, selectedId: number | null) {
    for (const { fill, line, unit } of this.unitMeshes.values()) {
      const ok = matchesFilter(unit, filter)
      const fm = fill.material as THREE.MeshBasicMaterial
      const lm = line.material as THREE.LineBasicMaterial
      const base = new THREE.Color(STATUS_COLOR[unit.status])
      const active = unit.id === selectedId || unit.id === hoverId
      fm.color.copy(ok ? base : new THREE.Color('#9aa0a6'))
      fm.opacity = !ok ? 0.12 : unit.id === selectedId ? 0.78 : unit.id === hoverId ? 0.62 : 0.4
      lm.color.copy(active ? new THREE.Color('#ffffff') : ok ? base : new THREE.Color('#9aa0a6'))
      lm.opacity = ok ? 1 : 0.3
      fill.visible = true
    }
  }

  /** Прогулка: интерьер этажа n в полную высоту, потолок, площади комнат на полу */
  walkIn(n: number, units: Unit[]) {
    this.clearInterior()
    this.restoreCrownChildren()
    this.cutFloor = null
    this.walkFloor = n
    this.setVisibleUpTo(n)
    const f = this.floor(n)!
    f.glass.material = this.mat.glassInside
    f.glass.visible = true

    const g = new THREE.Group()
    const base = f.info.elevation + this.slab
    const top = f.info.elevation + f.info.height
    const walls = new THREE.Mesh(boxes(f.type.walls_int, base, top, { top: false, bottom: false }), this.mat.wallInt)
    walls.receiveShadow = true
    walls.castShadow = true
    // наружные стены этажа изнутри — светлые, как внутренние
    f.walls.material = this.mat.wallInt
    const heads = new THREE.Mesh(boxes(f.type.door_heads, base + 2.1, top), this.mat.wallInt)
    heads.receiveShadow = true
    const floor = new THREE.Mesh(boxes(f.type.slab, base, base + 0.012, { bottom: false }), this.mat.floorWood)
    floor.receiveShadow = true
    const ceiling = new THREE.Mesh(boxes(f.type.slab, top, top + this.slab), this.mat.ceiling)
    ceiling.castShadow = true
    g.add(walls, heads, floor, ceiling)

    // площади комнат — только для комнат внутри квартир и не слитых в огромные области
    const floorUnits = units.filter((u) => u.floor === n && u.polygon)
    for (const r of f.type.rooms) {
      if (r.area < 1.5 || r.area > 38) continue
      if (!floorUnits.some((u) => inside(r.x, r.y, u.polygon!))) continue
      g.add(roomLabel(`${r.area.toFixed(1).replace('.', ',')} м²`, r.x, r.y, base + 0.02))
    }
    this.interior = g
    this.root.add(g)
  }

  /** Прямоугольники для столкновений при ходьбе (план): стены и периметр */
  collisionRects(n: number): Rect[] {
    const f = this.floor(n)!
    const rects: Rect[] = [...f.type.walls_int, ...f.type.walls_ext]
    for (const [x0, y0, x1, y1, nx, ny] of f.type.outline) {
      const t = 0.15
      if (nx !== 0) rects.push([Math.min(x0, x0 - nx * t), Math.min(y0, y1), Math.max(x0, x0 - nx * t), Math.max(y0, y1)])
      else rects.push([Math.min(x0, x1), Math.min(y0, y0 - ny * t), Math.max(x0, x1), Math.max(y0, y0 - ny * t)])
    }
    return rects
  }

  private clearInterior() {
    if (this.interior) {
      this.root.remove(this.interior)
      this.interior.traverse((o) => {
        const m = o as THREE.Mesh
        if (m.geometry) m.geometry.dispose()
        const mat = m.material as THREE.Material | THREE.Material[] | undefined
        if (mat && !Array.isArray(mat) && !(Object.values(this.mat) as THREE.Material[]).includes(mat)) {
          const tex = (mat as THREE.MeshBasicMaterial).map
          tex?.dispose()
          mat.dispose()
        }
      })
    }
    this.interior = null
    this.overlay = null
    this.unitMeshes.clear()
  }
}

function inside(x: number, y: number, p: [number, number][]) {
  let c = false
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    if (p[i][1] > y !== p[j][1] > y && x < ((p[j][0] - p[i][0]) * (y - p[i][1])) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]) c = !c
  }
  return c
}

function roomLabel(text: string, x: number, y: number, h: number): THREE.Mesh {
  const c = document.createElement('canvas')
  c.width = 256
  c.height = 96
  const g = c.getContext('2d')!
  g.font = '600 46px Manrope, system-ui, sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillStyle = 'rgba(40, 32, 24, 0.55)'
  g.fillText(text, 128, 50)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(1.4, 0.525),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }),
  )
  m.rotation.x = -Math.PI / 2
  m.position.set(x, h, -y)
  m.renderOrder = 5
  return m
}
