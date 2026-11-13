import * as THREE from 'three'

/**
 * Слияние неподвижных мешей группы по материалу: сотни предметов мебели (каждый брусок — свой меш)
 * превращаются в несколько десятков мешей. Вызовов отрисовки становится в разы меньше — и в основном кадре,
 * и в карте теней, и в проходе нормалей GTAO.
 *
 * Сливаются только обычные меши с одним материалом (не массивом); ключ слияния — материал, флаги теней, renderOrder,
 * видимость и userData (если по userData что-то включается отдельно, оно так и останется отдельным).
 * Геометрия переводится в систему координат группы; исходные геометрии освобождаются.
 * Пустые после слияния подгруппы удаляются. Возвращает число мешей до и после.
 */
export function mergeStatic(root: THREE.Object3D): { before: number; after: number } {
  root.updateMatrixWorld(true)
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert()
  const buckets = new Map<string, { mat: THREE.Material; src: THREE.Mesh; parts: THREE.BufferGeometry[] }>()
  const victims: THREE.Mesh[] = []
  let before = 0

  root.traverse((o) => {
    const m = o as THREE.Mesh
    if (!m.isMesh || o === root) return
    before++
    if ((m as THREE.InstancedMesh).isInstancedMesh || (m as unknown as THREE.SkinnedMesh).isSkinnedMesh) return
    // группы (Box, Cylinder) при одном материале рендер игнорирует — сливать можно; массив материалов — нет
    if (Array.isArray(m.material) || m.geometry.morphAttributes.position) return
    if (!visibleUpTo(m, root)) return
    const g = m.geometry
    if (!g.attributes.position || !g.attributes.normal) return
    const attrs = Object.keys(g.attributes).sort().join(',')
    if (attrs !== 'normal,position' && attrs !== 'normal,position,uv') return
    const key = [m.material.uuid, m.castShadow ? 1 : 0, m.receiveShadow ? 1 : 0, m.renderOrder, attrs, JSON.stringify(m.userData)].join('|')
    const rel = new THREE.Matrix4().multiplyMatrices(inv, m.matrixWorld)
    const part = (g.index ? g.toNonIndexed() : g.clone()).applyMatrix4(rel)
    if (rel.determinant() < 0) flipWinding(part)
    let b = buckets.get(key)
    if (!b) buckets.set(key, (b = { mat: m.material, src: m, parts: [] }))
    b.parts.push(part)
    victims.push(m)
  })

  // одиночки оставляем как есть — сливать нечего
  const merged: THREE.Mesh[] = []
  for (const b of buckets.values()) {
    if (b.parts.length < 2) {
      b.parts[0].dispose()
      const i = victims.indexOf(b.src)
      if (i >= 0) victims.splice(i, 1)
      continue
    }
    const mesh = new THREE.Mesh(concat(b.parts), b.mat)
    mesh.castShadow = b.src.castShadow
    mesh.receiveShadow = b.src.receiveShadow
    mesh.renderOrder = b.src.renderOrder
    mesh.userData = { ...b.src.userData }
    mesh.name = 'merged'
    mesh.matrixAutoUpdate = false
    merged.push(mesh)
  }

  const disposed = new Set<THREE.BufferGeometry>()
  for (const m of victims) {
    m.parent?.remove(m)
    if (!disposed.has(m.geometry)) {
      disposed.add(m.geometry)
      m.geometry.dispose()
    }
  }
  pruneEmpty(root)
  for (const m of merged) root.add(m)
  let after = 0
  root.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) after++
  })
  return { before, after }
}

function visibleUpTo(o: THREE.Object3D, root: THREE.Object3D): boolean {
  for (let p: THREE.Object3D | null = o; p && p !== root; p = p.parent) if (!p.visible) return false
  return true
}

/** Несколько неиндексированных геометрий с одинаковым набором атрибутов → одна */
function concat(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const names = Object.keys(parts[0].attributes)
  const out = new THREE.BufferGeometry()
  for (const n of names) {
    const size = parts[0].attributes[n].itemSize
    let len = 0
    for (const p of parts) len += p.attributes[n].count * size
    const arr = new Float32Array(len)
    let off = 0
    for (const p of parts) {
      const a = p.attributes[n] as THREE.BufferAttribute
      arr.set(a.array as Float32Array, off)
      off += a.count * size
    }
    out.setAttribute(n, new THREE.BufferAttribute(arr, size))
  }
  for (const p of parts) p.dispose()
  out.computeBoundingSphere()
  out.computeBoundingBox()
  return out
}

/** Зеркальная матрица выворачивает треугольники — меняем порядок вершин, чтобы не сломать отсечение граней */
function flipWinding(g: THREE.BufferGeometry) {
  for (const a of Object.values(g.attributes) as THREE.BufferAttribute[]) {
    const s = a.itemSize
    const arr = a.array as Float32Array
    for (let t = 0; t < a.count; t += 3) {
      for (let k = 0; k < s; k++) {
        const i1 = (t + 1) * s + k
        const i2 = (t + 2) * s + k
        const tmp = arr[i1]
        arr[i1] = arr[i2]
        arr[i2] = tmp
      }
    }
  }
}

function pruneEmpty(o: THREE.Object3D) {
  for (const c of [...o.children]) {
    pruneEmpty(c)
    if (!(c as THREE.Mesh).isMesh && c.children.length === 0 && c.type === 'Group') o.remove(c)
  }
}
