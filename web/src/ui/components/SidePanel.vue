<script setup lang="ts">
import { computed } from 'vue'
import { activeFloors, activeType, data, isLive, isMassing, isTestData, scopeUnits, selectedBlock, selectedUnit, state, totals } from '@/app/state'
import { STATUS_COLOR, STATUS_LABEL, matchesFilter } from '@/domain/units'
import { formatArea, formatDate, plural } from '@/domain/format'
import type { ViewSummary } from '@/domain/views'
import UnitCard from './UnitCard.vue'

defineProps<{ view: ViewSummary | null }>()
const emit = defineEmits<{ 'select-unit': [id: number | null]; walk: []; lead: []; back: [] }>()

const ROOMS = [1, 2, 3, 4, 5]
function toggleRooms(r: number) {
  const i = state.filter.rooms.indexOf(r)
  if (i >= 0) state.filter.rooms.splice(i, 1)
  else state.filter.rooms.push(r)
}

const floorUnits = computed(() =>
  state.floor === null ? [] : scopeUnits.value.filter((u) => u.floor === state.floor).sort((a, b) => a.number - b.number),
)
const floorInfo = computed(() => activeFloors.value.find((f) => f.n === state.floor) ?? null)
const floorLabel = computed(() => {
  const f = floorInfo.value
  if (!f) return ''
  return activeType(f.type)?.label ?? data.project.value?.floor_types[f.type]?.label ?? ''
})
</script>

<template>
  <aside class="panel glass scroll-thin" :class="{ card: !!selectedUnit }">
    <UnitCard
      v-if="selectedUnit"
      :unit="selectedUnit"
      :view="view"
      @close="emit('select-unit', null)"
      @walk="emit('walk')"
      @lead="emit('lead')"
    />

    <template v-else>
      <div class="eyebrow">{{ state.floor === null ? 'Квартиры в доме' : `${isMassing && selectedBlock ? selectedBlock.label + ' · ' : ''}${state.floor} этаж` }}</div>
      <div v-if="isTestData" class="test-chip">{{ data.aptTypes.value.size ? 'Тестовые статусы и цены; планировки — из каталога застройщика' : 'Тестовые данные: планировки, статусы и цены условные' }}</div>
      <template v-if="state.floor === null">
        <div class="big num">{{ totals.by.available }} <span>{{ plural(totals.by.available, 'квартира', 'квартиры', 'квартир') }} в продаже</span></div>
        <div class="bar">
          <i v-for="s in (['available','booked','sold','unavailable'] as const)" :key="s"
             :style="{ flex: totals.by[s], background: STATUS_COLOR[s] }" :title="`${STATUS_LABEL[s]}: ${totals.by[s]}`" />
        </div>
        <div class="stats">
          <div v-for="s in (['available','booked','sold'] as const)" :key="s"><i :style="{ background: STATUS_COLOR[s] }" />{{ STATUS_LABEL[s] }} <b class="num">{{ totals.by[s] }}</b></div>
        </div>
        <p v-if="isLive" class="note">Всего {{ totals.total }} квартир. Статусы ведёт отдел продаж в CRM, страница обновляет их сама.</p>
        <p v-else class="note">Всего {{ totals.total }} квартир в каталоге застройщика. Статусы на {{ formatDate(data.observedAt.value) }}.</p>
      </template>
      <template v-else>
        <div class="floor-sub muted">{{ floorLabel }}</div>
        <ul v-if="floorUnits.length" class="units">
          <li v-for="u in floorUnits" :key="u.id"
              :class="{ off: !matchesFilter(u, state.filter), hover: state.hoverUnit === u.id }"
              @click="emit('select-unit', u.id)" @mouseenter="state.hoverUnit = u.id" @mouseleave="state.hoverUnit = null">
            <span class="no num">№ {{ u.number }}</span>
            <span class="rm">{{ u.rooms }}-комн.</span>
            <span class="ar num">{{ formatArea(u.area) }}</span>
            <span class="st"><i :style="{ background: STATUS_COLOR[u.status] }" />{{ STATUS_LABEL[u.status] }}</span>
          </li>
        </ul>
        <p v-else class="note">На этом этаже квартир нет — коммерческие помещения и лобби. Стены показаны по плану застройщика.</p>
      </template>

      <div class="filters">
        <div class="eyebrow">Комнат</div>
        <div class="row">
          <button v-for="r in ROOMS" :key="r" class="seg" :class="{ on: state.filter.rooms.includes(r) }" @click="toggleRooms(r)">{{ r === 5 ? '5+' : r }}</button>
        </div>
        <label class="switch">
          <input v-model="state.filter.onlyAvailable" type="checkbox" />
          <span class="knob" />
          Только в продаже
        </label>
        <div v-if="state.filter.rooms.length || state.filter.onlyAvailable" class="found muted">
          Подходит: <b class="num">{{ totals.matching }}</b>
        </div>
      </div>
    </template>
  </aside>
