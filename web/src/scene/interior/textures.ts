import * as THREE from 'three'

/**
 * Процедурные текстуры отделки: рисуются на canvas один раз и кешируются.
 * Размер текстуры в метрах задаёт `meters` — геометрия пола и стен несёт UV в метрах.
 */
type RGB = [number, number, number]

const cache = new Map<string, THREE.CanvasTexture>()

function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

function make(key: string, size: number, meters: number, draw: (g: CanvasRenderingContext2D, r: () => number) => void, color = true): THREE.CanvasTexture {
  const hit = cache.get(key)
  if (hit) return hit
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')!
  draw(g, rng(key.length * 7919 + size))
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  if (color) t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  t.repeat.set(1 / meters, 1 / meters)
  cache.set(key, t)
  return t
}

const rgb = ([r, g, b]: RGB, k = 1, a = 1) => `rgba(${Math.round(r * k)},${Math.round(g * k)},${Math.round(b * k)},${a})`

function grain(g: CanvasRenderingContext2D, r: () => number, x: number, y: number, w: number, h: number, base: RGB, along: 'x' | 'y') {
  const n = Math.round((along === 'x' ? h : w) / 3)
  for (let i = 0; i < n; i++) {
    g.strokeStyle = rgb(base, 0.78 + r() * 0.12, 0.06 + r() * 0.1)
    g.lineWidth = 0.6 + r() * 1.2
    g.beginPath()
    if (along === 'x') {
      const yy = y + (i / n) * h + r() * 2
      g.moveTo(x, yy)
      g.bezierCurveTo(x + w * 0.33, yy + (r() - 0.5) * 4, x + w * 0.66, yy + (r() - 0.5) * 4, x + w, yy + (r() - 0.5) * 2)
    } else {
      const xx = x + (i / n) * w + r() * 2
      g.moveTo(xx, y)
      g.bezierCurveTo(xx + (r() - 0.5) * 4, y + h * 0.33, xx + (r() - 0.5) * 4, y + h * 0.66, xx + (r() - 0.5) * 2, y + h)
    }
    g.stroke()
  }
  // сучки
  if (r() < 0.35) {
    const kx = x + r() * w, ky = y + r() * h
    const grd = g.createRadialGradient(kx, ky, 0, kx, ky, 5 + r() * 6)
    grd.addColorStop(0, rgb(base, 0.55, 0.5))
    grd.addColorStop(1, rgb(base, 0.8, 0))
    g.fillStyle = grd
    g.fillRect(kx - 12, ky - 12, 24, 24)
  }
}

/** Доска вразбежку: ширина доски boardM, длина lengthM */
export function planks(base: RGB, boardM = 0.19, lengthM = 1.4, vary = 0.1): THREE.CanvasTexture {
  const meters = 2
  return make(`planks-${base}-${boardM}-${lengthM}`, 1024, meters, (g, r) => {
    const px = 1024 / meters
    const bh = boardM * px
    for (let y = 0, row = 0; y < 1024; y += bh, row++) {
      let x = -r() * lengthM * px
      while (x < 1024) {
        const len = lengthM * px * (0.6 + r() * 0.5)
        const k = 1 - vary / 2 + r() * vary
        g.fillStyle = rgb(base, k)
        g.fillRect(x, y, len, bh)
        grain(g, r, x, y, len, bh, base, 'x')
        g.fillStyle = 'rgba(30,20,10,0.35)'
        g.fillRect(x, y, 1.5, bh)
        x += len
      }
      g.fillStyle = 'rgba(30,20,10,0.3)'
      g.fillRect(0, y, 1024, 1.2)
      void row
    }
  })
}

/** Ёлочка (классический паркет) */
export function herringbone(base: RGB): THREE.CanvasTexture {
  const meters = 1.2
  return make(`herring-${base}`, 1024, meters, (g, r) => {
    const px = 1024 / meters
    const w = 0.08 * px, L = 0.48 * px
    g.fillStyle = rgb(base, 0.9)
    g.fillRect(0, 0, 1024, 1024)
    const step = L / Math.SQRT2
    for (let row = -4; row < 1024 / (w * Math.SQRT2) + 8; row++) {
      for (let col = -2; col < 1024 / step + 4; col++) {
        const baseX = col * step * 2
        const baseY = row * w * Math.SQRT2 * 2 + col * 0
        for (const flip of [0, 1]) {
          g.save()
          g.translate(baseX + flip * step, baseY + (flip ? step : 0))
          g.rotate(flip ? -Math.PI / 4 : Math.PI / 4)
          const k = 0.9 + r() * 0.18
          g.fillStyle = rgb(base, k)
          g.fillRect(0, 0, L, w)
          grain(g, r, 0, 0, L, w, base, 'x')
          g.strokeStyle = 'rgba(40,25,10,0.35)'
          g.lineWidth = 1.2
          g.strokeRect(0, 0, L, w)
          g.restore()
        }
      }
    }
  })
}

