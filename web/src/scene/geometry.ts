import * as THREE from 'three'
import type { OutlineSeg, Point, Rect } from '@/domain/types'

/**
 * Построители геометрии. Всё собирается в один BufferGeometry на слой — так сцена из тысяч стен
 * рисуется за несколько вызовов отрисовки.
 *
 * План → локальные координаты здания: (x, y_плана) → (x, высота, -y_плана).
 */

export class Builder {
  pos: number[] = []
  nor: number[] = []
  uv: number[] = []
  /** номер этажа для вершин (атрибут aLevel: свет в окнах по этажам) */
  lvl: number[] = []
  level = 0

  quad(a: THREE.Vector3Tuple, b: THREE.Vector3Tuple, c: THREE.Vector3Tuple, d: THREE.Vector3Tuple, n: THREE.Vector3Tuple, uvScale = 1) {
    // a-b-c-d против часовой при взгляде со стороны нормали
    const verts = [a, b, c, a, c, d]
    const uvs = [[0, 0], [1, 0], [1, 1], [0, 0], [1, 1], [0, 1]]
    const w = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]) * uvScale
    const h = Math.hypot(d[0] - a[0], d[1] - a[1], d[2] - a[2]) * uvScale
    verts.forEach((v, i) => {
      this.pos.push(v[0], v[1], v[2])
      this.nor.push(n[0], n[1], n[2])
      this.uv.push(uvs[i][0] * w, uvs[i][1] * h)
      this.lvl.push(this.level)
    })
  }

  /** Четырёхугольник с автоматическим порядком вершин: лицевая сторона смотрит по нормали n */
  quadAuto(a: THREE.Vector3Tuple, b: THREE.Vector3Tuple, c: THREE.Vector3Tuple, d: THREE.Vector3Tuple, n: THREE.Vector3Tuple) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2]
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2]
    const cx = uy * vz - uz * vy, cy = uz * vx - ux * vz, cz = ux * vy - uy * vx
    if (cx * n[0] + cy * n[1] + cz * n[2] >= 0) this.quad(a, b, c, d, n)
    else this.quad(d, c, b, a, n)
  }

  tri(a: THREE.Vector3Tuple, b: THREE.Vector3Tuple, c: THREE.Vector3Tuple, n: THREE.Vector3Tuple, uvScale = 1) {
    for (const v of [a, b, c]) {
      this.pos.push(v[0], v[1], v[2])
      this.nor.push(n[0], n[1], n[2])
      this.uv.push(v[0] * uvScale, v[2] * uvScale)
      this.lvl.push(this.level)
    }
  }

  /** Коробка по прямоугольнику плана между высотами y0 и y1 */
  box(r: Rect, y0: number, y1: number, faces = { top: true, bottom: true }) {
    const [x0, p0, x1, p1] = r
    const z0 = -p1 // север плана → -z
    const z1 = -p0
    if (faces.top) this.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0])
    if (faces.bottom) this.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0])
    this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1])
    this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1])
    this.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0])
    this.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0])
  }

  geometry(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3))
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3))
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2))
    g.setAttribute('aLevel', new THREE.Float32BufferAttribute(this.lvl, 1))
    g.computeBoundingBox()
    g.computeBoundingSphere()
    return g
  }
}

export function boxes(rects: Rect[], y0: number, y1: number, opts: { top?: boolean; bottom?: boolean } = {}): THREE.BufferGeometry {
  const b = new Builder()
  for (const r of rects) b.box(r, y0, y1, { top: opts.top ?? true, bottom: opts.bottom ?? true })
  return b.geometry()
}

/** Стеклянная оболочка по периметру, утопленная внутрь на inset */
export function skin(outline: OutlineSeg[], y0: number, y1: number, inset: number): THREE.BufferGeometry {
  const b = new Builder()
  for (const [x0, p0, x1, p1, nx, ny] of outline) {
    const ax = x0 - nx * inset
    const ay = p0 - ny * inset
    const bx = x1 - nx * inset
    const by = p1 - ny * inset
    const n: THREE.Vector3Tuple = [nx, 0, -ny]
    // порядок вершин так, чтобы лицевая сторона смотрела наружу
    const flip = nx * (by - ay) - ny * (bx - ax) < 0
    const A: THREE.Vector3Tuple = [ax, y0, -ay]
    const B: THREE.Vector3Tuple = [bx, y0, -by]
    const C: THREE.Vector3Tuple = [bx, y1, -by]
    const D: THREE.Vector3Tuple = [ax, y1, -ay]
    if (flip) b.quad(B, A, D, C, n)
    else b.quad(A, B, C, D, n)
  }
  return b.geometry()
}

