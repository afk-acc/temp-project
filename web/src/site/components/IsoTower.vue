<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { t } from '../i18n'

/**
 * Изометрический дом: этажи-«ящики», один выдвигается и показывает план со статусами квартир.
 * Это тот же жест, что в логотипе и в продукте: выбрать этаж — увидеть квартиры.
 * Наведение (или касание) выбирает этаж; без взаимодействия этажи перебираются сами.
 */
const N = 14          // этажей
const W = 6.4         // длина вдоль x
const D = 4           // глубина вдоль y
const FH = 1          // высота этажа
const GAP = 0.07      // шов между этажами
const PULL = 0.6 * W  // насколько выдвигается этаж
const S = 30          // px на единицу
const C = Math.cos(Math.PI / 6)
const OX = 134
const OY = 40 + N * FH * S

type P3 = [number, number, number]
const P = ([x, y, z]: P3) => [OX + (x - y) * C * S, OY + (x + y) * 0.5 * S - z * S]
const poly = (pts: P3[]) => pts.map((p) => P(p).map((v) => v.toFixed(1)).join(',')).join(' ')
const DX = PULL * C * S
const DY = PULL * 0.5 * S

/** Детерминированный «случай»: одинаковая картинка при каждой загрузке */
function rnd(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

type Status = 'available' | 'booked' | 'sold'
const COLOR: Record<Status, string> = { available: '#3ddc97', booked: '#f5b841', sold: '#e5484d' }

// квартиры на плане этажа: ряд у фасада y∈[D/2+0.3, D] и ряд у двора y∈[0, D/2-0.3], по 3 в ряду
const CORR = 0.32
const UNITS = [0, 1, 2].flatMap((i) => [
  { x0: (i * W) / 3, x1: ((i + 1) * W) / 3, y0: D / 2 + CORR, y1: D },
  { x0: (i * W) / 3, x1: ((i + 1) * W) / 3, y0: 0, y1: D / 2 - CORR },
])

const floors = Array.from({ length: N }, (_, i) => {
  const z0 = i * FH
  const z1 = z0 + FH - GAP
  const ground = i === 0
  const statuses = UNITS.map((_, u): Status => {
    const r = rnd(i * 10 + u) - (i - 1) * 0.025
    return r < 0.38 ? 'sold' : r < 0.47 ? 'booked' : 'available'
  })
  const winL: string[] = []
  const winR: string[] = []
  const lit: boolean[] = []
  const wb = z0 + (ground ? 0.12 : 0.24) * FH
  const wt = z0 + (ground ? 0.84 : 0.76) * FH
  for (let k = 0; k < 7; k++) {
    const a = 0.35 + k * ((W - 0.7) / 7)
    winL.push(poly([[a + 0.12, D, wb], [a + (W - 0.7) / 7 - 0.12, D, wb], [a + (W - 0.7) / 7 - 0.12, D, wt], [a + 0.12, D, wt]]))
    lit.push(rnd(i * 31 + k) > 0.83)
  }
  for (let k = 0; k < 4; k++) {
    const a = 0.3 + k * ((D - 0.6) / 4)
    winR.push(poly([[W, a + 0.14, wb], [W, a + (D - 0.6) / 4 - 0.14, wb], [W, a + (D - 0.6) / 4 - 0.14, wt], [W, a + 0.14, wt]]))
    lit.push(rnd(i * 53 + k) > 0.86)
  }
  const top: P3[] = [[0, 0, z1], [W, 0, z1], [W, D, z1], [0, D, z1]]
  return {
    i, ground, statuses,
    left: poly([[0, D, z0], [W, D, z0], [W, D, z1], [0, D, z1]]),
    right: poly([[W, D, z0], [W, 0, z0], [W, 0, z1], [W, D, z1]]),
    top: poly(top),
    winL, winR, lit,
    plan: UNITS.map((u, k) => ({ d: poly([[u.x0, u.y0, z1], [u.x1, u.y0, z1], [u.x1, u.y1, z1], [u.x0, u.y1, z1]]), c: COLOR[statuses[k]] })),
    corridor: [poly([[0, D / 2 - CORR, z1], [W, D / 2 - CORR, z1]]), poly([[0, D / 2 + CORR, z1], [W, D / 2 + CORR, z1]])],
    // точка выноски: середина правого торца выдвинутого этажа
    anchor: P([W, D * 0.35, (z0 + z1) / 2]),
  }
})
const roofZ = N * FH - GAP
const roof = poly([[0, 0, roofZ], [W, 0, roofZ], [W, D, roofZ], [0, D, roofZ]])
const parapet = poly([[0.18, 0.18, roofZ], [W - 0.18, 0.18, roofZ], [W - 0.18, D - 0.18, roofZ], [0.18, D - 0.18, roofZ]])
const shadow = poly([[0, 0, 0], [W, 0, 0], [W + 5.5, D - 1.2, 0], [W + 5.5, D + 2.6, 0], [3.4, D + 3.8, 0], [0, D, 0]])
const grid: string[] = []
for (let x = -4; x <= W + 8; x++) grid.push(poly([[x, -3, 0], [x, D + 7, 0]]))
for (let y = -3; y <= D + 7; y++) grid.push(poly([[-4, y, 0], [W + 8, y, 0]]))
const dimTop = P([0, D, roofZ])
const dimBot = P([0, D, 0])

const pulled = ref<number | null>(null)
const ready = ref(false)
let auto = 0
let started = 0
let touched = false
const ORDER = [7, 4, 10, 2, 12, 6, 9]

function pull(i: number | null) {
  pulled.value = i !== null && i > 0 ? i : pulled.value
}
function userPull(i: number) {
  touched = true
  clearInterval(auto)
  pull(i)
}

onMounted(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  started = window.setTimeout(() => {
    ready.value = true
    pull(7)
    if (reduce) return
    let n = 1
    auto = window.setInterval(() => { if (!touched) pull(ORDER[n++ % ORDER.length]) }, 3600)
  }, reduce ? 0 : N * 70 + 500)
})
onBeforeUnmount(() => { clearTimeout(started); clearInterval(auto) })

