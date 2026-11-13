import * as THREE from 'three'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import type { Parking, ParkingLevel, ParkingSpot, Point } from '@/domain/types'
import { STATUS_COLOR } from '@/domain/units'
import { levelLabel, matchesSpot, spotCenter, type SpotFilter } from '@/domain/parking'
import { ccwTriangles } from './geometry'

/**
 * Паркинг в 3D. В режиме паркинга виден только выбранный уровень — на нейтральном фоне, без домов и окружения
 * (фон и свет переключает Engine): плита, стены по пояс, колонны каркаса, ядра (лифт в корпус), рампа,
 * места цветом статуса, на проданных — машины, у мест с зарядкой — стойки.
 * Места уровня — одна сетка с цветом по вершинам: сотни мест рисуются одним вызовом, клик — по номеру треугольника.
 * Координаты данных — ENU (x на восток, y на север), в сцене это (x, высота, −y).
 */

const SLAB = 0.25
const WALL_H = 1.2 // стены "по пояс": как разрез этажа у квартир
const INSET = 0.09 // зазор между местами — видна плита, читается разметка
const DIM_TO = new THREE.Color(0x6f7378) // не подходит под фильтр — почти цвет плиты
/** Цвета машин: в Ташкенте больше всего белых */
const CAR_COLORS: [number, number][] = [
  [0xf2f2ef, 44], [0xb9bcc0, 15], [0x1d1f23, 12], [0x5b5f66, 10], [0x23395b, 7], [0x7a1f24, 6], [0xc9b99a, 6],
]

interface LevelView {
  info: ParkingLevel
  y: number // отметка пола
  group: THREE.Group
  spots: THREE.Mesh
  spotIds: number[] // номер места по порядку в сетке (2 треугольника на место)
  cars: THREE.InstancedMesh | null
  labels: CSS2DObject[]
}

