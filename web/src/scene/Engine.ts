import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Sky } from 'three/examples/jsm/objects/Sky.js'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { WEATHER_COVER, litFraction, type Season, type Weather } from '@/domain/atmosphere'
import { Precipitation, SkyLayers, StreetLamps, atmoUniforms } from './atmosphere'
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js'
import { layoutUnit, type UnitLayout } from '@/domain/rooms'
import { distToPolygon } from '@/domain/units'
import { furnish, type Furnished } from './interior/furnish'
import { styleKit, type InteriorStyle } from './interior/styles'
import type { BlockLayout, Context, FloorType, Parking, Place, PlaceCategory, Point, Project, Rect, Unit } from '@/domain/types'
import { PLACE_CATEGORY, walkLabel } from '@/domain/places'
import { apiAsset } from '@/api/client'
import type { UnitFilter } from '@/domain/units'
import { planToENU } from '@/domain/geo'
import { clockLabel, sunDay, sunPosition, sunVectorENU, tashkentDate } from '@/domain/sun'
import type { Facade } from '@/domain/views'
import { BuildingView } from './building'
import { buildContext, type Trees } from './context'
import { createMaterials, type Materials } from './materials'
import { WalkController, pushOut } from './walk'
import { XRController } from './xr'
import { MassingView, floorElevation } from './massing'
import { ParkingView } from './parking'
import { mergeStatic } from './mergeStatic'
import { RayIndex } from './rayIndex'
import { AdaptiveQuality, type QualityMode } from './quality'
import type { SpotFilter } from '@/domain/parking'

export type Mode = 'building' | 'floor' | 'walk' | 'block' | 'view' | 'parking'

export interface EngineEvents {
  hoverFloor(n: number | null, x: number, y: number): void
  clickFloor(n: number): void
  hoverUnit(id: number | null, x: number, y: number): void
  clickUnit(id: number): void
  hoverBlock(id: string | null, x: number, y: number): void
  clickBlock(id: string): void
  hoverSpot(id: number | null, x: number, y: number): void
  clickSpot(id: number): void
  /** клик по знаку "P" у въезда */
  clickParking(): void
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
  private lastHoverSpot: number | null = null
  private parking: ParkingView | null = null
  private contextGroup: THREE.Group | null = null
  /** фон режима паркинга: ровный тёмный, без неба */
  private parkingBg = new THREE.Color(0x15181d)
  private placeFilter: [PlaceCategory[], boolean, boolean] | null = null
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
  private readonly mobile = matchMedia('(pointer: coarse)').matches

  // ---------- атмосфера: сезон, погода, ночь ----------
  private composer: EffectComposer
  private bloom: UnrealBloomPass
  private skyLayers = new SkyLayers()
  private precip = new Precipitation()
  private lamps: StreetLamps | null = null
  private trees: Trees | null = null
  private sunAlt = 30
  private hour = 15
  /** текущие значения плавно догоняют целевые — смена погоды выглядит как переход, а не щелчок */
  private atmo = { cover: 0, rain: 0, snow: 0, snowCover: 0, wet: 0 }
  private atmoTarget = { cover: 0, rain: 0, snow: 0, snowCover: 0, wet: 0 }
  private lightsOn = 0
  private envDirty = false
  private envAt = 0
  private roomLights: THREE.PointLight[] = []
  private roomLamps = new THREE.Group()
  private roomLampMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
  // ---------- ремонт и мебель в прогулке ----------
  private interiorStyle: InteriorStyle = 'scandi'
  private furnished: Furnished | null = null
  private walkLayout: UnitLayout | null = null
  private walkUnit: Unit | null = null
  /** препятствия прогулки: стены этажа + мебель */
  private walkRects: Rect[] = []
  private gtao: GTAOPass
  // ---------- производительность ----------
  /** карта теней перерисовывается только при движении света или изменении сцены (см. updateShadows) */
  private shadowDirty = true
  private shadowKey = ''
  private shadowAt = 0
  /** адаптивное разрешение рендера */
  private quality = new AdaptiveQuality(Math.min(devicePixelRatio, this.mobile ? 1.6 : 2))
  private lastFrameAt = 0

