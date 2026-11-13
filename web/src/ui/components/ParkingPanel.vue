<script setup lang="ts">
import { computed } from 'vue'
import { data, parkingLevel, selectedSpot, state } from '@/app/state'
import { STATUS_COLOR } from '@/domain/units'
import { KIND_LABEL, KIND_ORDER, SPOT_STATUS_LABEL, formatSize, levelLabel, nearestCore } from '@/domain/parking'
import { formatArea, formatSum, plural } from '@/domain/format'
import type { SpotKind } from '@/domain/types'

/** Панель паркинга: сводка, уровни, фильтр, карточка выбранного места и заявка. Данные — из API (статусы ведёт CRM). */
const emit = defineEmits<{ close: []; level: [n: number]; select: [id: number | null]; lead: [] }>()

const p = computed(() => data.parking.value!)
const project = computed(() => data.project.value!)
const sum = computed(() => p.value.summary)
const core = computed(() => (selectedSpot.value ? nearestCore(selectedSpot.value, data.parking.value?.levels.find((l) => l.level === selectedSpot.value!.level)) : null))
const blockLabel = (id: string) => project.value.building.blocks?.find((b) => b.id === id)?.label ?? id
const kindsHere = computed(() => KIND_ORDER.filter((k) => p.value.spots.some((s) => s.kind === k)))

function toggleKind(k: SpotKind) {
  const i = state.parking.filter.kinds.indexOf(k)
  if (i >= 0) state.parking.filter.kinds.splice(i, 1)
  else state.parking.filter.kinds.push(k)
}
</script>

<template>
  <aside class="panel glass scroll-thin">
    <div class="head">
      <div>
        <div class="eyebrow">Подземный паркинг · ЖК {{ project.name }}</div>
        <h2>{{ sum.levels }} {{ plural(sum.levels, 'уровень', 'уровня', 'уровней') }} · {{ sum.total }} {{ plural(sum.total, 'место', 'места', 'мест') }}</h2>
      </div>
      <button class="btn ghost icon" aria-label="Закрыть" @click="emit('close')">
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>
    <p v-if="p.test" class="note"><b class="warn">Паркинг тестовый</b>: планов застройщика в открытом доступе нет — раскладка, статусы и цены условные; статусы ведёт отдел продаж в CRM.</p>

    <div class="stat">
      <span v-for="s in (['available', 'booked', 'sold'] as const)" :key="s" :style="{ '--c': STATUS_COLOR[s] }"><i />{{ SPOT_STATUS_LABEL[s] }} <b class="num">{{ sum.by_status[s] }}</b></span>
    </div>
    <div v-if="sum.price_from" class="from">Свободные — от <b>{{ formatSum(sum.price_from) }}</b></div>

    <div class="eyebrow mt">Уровни</div>
    <div class="levels">
      <button v-for="l in p.levels" :key="l.level" class="lvl" :class="{ on: state.parking.level === l.level }" @click="emit('level', l.level)">
        <span class="sect" aria-hidden="true"><i v-for="x in p.levels" :key="x.level" :class="{ on: x.level === l.level }" /></span>
        <span class="t"><b>Уровень {{ levelLabel(l.level) }}</b><small>{{ l.available }} свободно из {{ l.total }}</small></span>
        <span class="bar"><i :style="{ width: `${l.total ? (l.available / l.total) * 100 : 0}%` }" /></span>
      </button>
    </div>

    <div class="eyebrow mt">Какое место</div>
    <div class="cats">
      <button v-for="k in kindsHere" :key="k" class="cat" :class="{ on: state.parking.filter.kinds.includes(k) }" @click="toggleKind(k)">{{ KIND_LABEL[k] }}</button>
    </div>
    <label class="switch"><input v-model="state.parking.filter.onlyAvailable" type="checkbox" /><span class="knob" />только свободные</label>

    <div v-if="selectedSpot" class="card">
      <div class="card-head">
        <div>
          <div class="eyebrow">Уровень {{ levelLabel(selectedSpot.level) }}</div>
          <h3>Место {{ selectedSpot.code }}</h3>
        </div>
        <span class="pill" :style="{ '--c': STATUS_COLOR[selectedSpot.status] }">{{ SPOT_STATUS_LABEL[selectedSpot.status] }}</span>
      </div>
      <div class="grid">
        <div><span>Тип</span><b>{{ KIND_LABEL[selectedSpot.kind] }}</b></div>
        <div><span>Размер</span><b class="num">{{ formatSize(selectedSpot.polygon) }}</b></div>
        <div><span>Площадь</span><b class="num">{{ formatArea(selectedSpot.area) }}</b></div>
        <div><span>Цена</span><b class="num">{{ selectedSpot.price ? formatSum(selectedSpot.price) : selectedSpot.status === 'sold' ? 'продано' : 'по запросу' }}</b></div>
      </div>
      <p v-if="core" class="note">Ближайший лифт — в {{ blockLabel(core.block).toLowerCase() }}, ≈ {{ core.meters }} м.</p>
      <button v-if="selectedSpot.status === 'available' || selectedSpot.status === 'booked'" class="btn primary wide" @click="emit('lead')">Узнать цену и записаться</button>
      <button class="btn wide mt8" @click="emit('select', null)">Снять выбор</button>
    </div>
    <p v-else class="note mt">Нажмите на место на уровне — покажем тип, размер, цену и ближайший лифт в корпус.<template v-if="parkingLevel"> Сейчас открыт уровень {{ levelLabel(parkingLevel.level) }}.</template></p>
  </aside>