export class ParkingView {
  readonly root = new THREE.Group()
  /** знак "P" у въезда — виден в обзоре, клик открывает паркинг */
  readonly marker: CSS2DObject | null = null
  private levels = new Map<number, LevelView>()
  private byId = new Map<number, ParkingSpot>()
  private current: number | null = null
  private hoverFrame: THREE.Mesh
  private selectFrame: THREE.Mesh
  private carGeo = carGeometry()
  private slabMat = new THREE.MeshStandardMaterial({ color: 0x7d8186, roughness: 0.92 })
  private wallMat = new THREE.MeshStandardMaterial({ color: 0xb9b5ad, roughness: 0.9, side: THREE.DoubleSide })
  private columnMat = new THREE.MeshStandardMaterial({ color: 0xcfcac1, roughness: 0.85 })
  private coreMat = new THREE.MeshStandardMaterial({ color: 0x2c3038, roughness: 0.8 })
  private rampMat = new THREE.MeshStandardMaterial({ color: 0x5f5448, roughness: 0.9, side: THREE.DoubleSide })
  private spotMat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetUnits: -4 })
  private carMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.38, metalness: 0.3 })
  private chargerMat = new THREE.MeshBasicMaterial({ vertexColors: true })
  private lineMat = new THREE.LineBasicMaterial({ color: 0xd8dde4, transparent: true, opacity: 0.55 })

  constructor(parking: Parking, onEntry: () => void) {
    this.root.name = 'parking'
    this.root.visible = false
    for (const s of parking.spots) this.byId.set(s.id, s)
    for (const info of parking.levels) this.levels.set(info.level, this.buildLevel(info, parking.spots.filter((s) => s.level === info.level)))
    for (const v of this.levels.values()) this.rebuildCars(v)

    const frame = () => new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, depthTest: false, transparent: true }))
    this.hoverFrame = frame()
    ;(this.hoverFrame.material as THREE.MeshBasicMaterial).opacity = 0.55
    this.selectFrame = frame()
    this.hoverFrame.renderOrder = this.selectFrame.renderOrder = 6
    this.root.add(this.hoverFrame, this.selectFrame)

    const entry = parking.levels.find((l) => l.level === -1)?.ramps.find((r) => r.entry)?.entry
    if (entry) {
      const el = document.createElement('button')
      el.className = 'pk-entry'
      el.type = 'button'
      el.innerHTML = '<i>P</i><span>Паркинг</span>'
      el.title = `Подземный паркинг: ${parking.summary.levels} ур., ${parking.summary.total} мест`
      el.addEventListener('click', (e) => {
        e.stopPropagation()
        onEntry()
      })
      const obj = new CSS2DObject(el)
      obj.position.set(entry[0], 3, -entry[1])
      obj.center.set(0.5, 1)
      this.marker = obj
    }
  }

  /** Номера уровней сверху вниз: −1, −2 … */
  get levelNumbers(): number[] {
    return [...this.levels.keys()].sort((a, b) => b - a)
  }

  /** Показать один уровень: остальные уровни и всё вокруг — скрыты, чтобы на фоне не было лишнего */
  show(level: number) {
    this.current = level
    this.root.visible = true
    for (const [n, v] of this.levels) {
      v.group.visible = n === level
      for (const l of v.labels) l.visible = n === level
    }
    this.hoverFrame.visible = false
    this.selectFrame.visible = false
  }

  hide() {
    this.root.visible = false
    for (const v of this.levels.values()) for (const l of v.labels) l.visible = false
  }

  /** Центр уровня на отметке пола и радиус — для камеры */
  frame(level: number): { center: THREE.Vector3; radius: number } {
    const v = this.levels.get(level)!
    const [cx, cy] = spotCenter(v.info.outline)
    const radius = Math.max(...v.info.outline.map(([x, y]) => Math.hypot(x - cx, y - cy)))
    return { center: new THREE.Vector3(cx, v.y, -cy), radius }
  }

  pickables(): THREE.Object3D[] {
    const v = this.current === null ? null : this.levels.get(this.current)
    return v ? [v.spots] : []
  }

  /** Место по попаданию луча в сетку мест текущего уровня */
  spotAt(hit: THREE.Intersection): number | null {
    const v = this.current === null ? null : this.levels.get(this.current)
    if (!v || hit.object !== v.spots || hit.faceIndex == null) return null
    return v.spotIds[Math.floor(hit.faceIndex / 2)] ?? null
  }

  /** Новые статусы и цены из CRM: проданное место получает машину, освобождённое — теряет */
  update(spots: ParkingSpot[]) {
    for (const s of spots) this.byId.set(s.id, s)
    for (const v of this.levels.values()) this.rebuildCars(v)
  }

  /** Цвета по статусу и фильтру, рамки наведённого и выбранного места */
  style(filter: SpotFilter, hoverId: number | null, selectedId: number | null) {
    const c = new THREE.Color()
    for (const v of this.levels.values()) {
      const attr = v.spots.geometry.getAttribute('color') as THREE.BufferAttribute
      v.spotIds.forEach((id, i) => {
        const s = this.byId.get(id)
        if (!s) return
        c.set(STATUS_COLOR[s.status])
        if (!matchesSpot(s, filter)) c.lerp(DIM_TO, 0.9)
        for (let k = 0; k < 6; k++) attr.setXYZ(i * 6 + k, c.r, c.g, c.b)
      })
      attr.needsUpdate = true
    }
    this.placeFrame(this.hoverFrame, hoverId !== selectedId ? hoverId : null, 0.18)
    this.placeFrame(this.selectFrame, selectedId, 0.32)
  }

  private placeFrame(mesh: THREE.Mesh, id: number | null, w: number) {
    const s = id === null ? null : this.byId.get(id)
    const v = s ? this.levels.get(s.level) : null
    if (!s || !v || s.level !== this.current) {
      mesh.visible = false
      return
    }
    mesh.geometry.dispose()
    mesh.geometry = ringGeometry(s.polygon, w, v.y + 0.06)
    mesh.visible = true
  }

  // ---------- построение ----------

  private buildLevel(info: ParkingLevel, spots: ParkingSpot[]): LevelView {
    const y = info.level * info.height
    const group = new THREE.Group()
    group.visible = false
    const ceil = info.height - 0.3 // колонны и ядра — до низа перекрытия

    const slab = new THREE.Mesh(extrude(info.outline, SLAB), this.slabMat)
    slab.position.y = y - SLAB
    slab.receiveShadow = true
    const ring = info.outline.map(([x, yy]) => new THREE.Vector3(x, y + 0.02, -yy))
    group.add(slab, new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(ring), this.lineMat))

    // стены по пояс по контуру
    const wallPos: number[] = []
    const o = info.outline
    for (let i = 0; i < o.length; i++) {
      const [ax, ay] = o[i]
      const [bx, by] = o[(i + 1) % o.length]
      wallPos.push(ax, y, -ay, bx, y, -by, bx, y + WALL_H, -by, ax, y, -ay, bx, y + WALL_H, -by, ax, y + WALL_H, -ay)
    }
    const wallGeo = new THREE.BufferGeometry()
    wallGeo.setAttribute('position', new THREE.Float32BufferAttribute(wallPos, 3))
    wallGeo.computeVertexNormals()
    group.add(new THREE.Mesh(wallGeo, this.wallMat))

    // колонны каркаса — одной сеткой
    const columns = info.columns ?? []
    if (columns.length) {
      const m = new THREE.Mesh(mergeGeometries(columns.map((c) => extrude(c, ceil))), this.columnMat)
      m.position.y = y
      m.castShadow = true
      m.receiveShadow = true
      group.add(m)
    }

    // ядра: лифт и лестница в корпус, на всю высоту уровня
    const labels: CSS2DObject[] = []
    for (const c of info.cores) {
      const m = new THREE.Mesh(extrude(c.p, ceil), this.coreMat)
      m.position.y = y
      m.castShadow = true
      group.add(m)
      // подпись — название корпуса из подписи ядра ("Лифт и лестница · Блок 26/7" → "26/7")
      const short = c.label.split('·').pop()!.replace(/^\s*Блок\s*/, '').trim()
      labels.push(this.label(`<i>↕</i><b>${short}</b>`, c.label, spotCenter(c.p), y + info.height, 'pk-core'))
    }

    // рампа: наклонная плита, верх — у въезда (на уровне выше), низ — на этом уровне
    for (const r of info.ramps) {
      const entry = r.entry ?? this.entryOf()
      const near = entry ? r.p.map(([x, yy]) => Math.hypot(x - entry[0], yy - entry[1])) : r.p.map((_, i) => i)
      const order = [...near].sort((a, b) => a - b)
      const top = (i: number) => near[i] <= order[1]
      const pos: number[] = []
      for (const t of ccwTriangles(r.p)) {
        for (const i of t) pos.push(r.p[i][0], top(i) ? y + info.height - 0.05 : y + 0.02, -r.p[i][1])
      }
      const g = new THREE.BufferGeometry()
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
      g.computeVertexNormals()
      group.add(new THREE.Mesh(g, this.rampMat))
      labels.push(this.label(`<i>↗</i><b>${r.label}</b>`, r.label, spotCenter(r.p), y + info.height * 0.6, 'pk-ramp'))
    }

    // места: два треугольника на место, цвет — по вершинам
    const pos: number[] = []
    const col: number[] = []
    const spotIds: number[] = []
    for (const s of spots) {
      const p = inset(s.polygon, INSET)
      for (const t of [[0, 1, 2], [0, 2, 3]]) {
        for (const i of t) {
          pos.push(p[i][0], y + 0.03, -p[i][1])
          col.push(1, 1, 1)
        }
      }
      spotIds.push(s.id)
    }
    const sg = new THREE.BufferGeometry()
    sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    sg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
    sg.computeBoundingSphere()
    const spotsMesh = new THREE.Mesh(sg, this.spotMat)
    spotsMesh.renderOrder = 2
    group.add(spotsMesh)

    // зарядные стойки у мест с зарядкой — у задней стенки места (колонны стоят у проезда, стойка — с другой стороны)
    const chargers = spots.filter((s) => s.kind === 'ev').map((s) => chargerGeometry(s.polygon, columns, y))
    if (chargers.length) group.add(new THREE.Mesh(mergeGeometries(chargers), this.chargerMat))

    labels.push(this.label(`<b>Уровень ${levelLabel(info.level)}</b>`, info.name, info.outline.reduce((a, b) => (b[1] > a[1] ? b : a)), y + info.height, 'pk-level'))
    group.add(...labels)
    this.root.add(group)
    return { info, y, group, spots: spotsMesh, spotIds, cars: null, labels }
  }

  /** Машины на проданных местах уровня: цвет и сторона заезда — по номеру места, чтобы не прыгали при обновлении */
  private rebuildCars(v: LevelView) {
    if (v.cars) {
      v.group.remove(v.cars)
      v.cars.dispose()
      v.cars = null
    }
    const sold = v.spotIds.map((id) => this.byId.get(id)).filter((s): s is ParkingSpot => s?.status === 'sold')
    if (!sold.length) return
    const cars = new THREE.InstancedMesh(this.carGeo, this.carMat, sold.length)
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const up = new THREE.Vector3(0, 1, 0)
    const c = new THREE.Color()
    sold.forEach((s, i) => {
      const r = hash(s.id)
      const [cx, cy] = spotCenter(s.polygon)
      const [w, d] = depthAxis(s.polygon)
      const angle = Math.atan2(w, d) + (r < 0.5 ? 0 : Math.PI)
      q.setFromAxisAngle(up, angle)
      m.compose(new THREE.Vector3(cx, v.y + 0.02, -cy), q, new THREE.Vector3(1, 1, 1))
      cars.setMatrixAt(i, m)
      cars.setColorAt(i, c.set(pickColor(hash(s.id * 7 + 3))))
    })
    cars.castShadow = true
    cars.receiveShadow = true
    v.cars = cars
    v.group.add(cars)
  }

  private entryOf(): Point | null {
    for (const v of this.levels.values()) for (const r of v.info.ramps) if (r.entry) return r.entry
    return null
  }

  private label(html: string, title: string, at: Point, y: number, cls: string): CSS2DObject {
    const el = document.createElement('div')
    el.className = `pk-pin ${cls}`
    el.innerHTML = html
    el.title = title
    const obj = new CSS2DObject(el)
    obj.position.set(at[0], y, -at[1])
    obj.center.set(0.5, 1)
    obj.visible = false
    return obj
  }
}