/** Полосы вдоль периметра (торцы плит, парапет): коробки, выступающие наружу на out */
export function outlineBands(outline: OutlineSeg[], y0: number, y1: number, out: number, inward: number): THREE.BufferGeometry {
  const b = new Builder()
  for (const [x0, p0, x1, p1, nx, ny] of outline) {
    const minx = Math.min(x0, x1) - (ny !== 0 ? 0 : 0)
    const maxx = Math.max(x0, x1)
    const miny = Math.min(p0, p1)
    const maxy = Math.max(p0, p1)
    let r: Rect
    if (nx !== 0) {
      const xa = x0 - nx * inward
      const xb = x0 + nx * out
      r = [Math.min(xa, xb), miny - out, Math.max(xa, xb), maxy + out]
    } else {
      const ya = p0 - ny * inward
      const yb = p0 + ny * out
      r = [minx - out, Math.min(ya, yb), maxx + out, Math.max(ya, yb)]
    }
    b.box(r, y0, y1)
  }
  return b.geometry()
}

/** Вертикальные ламели на простенках фасада */
export function fins(wallsExt: Rect[], outline: OutlineSeg[], y0: number, y1: number): THREE.BufferGeometry {
  const b = new Builder()
  const seen = new Set<string>()
  const W = 0.16
  const D = 0.32
  for (const r of wallsExt) {
    const [rx0, ry0, rx1, ry1] = r
    const len = Math.max(rx1 - rx0, ry1 - ry0)
    if (len < 0.25) continue
    for (const [x0, p0, x1, p1, nx, ny] of outline) {
      if (nx !== 0) {
        const edge = nx > 0 ? rx1 : rx0
        if (Math.abs(edge - x0) > 0.12) continue
        const lo = Math.max(ry0, Math.min(p0, p1))
        const hi = Math.min(ry1, Math.max(p0, p1))
        if (hi - lo < 0.2) continue
        const c = (lo + hi) / 2
        const key = `x${Math.round(x0 * 2)}:${Math.round(c * 2)}`
        if (seen.has(key)) continue
        seen.add(key)
        const xa = x0
        const xb = x0 + nx * D
        b.box([Math.min(xa, xb), c - W / 2, Math.max(xa, xb), c + W / 2], y0, y1)
      } else {
        const edge = ny > 0 ? ry1 : ry0
        if (Math.abs(edge - p0) > 0.12) continue
        const lo = Math.max(rx0, Math.min(x0, x1))
        const hi = Math.min(rx1, Math.max(x0, x1))
        if (hi - lo < 0.2) continue
        const c = (lo + hi) / 2
        const key = `y${Math.round(p0 * 2)}:${Math.round(c * 2)}`
        if (seen.has(key)) continue
        seen.add(key)
        const ya = p0
        const yb = p0 + ny * D
        b.box([c - W / 2, Math.min(ya, yb), c + W / 2, Math.max(ya, yb)], y0, y1)
      }
    }
  }
  return b.geometry()
}