</template>

<style scoped>
.panel { position: absolute; right: 16px; top: 92px; width: 350px; max-height: calc(100% - 188px); overflow-y: auto; padding: 18px; }
.head { display: flex; justify-content: space-between; gap: 8px; }
h2 { font-size: 20px; margin: 6px 0 10px; font-weight: 800; letter-spacing: -0.01em; }
h3 { font-size: 18px; margin: 4px 0 0; font-weight: 800; }
.note { font-size: 13px; color: var(--muted); line-height: 1.5; margin: 0 0 8px; }
.note b.warn { color: var(--warn); }
.mt { margin-top: 14px; }
.mt8 { margin-top: 8px; }
.stat { display: flex; flex-wrap: wrap; gap: 6px 12px; font-size: 12px; color: var(--muted); margin: 6px 0; }
.stat span { display: inline-flex; align-items: center; gap: 6px; }
.stat i { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
.stat b { color: var(--text); }
.from { font-size: 13px; color: var(--muted); }
.from b { color: var(--text); }
.levels { display: grid; gap: 6px; margin-top: 8px; }
.lvl { display: grid; grid-template-columns: 22px 1fr; grid-template-rows: auto auto; gap: 4px 10px; align-items: center; padding: 9px 10px; border-radius: 12px; border: 1px solid var(--line-strong); background: rgba(255,255,255,.03); cursor: pointer; text-align: left; color: var(--text); }
.lvl.on { border-color: var(--accent); background: rgba(211,154,104,.14); }
.lvl .sect { grid-row: span 2; display: grid; gap: 3px; padding-top: 4px; border-top: 2px solid rgba(255,255,255,.5); }
.lvl .sect i { height: 5px; border-radius: 2px; background: rgba(255,255,255,.16); }
.lvl .sect i.on { background: var(--accent); }
.lvl .t { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.lvl .t b { font-size: 14px; }
.lvl small { font-size: 12px; color: var(--muted); }
.lvl .bar { height: 4px; border-radius: 2px; background: rgba(255,255,255,.08); overflow: hidden; }
.lvl .bar i { display: block; height: 100%; background: var(--ok); }
.cats { display: flex; flex-wrap: wrap; gap: 5px; margin: 8px 0 10px; }
.cat { height: 28px; padding: 0 10px; border-radius: 999px; font-size: 12px; font-weight: 600; cursor: pointer; border: 1px solid var(--line-strong); background: transparent; color: var(--muted); }
.cat.on { color: var(--text); border-color: var(--accent); background: rgba(211,154,104,.16); }
.switch { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--muted); cursor: pointer; user-select: none; }
.switch input { display: none; }
.knob { width: 30px; height: 18px; border-radius: 9px; background: rgba(255,255,255,.12); position: relative; transition: background .15s; flex: none; }
.knob::after { content: ''; position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; border-radius: 50%; background: #fff; transition: transform .15s; }
.switch input:checked + .knob { background: var(--ok); }
.switch input:checked + .knob::after { transform: translateX(12px); }
.card { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--line); }
.card-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px; }
.pill { font-size: 12px; font-weight: 700; padding: 5px 10px; border-radius: 999px; color: var(--c); background: color-mix(in srgb, var(--c) 16%, transparent); border: 1px solid color-mix(in srgb, var(--c) 45%, transparent); white-space: nowrap; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }
.grid div { padding: 9px 11px; border-radius: 12px; background: rgba(255,255,255,.04); border: 1px solid var(--line); display: grid; gap: 3px; }
.grid span { font-size: 11px; color: var(--muted); }
.grid b { font-size: 13px; }
.wide { width: 100%; height: 44px; }
@media (max-width: 760px) {
  .panel { left: 10px; right: 10px; width: auto; top: auto; bottom: 144px; max-height: 38%; padding: 14px; }
  h2 { font-size: 17px; margin-bottom: 6px; }
  .note { font-size: 12px; }
}
</style>