/** Плоский контур ENU, выдавленный вверх на h (в сцене — от 0 до h) */
function extrude(p: Point[], h: number): THREE.BufferGeometry {
  return new THREE.ExtrudeGeometry(new THREE.Shape(p.map(([x, y]) => new THREE.Vector2(x, y))), { depth: h, bevelEnabled: false }).rotateX(-Math.PI / 2)
}

/** Направление глубины места (длинная сторона) в осях сцены: [x, z] */
function depthAxis(p: Point[]): [number, number] {
  const a: Point = [p[1][0] - p[0][0], p[1][1] - p[0][1]]
  const b: Point = [p[3][0] - p[0][0], p[3][1] - p[0][1]]
  const [dx, dy] = Math.hypot(...a) > Math.hypot(...b) ? a : b
  return [dx, -dy]
}

/** Простая низкополигональная машина ~4,4 × 1,8 м: кузов (цвет экземпляра), стёкла, крыша, колёса */
function carGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = []
  const add = (w: number, h: number, l: number, x: number, y: number, z: number, shade: number) => {
    const g = new THREE.BoxGeometry(w, h, l).translate(x, y, z)
    const n = g.getAttribute('position').count
    g.setAttribute('color', new THREE.Float32BufferAttribute(new Array(n * 3).fill(shade), 3))
    parts.push(g)
  }
  add(1.78, 0.6, 4.4, 0, 0.6, 0, 1) // кузов
  add(1.62, 0.52, 2.35, 0, 1.15, -0.2, 0.12) // салон со стёклами
  add(1.64, 0.07, 2.15, 0, 1.44, -0.2, 1) // крыша
  for (const x of [-0.8, 0.8]) for (const z of [-1.42, 1.38]) add(0.26, 0.62, 0.62, x, 0.31, z, 0.04) // колёса
  return mergeGeometries(parts)
}

