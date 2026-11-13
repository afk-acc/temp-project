<script setup lang="ts">
import { computed, ref } from 'vue'
import { crm } from '../api'
import { crmState, parkingLevel, toast } from '../state'
import { STATUS_COLOR } from '@/domain/units'
import { SPOT_STATUS_LABEL, levelLabel, spotCenter } from '@/domain/parking'
import type { Point, UnitStatus } from '@/domain/types'

/** План уровня паркинга: контур, рампа, ядра, места цветом статуса. Клик — карточка, Shift или "несколько" — пачкой. */
const emit = defineEmits<{ changed: [] }>()
const STATUSES: UnitStatus[] = ['available', 'booked', 'sold', 'unavailable']
const ZOOMS = [5, 8, 12] // пикселей на метр
const zoom = ref(1)
const bulkComment = ref('')

const levels = computed(() => crmState.parking?.levels ?? [])
const spots = computed(() => (crmState.parking?.spots ?? []).filter((s) => s.level === parkingLevel.value?.level))

/** Рамка плана в метрах: x — на восток, y — на север (север сверху) */
const frame = computed(() => {
  const o = parkingLevel.value?.outline ?? []
  if (!o.length) return null
  const pad = 4
  const xs = o.map((p) => p[0])
  const ys = o.map((p) => p[1])
  const x0 = Math.min(...xs) - pad
  const y1 = Math.max(...ys) + pad
  return { x0, y1, w: Math.max(...xs) + pad - x0, h: y1 - (Math.min(...ys) - pad) }
})
function pts(p: Point[]) {
  const f = frame.value!
  return p.map(([x, y]) => `${(x - f.x0).toFixed(2)},${(f.y1 - y).toFixed(2)}`).join(' ')
}
function at(p: Point[]) {
  const f = frame.value!
  const [x, y] = spotCenter(p)
  return { x: x - f.x0, y: f.y1 - y }
}
const coreShort = (label: string) => label.split('·').pop()!.replace('Блок', '').trim()

function click(id: number, e: MouseEvent) {
  if (crmState.spotMulti || e.shiftKey || e.metaKey || e.ctrlKey) {
    crmState.spotMulti = true
    if (crmState.spotPicked.has(id)) crmState.spotPicked.delete(id)
    else crmState.spotPicked.add(id)
    return
  }
  crmState.spotId = crmState.spotId === id ? null : id
}

function pickLevel() {
  crmState.spotMulti = true
  const ids = spots.value.filter((s) => !dim(s.status)).map((s) => s.id)
  const all = ids.every((id) => crmState.spotPicked.has(id))
  ids.forEach((id) => (all ? crmState.spotPicked.delete(id) : crmState.spotPicked.add(id)))
}

async function bulk(status: UnitStatus) {
  const ids = [...crmState.spotPicked]
  if (!ids.length) return
  crmState.saving = true
  try {
    const r = await crm.bulkSpots(crmState.slug, ids, status, bulkComment.value || undefined)
    toast(`Изменено мест: ${r.changed} из ${ids.length} → ${SPOT_STATUS_LABEL[status]}`)
    crmState.spotPicked.clear()
    crmState.spotMulti = false
    bulkComment.value = ''
    emit('changed')
  } finally {
    crmState.saving = false
  }
}

function dim(status: string) {
  return crmState.spotStatusFilter !== null && crmState.spotStatusFilter !== status
}
function short(price: number | null) {
  return price ? `${Math.round(price / 1e6)} млн` : ''
}
</script>

