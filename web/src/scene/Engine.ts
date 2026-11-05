import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Sky } from 'three/examples/jsm/objects/Sky.js'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import type { BlockLayout, Context, FloorType, Place, PlaceCategory, Point, Project, Unit } from '@/domain/types'
import { PLACE_CATEGORY, walkLabel } from '@/domain/places'
import { apiAsset } from '@/api/client'
import type { UnitFilter } from '@/domain/units'
import { planToENU } from '@/domain/geo'
import { sunPosition, sunVectorENU, tashkentDate } from '@/domain/sun'
import type { Facade } from '@/domain/views'
import { BuildingView } from './building'
import { buildContext } from './context'
import { createMaterials, type Materials } from './materials'
import { WalkController, pushOut } from './walk'
import { XRController } from './xr'
import { MassingView, floorElevation } from './massing'

export type Mode = 'building' | 'floor' | 'walk' | 'block' | 'view'

export interface EngineEvents {
  hoverFloor(n: number | null, x: number, y: number): void
  clickFloor(n: number): void
  hoverUnit(id: number | null, x: number, y: number): void
  clickUnit(id: number): void
  hoverBlock(id: string | null, x: number, y: number): void
  clickBlock(id: string): void
  interacted(): void
  xrEnded(): void
}

const EYE = 1.6

export class Engine {
  readonly renderer: THREE.WebGLRenderer
  readonly scene = new THREE.Scene()
  readonly camera: THREE.PerspectiveCamera
  readonly rig = new THREE.Group()
  readonly controls: OrbitControls
  private mat: Materials
  private sky = new Sky()
  private sun = new THREE.DirectionalLight(0xfff3e0, 3)
  private hemi = new THREE.HemisphereLight(0xdfe9f5, 0xb8a98f, 0.9)
  private pmrem: THREE.PMREMGenerator
  private envRT: THREE.WebGLRenderTarget | null = null
  private skyScene = new THREE.Scene()
  private building: BuildingView | null = null
  private massing: MassingView | null = null
  private labels = new CSS2DRenderer()
  private placeObjs: { obj: CSS2DObject; place: Place }[] = []
  private lastHoverBlock: string | null = null
  private blockViews = new Map<string, BuildingView>()
  private openBlockId: string | null = null
  private occluders: THREE.Mesh | null = null
  private walk: WalkController
  readonly xr: XRController
  private mode: Mode = 'building'
  private clock = new THREE.Clock()
  private pointer = new THREE.Vector2()
  private pointerScreen = { x: 0, y: 0 }
  private pointerDirty = false
  private pointerInside = false
  private down: { x: number; y: number; t: number } | null = null
  private tween: { from: [THREE.Vector3, THREE.Vector3]; to: [THREE.Vector3, THREE.Vector3]; t: number; d: number } | null = null
  private raycaster = new THREE.Raycaster()
  private lastHoverFloor: number | null = null
  private lastHoverUnit: number | null = null
  private walkFloorN: number | null = null
  private lat = 41.3
  private lon = 69.29
  private envTimer = 0
  private readonly mobile = matchMedia('(pointer: coarse)').matches