/** Плитка: размер плитки tw × th (м), шов, разбежка */
export function tiles(color: RGB, grout: RGB, tw: number, th: number, offset = false, vary = 0.04, speckle = 0): THREE.CanvasTexture {
  const meters = Math.max(tw, th) * 4 > 2.4 ? Math.max(tw, th) * 2 : 1.2
  return make(`tiles-${color}-${grout}-${tw}-${th}-${offset}-${speckle}`, 1024, meters, (g, r) => {
    const px = 1024 / meters
    g.fillStyle = rgb(grout)
    g.fillRect(0, 0, 1024, 1024)
    const gw = Math.max(1.5, 0.003 * px)
    for (let y = 0, row = 0; y < 1024; y += th * px, row++) {
      const sx = offset && row % 2 ? -tw * px / 2 : 0
      for (let x = sx; x < 1024; x += tw * px) {
        g.fillStyle = rgb(color, 1 - vary / 2 + r() * vary)
        g.fillRect(x + gw / 2, y + gw / 2, tw * px - gw, th * px - gw)
        for (let k = 0; k < speckle; k++) {
          g.fillStyle = rgb(color, 0.6 + r() * 0.6, 0.5)
          g.fillRect(x + r() * tw * px, y + r() * th * px, 1 + r() * 3, 1 + r() * 3)
        }
        // лёгкий блик по краю
        g.fillStyle = 'rgba(255,255,255,0.05)'
        g.fillRect(x + gw / 2, y + gw / 2, tw * px - gw, 3)
      }
    }
  })
}

/** Мрамор: светлая основа, мягкие прожилки */
export function marble(base: RGB, vein: RGB): THREE.CanvasTexture {
  return make(`marble-${base}-${vein}`, 1024, 1.6, (g, r) => {
    g.fillStyle = rgb(base)
    g.fillRect(0, 0, 1024, 1024)
    for (let i = 0; i < 2600; i++) {
      g.fillStyle = rgb(base, 0.94 + r() * 0.08, 0.25)
      const s = 20 + r() * 80
      g.beginPath()
      g.arc(r() * 1024, r() * 1024, s, 0, Math.PI * 2)
      g.fill()
    }
    for (let v = 0; v < 9; v++) {
      let x = r() * 1024, y = r() * 1024
      const ang = r() * Math.PI
      g.strokeStyle = rgb(vein, 1, 0.18 + r() * 0.3)
      g.lineWidth = 0.6 + r() * 2.2
      g.beginPath()
      g.moveTo(x, y)
      for (let k = 0; k < 40; k++) {
        x += Math.cos(ang + (r() - 0.5) * 1.4) * 30
        y += Math.sin(ang + (r() - 0.5) * 1.4) * 30
        g.lineTo(x, y)
      }
      g.stroke()
    }
  })
}

/** Микроцемент / бетон */
export function concrete(base: RGB): THREE.CanvasTexture {
  return make(`concrete-${base}`, 1024, 2.4, (g, r) => {
    g.fillStyle = rgb(base)
    g.fillRect(0, 0, 1024, 1024)
    for (let i = 0; i < 9000; i++) {
      g.fillStyle = rgb(base, 0.86 + r() * 0.24, 0.12)
      const s = 2 + r() * 40
      g.fillRect(r() * 1024, r() * 1024, s, s * (0.4 + r()))
    }
    for (let i = 0; i < 400; i++) {
      g.fillStyle = rgb(base, 0.6, 0.35)
      g.fillRect(r() * 1024, r() * 1024, 1.5, 1.5)
    }
  })
}

/** Кирпич (лофт) */
export function brick(): THREE.CanvasTexture {
  return make('brick', 1024, 1.3, (g, r) => {
    const px = 1024 / 1.3
    const bw = 0.25 * px, bh = 0.065 * px, joint = 0.01 * px
    g.fillStyle = 'rgb(176,168,156)'
    g.fillRect(0, 0, 1024, 1024)
    for (let y = 0, row = 0; y < 1024; y += bh + joint, row++) {
      for (let x = row % 2 ? -bw / 2 : 0; x < 1024; x += bw + joint) {
        const k = 0.75 + r() * 0.35
        g.fillStyle = `rgb(${Math.round(150 * k)},${Math.round(78 * k)},${Math.round(56 * k)})`
        g.fillRect(x, y, bw, bh)
        for (let s = 0; s < 30; s++) {
          g.fillStyle = `rgba(${r() < 0.5 ? 40 : 210},${r() < 0.5 ? 30 : 190},${r() < 0.5 ? 25 : 170},0.12)`
          g.fillRect(x + r() * bw, y + r() * bh, 2 + r() * 8, 1 + r() * 3)
        }
      }
    }
  })
}