/** Плоский многоугольник плана на высоте y (для подсветки квартир) */
export function planPolygon(points: Point[], y: number): THREE.BufferGeometry {
  const pts = dedupe(points)
  const pos: number[] = []
  for (const t of ccwTriangles(pts)) {
    for (const i of t) pos.push(pts[i][0], y, -pts[i][1])
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.computeVertexNormals()
  return g
}

export function planPolygonOutline(points: Point[], y: number): THREE.BufferGeometry {
  const pos: number[] = []
  for (let i = 0; i < points.length; i++) {
    const a = points[i]
    const c = points[(i + 1) % points.length]
    pos.push(a[0], y, -a[1], c[0], y, -c[1])
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  return g
}

// ---------- окружение: координаты ENU (x восток, y север) → мир (x, h, -y) ----------

export function ribbons(lines: { p: Point[]; w: number }[], y: number): THREE.BufferGeometry {
  const pos: number[] = []
  const nor: number[] = []
  for (const { p, w } of lines) {
    const hw = w / 2
    for (let i = 0; i < p.length - 1; i++) {
      const [ax, ay] = p[i]
      const [bx, by] = p[i + 1]
      const len = Math.hypot(bx - ax, by - ay)
      if (len < 0.01) continue
      const nx = (-(by - ay) / len) * hw
      const ny = ((bx - ax) / len) * hw
      // продлеваем на полширины, чтобы стыки не рвались
      const ex = ((bx - ax) / len) * hw * 0.5
      const ey = ((by - ay) / len) * hw * 0.5
      const A = [ax - ex + nx, ay - ey + ny]
      const B = [bx + ex + nx, by + ey + ny]
      const C = [bx + ex - nx, by + ey - ny]
      const D = [ax - ex - nx, ay - ey - ny]
      for (const v of [A, D, C, A, C, B]) {
        pos.push(v[0], y, -v[1])
        nor.push(0, 1, 0)
      }
    }
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3))
  return g
}

export function flatPolygons(polys: Point[][], y: number): THREE.BufferGeometry {
  const pos: number[] = []
  for (const raw of polys) {
    const p = dedupe(raw)
    if (p.length < 3) continue
    for (const t of ccwTriangles(p)) {
      for (const i of t) pos.push(p[i][0], y, -p[i][1])
    }
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.computeVertexNormals()
  return g
}

/** UV в метрах мира (для плитки): u = x / size, v = север / size */
export function worldUV(g: THREE.BufferGeometry, size: number): THREE.BufferGeometry {
  const pos = g.getAttribute('position')
  const uv = new Float32Array(pos.count * 2)
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = pos.getX(i) / size
    uv[i * 2 + 1] = -pos.getZ(i) / size
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
  return g
}

/** Выдавленные дома окружения: стены + крыша */
export function extrudedBuildings(list: { p: Point[]; h: number }[]): THREE.BufferGeometry {
  const b = new Builder()
  for (const { p: raw, h } of list) {
    const p = dedupe(raw)
    if (p.length < 3) continue
    const v2 = p.map(([x, y]) => new THREE.Vector2(x, y))
    const cw = THREE.ShapeUtils.isClockWise(v2)
    const ring = cw ? [...p].reverse() : p // против часовой в ENU
    for (let i = 0; i < ring.length; i++) {
      const [ax, ay] = ring[i]
      const [bx, by] = ring[(i + 1) % ring.length]
      const len = Math.hypot(bx - ax, by - ay)
      if (len < 0.01) continue
      // наружная нормаль для кольца против часовой: (dy, -dx)
      const n: THREE.Vector3Tuple = [(by - ay) / len, 0, (bx - ax) / len]
      b.quad([ax, 0, -ay], [bx, 0, -by], [bx, h, -by], [ax, h, -ay], n, 0.25)
    }
    for (const [i, j, k] of ccwTriangles(ring)) {
      b.tri([ring[i][0], h, -ring[i][1]], [ring[j][0], h, -ring[j][1]], [ring[k][0], h, -ring[k][1]], [0, 1, 0], 0.1)
    }
  }
  return b.geometry()
}

/** Триангуляция с гарантированным обходом против часовой (в осях плана/ENU) — тогда грань смотрит вверх */
export function ccwTriangles(p: Point[]): [number, number, number][] {
  const tris = THREE.ShapeUtils.triangulateShape(p.map(([x, y]) => new THREE.Vector2(x, y)), [])
  return tris.map(([i, j, k]) => {
    const cross = (p[j][0] - p[i][0]) * (p[k][1] - p[i][1]) - (p[j][1] - p[i][1]) * (p[k][0] - p[i][0])
    return (cross >= 0 ? [i, j, k] : [i, k, j]) as [number, number, number]
  })
}

function dedupe(p: Point[]): Point[] {
  const out: Point[] = []
  for (const q of p) {
    const last = out[out.length - 1]
    if (!last || Math.hypot(last[0] - q[0], last[1] - q[1]) > 0.05) out.push(q)
  }
  if (out.length > 2) {
    const a = out[0]
    const z = out[out.length - 1]
    if (Math.hypot(a[0] - z[0], a[1] - z[1]) < 0.05) out.pop()
  }
  return out
}