/** Зарядная стойка: тёмный корпус и голубая панель, у задней стенки места */
function chargerGeometry(p: Point[], columns: Point[][], y: number): THREE.BufferGeometry {
  const endA: Point = [(p[0][0] + p[1][0]) / 2, (p[0][1] + p[1][1]) / 2]
  const endB: Point = [(p[2][0] + p[3][0]) / 2, (p[2][1] + p[3][1]) / 2]
  const nearest = (q: Point) => Math.min(Infinity, ...columns.map((c) => Math.hypot(spotCenter(c)[0] - q[0], spotCenter(c)[1] - q[1])))
  const [back, front] = nearest(endA) >= nearest(endB) ? [endA, endB] : [endB, endA]
  const len = Math.hypot(front[0] - back[0], front[1] - back[1]) || 1
  const dir: Point = [(front[0] - back[0]) / len, (front[1] - back[1]) / len]
  const at: Point = [back[0] + dir[0] * 0.25, back[1] + dir[1] * 0.25]
  const angle = Math.atan2(dir[0], -dir[1])
  const box = (w: number, h: number, d: number, oy: number, oz: number, shade: [number, number, number]) => {
    const g = new THREE.BoxGeometry(w, h, d).translate(0, oy, oz)
    const n = g.getAttribute('position').count
    g.setAttribute('color', new THREE.Float32BufferAttribute(Array.from({ length: n }, () => shade).flat(), 3))
    return g
  }
  const g = mergeGeometries([box(0.42, 1.35, 0.22, 0.675, 0, [0.16, 0.17, 0.19]), box(0.3, 0.32, 0.03, 1.0, 0.125, [0.29, 0.64, 1])])
  return g.rotateY(angle).translate(at[0], y, -at[1])
}