<template>
  <section class="board glass">
    <div class="board-head">
      <div class="blocks scroll-thin">
        <button v-for="l in levels" :key="l.level" :class="{ on: parkingLevel?.level === l.level }" @click="crmState.parkingLevel = l.level; crmState.spotId = null">
          <b>Уровень {{ levelLabel(l.level) }}</b>
          <span>{{ l.total }} мест · <em class="ok">{{ l.available }}</em> своб.</span>
        </button>
      </div>
      <div class="filters">
        <button :class="{ on: crmState.spotStatusFilter === null }" @click="crmState.spotStatusFilter = null">Все</button>
        <button v-for="s in STATUSES" :key="s" :class="{ on: crmState.spotStatusFilter === s }" :style="{ '--c': STATUS_COLOR[s] }"
                @click="crmState.spotStatusFilter = crmState.spotStatusFilter === s ? null : s"><i />{{ SPOT_STATUS_LABEL[s] }}</button>
        <span class="legend"><i class="ev" />с зарядкой <i class="mgn" />для маломобильных</span>
        <div class="zoom">
          <button :disabled="zoom === 0" aria-label="Мельче" @click="zoom--">−</button>
          <button :disabled="zoom === ZOOMS.length - 1" aria-label="Крупнее" @click="zoom++">+</button>
        </div>
        <label class="multi"><input v-model="crmState.spotMulti" type="checkbox" @change="crmState.spotPicked.clear()" /> Выбрать несколько</label>
        <button v-if="crmState.spotMulti" class="btn small ghost" @click="pickLevel">Весь уровень</button>
      </div>
    </div>

    <div class="plan scroll-thin">
      <svg v-if="frame" :width="frame.w * ZOOMS[zoom]" :height="frame.h * ZOOMS[zoom]" :viewBox="`0 0 ${frame.w} ${frame.h}`" role="img"
           :aria-label="`План уровня ${levelLabel(parkingLevel!.level)}`">
        <defs>
          <pattern id="hatch" width="1.2" height="1.2" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="1.2" height="1.2" fill="#3a2f22" /><line x1="0" y1="0" x2="0" y2="1.2" stroke="#d39a68" stroke-width=".35" />
          </pattern>
        </defs>
        <polygon :points="pts(parkingLevel!.outline)" class="outline" />
        <g v-for="(r, i) in parkingLevel!.ramps" :key="`r${i}`">
          <polygon :points="pts(r.p)" fill="url(#hatch)" class="ramp" />
          <text :x="at(r.p).x" :y="at(r.p).y" class="lbl">{{ r.label }}</text>
        </g>
        <polygon v-for="(c, i) in parkingLevel!.columns ?? []" :key="`c${i}`" :points="pts(c)" class="column" />
        <g v-for="c in parkingLevel!.cores" :key="c.block">
          <polygon :points="pts(c.p)" class="core"><title>{{ c.label }}</title></polygon>
          <text :x="at(c.p).x" :y="at(c.p).y + 0.5" class="lbl core-l">{{ coreShort(c.label) }}</text>
        </g>
        <g v-for="s in spots" :key="s.id" class="spot"
           :class="{ sel: crmState.spotId === s.id, picked: crmState.spotPicked.has(s.id), dim: dim(s.status) }"
           @click="click(s.id, $event)">
          <polygon :points="pts(s.polygon)" :style="{ fill: STATUS_COLOR[s.status] }">
            <title>Место {{ s.code }} · {{ SPOT_STATUS_LABEL[s.status] }}{{ s.price ? ` · ${short(s.price)}` : '' }}</title>
          </polygon>
          <text :x="at(s.polygon).x" :y="at(s.polygon).y + 0.4" class="num-l">{{ s.number }}</text>
          <circle v-if="s.kind === 'ev' || s.kind === 'mgn'" :cx="at(s.polygon).x" :cy="at(s.polygon).y - 1.6" r=".55" :class="s.kind" />
        </g>
      </svg>
      <p v-else class="muted pad">У этого ЖК нет паркинга.</p>
    </div>

    <Transition name="fade">
      <div v-if="crmState.spotPicked.size" class="bulk glass">
        <b>Выбрано мест: {{ crmState.spotPicked.size }}</b>
        <input v-model="bulkComment" placeholder="Комментарий (необязательно)" maxlength="500" />
        <button v-for="s in STATUSES" :key="s" class="btn small" :style="{ '--c': STATUS_COLOR[s] }" :disabled="crmState.saving" @click="bulk(s)">
          <i class="dot" />{{ SPOT_STATUS_LABEL[s] }}
        </button>
        <button class="btn small ghost" @click="crmState.spotPicked.clear()">Снять выбор</button>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.plan { flex: 1; min-height: 0; overflow: auto; padding: 12px 12px 90px; }
svg { display: block; margin: 0 auto; }
.outline { fill: rgba(255,255,255,.035); stroke: rgba(255,255,255,.28); stroke-width: .3; }
.ramp { stroke: #d39a68; stroke-width: .2; }
.core { fill: #252a34; stroke: rgba(255,255,255,.35); stroke-width: .2; }
.column { fill: #cfcac1; stroke: #101216; stroke-width: .08; pointer-events: none; }
.lbl { font-size: 1.3px; fill: rgba(255,255,255,.75); text-anchor: middle; font-weight: 700; pointer-events: none; }
.core-l { font-size: 1.5px; }
.spot { cursor: pointer; }
.spot polygon { stroke: #0e1014; stroke-width: .14; opacity: .88; transition: opacity .15s; }
.spot:hover polygon { opacity: 1; stroke: #fff; stroke-width: .22; }
.spot.dim polygon { opacity: .14; }
.spot.sel polygon { opacity: 1; stroke: #fff; stroke-width: .45; }
.spot.picked polygon { opacity: 1; stroke: var(--accent-2); stroke-width: .45; stroke-dasharray: .7 .4; }
.num-l { font-size: 1.15px; font-weight: 800; fill: #101216; text-anchor: middle; pointer-events: none; font-variant-numeric: tabular-nums; }
.spot.dim .num-l { opacity: .3; }
circle.ev, .legend i.ev { fill: #4aa3ff; background: #4aa3ff; }
circle.mgn, .legend i.mgn { fill: #a78bfa; background: #a78bfa; }
circle { stroke: #101216; stroke-width: .15; pointer-events: none; }
.legend { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--muted); margin-left: 6px; }
.legend i { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }
.legend i.mgn { margin-left: 6px; }
.zoom { display: inline-flex; gap: 2px; margin-left: 6px; }
.zoom button { width: 28px; height: 28px; border-radius: 8px; border: 1px solid var(--line-strong); background: transparent; color: var(--text); font-size: 15px; cursor: pointer; }
.zoom button:disabled { opacity: .35; cursor: default; }
</style>