  constructor(private canvasHost: HTMLElement, private events: EngineEvents) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.mobile ? 1.6 : 2))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 0.92
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    // тени обновляем сами (updateShadows): на неподвижной сцене карта 4096² не перерисовывается каждый кадр
    this.renderer.shadowMap.autoUpdate = false
    this.renderer.xr.enabled = true
    canvasHost.appendChild(this.renderer.domElement)
    this.labels.domElement.className = 'labels-layer'
    canvasHost.appendChild(this.labels.domElement)
    this.renderer.domElement.style.touchAction = 'none'

    this.camera = new THREE.PerspectiveCamera(38, 1, OVERVIEW_NEAR, 6000)
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
    // небо — последним среди непрозрачных (глубина = дальняя плоскость): дорогой шейдер рассеяния считается
    // только в пикселях, где неба действительно видно, а не под домами и землёй
    this.sky.renderOrder = 100
    this.scene.add(this.skyLayers.stars, this.skyLayers.clouds, this.precip.group)
    this.skyScene.add(this.skyLayers.cloudsEnv)

    // свет в квартире при прогулке: постоянный набор источников (интенсивность 0 днём) —
    // число источников не меняется, шейдеры не перекомпилируются при входе в квартиру
    for (let i = 0; i < 3; i++) {
      const l = new THREE.PointLight(0xffc98f, 0, 8, 2)
      this.roomLights.push(l)
      this.scene.add(l)
    }
    this.roomLamps.visible = false
    this.scene.add(this.roomLamps)

    // постобработка: свечение (bloom) для окон, фонарей и бликов; MSAA в буфере вместо сглаживания холста
    const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: this.mobile ? 0 : 4 })
    this.composer = new EffectComposer(this.renderer, rt)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    // мягкие контактные тени (ambient occlusion) — только в квартире: мебель «стоит» на полу, углы темнее
    this.gtao = new GTAOPass(this.scene, this.camera, 256, 256)
    this.gtao.enabled = false
    this.gtao.blendIntensity = 0.9
    this.gtao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.4, thickness: 1.0, scale: 1.0, samples: 16 })
    this.gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 16 })
    // AO мягкое и низкочастотное — считаем в половинном разрешении (в 4 раза меньше пикселей), смешиваем в полном
    const gtaoSetSize = this.gtao.setSize.bind(this.gtao)
    this.gtao.setSize = (w: number, h: number) => gtaoSetSize(Math.max(1, Math.round(w / 2)), Math.max(1, Math.round(h / 2)))
    this.composer.addPass(this.gtao)
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.15, 0.35, 1.5)
    this.composer.addPass(this.bloom)
    this.composer.addPass(new OutputPass())

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
    // ?quality=high — всегда полное разрешение (снимки экрана, мощная машина)
    if (new URLSearchParams(location.search).get('quality') === 'high') this.quality.setMode('high')
    this.resize()
    this.renderer.setAnimationLoop(this.loop)
  }

  // ---------- загрузка ----------

  load(project: Project, ctx: Context, types: Map<string, FloorType>) {
    this.lat = project.location.lat
    this.lon = project.location.lon
    // палитра фасада по рендерам застройщика (если в данных проекта она есть)
    const pal = project.building.palette
    if (pal?.stone) this.mat.stone.color.set(pal.stone)
    if (pal?.band) this.mat.band.color.set(pal.band)
    if (pal?.glass) this.mat.glass.color.set(pal.glass)
    let site: Point[]
    let footprints: Point[][]
    if (project.building.mode === 'massing') {
      this.massing = new MassingView(project, this.mat)
      this.scene.add(this.massing.root)
      footprints = this.massing.blocks.map((b) => b.footprint)
      site = hull(footprints.flat())
    } else {
      this.building = new BuildingView(project, types, this.mat)
      this.scene.add(this.building.root)
      // участок — по габариту первого этажа (подиума), какой бы тип у него ни был
      const pod = types.get(project.building.floors[0].type)!.bbox
      const az = project.building.azimuth_deg
      site = [[pod[0], pod[1]], [pod[2], pod[1]], [pod[2], pod[3]], [pod[0], pod[3]]].map(
        ([x, y]) => planToENU(x, y, az) as Point,
      )
      footprints = [site]
    }
    const { group, occluders, trees, ground } = buildContext(ctx, this.mat, site, footprints)
    this.occluders = occluders
    this.trees = trees
    this.contextGroup = group
    this.scene.add(group)
    this.lamps = new StreetLamps(ctx, site, this.mat.lampPole, ground)
    this.scene.add(this.lamps.group)
    this.scene.add(this.sunPath)
    this.sunPathDay = ''
    this.buildPlaces(ctx.places ?? [])
    this.flyToBuilding(true)
    this.controls.autoRotate = true
  }

  // ---------- солнце ----------

  setSun(day: string, hour: number) {
    const p = sunPosition(tashkentDate(day, hour), this.lat, this.lon)
    const [e, n, up] = sunVectorENU(p)
    this.sunDir.set(e, up, -n).normalize()
    this.sunAlt = p.altitude
    this.hour = hour
    this.buildSunPath(day)
    this.placeSunBall()
    const skyDir = p.altitude < -3 ? new THREE.Vector3(e, -0.06, -n).normalize() : this.sunDir
    this.sky.material.uniforms.sunPosition.value.copy(skyDir)
    ;(this.skyScene.children[0] as Sky).material.uniforms.sunPosition.value.copy(skyDir)
    this.applyLighting()
    this.envDirty = true
  }

  /** Сезон и погода. Снег зимой ложится на землю, кровли и кроны; дождь делает асфальт мокрым и зеркальным. */
  setAtmosphere(season: Season, weather: Weather) {
    const t = this.atmoTarget
    t.cover = WEATHER_COVER[weather]
    t.rain = weather === 'rain' ? 1 : 0
    t.snow = weather === 'snow' ? 1 : 0
    t.snowCover = season === 'winter' || weather === 'snow' ? (weather === 'rain' ? 0.35 : 1) : 0
    t.wet = weather === 'rain' ? 1 : season === 'winter' && weather !== 'snow' ? 0.2 : 0
    this.trees?.setSeason(season)
    this.shadowDirty = true
    // земля, зелень OSM, спортплощадки, газоны садов во дворе
    const SEASON_COLORS: Record<Season, [number, number, number, number]> = {
      winter: [0xb8b2a6, 0x8d8a6c, 0x7d876a, 0x92906f],
      spring: [0xbdb9a0, 0x86b35c, 0x6fa060, 0x8fbf60],
      summer: [0xc9c2b4, 0x8aa66a, 0x6f9a6a, 0x93b86a],
      autumn: [0xc6b9a0, 0xa59a5e, 0x86915e, 0xa7a565],
    }
    const [ground, green, pitch, lawn] = SEASON_COLORS[season]
    this.mat.ground.color.set(ground)
    this.mat.green.color.set(green)
    this.mat.pitch.color.set(pitch)
    this.mat.lawn.color.set(lawn)
  }

  /** Свет, небо, туман, окна и фонари из положения солнца и текущей погоды (каждый кадр — это дёшево) */
  private applyLighting() {
    const S = THREE.MathUtils.smoothstep
    const alt = this.sunAlt
    const { cover, rain, snow } = this.atmo
    const day01 = S(alt, -4, 8)
    const night = 1 - day01
    this.sun.intensity = 3.6 * S(alt, -1, 12) * (1 - 0.88 * cover)
    this.sun.color.setHSL(0.09, 0.6 * (1 - 0.6 * cover), 0.62 + 0.3 * S(alt, 0, 35))
    this.hemi.intensity = (0.12 + 0.38 * day01) * (1 + 0.8 * cover * day01) + (0.16 + 0.22 * this.atmo.snowCover) * night
    this.hemi.color.setRGB(0.87, 0.91, 0.96).lerp(new THREE.Color(0.42, 0.5, 0.72), night)
    this.scene.environmentIntensity = (0.18 + 0.32 * day01) * (1 - 0.3 * cover)
    // снег отражает много света — чуть прикрываем экспозицию, чтобы не было «засвета»
    this.renderer.toneMappingExposure = (0.6 + 0.22 * day01) * (1 + 0.18 * cover * day01) * (1 - 0.14 * this.atmo.snowCover * day01)

    const sky = this.sky.material.uniforms
    const envSky = (this.skyScene.children[0] as Sky).material.uniforms
    for (const u of [sky, envSky]) {
      u.turbidity.value = 5.5 + 9 * cover
      u.rayleigh.value = 1.1 * (1 - 0.7 * cover)
    }

    // туман: в ясную погоду — лёгкая дымка вдали, в дождь и снегопад — плотнее и ближе
    const haze = Math.max(rain * 0.75, snow, cover * 0.25)
    const fog = this.scene.fog as THREE.Fog
    fog.near = THREE.MathUtils.lerp(900, 70, haze)
    fog.far = THREE.MathUtils.lerp(3200, 950, haze)
    const g = (0.1 + 0.62 * day01) * (1 - 0.22 * rain)
    // ночью — глубокий синий, а не чёрный: так силуэты домов читаются на фоне неба
    fog.color.setHSL(0.58, 0.15, 0.25 + 0.6 * day01).lerp(new THREE.Color(0.03, 0.045, 0.085), night * (1 - cover))
    fog.color.lerp(new THREE.Color(g * 0.97, g, g * 1.04), cover)

    // облака: освещённость, тёплый закат, горизонт в цвет тумана — без шва между землёй и небом
    const L = 0.04 + 0.96 * day01
    const sunset = S(alt, -3, 2) * (1 - S(alt, 4, 14))
    const cu = this.skyLayers.uniforms
    cu.uCover.value = cover
    cu.uLight.value.setRGB(1, 0.98, 0.95).lerp(new THREE.Color(1, 0.62, 0.42), sunset * (1 - cover)).multiplyScalar(L * (1 - 0.35 * rain - 0.15 * snow))
    cu.uShade.value.copy(cu.uLight.value).multiplyScalar(0.5 - 0.15 * rain)
    cu.uHorizon.value.copy(fog.color)
    cu.uSunDir.value.copy(this.sunDir)
    // в паркинге звёзд нет: фон ровный
    this.skyLayers.setStars(this.mode === 'parking' ? 0 : (1 - S(alt, -14, -3)) * (1 - cover) ** 2, this.renderer.getPixelRatio())

    // свет: окна зажигаются в сумерках и в пасмурную погоду, фонари — после заката
    this.lightsOn = THREE.MathUtils.clamp(1 - S(alt, -3, 7) + 0.2 * cover * day01, 0, 1)
    atmoUniforms.uNight.value = this.lightsOn
    atmoUniforms.uLit.value = litFraction(this.hour)
    this.lamps?.setOn(THREE.MathUtils.clamp(1 - S(alt, -2, 5) + 0.35 * rain, 0, 1))
    this.bloom.strength = 0.1 + 0.38 * this.lightsOn
    // в квартире светлые стены не должны «светиться» — порог выше
    this.bloom.threshold = THREE.MathUtils.lerp(1.5, this.mode === 'walk' ? 1.3 : 0.9, this.lightsOn)
    // днём в квартире свечению не за что зацепиться (сверка кадров: разница 0) — проход не тратим
    this.bloom.enabled = !(this.mode === 'walk' && this.lightsOn < 0.01)

    // паркинг под землёй: ровный нейтральный свет, не зависит от часа и погоды; без дымки
    if (this.mode === 'parking') {
      // отражения неба выключены: ночное небо делало бы паркинг тусклым — свет только свой
      this.sun.intensity = 1.9
      this.sun.color.setRGB(1, 0.98, 0.95)
      this.hemi.intensity = 1.55
      this.hemi.color.setRGB(0.93, 0.95, 0.98)
      this.scene.environmentIntensity = 0
      this.renderer.toneMappingExposure = 0.85
      fog.near = 1e5
      fog.far = 2e5
      this.bloom.strength = 0.08
      this.bloom.threshold = 1.4
    }

    // свет в квартире при прогулке
    const room = this.mode === 'walk' ? this.lightsOn : 0
    for (const l of this.roomLights) l.intensity = 9 * room
    this.furnished?.setLight(room)
    this.roomLampMat.color.setRGB(1, 0.85, 0.65).multiplyScalar(0.8 + 2.5 * room)
  }

  /** Плавный переход погоды; снежный покров ложится и тает медленнее, чем начинается осадок */
  private stepAtmosphere(dt: number) {
    const a = this.atmo
    const t = this.atmoTarget
    let changed = false
    for (const k of Object.keys(a) as (keyof typeof a)[]) {
      const rate = k === 'snowCover' || k === 'wet' ? 0.9 : 1.6
      const d = t[k] - a[k]
      if (Math.abs(d) < 1e-3) {
        if (a[k] !== t[k]) changed = true
        a[k] = t[k]
        continue
      }
      a[k] += d * (1 - Math.exp(-dt * rate))
      changed = true
    }
    atmoUniforms.uSnow.value = a.snowCover
    atmoUniforms.uWet.value = a.wet
    atmoUniforms.uTime.value += dt
    if (changed) this.envDirty = true
    this.applyLighting()
    const light = 0.15 + 0.85 * THREE.MathUtils.smoothstep(this.sunAlt, -4, 8)
    this.precip.update(dt, this.camera, a.rain, a.snow, light, this.renderer.getPixelRatio())
    // карта окружения (отражения) — не чаще 4 раз в секунду
    const now = performance.now()
    if (this.envDirty && now - this.envAt > 250) {
      this.envDirty = false
      this.envAt = now
      this.updateEnv()
    }
  }

  private updateEnv() {
    const rt = this.pmrem.fromScene(this.skyScene, 0, 0.1, 2000)
    this.envRT?.dispose()
    this.envRT = rt
    this.scene.environment = rt.texture
  }

  /**
   * Прямое солнце в окнах квартиры за день (с затенением соседними домами и самим зданием).
   * Окна — точки снаружи фасада квартиры: по каждому направлению до трёх (края и середина), чтобы тень соседа,
   * закрывшая середину длинного фасада, не «съела» солнце, которое ещё попадает в угловое окно.
   */
  sunMinutes(facades: Facade[], floorElevation: number, day: string, azimuthDeg: number): SunHours {
    if (!this.building || !facades.length) return emptySunHours(day, this.lat, this.lon)
    const byDir = new Map<number, Facade[]>()
    for (const f of facades) {
      const k = Math.round(f.azimuth / 10)
      if (!byDir.has(k)) byDir.set(k, [])
      byDir.get(k)!.push(f)
    }
    const windows: SunWindow[] = []
    for (const list of byDir.values()) {
      const pick = [...new Set([0, Math.floor(list.length / 2), list.length - 1])].map((i) => list.at(i)!)
      for (const f of pick) {
        const p = this.building.planToWorld(f.mid[0] + f.normal[0] * 0.6, f.mid[1] + f.normal[1] * 0.6, floorElevation + 1.4)
        const [e, n] = planToENU(f.normal[0], f.normal[1], azimuthDeg)
        windows.push({ p, e, n })
      }
    }
    return this.sunHoursFor(windows, day)
  }

  /** Препятствия для солнечного луча: окружение, корпуса ЖК, стены и ламели самого здания */
  private sunOccluders(): THREE.Object3D[] {
    const occ: THREE.Object3D[] = []
    if (this.occluders) occ.push(this.occluders)
    if (this.massing) occ.push(...this.massing.occluders())
    if (this.building) occ.push(...this.building.occluders())
    return occ
  }

  /**
   * Интервалы прямого солнца: от восхода до заката шаг 5 минут, каждая смена «солнце/тень» уточняется
   * бисекцией до ~20 секунд. Солнце считается, когда его видимая высота ≥ 1° и оно светит в фасад
   * (угол между нормалью фасада и солнцем по горизонтали < 83°), а луч от окна к солнцу ничего не пересекает.
   */
  private sunHoursFor(windows: SunWindow[], day: string): SunHours {
    const sd = sunDay(day, this.lat, this.lon)
    const result: SunHours = { minutes: 0, intervals: [], sunrise: sd.sunrise, sunset: sd.sunset, dayMinutes: sd.dayLength * 60 }
    if (sd.sunrise === null || sd.sunset === null || !windows.length) return result
    const occ = this.sunOccluders()
    const index = this.sunBVH ? this.rayIndexFor(occ) : null
    const ray = new THREE.Raycaster()
    ray.far = 800
    const dir = new THREE.Vector3()
    const lit = (h: number): boolean => {
      const sp = sunPosition(tashkentDate(day, h), this.lat, this.lon)
      if (sp.altitude < 1) return false
      const [se, sn, su] = sunVectorENU(sp)
      const hz = Math.hypot(se, sn) || 1
      dir.set(se, su, -sn).normalize()
      for (const w of windows) {
        if ((w.e * se + w.n * sn) / hz < 0.12) continue
        if (index) {
          if (!index.hits(w.p, dir, ray.far)) return true
          continue
        }
        ray.set(w.p, dir)
        if (ray.intersectObjects(occ, false).length === 0) return true
      }
      return false
    }
    const STEP = 5 / 60
    const edge = (a: number, b: number, aLit: boolean): number => {
      for (let i = 0; i < 4; i++) {
        const m = (a + b) / 2
        if (lit(m) === aLit) a = m
        else b = m
      }
      return (a + b) / 2
    }
    let t = sd.sunrise
    let prev = lit(t)
    let open: number | null = prev ? t : null
    while (t < sd.sunset) {
      const nt = Math.min(t + STEP, sd.sunset)
      const cur = lit(nt)
      if (cur !== prev) {
        const x = edge(t, nt, prev)
        if (cur) open = x
        else if (open !== null) {
          result.intervals.push([open, x])
          open = null
        }
      }
      prev = cur
      t = nt
    }
    if (open !== null) result.intervals.push([open, sd.sunset])
    result.minutes = Math.round(result.intervals.reduce((s, [a, b]) => s + (b - a) * 60, 0))
    return result
  }

  /** BVH по препятствиям солнца: в десятки раз быстрее перебора Raycaster; false — старый путь (для сверки) */
  sunBVH = true
  private rayIndex: { key: string; index: RayIndex } | null = null

  /** Индекс строится один раз на набор препятствий и их положение; меняется набор — перестраивается */
  private rayIndexFor(occ: THREE.Object3D[]): RayIndex {
    for (const o of occ) o.updateWorldMatrix(true, false)
    const key = occ.map((o) => `${o.uuid}:${o.matrixWorld.elements.map((x) => x.toFixed(3)).join(',')}`).join(';')
    if (this.rayIndex?.key !== key) this.rayIndex = { key, index: new RayIndex(occ) }
    return this.rayIndex.index
  }

  /** Дуга пути солнца над домом за выбранный день с отметками часов */
  private sunPath = new THREE.Group()
  private sunPathDay = ''
  private sunBall: THREE.Mesh | null = null
  private sunPathOn = false

  setSunPathVisible(on: boolean) {
    this.sunPathOn = on
    this.updateSunPathVisibility()
    // включили на общем виде — отъезжаем, чтобы дуга целиком вошла в кадр
    if (on && (this.mode === 'building' || this.mode === 'block')) {
      const { center, radius } = this.sunPathFrame()
      const target = new THREE.Vector3(center.x, radius * 0.38, center.z)
      const dir = this.camera.position.clone().sub(this.controls.target).setY(0)
      if (dir.lengthSq() < 1e-3) dir.set(0.36, 0, 0.93)
      dir.normalize()
      const portrait = this.canvasHost.clientWidth < this.canvasHost.clientHeight
      const d = radius * (portrait ? 4.2 : 2.9)
      this.controls.autoRotate = false
      this.moveCamera(target.clone().addScaledVector(dir, d).setY(radius * 0.95), target, 1.1)
    }
  }

  private updateSunPathVisibility() {
    this.sunPath.visible = this.sunPathOn && (this.mode === 'building' || this.mode === 'block' || this.mode === 'floor')
  }

  private buildSunPath(day: string) {
    if (this.sunPathDay === day && this.sunPath.children.length) return
    this.sunPathDay = day
    for (const c of [...this.sunPath.children]) {
      this.sunPath.remove(c)
      if (c instanceof CSS2DObject) c.element.remove()
      const m = c as THREE.Mesh
      m.geometry?.dispose()
    }
    const sd = sunDay(day, this.lat, this.lon)
    if (sd.sunrise === null || sd.sunset === null) return
    const { center, radius } = this.sunPathFrame()
    const at = (h: number) => {
      const [e, n, u] = sunVectorENU(sunPosition(tashkentDate(day, h), this.lat, this.lon))
      return new THREE.Vector3(center.x + e * radius, Math.max(u, 0) * radius, center.z - n * radius)
    }
    const pts: THREE.Vector3[] = []
    for (let h = sd.sunrise; h <= sd.sunset; h += 1 / 30) pts.push(at(h))
    pts.push(at(sd.sunset))
    const tube = Math.max(radius * 0.006, 0.45)
    const arc = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 240, tube, 8),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.8, 0.55).multiplyScalar(1.3), transparent: true, opacity: 0.85, fog: false }),
    )
    arc.renderOrder = 6
    this.sunPath.add(arc)
    // отметки часов и подписи
    const dotGeo = new THREE.SphereGeometry(tube * 2.6, 12, 8)
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xf2c79e, fog: false })
    const label = (text: string, p: THREE.Vector3, cls: string) => {
      const el = document.createElement('div')
      el.className = `sun-tick ${cls}`
      el.textContent = text
      const o = new CSS2DObject(el)
      o.position.copy(p)
      o.center.set(0.5, 1.4)
      this.sunPath.add(o)
    }
    for (let h = Math.ceil(sd.sunrise); h <= Math.floor(sd.sunset); h++) {
      const p = at(h)
      const dot = new THREE.Mesh(dotGeo, dotMat)
      dot.position.copy(p)
      this.sunPath.add(dot)
      if (h % 2 === 0 && Math.abs(h - sd.noon) > 0.6) label(`${h}:00`, p, '')
    }
    label(`восход ${clockLabel(sd.sunrise)}`, at(sd.sunrise), 'edge')
    label(`закат ${clockLabel(sd.sunset)}`, at(sd.sunset), 'edge')
    // линия от центра к точке полудня: где юг и как высоко солнце в полдень
    const noon = at(sd.noon)
    const mast = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(center.x, 0, center.z), noon]),
      new THREE.LineBasicMaterial({ color: 0xf2c79e, transparent: true, opacity: 0.25, fog: false }),
    )
    this.sunPath.add(mast)
    label(`полдень ${clockLabel(sd.noon)} · ${Math.round(sd.noonAltitude)}°`, noon, 'noon')
    this.sunBall = new THREE.Mesh(
      new THREE.SphereGeometry(tube * 7, 24, 16),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.85, 0.55).multiplyScalar(3), fog: false }),
    )
    this.sunPath.add(this.sunBall)
    this.placeSunBall()
  }

  private sunPathFrame(): { center: THREE.Vector3; radius: number } {
    if (this.massing) {
      const c = this.massing.center()
      const r = Math.max(...this.massing.blocks.flatMap((b) => b.footprint.map(([x, y]) => Math.hypot(x - c.x, -y - c.z))))
      return { center: new THREE.Vector3(c.x, 0, c.z), radius: Math.max(r * 1.25, 120) }
    }
    const H = this.building?.height ?? 80
    return { center: new THREE.Vector3(0, 0, 0), radius: Math.max(H * 1.15, 90) }
  }

  private placeSunBall() {
    if (!this.sunBall) return
    const { center, radius } = this.sunPathFrame()
    this.sunBall.position.set(center.x, 0, center.z).addScaledVector(this.sunDir, radius)
    this.sunBall.visible = this.sunAlt > -0.5
  }

  // ---------- режимы ----------

  get currentMode(): Mode {
    return this.mode
  }

  flyToBuilding(instant = false) {
    this.leaveParking()
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

  updateUnits(units: Unit[], filter: UnitFilter, hoverId: number | null, selectedId: number | null) {
    this.building?.updateUnits(units)
    this.building?.styleUnits(filter, hoverId, selectedId)
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
    const base = f.info.elevation + this.building.slabThickness
    this.walkUnit = unit
    this.walkLayout = layoutUnit(f.type, unit)
    this.buildFurnishing()
    this.gtao.enabled = true
    const rects = this.walkRects

    // стартовая точка: самая большая свободная точка квартиры, лицом к окнам
    const start = this.startPoint(unit, f.type, rects)
    const pos = this.building.planToWorld(start[0], start[1], base + EYE)
    const yaw = this.bestYaw(start, rects, facades, base + EYE)
    const b = this.building
    const floorY = base + EYE
    const poly = unit.polygon
    // ходить можно только внутри выбранной квартиры: точка вне контура (с запасом 0,15 м) не принимается,
    // шаг по осям раздельно — поэтому вдоль границы скользим, а не застреваем
    const allowed = (x: number, y: number) => inPolygon(x, y, poly) && distToPolygon(x, y, poly) > 0.15
    let last: [number, number] = start
    this.walk.start(pos, yaw, (p) => {
      const [x, y] = b.worldToPlan(p)
      const [rx, ry] = pushOut(x, y, 0.24, this.walkRects)
      if (allowed(rx, ry)) last = [rx, ry]
      return b.planToWorld(last[0], last[1], floorY)
    })
    this.camera.near = 0.05
    this.camera.fov = this.mobile ? 72 : 66
    this.camera.updateProjectionMatrix()
    this.placeRoomLights(unit, f.type, base, f.info.elevation + f.info.height)
    this.roomLamps.visible = this.interiorStyle === 'none'
    // осадки не идут внутри дома: исключаем габарит этажа
    const [bx0, by0, bx1, by1] = f.type.bbox
    const c = this.building.planToWorld((bx0 + bx1) / 2, (by0 + by1) / 2, 0)
    this.precip.setExclusion({ cx: c.x, cz: c.z, hx: (bx1 - bx0) / 2 + 0.3, hz: (by1 - by0) / 2 + 0.3, rot: -this.building.root.rotation.y })
  }

  /** Стиль ремонта в прогулке: перестраивает мебель и отделку на лету */
  setInteriorStyle(style: InteriorStyle) {
    this.interiorStyle = style
    if (this.mode !== 'walk' || !this.building) return
    this.buildFurnishing()
    this.roomLamps.visible = style === 'none'
    // если после смены стиля стоим «в» мебели — отталкиваемся
    const [x, y] = this.building.worldToPlan(this.walk.pos)
    const [rx, ry] = pushOut(x, y, 0.24, this.walkRects)
    this.walk.pos.copy(this.building.planToWorld(rx, ry, this.walk.pos.y))
  }

  /** Комнаты выбранной квартиры с назначением (для подписи стиля и отладки) */
  get unitRooms() {
    return this.walkLayout?.rooms ?? []
  }

  private buildFurnishing() {
    if (!this.building || !this.walkUnit || !this.walkLayout || this.walkFloorN === null) return
    this.clearFurnishing()
    const f = this.building.floor(this.walkFloorN)!
    const base = f.info.elevation + this.building.slabThickness
    const ceilH = f.info.height - this.building.slabThickness
    const wallRects = this.building.collisionRects(this.walkFloorN)
    const style = this.interiorStyle
    if (style !== 'none') {
      this.furnished = furnish(this.walkLayout, style, ceilH)
      // сотни мешей мебели → десятки: в разы меньше вызовов отрисовки (кадр, тени, нормали GTAO)
      mergeStatic(this.furnished.group)
      this.furnished.group.position.y = base
      this.building.root.add(this.furnished.group)
      this.mat.wallInt.color.set(styleKit(style).wallColor)
    } else this.mat.wallInt.color.set(0xebe6de)
    this.building.setRoomLabelsVisible(style === 'none')
    this.walkRects = [...wallRects, ...(this.furnished?.colliders ?? [])]
    this.shadowDirty = true
  }

  private clearFurnishing() {
    if (this.furnished) {
      this.furnished.group.parent?.remove(this.furnished.group)
      this.furnished.dispose()
      this.furnished = null
    }
    this.mat.wallInt.color.set(0xebe6de)
  }

  /** Потолочные светильники в трёх самых больших комнатах квартиры */
  private placeRoomLights(unit: Unit, t: FloorType, floorY: number, ceilY: number) {
    for (const c of [...this.roomLamps.children]) {
      this.roomLamps.remove(c)
      ;(c as THREE.Mesh).geometry.dispose()
    }
    const poly = unit.polygon!
    const inPoly = (x: number, y: number) => {
      let c = false
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        if (poly[i][1] > y !== poly[j][1] > y && x < ((poly[j][0] - poly[i][0]) * (y - poly[i][1])) / (poly[j][1] - poly[i][1] + 1e-12) + poly[i][0]) c = !c
      }
      return c
    }
    const rooms = t.rooms.filter((r) => r.area >= 4 && inPoly(r.x, r.y)).sort((a, b) => b.area - a.area).slice(0, 3)
    this.roomLights.forEach((l, i) => {
      const r = rooms[i]
      if (!r || !this.building) {
        l.position.set(0, -1000, 0)
        return
      }
      l.position.copy(this.building.planToWorld(r.x, r.y, ceilY - 0.45))
      const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.06, 20), this.roomLampMat)
      lamp.position.copy(this.building.planToWorld(r.x, r.y, ceilY - 0.06))
      this.roomLamps.add(lamp)
    })
    void floorY
    this.roomLamps.visible = true
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
    const wasView = this.mode === 'view' || this.mode === 'floor' || this.mode === 'walk' || this.mode === 'parking'
    this.leaveParking()
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

  /** Солнце по сторонам корпуса на этаже: по три точки вдоль каждой стороны */
  blockSunMinutes(id: string, floor: number, day: string): SunHours[] {
    if (!this.massing) return []
    const it = this.massing.item(id)!
    const h = floorElevation(it.block, floor) + 1.4
    return it.sides.map((sd) => {
      const t: [number, number] = [-sd.normal[1], sd.normal[0]]
      const windows = [-0.35, 0, 0.35].map((k) => ({
        p: new THREE.Vector3(sd.mid[0] + sd.normal[0] * 0.7 + t[0] * sd.length * k, h, -(sd.mid[1] + sd.normal[1] * 0.7 + t[1] * sd.length * k)),
        e: sd.normal[0],
        n: sd.normal[1],
      }))
      return this.sunHoursFor(windows, day)
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
    this.placeFilter = [cats, showAll, visible]
    const on = visible && this.mode !== 'parking' // под землёй метки мест не нужны
    for (const { obj, place } of this.placeObjs) {
      obj.visible = on && cats.includes(place.category) && (showAll || place.known)
    }
  }

  // ---------- паркинг ----------

  /** Паркинг ЖК (если есть): уровни под корпусами и знак "P" у въезда */
  loadParking(p: Parking) {
    if (!p.levels.length) return
    this.parking = new ParkingView(p, () => this.events.clickParking())
    this.scene.add(this.parking.root)
    if (this.parking.marker) this.scene.add(this.parking.marker)
  }

  get parkingLevels(): number[] {
    return this.parking?.levelNumbers ?? []
  }

  /** Режим паркинга: виден только выбранный уровень — без домов, окружения и неба, на ровном фоне */
  showParking(level: number) {
    if (!this.parking) return
    const was = this.mode === 'parking'
    const prevY = was ? this.controls.target.y : 0
    this.leaveWalk()
    this.closeBlockBuilding()
    this.massing?.select(null, null)
    this.mode = 'parking'
    this.setShadowRange('building')
    this.applyViewShift()
    this.controls.autoRotate = false
    this.setXray(true)
    this.parking.show(level)
    const { center, radius } = this.parking.frame(level)
    if (was) {
      // другой уровень — камера опускается или поднимается вместе с ним
      const dy = center.y - prevY
      this.moveCamera(this.camera.position.clone().setY(this.camera.position.y + dy), this.controls.target.clone().setY(center.y), 0.6)
    } else {
      const portrait = this.canvasHost.clientWidth < this.canvasHost.clientHeight
      const k = Math.max(radius * 2.6, 100) * (portrait ? 2.1 : 1)
      const pos = center.clone().add(new THREE.Vector3(0.3 * k, 0.78 * k, 0.55 * k))
      // на широком экране справа панель паркинга — сдвигаем кадр, чтобы уровень был левее неё
      if (!portrait) {
        const right = new THREE.Vector3().subVectors(center, pos).cross(this.camera.up).setY(0).normalize().multiplyScalar(radius * 0.32)
        pos.add(right)
        center.add(right)
      }
      this.moveCamera(pos, center, 1.0)
    }
    this.controls.minDistance = 12
  }

  updateParking(spots: Parking['spots']) {
    this.parking?.update(spots)
  }

  styleParking(filter: SpotFilter, hoverId: number | null, selectedId: number | null) {
    this.parking?.style(filter, hoverId, selectedId)
  }

  private leaveParking() {
    if (this.mode !== 'parking') return
    this.parking?.hide()
    this.setXray(false)
  }

  private setXray(on: boolean) {
    this.shadowDirty = true
    if (this.contextGroup) this.contextGroup.visible = !on
    if (this.lamps) this.lamps.group.visible = !on
    if (this.massing) this.massing.root.visible = !on
    this.precip.group.visible = !on
    this.sky.visible = !on
    this.skyLayers.stars.visible = !on
    this.skyLayers.clouds.visible = !on
    this.scene.background = on ? this.parkingBg : null
    if (on) for (const p of this.placeObjs) p.obj.visible = false
    else if (this.placeFilter) {
      const [cats, all, vis] = this.placeFilter
      for (const { obj, place } of this.placeObjs) obj.visible = vis && cats.includes(place.category) && (all || place.known)
    }
  }

  setStick(x: number, y: number) {
    this.walk.setStick(x, y)
  }

  private leaveWalk() {
    if (this.mode !== 'walk' && this.mode !== 'view') return
    this.walk.stop()
    this.walkFloorN = null
    this.clearFurnishing()
    this.walkLayout = null
    this.walkUnit = null
    this.gtao.enabled = false
    this.precip.setExclusion(null)
    this.roomLamps.visible = false
    for (const l of this.roomLights) l.intensity = 0
    this.controls.enabled = true
    this.camera.near = OVERVIEW_NEAR
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
    const poly = this.walkUnit?.polygon
    const all = [...rects, ...(this.furnished?.colliders ?? [])]
    await this.xr.enter(this.scene, pos, this.walk.yaw, (p) => {
      const [x, y] = b.worldToPlan(p)
      const inSlab = f.type.slab.some(([x0, y0, x1, y1]) => x > x0 && x < x1 && y > y0 && y < y1)
      if (!inSlab) return false
      if (poly && !inPolygon(x, y, poly)) return false
      const [rx, ry] = pushOut(x, y, 0.2, all)
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
    if (this.mode === 'parking') {
      const id = this.pickSpot()
      if (id !== null) this.events.clickSpot(id)
      return
    }
    if (this.massing && (this.mode === 'building' || this.mode === 'block')) {
      const id = this.pickBlock()
      if (id) this.events.clickBlock(id)
      return
    }
    const hit = this.pick()
    if (this.mode === 'building' && hit.floor !== null) this.events.clickFloor(hit.floor)
    else if (this.mode === 'floor' && hit.unit !== null) this.events.clickUnit(hit.unit)
  }

  private pickSpot(): number | null {
    if (!this.parking) return null
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const hit = this.raycaster.intersectObjects(this.parking.pickables(), false)[0]
    return hit ? this.parking.spotAt(hit) : null
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
    if (this.mode === 'parking') {
      const id = this.pointerInside ? this.pickSpot() : null
      if (id !== this.lastHoverSpot) {
        this.lastHoverSpot = id
        this.renderer.domElement.style.cursor = id !== null ? 'pointer' : ''
      }
      this.events.hoverSpot(id, this.pointerScreen.x, this.pointerScreen.y)
      return
    }
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
    this.adaptQuality()
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
    // в паркинге свет всегда сверху (как от потолочных ламп), а не от солнца — ночью оно под горизонтом
    this.sun.position.copy(this.sun.target.position).addScaledVector(this.mode === 'parking' ? PARKING_LIGHT : this.sunDir, 650)
    this.stepAtmosphere(dt)
    this.updateSunPathVisibility()
    // знак "P" у въезда — только в обзоре комплекса и корпуса
    if (this.parking?.marker) this.parking.marker.visible = this.mode === 'building' || this.mode === 'block'
    this.updateShadows()
    // в VR постобработка не работает — рисуем напрямую
    if (this.renderer.xr.isPresenting) this.renderer.render(this.scene, this.camera)
    else this.composer.render(dt)
    // в прогулке метки мест не показываем: внутри квартиры они видны сквозь стены
    this.labels.domElement.style.display = this.mode === 'walk' ? 'none' : ''
    if (this.mode !== 'walk') this.labels.render(this.scene, this.camera)
  }

  private sunDir = new THREE.Vector3(0.3, 0.8, 0.5).normalize()

  /**
   * Карта теней: сразу — если сдвинулся свет (солнце, точка фокуса, охват) или сцена помечена изменённой,
   * иначе раз в полсекунды (страховка от изменений, о которых движок не знает). При облёте вокруг дома
   * фокус стоит на месте — тени не перерисовываются, а это треть вызовов отрисовки кадра.
   */
  private updateShadows() {
    const sm = this.renderer.shadowMap
    if (!this.sun.castShadow) return
    const p = this.sun.position
    const t = this.sun.target.position
    const c = this.sun.shadow.camera
    const key = `${p.x.toFixed(2)},${p.y.toFixed(2)},${p.z.toFixed(2)},${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)},${c.right},${this.mode},${this.walkFloorN}`
    const now = performance.now()
    if (this.shadowDirty || key !== this.shadowKey || now - this.shadowAt > 500 || this.renderer.xr.isPresenting) {
      sm.needsUpdate = true
      this.shadowDirty = false
      this.shadowKey = key
      this.shadowAt = now
    }
  }

  /** Адаптивное разрешение: при просадке FPS снижаем pixelRatio, при запасе — возвращаем */
  private adaptQuality() {
    const now = performance.now()
    const dtMs = this.lastFrameAt ? now - this.lastFrameAt : 16
    this.lastFrameAt = now
    if (this.renderer.xr.isPresenting) return
    const pr = this.quality.frame(dtMs, now)
    if (pr !== null) this.applyPixelRatio(pr)
  }

  private applyPixelRatio(pr: number) {
    if (Math.abs(this.renderer.getPixelRatio() - pr) < 1e-3) return
    this.renderer.setPixelRatio(pr)
    this.resize()
  }

  /** Качество: 'auto' — разрешение под видеокарту, 'high' — всегда максимальное */
  setQuality(mode: QualityMode) {
    this.applyPixelRatio(this.quality.setMode(mode))
  }

  get qualityMode(): QualityMode {
    return this.quality.mode
  }

  /** текущий pixelRatio рендера (для «О данных») */
  get renderScale(): number {
    return this.renderer.getPixelRatio()
  }

  private resize = () => {
    const w = this.canvasHost.clientWidth
    const h = this.canvasHost.clientHeight
    this.renderer.setSize(w, h)
    this.composer?.setPixelRatio(this.renderer.getPixelRatio())
    this.composer?.setSize(w, h)
    this.labels.setSize(w, h)
    this.camera.aspect = w / h
    this.applyViewShift()
  }

  /** На узком экране нижние панели закрывают низ кадра — сдвигаем картинку вверх */
  private applyViewShift() {
    const w = this.canvasHost.clientWidth
    const h = this.canvasHost.clientHeight
    const shift = w < 760 ? (this.mode === 'floor' ? 0.2 : this.mode === 'parking' ? 0.26 : this.mode === 'building' ? 0.08 : 0) : 0
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

/**
 * Ближняя плоскость камеры в обзоре. Камера не подлетает к домам ближе 12 м (minDistance),
 * а near = 1 вместо 0,1 даёт буферу глубины в 10 раз больше точности — слои земли не мерцают.
 */
const OVERVIEW_NEAR = 1

/** Направление света в паркинге: сверху и чуть сбоку, чтобы колонны и машины давали короткие тени */
const PARKING_LIGHT = new THREE.Vector3(0.25, 1, 0.35).normalize()

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

interface SunWindow {
  p: THREE.Vector3
  /** нормаль фасада в ENU (восток, север) */
  e: number
  n: number
}

/** Прямое солнце в окнах за день */
export interface SunHours {
  minutes: number
  /** интервалы солнца, часы местного времени */
  intervals: [number, number][]
  sunrise: number | null
  sunset: number | null
  /** длина светового дня, минуты */
  dayMinutes: number
}

function emptySunHours(day: string, lat: number, lon: number): SunHours {
  const sd = sunDay(day, lat, lon)
  return { minutes: 0, intervals: [], sunrise: sd.sunrise, sunset: sd.sunset, dayMinutes: sd.dayLength * 60 }
}

function inPolygon(x: number, y: number, p: Point[]): boolean {
  let c = false
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    if (p[i][1] > y !== p[j][1] > y && x < ((p[j][0] - p[i][0]) * (y - p[i][1])) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]) c = !c
  }
  return c
}
