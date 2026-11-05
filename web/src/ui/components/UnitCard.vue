<script setup lang="ts">
import { computed } from 'vue'
import { activeFloors, isMassing, selectedBlock, state } from '@/app/state'
import type { Unit } from '@/domain/types'
import { STATUS_COLOR, STATUS_LABEL, roomsLabel } from '@/domain/units'
import { formatArea, formatDate, formatDuration, formatSum } from '@/domain/format'
import type { ViewSummary } from '@/domain/views'
import MiniPlan from './MiniPlan.vue'

const props = defineProps<{ unit: Unit; view: ViewSummary | null }>()
defineEmits<{ close: []; walk: []; lead: [] }>()

const floor = computed(() => activeFloors.value.find((f) => f.n === props.unit.floor)!)
const floorsTotal = computed(() => activeFloors.value.length)
void isMassing
const windowHeight = computed(() => Math.round(floor.value.elevation + 1.5))
const DAYS: Record<string, string> = { '03-21': '21 марта', '06-21': '21 июня', '12-21': '21 декабря' }
const dayLabel = computed(() => DAYS[state.sun.day.slice(5)] ?? formatDate(state.sun.day))
</script>

<template>
  <div class="card">
    <div class="head">
      <div>
        <div class="eyebrow">{{ isMassing && selectedBlock ? `${selectedBlock.label} · ` : '' }}Квартира № {{ unit.number }} · {{ unit.floor }} этаж</div>
        <h2>{{ roomsLabel(unit.rooms) }} · <span class="num">{{ formatArea(unit.area, true) }}</span></h2>
      </div>
      <button class="btn ghost icon" aria-label="Закрыть" @click="$emit('close')">
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="status" :style="{ '--c': STATUS_COLOR[unit.status] }"><i />{{ STATUS_LABEL[unit.status] }}</div>
    <span v-if="unit.test" class="test">тестовые данные</span>

    <MiniPlan :unit="unit" />

    <div class="grid">
      <div><span>Этаж</span><b class="num">{{ unit.floor }} из {{ floorsTotal }}</b></div>
      <div><span>Окна на высоте</span><b class="num">≈ {{ windowHeight }} м</b></div>
      <div><span>Стороны света</span><b>{{ view?.sidesShort.join(', ') || '—' }}</b></div>
      <div>
        <span>Солнце, {{ dayLabel }}</span>
        <b class="num">{{ state.sunMinutes === null ? 'считаем…' : state.sunMinutes ? formatDuration(state.sunMinutes) : 'нет прямого' }}</b>
      </div>
    </div>

    <div v-if="unit.room_list?.length" class="rooms">
      <div class="eyebrow">Помещения</div>
      <ul><li v-for="(r, i) in unit.room_list" :key="i"><span>{{ r.name }}</span><b class="num">{{ formatArea(r.area) }}</b></li></ul>
    </div>

    <div v-if="view" class="views">
      <div class="eyebrow">Что видно из окон</div>
      <ul>
        <li><b>{{ view.sides.join(' и ') }}</b></li>
        <li v-for="h in view.highlights" :key="h">{{ h }}</li>
        <li class="muted">{{ view.openness }}</li>
      </ul>
    </div>

    <div class="price">
      <div>
        <span class="muted">Стоимость</span>
        <b>{{ unit.price === null && unit.test ? (unit.status === 'sold' ? 'продана' : '—') : formatSum(unit.price) }}<em v-if="unit.test && unit.price !== null"> · тест</em></b>
      </div>
      <button class="btn small" @click="$emit('lead')">Узнать цену</button>
    </div>

    <div class="actions">
      <button class="btn primary" @click="$emit('walk')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="13" cy="4" r="2" fill="currentColor"/><path d="M10 21l2-6 3 3v3M8 12l2-4 4 1 2 4 3 1M12 15l-1-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Пройти по квартире
      </button>
    </div>
    <p v-if="unit.test" class="src">Тестовые данные для показа возможностей: планировка сгенерирована по реальному контуру корпуса, статус и цена случайные.</p>
    <p v-else class="src">Статус — каталог застройщика на {{ formatDate(unit.observed_at) }}. Площадь по каталогу, стены — по плану этажа.</p>
  </div>
</template>

<style scoped>
.head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
h2 { font-size: 20px; margin: 6px 0 0; letter-spacing: -0.01em; font-weight: 800; }
.status { display: inline-flex; align-items: center; gap: 8px; margin: 10px 0 12px; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; color: var(--c); background: color-mix(in srgb, var(--c) 14%, transparent); border: 1px solid color-mix(in srgb, var(--c) 35%, transparent); }
.status i { width: 7px; height: 7px; border-radius: 50%; background: var(--c); }
.test { display: inline-block; margin-left: 8px; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; color: #1a120b; background: var(--warn); }
.rooms ul { list-style: none; margin: 6px 0 12px; padding: 0; display: grid; gap: 4px; font-size: 13px; }
.rooms li { display: flex; justify-content: space-between; color: var(--muted); }
.rooms li b { color: var(--text); }
.price em { font-style: normal; font-size: 11px; color: var(--warn); }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 12px 0; }
.grid div { padding: 10px 12px; border-radius: 12px; background: rgba(255,255,255,.04); border: 1px solid var(--line); display: grid; gap: 3px; }
.grid span { font-size: 11px; color: var(--muted); }
.grid b { font-size: 14px; }
.views ul { margin: 8px 0 0; padding: 0; list-style: none; display: grid; gap: 5px; font-size: 13px; }
.views li::first-letter { text-transform: uppercase; }
.price { display: flex; align-items: center; justify-content: space-between; margin-top: 14px; padding: 12px; border-radius: 12px; border: 1px dashed var(--line-strong); }
.price div { display: grid; gap: 2px; }
.price span { font-size: 11px; }
.price b { font-size: 15px; }
.actions { display: grid; margin-top: 12px; }
.actions .btn { height: 48px; font-size: 15px; }
.src { font-size: 11px; color: var(--faint); margin: 10px 0 0; line-height: 1.45; }
</style>