const info = computed(() => {
  if (pulled.value === null) return null
  const f = floors[pulled.value]
  const free = f.statuses.filter((s) => s === 'available').length
  const [ax, ay] = f.anchor
  return { f, free, x: ax + DX, y: ay + DY }
})
const pad = (n: number) => String(n + 1).padStart(2, '0')
</script>

<template>
  <figure class="iso" :class="{ ready }" aria-hidden="true">
    <svg viewBox="0 0 620 660" role="presentation">
      <defs>
        <linearGradient id="isoL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f2328" /><stop offset="1" stop-color="#16181c" /></linearGradient>
        <linearGradient id="isoR" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a2e35" /><stop offset="1" stop-color="#212429" /></linearGradient>
        <linearGradient id="isoCL" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9b6340" /><stop offset="1" stop-color="#c98a5b" /></linearGradient>
        <linearGradient id="isoCR" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9a06e" /><stop offset="1" stop-color="#b8774a" /></linearGradient>
        <radialGradient id="isoFade" cx="0.42" cy="0.86" r="0.62"><stop offset="0" stop-color="#fff" stop-opacity="0.9" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></radialGradient>
        <mask id="isoGridMask"><rect width="620" height="660" fill="url(#isoFade)" /></mask>
      </defs>

      <g class="ground" mask="url(#isoGridMask)">
        <polyline v-for="(g, k) in grid" :key="k" :points="g" />
      </g>
      <polygon class="shadow" :points="shadow" />

      <g v-for="f in floors" :key="f.i" class="floor" :class="{ out: pulled === f.i, ground: f.ground }"
         :style="{ '--d': `${f.i * 70}ms`, transform: pulled === f.i ? `translate(${DX}px, ${DY}px)` : undefined }"
         @mouseenter="userPull(f.i)" @click="userPull(f.i)">
        <polygon class="top" :points="f.top" />
        <g class="plan">
          <polygon v-for="(u, k) in f.plan" :key="k" :points="u.d" :fill="u.c" />
          <polyline v-for="(c, k) in f.corridor" :key="'c' + k" :points="c" class="wall" />
          <polygon :points="f.top" class="outline" />
        </g>
        <polygon class="left" :points="f.left" />
        <polygon class="right" :points="f.right" />
        <polygon v-for="(w, k) in f.winL" :key="'l' + k" class="win" :class="{ lit: f.lit[k] }" :points="w" />
        <polygon v-for="(w, k) in f.winR" :key="'r' + k" class="win r" :class="{ lit: f.lit[7 + k] }" :points="w" />
      </g>
      <g class="roof" :style="{ '--d': `${N * 70}ms` }">
        <polygon :points="roof" />
        <polygon :points="parapet" class="inner" />
      </g>

      <g class="dim">
        <line :x1="dimBot[0] - 26" :y1="dimBot[1]" :x2="dimTop[0] - 26" :y2="dimTop[1]" />
        <line :x1="dimBot[0] - 32" :y1="dimBot[1]" :x2="dimBot[0] - 20" :y2="dimBot[1]" />
        <line :x1="dimTop[0] - 32" :y1="dimTop[1]" :x2="dimTop[0] - 20" :y2="dimTop[1]" />
        <text :transform="`translate(${dimTop[0] - 34} ${(dimTop[1] + dimBot[1]) / 2}) rotate(-90)`" text-anchor="middle">≈ 46 M · {{ N }} {{ t.hero.floor.toUpperCase() }}</text>
      </g>

      <g v-if="info" class="callout" :key="info.f.i">
        <circle :cx="info.x" :cy="info.y" r="3" />
        <polyline :points="`${info.x},${info.y} ${info.x + 22},${info.y - 22} 452,${info.y - 22}`" />
        <text x="458" :y="info.y - 30" class="k">{{ t.hero.floor.toUpperCase() }} {{ pad(info.f.i) }}</text>
        <g :transform="`translate(458 ${info.y - 18})`">
          <rect v-for="(s, k) in info.f.statuses" :key="k" :x="k * 12" y="0" width="8" height="8" :fill="COLOR[s]" />
        </g>
        <text x="458" :y="info.y + 6" class="v">{{ info.free }} {{ t.hero.of }} {{ UNITS.length }} {{ t.hero.onSale }}</text>
      </g>
    </svg>
    <figcaption class="mono">{{ t.hero.hint }}</figcaption>
  </figure>
