import * as THREE from 'three'

/**
 * Ускоритель лучей для расчёта часов солнца: иерархия ограничивающих объёмов (BVH) над треугольниками
 * препятствий в мировых координатах и запрос «есть ли пересечение на отрезке» с ранним выходом.
 *
 * THREE.Raycaster перебирает все треугольники каждого меша, чей ограничивающий шар задет лучом, — а большой меш
 * окружения задевается всегда, и на каждый луч уходят десятки тысяч проверок. Здесь — десятки.
 *
 * Семантика совпадает с Raycaster.intersectObjects(occ, false): учитываются все переданные меши (видимость
 * не проверяется, как и у Raycaster), сторона грани — по material.side (FrontSide отсекает задние грани).
 */
const LEAF = 6
const FRONT = 0
const BACK = 1
const DOUBLE = 2

export class RayIndex {
  /** треугольники: 9 координат на треугольник, в порядке листьев */
  private tri: Float32Array
  private side: Uint8Array
  /** узлы: min xyz, max xyz */
  private box: Float32Array
  /** узлы: для листа — начало и число треугольников (count > 0), для внутреннего — индекс правого ребёнка (count = 0) */
  private a: Uint32Array
  private n: Uint32Array
  readonly triangles: number

  constructor(objects: THREE.Object3D[]) {
    const pos: number[] = []
    const sides: number[] = []
    const v = new THREE.Vector3()
    // как intersectObjects(occ, false): только сами объекты, без потомков
    for (const o of objects) {
      o.updateWorldMatrix(true, false)
      {
        const m = o as THREE.Mesh
        if (!m.isMesh || !m.geometry?.attributes.position) continue
        const mat = Array.isArray(m.material) ? m.material[0] : m.material
        let sd = mat.side === THREE.DoubleSide ? DOUBLE : mat.side === THREE.BackSide ? BACK : FRONT
        // зеркальная матрица меняет обход треугольника в мире
        if (sd !== DOUBLE && m.matrixWorld.determinant() < 0) sd = sd === FRONT ? BACK : FRONT
        const p = m.geometry.attributes.position as THREE.BufferAttribute
        const idx = m.geometry.index
        const count = idx ? idx.count : p.count
        const { start, count: drawCount } = m.geometry.drawRange
        const end = Math.min(count, start + drawCount)
        for (let i = start; i + 2 < end; i += 3) {
          for (let k = 0; k < 3; k++) {
            const vi = idx ? idx.getX(i + k) : i + k
            v.fromBufferAttribute(p, vi).applyMatrix4(m.matrixWorld)
            pos.push(v.x, v.y, v.z)
          }
          sides.push(sd)
        }
      }
    }
    const N = sides.length
    this.triangles = N
    const src = new Float32Array(pos)
    const cen = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      for (let k = 0; k < 3; k++) cen[i * 3 + k] = (src[i * 9 + k] + src[i * 9 + 3 + k] + src[i * 9 + 6 + k]) / 3
    }
    const order = new Uint32Array(N)
    for (let i = 0; i < N; i++) order[i] = i
    const box: number[] = []
    const a: number[] = []
    const n: number[] = []