/** Прямоугольник места, уменьшенный на d с каждой стороны (порядок вершин: p0→p1 вдоль ряда, p0→p3 в глубину) */
function inset(p: Point[], d: number): Point[] {
  const ux = p[1][0] - p[0][0], uy = p[1][1] - p[0][1]
  const vx = p[3][0] - p[0][0], vy = p[3][1] - p[0][1]
  const a = Math.hypot(ux, uy) || 1
  const b = Math.hypot(vx, vy) || 1
  const du = [(ux / a) * d, (uy / a) * d]
  const dv = [(vx / b) * d, (vy / b) * d]
  return [
    [p[0][0] + du[0] + dv[0], p[0][1] + du[1] + dv[1]],
    [p[1][0] - du[0] + dv[0], p[1][1] - du[1] + dv[1]],
    [p[2][0] - du[0] - dv[0], p[2][1] - du[1] - dv[1]],
    [p[3][0] + du[0] - dv[0], p[3][1] + du[1] - dv[1]],
  ]
}

/** Рамка вокруг места шириной w (для наведения и выбора) */
function ringGeometry(p: Point[], w: number, y: number): THREE.BufferGeometry {
  const outer = inset(p, -w * 0.5)
  const inner = inset(p, w * 0.5)
  const pos: number[] = []
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4
    const q = [outer[i], outer[j], inner[j], inner[i]]
    for (const k of [0, 1, 2, 0, 2, 3]) pos.push(q[k][0], y, -q[k][1])
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  return g
}

/** Детерминированное число 0…1 по номеру — чтобы цвет и разворот машины не менялись при обновлении */
function hash(n: number): number {
  let x = (n ^ 0x9e3779b9) >>> 0
  x = Math.imul(x ^ (x >>> 16), 0x85ebca6b) >>> 0
  x = Math.imul(x ^ (x >>> 13), 0xc2b2ae35) >>> 0
  return ((x ^ (x >>> 16)) >>> 0) / 4294967296
}

function pickColor(r: number): number {
  const total = CAR_COLORS.reduce((s, [, w]) => s + w, 0)
  let acc = 0
  for (const [c, w] of CAR_COLORS) {
    acc += w / total
    if (r < acc) return c
  }
  return CAR_COLORS[0][0]
}