</template>

<style scoped>
.iso { margin: 0; position: relative; user-select: none; }
svg { display: block; width: 100%; height: auto; overflow: visible; }
.ground polyline { fill: none; stroke: rgba(241, 236, 227, 0.09); stroke-width: 1; }
.shadow { fill: rgba(0, 0, 0, 0.45); filter: blur(2px); }

.floor { cursor: pointer; transition: transform 0.75s cubic-bezier(0.2, 0.8, 0.2, 1); opacity: 0; animation: rise 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) var(--d) both; }
@keyframes rise { from { opacity: 0; translate: 0 26px; } to { opacity: 1; translate: 0 0; } }
.left { fill: url(#isoL); }
.right { fill: url(#isoR); }
.top { fill: #1b1e22; transition: fill 0.3s; }
.floor.out .top { fill: #e9e2d6; }
.win { fill: #2c3540; transition: fill 0.4s; }
.win.r { fill: #333d49; }
.win.lit { fill: #e3b083; opacity: 0.85; }
.ground .win { fill: #39444f; }
.plan polygon:not(.outline) { opacity: 0; transition: opacity 0.5s 0.25s; fill-opacity: 0.55; stroke: #2a2d33; stroke-width: 0.8; }
.plan .wall, .plan .outline { fill: none; stroke: #2a2d33; stroke-width: 1.2; opacity: 0; transition: opacity 0.4s 0.25s; }
.floor.out .plan polygon, .floor.out .plan .wall { opacity: 1; }
.floor.out .left { fill: url(#isoCL); }
.floor.out .right { fill: url(#isoCR); }
.floor.out .win { fill: #6e4126; }
.floor.out .win.r { fill: #7d4b2c; }
.floor.out .win.lit { fill: #f7dcc0; }
.floor:not(.out):hover .left { fill: #262a30; }

.roof { opacity: 0; animation: rise 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) var(--d) both; pointer-events: none; }
.roof polygon { fill: #2d3137; }
.roof .inner { fill: #24272c; }

.dim line { stroke: rgba(241, 236, 227, 0.32); stroke-width: 1; }
.dim text, .callout text { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; fill: rgba(241, 236, 227, 0.55); }
.dim { opacity: 0; transition: opacity 0.8s 0.6s; }
.ready .dim { opacity: 1; }

.callout { animation: fadeIn 0.5s 0.35s both; }
.callout circle { fill: var(--copper); }
.callout polyline { fill: none; stroke: var(--copper); stroke-width: 1; }
.callout .k { fill: var(--paper); font-size: 13px; font-weight: 500; }
.callout .v { fill: rgba(241, 236, 227, 0.6); font-size: 11px; letter-spacing: 0.06em; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

figcaption { position: absolute; left: 50%; bottom: -6px; transform: translateX(-50%); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--faint); white-space: nowrap; }
@media (hover: none) { figcaption { display: none; } }
@media (prefers-reduced-motion: reduce) { .floor, .roof { animation: none; opacity: 1; } .floor { transition: none; } }
</style>