/** Ткань: мелкое переплетение, оттенок base */
export function fabric(base: RGB, coarse = 1): THREE.CanvasTexture {
  return make(`fabric-${base}-${coarse}`, 512, 0.5, (g, r) => {
    g.fillStyle = rgb(base)
    g.fillRect(0, 0, 512, 512)
    const step = 3 * coarse
    for (let y = 0; y < 512; y += step) {
      g.fillStyle = rgb(base, 0.9 + r() * 0.06, 0.5)
      g.fillRect(0, y, 512, 1)
    }
    for (let x = 0; x < 512; x += step) {
      g.fillStyle = rgb(base, 1.04 + r() * 0.05, 0.35)
      g.fillRect(x, 0, 1, 512)
    }
    for (let i = 0; i < 3000; i++) {
      g.fillStyle = rgb(base, 0.85 + r() * 0.3, 0.15)
      g.fillRect(r() * 512, r() * 512, 1, 1)
    }
  })
}

/** Ковёр по стилю */
export function rug(style: 'scandi' | 'neoclassic' | 'loft'): THREE.CanvasTexture {
  return make(`rug-${style}`, 1024, 1, (g, r) => {
    const W = 1024
    if (style === 'scandi') {
      g.fillStyle = 'rgb(232,226,214)'
      g.fillRect(0, 0, W, W)
      g.strokeStyle = 'rgba(60,60,60,0.55)'
      g.lineWidth = 5
      for (let i = 0; i < 9; i++) {
        g.beginPath()
        for (let x = 0; x <= W; x += 64) g.lineTo(x, 80 + i * 110 + (x / 64) % 2 * 40)
        g.stroke()
      }
    } else if (style === 'neoclassic') {
      g.fillStyle = 'rgb(198,180,150)'
      g.fillRect(0, 0, W, W)
      g.strokeStyle = 'rgb(120,92,62)'
      g.lineWidth = 18
      g.strokeRect(50, 50, W - 100, W - 100)
      g.lineWidth = 5
      g.strokeRect(95, 95, W - 190, W - 190)
      g.fillStyle = 'rgba(120,92,62,0.6)'
      g.beginPath()
      g.ellipse(W / 2, W / 2, 210, 150, 0, 0, Math.PI * 2)
      g.fill()
      g.fillStyle = 'rgb(214,198,168)'
      g.beginPath()
      g.ellipse(W / 2, W / 2, 150, 100, 0, 0, Math.PI * 2)
      g.fill()
      for (let k = 0; k < 4; k++) {
        g.fillStyle = 'rgba(120,92,62,0.5)'
        g.beginPath()
        g.arc(k % 2 ? 190 : W - 190, k < 2 ? 190 : W - 190, 55, 0, Math.PI * 2)
        g.fill()
      }
    } else {
      g.fillStyle = 'rgb(92,90,88)'
      g.fillRect(0, 0, W, W)
      for (let i = 0; i < 1800; i++) {
        g.fillStyle = `rgba(${r() < 0.5 ? 150 : 50},${r() < 0.5 ? 120 : 48},${r() < 0.5 ? 100 : 46},0.25)`
        g.fillRect(r() * W, r() * W, 6 + r() * 60, 2 + r() * 6)
      }
      g.strokeStyle = 'rgba(160,110,80,0.5)'
      g.lineWidth = 14
      g.strokeRect(40, 40, W - 80, W - 80)
    }
    // ворс
    for (let i = 0; i < 20000; i++) {
      g.fillStyle = `rgba(${r() < 0.5 ? 0 : 255},${r() < 0.5 ? 0 : 255},${r() < 0.5 ? 0 : 255},0.05)`
      g.fillRect(r() * W, r() * W, 2, 2)
    }
  })
}

/** Картина на стену: абстракция в палитре стиля */
export function art(style: 'scandi' | 'neoclassic' | 'loft', variant: number): THREE.CanvasTexture {
  return make(`art-${style}-${variant}`, 512, 1, (g, r) => {
    const pal: Record<string, string[]> = {
      scandi: ['#e9e4da', '#c9b79c', '#8a9a86', '#d8a47f', '#2f3a40'],
      neoclassic: ['#efe6d6', '#b49a72', '#6d7f74', '#2e3b4e', '#d9c8a6'],
      loft: ['#1e1f22', '#b5653c', '#d9d4c7', '#6b6f73', '#e0b25b'],
    }
    const p = pal[style]
    g.fillStyle = p[0]
    g.fillRect(0, 0, 512, 512)
    for (let i = 0; i < 6; i++) {
      g.fillStyle = p[1 + Math.floor(r() * (p.length - 1))]
      g.globalAlpha = 0.75
      g.beginPath()
      if ((i + variant) % 2) g.arc(80 + r() * 350, 80 + r() * 350, 40 + r() * 140, 0, Math.PI * 2)
      else g.rect(r() * 380, r() * 380, 60 + r() * 220, 30 + r() * 200)
      g.fill()
    }
    g.globalAlpha = 1
  })
}