  constructor(private canvasHost: HTMLElement, private events: EngineEvents) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.mobile ? 1.6 : 2))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 0.92
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.xr.enabled = true
    canvasHost.appendChild(this.renderer.domElement)
    this.labels.domElement.className = 'labels-layer'
    canvasHost.appendChild(this.labels.domElement)
    this.renderer.domElement.style.touchAction = 'none'

    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 6000)
    this.rig.add(this.camera)
    this.scene.add(this.rig)
    this.mat = createMaterials()

    this.sky.scale.setScalar(10000)
    const u = this.sky.material.uniforms
    u.turbidity.value = 5.5
    u.rayleigh.value = 1.1
    u.mieCoefficient.value = 0.004
    u.mieDirectionalG.value = 0.82
    this.scene.add(this.sky)
    const envSky = new Sky()
    envSky.scale.setScalar(1000)
    Object.assign(envSky.material.uniforms.turbidity, { value: 5.5 })
    Object.assign(envSky.material.uniforms.rayleigh, { value: 1.1 })
    Object.assign(envSky.material.uniforms.mieCoefficient, { value: 0.004 })
    this.skyScene.add(envSky)
    this.pmrem = new THREE.PMREMGenerator(this.renderer)

    this.sun.castShadow = true
    const s = this.sun.shadow
    s.mapSize.set(this.mobile ? 2048 : 4096, this.mobile ? 2048 : 4096)
    s.camera.left = -190
    s.camera.right = 190
    s.camera.top = 190
    s.camera.bottom = -190
    s.camera.near = 10
    s.camera.far = 1400
    s.bias = -0.0003
    s.normalBias = 0.25
    s.camera.updateProjectionMatrix()
    this.scene.add(this.sun, this.sun.target, this.hemi)
    this.scene.fog = new THREE.Fog(0xd8dde2, 900, 3200)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.maxPolarAngle = THREE.MathUtils.degToRad(86)
    this.controls.minDistance = 12
    this.controls.maxDistance = 900
    this.controls.autoRotateSpeed = 0.35
    this.controls.addEventListener('start', () => {
      this.controls.autoRotate = false
      this.tween = null
      this.events.interacted()
    })

    this.walk = new WalkController(this.camera, this.renderer.domElement)
    this.xr = new XRController(this.renderer, this.rig, this.camera)
    this.xr.onEnd = () => {
      this.camera.position.copy(this.walk.pos)
      this.events.xrEnded()
    }

    const el = this.renderer.domElement
    el.addEventListener('pointermove', this.onPointerMove)
    el.addEventListener('pointerdown', this.onPointerDown)
    el.addEventListener('pointerup', this.onPointerUp)
    el.addEventListener('pointerleave', () => {
      this.pointerInside = false
      this.pointerDirty = true
    })
    window.addEventListener('resize', this.resize)
    this.resize()
    this.renderer.setAnimationLoop(this.loop)
  }

  // ---------- загрузка ----------

  load(project: Project, ctx: Context, types: Map<string, FloorType>) {
    this.lat = project.location.lat
    this.lon = project.location.lon
    let site: Point[]
    if (project.building.mode === 'massing') {
      this.massing = new MassingView(project, this.mat)
      this.scene.add(this.massing.root)
      site = hull(this.massing.blocks.flatMap((b) => b.footprint))
    } else {
      this.building = new BuildingView(project, types, this.mat)
      this.scene.add(this.building.root)
      const pod = types.get('POD2')!.bbox
      const az = project.building.azimuth_deg
      site = [[pod[0], pod[1]], [pod[2], pod[1]], [pod[2], pod[3]], [pod[0], pod[3]]].map(
        ([x, y]) => planToENU(x, y, az) as Point,
      )
    }
    const { group, occluders } = buildContext(ctx, this.mat, site)
    this.occluders = occluders
    this.scene.add(group)
    this.buildPlaces(ctx.places ?? [])
    this.flyToBuilding(true)
    this.controls.autoRotate = true
  }

  // ---------- солнце ----------

  setSun(day: string, hour: number) {
    const p = sunPosition(tashkentDate(day, hour), this.lat, this.lon)
    const [e, n, up] = sunVectorENU(p)
    const dir = new THREE.Vector3(e, up, -n).normalize()
    const day01 = THREE.MathUtils.smoothstep(p.altitude, -4, 8)
    this.sunDir.copy(dir)
    this.sun.intensity = 3.6 * THREE.MathUtils.smoothstep(p.altitude, -1, 12)
    this.sun.color.setHSL(0.09, 0.6, 0.62 + 0.3 * THREE.MathUtils.smoothstep(p.altitude, 0, 35))
    this.hemi.intensity = 0.12 + 0.38 * day01
    this.scene.environmentIntensity = 0.18 + 0.32 * day01
    const skyDir = p.altitude < -3 ? new THREE.Vector3(e, -0.06, -n).normalize() : dir
    this.sky.material.uniforms.sunPosition.value.copy(skyDir)
    ;(this.skyScene.children[0] as Sky).material.uniforms.sunPosition.value.copy(skyDir)
    this.renderer.toneMappingExposure = 0.5 + 0.32 * day01
    ;(this.scene.fog as THREE.Fog).color.setHSL(0.58, 0.15, 0.25 + 0.6 * day01)
    clearTimeout(this.envTimer)
    this.envTimer = window.setTimeout(() => this.updateEnv(), 120)
  }

  private updateEnv() {
    const rt = this.pmrem.fromScene(this.skyScene, 0, 0.1, 2000)
    this.envRT?.dispose()
    this.envRT = rt
    this.scene.environment = rt.texture
  }

  /** Минуты прямого солнца для квартиры за день (с учётом затенения соседними домами) */
  sunMinutes(facades: Facade[], floorElevation: number, day: string, azimuthDeg: number): number {
    if (!this.building || !this.occluders || !facades.length) return 0
    // по одному окну на каждое направление
    const byDir = new Map<number, Facade>()
    for (const f of facades) {
      const k = Math.round(f.azimuth / 10)
      if (!byDir.has(k) || byDir.get(k)!.length < f.length) byDir.set(k, f)
    }
    const windows = [...byDir.values()].map((f) => {
      const p = this.building!.planToWorld(f.mid[0] + f.normal[0] * 0.6, f.mid[1] + f.normal[1] * 0.6, floorElevation + 1.4)
      const [e, n] = planToENU(f.normal[0], f.normal[1], azimuthDeg)
      return { p, e, n }
    })
    return this.sunMinutesFor(windows, day)
  }

  private sunMinutesFor(windows: { p: THREE.Vector3; e: number; n: number }[], day: string): number {
    if (!this.occluders) return 0
    const occ: THREE.Object3D[] = [this.occluders, ...(this.massing?.occluders() ?? [])]
    const ray = new THREE.Raycaster()
    ray.far = 700
    let minutes = 0
    const STEP = 10
    for (let m = 4 * 60; m <= 21 * 60; m += STEP) {
      const sp = sunPosition(tashkentDate(day, m / 60), this.lat, this.lon)
      if (sp.altitude < 2) continue
      const [se, sn, su] = sunVectorENU(sp)
      const h = Math.hypot(se, sn)
      const dir = new THREE.Vector3(se, su, -sn).normalize()
      let lit = false
      for (const w of windows) {
        if ((w.e * se + w.n * sn) / (h || 1) < 0.12) continue
        ray.set(w.p, dir)
        if (ray.intersectObjects(occ, false).length === 0) {
          lit = true
          break
        }
      }
      if (lit) minutes += STEP
    }
    return minutes
  }

  // ---------- режимы ----------

  get currentMode(): Mode {
    return this.mode
  }

  flyToBuilding(instant = false) {
    if (this.massing) {
      this.leaveWalk()
      this.closeBlockBuilding()
      this.mode = 'building'
      this.setShadowRange('building')
      this.applyViewShift()
      this.massing.select(null, null)
      const c = this.massing.center()
      const portrait = this.canvasHost.clientWidth < this.canvasHost.clientHeight
      // радиус комплекса по контурам корпусов — чтобы в кадр вошли все дома и места вокруг
      const r = Math.max(...this.massing.blocks.flatMap((b) => b.footprint.map(([x, y]) => Math.hypot(x - c.x, -y - c.z))))
      // обзор ~400 м вокруг: видны корпуса и ближайшие известные места
      const k = (portrait ? 1.6 : 1) * Math.max(r * 3.2, 430)
      const pos = c.clone().add(new THREE.Vector3(0.38 * k, 0.62 * k, 0.72 * k))
      this.moveCamera(pos, c, instant ? 0 : 1.1)
      this.controls.minDistance = 25
      return
    }
    if (!this.building) return
    this.leaveWalk()
    this.mode = 'building'
    this.setShadowRange('building')
    this.applyViewShift()
    this.building.showAll()
    const H = this.building.height
    const portrait = this.canvasHost.clientWidth < this.canvasHost.clientHeight
    const target = new THREE.Vector3(0, H * (portrait ? 0.5 : 0.36), 0)
    const pos = new THREE.Vector3(95, H * 1.0, 245)
    if (portrait) pos.multiplyScalar(1.75).setY(H * 1.15)
    this.moveCamera(pos, target, instant ? 0 : 1.1)
    this.controls.minDistance = 30
  }

  showFloor(n: number, units: Unit[], filter: UnitFilter) {
    if (!this.building) return
    const wasMode = this.mode
    this.leaveWalk()
    this.mode = 'floor'
    this.setShadowRange('floor')
    this.applyViewShift()
    this.controls.autoRotate = false
    this.building.cutAt(n, units, filter)
    const c = this.building.floorCenterWorld(n)
    const f = this.building.floor(n)!
    const size = Math.max(f.type.bbox[2] - f.type.bbox[0], f.type.bbox[3] - f.type.bbox[1])
    // сохраняем направление взгляда, меняем дистанцию и наклон
    const dir = this.camera.position.clone().sub(this.controls.target).setY(0)
    if (dir.lengthSq() < 1e-3 || wasMode === 'walk') dir.set(0.36, 0, 0.93)
    dir.normalize()
    // дистанция, при которой этаж помещается по меньшему из углов обзора (на телефоне это ширина)
    const vfov = THREE.MathUtils.degToRad(38)
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * this.camera.aspect)
    const fit = (size * 0.62) / Math.tan(Math.min(vfov, hfov) / 2)
    const dist = Math.max(size * 2.2, fit)
    const pos = c.clone().add(dir.multiplyScalar(dist * 0.5)).setY(c.y + dist * 0.87)
    this.moveCamera(pos, c, 0.9)
    this.controls.minDistance = 12
  }

  styleUnits(filter: UnitFilter, hoverId: number | null, selectedId: number | null) {
    this.building?.styleUnits(filter, hoverId, selectedId)
  }

  enterWalk(unit: Unit, units: Unit[], facades: Facade[]) {
    if (!this.building || !unit.polygon) return
    const f = this.building.floor(unit.floor)!
    this.mode = 'walk'
    this.setShadowRange('walk')
    this.applyViewShift()
    this.walkFloorN = unit.floor
    this.controls.enabled = false
    this.controls.autoRotate = false
    this.tween = null
    this.building.walkIn(unit.floor, units)
    const rects = this.building.collisionRects(unit.floor)
    const base = f.info.elevation + this.building.slabThickness

    // стартовая точка: самая большая комната квартиры, лицом к окнам
    const start = this.startPoint(unit, f.type, rects)
    const pos = this.building.planToWorld(start[0], start[1], base + EYE)
    const yaw = this.bestYaw(start, rects, facades, base + EYE)
    const b = this.building
    const floorY = base + EYE
    this.walk.start(pos, yaw, (p) => {
      const [x, y] = b.worldToPlan(p)
      const [rx, ry] = pushOut(x, y, 0.24, rects)
      const w = b.planToWorld(rx, ry, floorY)
      return w
    })
    this.camera.near = 0.05
    this.camera.fov = this.mobile ? 72 : 66
    this.camera.updateProjectionMatrix()
  }

  /** Направление первого взгляда: самая длинная свободная линия, с бонусом за окна */
  private bestYaw(p: [number, number], rects: [number, number, number, number][], facades: Facade[], h: number): number {
    let bestScore = -Infinity
    let bestDir: [number, number] = [0, 1]
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2
      const dx = Math.cos(a)
      const dy = Math.sin(a)
      let dist = 15
      for (const [x0, y0, x1, y1] of rects) {
        // пересечение луча с прямоугольником (slab-метод)
        const tx0 = (x0 - p[0]) / (dx || 1e-9)
        const tx1 = (x1 - p[0]) / (dx || 1e-9)
        const ty0 = (y0 - p[1]) / (dy || 1e-9)
        const ty1 = (y1 - p[1]) / (dy || 1e-9)
        const tmin = Math.max(Math.min(tx0, tx1), Math.min(ty0, ty1))
        const tmax = Math.min(Math.max(tx0, tx1), Math.max(ty0, ty1))
        if (tmax >= Math.max(tmin, 0) && tmin < dist) dist = Math.max(tmin, 0)
      }
      const toWindow = facades.some((f) => f.normal[0] * dx + f.normal[1] * dy > 0.7) ? 2.5 : 0
      const score = Math.min(dist, 9) + toWindow
      if (score > bestScore) {
        bestScore = score
        bestDir = [dx, dy]
      }
    }
    const a = this.building!.planToWorld(p[0], p[1], h)
    const b = this.building!.planToWorld(p[0] + bestDir[0], p[1] + bestDir[1], h)
    return Math.atan2(-(b.x - a.x), -(b.z - a.z))
  }

  /** Стартовая точка: место внутри квартиры с наибольшим отступом от стен (сетка 0,3 м) */
  private startPoint(unit: Unit, _t: FloorType, rects: [number, number, number, number][]): [number, number] {
    const poly = unit.polygon!
    const inside = (x: number, y: number) => {
      let c = false
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        if (poly[i][1] > y !== poly[j][1] > y && x < ((poly[j][0] - poly[i][0]) * (y - poly[i][1])) / (poly[j][1] - poly[i][1] + 1e-12) + poly[i][0]) c = !c
      }
      return c
    }
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
    for (const [x, y] of poly) {
      x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y)
    }
    const near = rects.filter(([a, b, c, d]) => c > x0 - 3 && a < x1 + 3 && d > y0 - 3 && b < y1 + 3)
    let best: [number, number] = [(x0 + x1) / 2, (y0 + y1) / 2]
    let bestD = -1
    for (let x = x0 + 0.3; x < x1; x += 0.3) {
      for (let y = y0 + 0.3; y < y1; y += 0.3) {
        if (!inside(x, y)) continue
        let d = Infinity
        for (const [a, b, c, e] of near) {
          const dx = Math.max(a - x, 0, x - c)
          const dy = Math.max(b - y, 0, y - e)
          d = Math.min(d, Math.hypot(dx, dy))
          if (d <= bestD) break
        }
        if (d > bestD) {
          bestD = d
          best = [x, y]
        }
      }
    }
    return best
  }

  // ---------- корпуса (режим «массинг») ----------

  selectBlock(id: string, floor: number | null) {
    if (!this.massing) return
    const wasView = this.mode === 'view' || this.mode === 'floor' || this.mode === 'walk'
    this.leaveWalk()
    this.closeBlockBuilding()
    this.mode = 'block'
    this.setShadowRange('building')
    this.applyViewShift()
    this.controls.autoRotate = false
    this.massing.select(id, floor)
    const c = this.massing.center(id)
    const b = this.massing.item(id)!.block
    const dir = this.camera.position.clone().sub(this.controls.target).setY(0)
    if (dir.lengthSq() < 1e-3 || wasView) dir.set(0.5, 0, 0.86)
    dir.normalize()
    const dist = Math.max(70, b.height * 2.4)
    const pos = c.clone().add(dir.multiplyScalar(dist)).setY(c.y + dist * 0.55)
    this.moveCamera(pos, c, 0.9)
  }

  /** Этаж корпуса по тестовой планировке: корпус собирается из типов этажей тем же кодом, что C1 */
  openBlockFloor(layout: BlockLayout, n: number, units: Unit[], filter: UnitFilter) {
    if (!this.massing) return
    if (this.openBlockId !== layout.id) {
      this.closeBlockBuilding()
      let bv = this.blockViews.get(layout.id)
      if (!bv) {
        const fake = {
          building: {
            mode: 'plans', style: 'plain', azimuth_deg: layout.azimuth_deg, slab: layout.slab,
            crown_height: layout.crown_height, height: layout.height, floors: layout.floors, assumed: [],
          },
        } as unknown as Project
        bv = new BuildingView(fake, new Map(Object.entries(layout.floor_types)), this.mat)
        bv.root.position.set(layout.origin[0], 0, -layout.origin[1])
        this.blockViews.set(layout.id, bv)
      }
      this.scene.add(bv.root)
      this.massing.setBlockVisible(layout.id, false)
      this.building = bv
      this.openBlockId = layout.id
    }
    this.showFloor(n, units, filter)
  }

  private closeBlockBuilding() {
    if (!this.openBlockId || !this.massing) return
    const bv = this.blockViews.get(this.openBlockId)
    if (bv) this.scene.remove(bv.root)
    this.massing.setBlockVisible(this.openBlockId, true)
    this.openBlockId = null
    this.building = null
  }

  setBlockFloor(id: string, floor: number) {
    this.massing?.select(id, floor)
  }

  blockSides(id: string) {
    return this.massing?.item(id)?.sides ?? []
  }

  /** Вид из окна: камера у фасада на высоте этажа, смотрит наружу; можно осматриваться */
  showView(id: string, floor: number, sideIdx: number) {
    if (!this.massing) return
    const { pos, yaw } = this.massing.viewPoint(id, floor, sideIdx)
    this.mode = 'view'
    this.setShadowRange('building')
    this.applyViewShift()
    this.controls.enabled = false
    this.controls.autoRotate = false
    this.tween = null
    this.walk.start(pos, yaw, () => pos.clone())
    this.camera.near = 0.3
    this.camera.fov = this.mobile ? 70 : 62
    this.camera.updateProjectionMatrix()
  }

  /** Минуты солнца по сторонам корпуса на этаже */
  blockSunMinutes(id: string, floor: number, day: string): number[] {
    if (!this.massing) return []
    const it = this.massing.item(id)!
    const h = floorElevation(it.block, floor) + 1.4
    return it.sides.map((sd) => {
      const p = new THREE.Vector3(sd.mid[0] + sd.normal[0] * 0.7, h, -(sd.mid[1] + sd.normal[1] * 0.7))
      return this.sunMinutesFor([{ p, e: sd.normal[0], n: sd.normal[1] }], day)
    })
  }

  // ---------- места рядом ----------

  private buildPlaces(places: Place[]) {
    for (const p of places) {
      const el = document.createElement('div')
      const cat = PLACE_CATEGORY[p.category]
      el.className = `pin${p.known ? ' known' : ''} cat-${p.category}`
      el.style.setProperty('--c', cat.color)
      el.innerHTML = `<i>${cat.glyph}</i><b></b><span>${walkLabel(p.walk_min, p.dist)}</span>`
      el.querySelector('b')!.textContent = p.name
      if (p.logo) {
        // логотип бренда вместо значка категории; при ошибке загрузки остаётся значок
        const img = document.createElement('img')
        img.alt = ''
        img.decoding = 'async'
        img.src = apiAsset(p.logo)
        img.onload = () => {
          const tile = document.createElement('i')
          tile.className = 'lg'
          tile.appendChild(img)
          el.querySelector('i')!.replaceWith(tile)
          el.classList.add('has-logo')
        }
      }
      const obj = new CSS2DObject(el)
      obj.position.set(p.x, p.category === 'metro' ? 4 : 10, -p.y)
      obj.center.set(0.5, 1)
      this.scene.add(obj)
      this.placeObjs.push({ obj, place: p })
    }
  }

  /** Облёт: в кадре все видимые метки мест (вид сверху под углом) */
  flyToPlaces() {
    const vis = this.placeObjs.filter((p) => p.obj.visible)
    if (!vis.length) return
    if (this.mode === 'view' || this.mode === 'walk') return
    const home = this.massing ? this.massing.center() : this.controls.target.clone()
    const near = vis.filter((p) => p.place.dist <= 700)
    const pts = (near.length ? near : vis).map((p) => new THREE.Vector3(p.place.x, 0, -p.place.y)).concat([home.clone().setY(0)])
    const c = pts.reduce((a, p) => a.add(p), new THREE.Vector3()).multiplyScalar(1 / pts.length)
    const r = Math.max(...pts.map((p) => p.distanceTo(c)), 200)
    const portrait = this.canvasHost.clientWidth < this.canvasHost.clientHeight
    const k = r * (portrait ? 3.4 : 2.3)
    this.controls.autoRotate = false
    this.moveCamera(c.clone().add(new THREE.Vector3(0.18 * k, 1.0 * k, 0.42 * k)), c.clone(), 1.2)
  }

  setPlaceFilter(cats: PlaceCategory[], showAll: boolean, visible: boolean) {
    for (const { obj, place } of this.placeObjs) {
      obj.visible = visible && cats.includes(place.category) && (showAll || place.known)
    }
  }

  setStick(x: number, y: number) {
    this.walk.setStick(x, y)
  }

  private leaveWalk() {
    if (this.mode !== 'walk' && this.mode !== 'view') return
    this.walk.stop()
    this.walkFloorN = null
    this.controls.enabled = true
    this.camera.near = 0.1
    this.camera.fov = 38
    this.camera.rotation.order = 'XYZ'
    this.camera.updateProjectionMatrix()
  }

  async enterVR(unitFloor: number) {
    if (!this.building || this.mode !== 'walk') return
    const f = this.building.floor(unitFloor)!
    const floorY = f.info.elevation + this.building.slabThickness
    const rects = this.building.collisionRects(unitFloor)
    const b = this.building
    const pos = this.walk.pos.clone().setY(floorY)
    this.walk.stop()
    this.camera.position.set(0, 0, 0)
    this.camera.rotation.set(0, 0, 0)
    await this.xr.enter(this.scene, pos, this.walk.yaw, (p) => {
      const [x, y] = b.worldToPlan(p)
      const inSlab = f.type.slab.some(([x0, y0, x1, y1]) => x > x0 && x < x1 && y > y0 && y < y1)
      if (!inSlab) return false
      const [rx, ry] = pushOut(x, y, 0.2, rects)
      return Math.hypot(rx - x, ry - y) < 0.01
    })
  }

  /** Охват теневой камеры по режиму: в интерьере нужна высокая детализация, иначе свет «течёт» сквозь стены */
  private setShadowRange(mode: Mode) {
    const r = mode === 'walk' ? 22 : mode === 'floor' ? 70 : 190
    const s = this.sun.shadow
    s.camera.left = -r
    s.camera.right = r
    s.camera.top = r
    s.camera.bottom = -r
    s.normalBias = mode === 'walk' ? 0.02 : mode === 'floor' ? 0.08 : 0.25
    s.bias = mode === 'walk' ? -0.0001 : -0.0003
    s.camera.updateProjectionMatrix()
  }

  // ---------- камера ----------

  private moveCamera(pos: THREE.Vector3, target: THREE.Vector3, duration: number) {
    if (duration <= 0) {
      this.camera.position.copy(pos)
      this.controls.target.copy(target)
      this.controls.update()
      return
    }
    this.tween = {
      from: [this.camera.position.clone(), this.controls.target.clone()],
      to: [pos.clone(), target.clone()],
      t: 0,
      d: duration,
    }
  }

  // ---------- ввод ----------

  private onPointerMove = (e: PointerEvent) => {
    const r = this.renderer.domElement.getBoundingClientRect()
    this.pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
    this.pointerScreen = { x: e.clientX - r.left, y: e.clientY - r.top }
    this.pointerInside = e.pointerType === 'mouse'
    this.pointerDirty = true
  }

  private onPointerDown = (e: PointerEvent) => {
    this.down = { x: e.clientX, y: e.clientY, t: performance.now() }
  }

  private onPointerUp = (e: PointerEvent) => {
    if (!this.down) return
    const moved = Math.hypot(e.clientX - this.down.x, e.clientY - this.down.y)
    const dt = performance.now() - this.down.t
    this.down = null
    if (moved > 6 || dt > 600 || this.mode === 'walk' || this.mode === 'view') return
    this.onPointerMove(e)
    if (this.massing && (this.mode === 'building' || this.mode === 'block')) {
      const id = this.pickBlock()
      if (id) this.events.clickBlock(id)
      return
    }
    const hit = this.pick()
    if (this.mode === 'building' && hit.floor !== null) this.events.clickFloor(hit.floor)
    else if (this.mode === 'floor' && hit.unit !== null) this.events.clickUnit(hit.unit)
  }

  private pickBlock(): string | null {
    if (!this.massing) return null
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const hits = this.raycaster.intersectObjects(this.massing.pickables(), false)
    return hits.length ? (hits[0].object.userData.block as string) : null
  }

  private pick(): { floor: number | null; unit: number | null } {
    if (!this.building) return { floor: null, unit: null }
    this.raycaster.setFromCamera(this.pointer, this.camera)
    if (this.mode === 'building') {
      const hits = this.raycaster.intersectObjects(this.building.pickables(), false)
      return { floor: hits.length ? (hits[0].object.userData.floor as number) : null, unit: null }
    }
    if (this.mode === 'floor') {
      const hits = this.raycaster.intersectObjects(this.building.unitPickables(), false)
      return { floor: null, unit: hits.length ? (hits[0].object.userData.unitId as number) : null }
    }
    return { floor: null, unit: null }
  }

  private processHover() {
    if (!this.pointerDirty) return
    this.pointerDirty = false
    if (this.massing && (this.mode === 'building' || this.mode === 'block')) {
      const id = this.pointerInside ? this.pickBlock() : null
      if (id !== this.lastHoverBlock) {
        this.lastHoverBlock = id
        this.massing.setHover(id)
        this.renderer.domElement.style.cursor = id ? 'pointer' : ''
      }
      this.events.hoverBlock(id, this.pointerScreen.x, this.pointerScreen.y)
      return
    }
    const hit = this.pointerInside ? this.pick() : { floor: null, unit: null }
    if (hit.floor !== this.lastHoverFloor) {
      this.lastHoverFloor = hit.floor
      this.building?.setHoverFloor(hit.floor)
      this.renderer.domElement.style.cursor = hit.floor !== null ? 'pointer' : ''
    }
    if (this.mode === 'building') this.events.hoverFloor(hit.floor, this.pointerScreen.x, this.pointerScreen.y)
    if (hit.unit !== this.lastHoverUnit) {
      this.lastHoverUnit = hit.unit
      this.renderer.domElement.style.cursor = hit.unit !== null ? 'pointer' : ''
    }
    if (this.mode === 'floor') this.events.hoverUnit(hit.unit, this.pointerScreen.x, this.pointerScreen.y)
  }

  /** Подсветка этажа извне (наведение на рейку этажей) */
  hoverFloorFromUI(n: number | null) {
    if (this.mode === 'building') this.building?.setHoverFloor(n)
  }

  // ---------- цикл ----------

  private loop = () => {
    const dt = Math.min(this.clock.getDelta(), 0.1)
    if (this.tween) {
      this.tween.t += dt / this.tween.d
      const k = this.tween.t >= 1 ? 1 : 1 - Math.pow(1 - this.tween.t, 3)
      this.camera.position.lerpVectors(this.tween.from[0], this.tween.to[0], k)
      this.controls.target.lerpVectors(this.tween.from[1], this.tween.to[1], k)
      if (this.tween.t >= 1) this.tween = null
    }
    if (this.xr.active) this.xr.update(dt)
    else if (this.mode === 'walk' || this.mode === 'view') this.walk.update(dt)
    else this.controls.update()
    if (!this.xr.active) this.processHover()
    // тени следуют за интересом: в режиме этажа и прогулки — за этажом
    const focus = this.mode === 'walk' && this.walkFloorN !== null && this.building
      ? this.building.floorCenterWorld(this.walkFloorN)
      : this.controls.target
    this.sun.target.position.set(focus.x, this.mode === 'building' ? 0 : focus.y, focus.z)
    this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDir, 650)
    this.renderer.render(this.scene, this.camera)
    // в прогулке метки мест не показываем: внутри квартиры они видны сквозь стены
    this.labels.domElement.style.display = this.mode === 'walk' ? 'none' : ''
    if (this.mode !== 'walk') this.labels.render(this.scene, this.camera)
  }

  private sunDir = new THREE.Vector3(0.3, 0.8, 0.5).normalize()

  private resize = () => {
    const w = this.canvasHost.clientWidth
    const h = this.canvasHost.clientHeight
    this.renderer.setSize(w, h)
    this.labels.setSize(w, h)
    this.camera.aspect = w / h
    this.applyViewShift()
  }

  /** На узком экране нижние панели закрывают низ кадра — сдвигаем картинку вверх */
  private applyViewShift() {
    const w = this.canvasHost.clientWidth
    const h = this.canvasHost.clientHeight
    const shift = w < 760 ? (this.mode === 'floor' ? 0.2 : this.mode === 'building' ? 0.08 : 0) : 0
    if (shift > 0) this.camera.setViewOffset(w, h, 0, h * shift, w, h)
    else this.camera.clearViewOffset()
    this.camera.updateProjectionMatrix()
  }

  dispose() {
    this.renderer.setAnimationLoop(null)
    window.removeEventListener('resize', this.resize)
    this.walk.dispose()
    this.controls.dispose()
    this.renderer.dispose()
  }
}

/** Выпуклая оболочка точек (монотонная цепь) — площадка вокруг корпусов */
function hull(pts: Point[]): Point[] {
  const p = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1])
  if (p.length < 3) return p
  const cross = (o: Point, a: Point, b: Point) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
  const lower: Point[] = []
  for (const q of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], q) <= 0) lower.pop()
    lower.push(q)
  }
  const upper: Point[] = []
  for (const q of [...p].reverse()) {
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], q) <= 0) upper.pop()
    upper.push(q)
  }
  return lower.slice(0, -1).concat(upper.slice(0, -1))
}