</template>

<style scoped>
.panel { position: absolute; right: 16px; top: 92px; width: 340px; max-height: calc(100% - 188px); overflow-y: auto; padding: 18px; }
.test-chip { display: inline-block; margin: 6px 0 4px; padding: 4px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; color: #1a120b; background: var(--warn); }
.big { font-size: 34px; font-weight: 800; letter-spacing: -0.02em; margin: 6px 0 12px; }
.big span { font-size: 14px; font-weight: 600; color: var(--muted); letter-spacing: 0; }
.bar { display: flex; height: 8px; border-radius: 4px; overflow: hidden; gap: 2px; }
.bar i { min-width: 2px; }
.stats { display: grid; gap: 6px; margin: 14px 0 6px; font-size: 13px; color: var(--muted); }
.stats div { display: flex; align-items: center; gap: 8px; }
.stats i, .st i { width: 8px; height: 8px; border-radius: 2px; display: inline-block; }
.stats b { margin-left: auto; color: var(--text); }
.note { font-size: 12px; color: var(--faint); line-height: 1.5; margin: 10px 0 0; }
.floor-sub { font-size: 13px; margin: 4px 0 12px; }
.units { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; }
.units li { display: grid; grid-template-columns: 56px 58px 1fr auto; align-items: center; gap: 6px; padding: 9px 10px; border-radius: 10px; font-size: 13px; cursor: pointer; border: 1px solid transparent; transition: background .12s; }
.units li:hover, .units li.hover { background: rgba(255,255,255,.06); border-color: var(--line); }
.units li.off { opacity: .35; }
.no { font-weight: 700; }
.rm { color: var(--muted); }
.ar { font-weight: 600; }
.st { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--muted); }
.filters { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--line); display: grid; gap: 10px; }
.row { display: flex; gap: 6px; }
.seg { flex: 1; height: 34px; border-radius: 10px; border: 1px solid var(--line-strong); background: rgba(255,255,255,.03); cursor: pointer; font-weight: 700; }
.seg.on { background: rgba(211,154,104,.22); border-color: var(--accent); color: var(--accent-2); }
.switch { display: flex; align-items: center; gap: 10px; font-size: 13px; cursor: pointer; user-select: none; }
.switch input { display: none; }
.knob { width: 34px; height: 20px; border-radius: 10px; background: rgba(255,255,255,.12); position: relative; transition: background .15s; }
.knob::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: transform .15s; }
.switch input:checked + .knob { background: var(--ok); }
.switch input:checked + .knob::after { transform: translateX(14px); }
.found { font-size: 13px; }
@media (max-width: 760px) {
  .panel { left: 10px; right: 10px; width: auto; top: auto; bottom: 146px; max-height: 42%; padding: 14px; }
  .panel:not(.card) .big { font-size: 26px; margin: 4px 0 8px; }
  .panel:not(.card) .filters { display: none; }
  .panel.card { bottom: 10px; max-height: 70%; z-index: 5; }
}
</style>