    const build = (lo: number, hi: number): number => {
      const node = a.length
      a.push(0)
      n.push(0)
      let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity
      let cx0 = Infinity, cy0 = Infinity, cz0 = Infinity, cx1 = -Infinity, cy1 = -Infinity, cz1 = -Infinity
      for (let i = lo; i < hi; i++) {
        const t = order[i]
        for (let k = 0; k < 9; k += 3) {
          const px = src[t * 9 + k], py = src[t * 9 + k + 1], pz = src[t * 9 + k + 2]
          if (px < x0) x0 = px; if (px > x1) x1 = px
          if (py < y0) y0 = py; if (py > y1) y1 = py
          if (pz < z0) z0 = pz; if (pz > z1) z1 = pz
        }
        const qx = cen[t * 3], qy = cen[t * 3 + 1], qz = cen[t * 3 + 2]
        if (qx < cx0) cx0 = qx; if (qx > cx1) cx1 = qx
        if (qy < cy0) cy0 = qy; if (qy > cy1) cy1 = qy
        if (qz < cz0) cz0 = qz; if (qz > cz1) cz1 = qz
      }
      box.push(x0, y0, z0, x1, y1, z1)
      const ex = cx1 - cx0, ey = cy1 - cy0, ez = cz1 - cz0
      if (hi - lo <= LEAF || Math.max(ex, ey, ez) < 1e-6) {
        a[node] = lo
        n[node] = hi - lo
        return node
      }
      // разбиение пополам по самой длинной оси разброса центров
      const axis = ex >= ey && ex >= ez ? 0 : ey >= ez ? 1 : 2
      const mid = axis === 0 ? (cx0 + cx1) / 2 : axis === 1 ? (cy0 + cy1) / 2 : (cz0 + cz1) / 2
      let i = lo, j = hi - 1
      while (i <= j) {
        if (cen[order[i] * 3 + axis] < mid) i++
        else {
          const tmp = order[i]
          order[i] = order[j]
          order[j] = tmp
          j--
        }
      }
      let split = i
      if (split === lo || split === hi) split = (lo + hi) >> 1
      build(lo, split)
      a[node] = build(split, hi)
      n[node] = 0
      return node
    }
    if (N) build(0, N)
    this.box = new Float32Array(box)
    this.a = new Uint32Array(a)
    this.n = new Uint32Array(n)
    this.tri = new Float32Array(N * 9)
    this.side = new Uint8Array(N)
    for (let i = 0; i < N; i++) {
      this.tri.set(src.subarray(order[i] * 9, order[i] * 9 + 9), i * 9)
      this.side[i] = sides[order[i]]
    }
  }

  private stack = new Uint32Array(256)

  /** есть ли пересечение луча o + t·d, 0 ≤ t ≤ far (d — единичный) */
  hits(o: THREE.Vector3, d: THREE.Vector3, far: number): boolean {
    if (!this.triangles) return false
    const ox = o.x, oy = o.y, oz = o.z, dx = d.x, dy = d.y, dz = d.z
    const ix = 1 / dx, iy = 1 / dy, iz = 1 / dz
    const B = this.box, T = this.tri
    const st = this.stack
    let sp = 0
    st[sp++] = 0
    while (sp) {
      const node = st[--sp]
      const b = node * 6
      // слэб-тест
      let t0 = (B[b] - ox) * ix, t1 = (B[b + 3] - ox) * ix
      let tmin = Math.min(t0, t1), tmax = Math.max(t0, t1)
      t0 = (B[b + 1] - oy) * iy; t1 = (B[b + 4] - oy) * iy
      tmin = Math.max(tmin, Math.min(t0, t1)); tmax = Math.min(tmax, Math.max(t0, t1))
      t0 = (B[b + 2] - oz) * iz; t1 = (B[b + 5] - oz) * iz
      tmin = Math.max(tmin, Math.min(t0, t1)); tmax = Math.min(tmax, Math.max(t0, t1))
      // NaN (луч в плоскости грани коробки) — считаем попаданием, проверят треугольники
      if (tmax < Math.max(tmin, 0) || tmin > far) continue
      const cnt = this.n[node]
      if (cnt === 0) {
        st[sp++] = this.a[node]
        st[sp++] = node + 1
        continue
      }
      const s0 = this.a[node]
      for (let t = s0; t < s0 + cnt; t++) {
        const p = t * 9
        // Мёллер — Трумбор
        const e1x = T[p + 3] - T[p], e1y = T[p + 4] - T[p + 1], e1z = T[p + 5] - T[p + 2]
        const e2x = T[p + 6] - T[p], e2y = T[p + 7] - T[p + 1], e2z = T[p + 8] - T[p + 2]
        const px = dy * e2z - dz * e2y, py = dz * e2x - dx * e2z, pz = dx * e2y - dy * e2x
        const det = e1x * px + e1y * py + e1z * pz
        if (Math.abs(det) < 1e-12) continue
        const sd = this.side[t]
        // det = −d·(e1×e2): det > 0 — луч смотрит на лицевую сторону, как в Ray.intersectTriangle
        if (sd === FRONT && det < 0) continue
        if (sd === BACK && det > 0) continue
        const inv = 1 / det
        const sx = ox - T[p], sy = oy - T[p + 1], sz = oz - T[p + 2]
        const u = (sx * px + sy * py + sz * pz) * inv
        if (u < 0 || u > 1) continue
        const qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x
        const w = (dx * qx + dy * qy + dz * qz) * inv
        if (w < 0 || u + w > 1) continue
        const dist = (e2x * qx + e2y * qy + e2z * qz) * inv
        if (dist >= 0 && dist <= far) return true
      }
    }
    return false
  }
}
