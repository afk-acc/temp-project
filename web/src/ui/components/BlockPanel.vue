<script setup lang="ts">
import { computed } from 'vue'
import { data, hasParking, isLive, isTestData, selectedBlock, state } from '@/app/state'
import { PLACE_CATEGORY, walkLabel } from '@/domain/places'
import { apiAsset } from '@/api/client'
import { formatDuration, formatDate, formatSum, plural } from '@/domain/format'
import type { BlockSide } from '@/scene/massing'
import type { PlaceCategory } from '@/domain/types'

const props = defineProps<{ sides: BlockSide[] }>()
const emit = defineEmits<{ close: []; view: []; floor: [n: number]; places: []; 'open-floor': []; parking: [] }>()
const pk = computed(() => data.parking.value?.summary ?? null)

const project = computed(() => data.project.value!)
const blocks = computed(() => project.value.building.blocks ?? [])
const places = computed(() => data.context.value?.places ?? [])
const CATS = Object.keys(PLACE_CATEGORY) as PlaceCategory[]

function toggleCat(c: PlaceCategory) {
  const i = state.places.cats.indexOf(c)
  if (i >= 0) state.places.cats.splice(i, 1)
  else state.places.cats.push(c)
}

/** Места, ближайшие к выбранному корпусу (или к центру ЖК) */
const nearby = computed(() => {
  const b = selectedBlock.value
  const c = b
    ? [b.footprint.reduce((s, q) => s + q[0], 0) / b.footprint.length, b.footprint.reduce((s, q) => s + q[1], 0) / b.footprint.length]
    : data.context.value?.center ?? [0, 0]
  return places.value
    .filter((p) => state.places.cats.includes(p.category) && (state.places.all || p.known))
    .map((p) => {
      const d = Math.hypot(p.x - c[0], p.y - c[1])
      return { ...p, d, w: Math.max(1, Math.round((d * 1.25) / 80)) }
    })
    .sort((a, b) => a.d - b.d)
    .slice(0, 12)
})

const floorHeight = computed(() => {
  const b = selectedBlock.value
  if (!b) return 0
  return Math.round((state.blockFloor <= 1 ? 0 : b.first_floor + (state.blockFloor - 2) * b.floor_height) + 1.5)
})
const DAYS: Record<string, string> = { '03-21': '21 марта', '06-21': '21 июня', '09-23': '23 сентября', '12-21': '21 декабря' }
const dayLabel = computed(() => DAYS[state.sun.day.slice(5)] ?? formatDate(state.sun.day))
void props
</script>

<template>
  <aside class="panel glass scroll-thin">
    <template v-if="selectedBlock">
      <div class="head">
        <div>
          <div class="eyebrow">{{ project.name }} · {{ selectedBlock.address }}</div>
          <h2>{{ selectedBlock.label }} · {{ selectedBlock.levels }} этажей</h2>
        </div>
        <button class="btn ghost icon" aria-label="Закрыть" @click="emit('close')">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="grid">
        <div><span>Высота</span><b class="num">≈ {{ Math.round(selectedBlock.height) }} м</b></div>
        <div><span>Первый этаж</span><b>{{ selectedBlock.retail_ground ? 'коммерция' : 'жильё' }}</b></div>
      </div>

      <div class="eyebrow">Этаж</div>
      <div class="floor-row">
        <input v-model.number="state.blockFloor" type="range" min="1" :max="selectedBlock.levels" step="1" aria-label="Этаж" @input="emit('floor', state.blockFloor)" />
        <b class="num">{{ state.blockFloor }}</b>
      </div>
      <div class="muted small">Окна на высоте ≈ {{ floorHeight }} м</div>

      <div class="eyebrow mt">Стороны и солнце, {{ dayLabel }}</div>
      <div class="sides">
        <button v-for="(sd, i) in sides" :key="i" class="side" :class="{ on: state.viewSide === i }" @click="state.viewSide = i">
          <b>{{ sd.short }}</b>
          <span class="num">{{ state.blockSun === null ? '…' : state.blockSun[i]?.minutes ? formatDuration(state.blockSun[i].minutes) : 'нет солнца' }}</span>
        </button>
      </div>
      <button class="btn primary wide" :disabled="selectedBlock.retail_ground && state.blockFloor === 1" @click="emit('open-floor')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-6 9 6v11H3z M3 9h18M9 20v-6h6v6" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
        {{ selectedBlock.retail_ground && state.blockFloor === 1 ? '1 этаж — коммерция' : `Квартиры ${state.blockFloor} этажа` }}
      </button>
      <button class="btn wide mt8" @click="emit('view')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M12 4v16M3 12h18" stroke="currentColor" stroke-width="1.8"/></svg>
        Вид из окна: {{ state.blockFloor }} этаж, {{ sides[state.viewSide]?.name ?? '' }}
      </button>
    </template>

    <template v-else>
      <div class="eyebrow">Жилой комплекс</div>
      <div class="big num">{{ blocks.length }} <span>корпусов · {{ project.building.floors_total }} этажей всего</span></div>
      <p class="note">Статус по госреестру: <b>{{ project.gov_registry.status_ru }}</b>. Заказчик — {{ project.developer.legal_name }}, подрядчик — {{ project.gov_registry.contractor }}.</p>
      <p v-if="data.aptTypes.value.size" class="note">Выберите корпус и этаж — откроется план с квартирами, их статусом и прогулкой внутри. Планировки квартир — из каталога застройщика, <b class="warn">расстановка на этаже условная</b>; статусы и цены ведёт отдел продаж<template v-if="isLive"> в CRM — они обновляются на странице сами</template><template v-if="isTestData">, стартовые значения тестовые</template>.</p>
      <p v-else class="note">Выберите корпус и этаж — откроется план с квартирами, их статусом и прогулкой внутри. <b class="warn">Планировки, статусы и цены — тестовые</b>: настоящих планов застройщика в открытом доступе нет.</p>
    </template>

    <button v-if="hasParking && pk" class="pk-card" @click="emit('parking')">
      <span class="pk-ico" aria-hidden="true">P</span>
      <span class="pk-t">
        <b>Паркинг · {{ pk.levels }} {{ plural(pk.levels, 'уровень', 'уровня', 'уровней') }} под домами</b>
        <small>{{ pk.by_status.available }} свободно из {{ pk.total }}<template v-if="pk.price_from"> · от {{ formatSum(pk.price_from) }}</template></small>
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>

    <div class="near">
      <div class="near-head">
        <div class="eyebrow">Рядом{{ selectedBlock ? ` с корпусом ${selectedBlock.n}` : '' }}</div>
        <label class="switch"><input v-model="state.places.on" type="checkbox" /><span class="knob" />на карте</label>
      </div>
      <div class="cats">
        <button v-for="c in CATS" :key="c" class="cat" :class="{ on: state.places.cats.includes(c) }"
                :style="{ '--c': PLACE_CATEGORY[c].color }" @click="toggleCat(c)">{{ PLACE_CATEGORY[c].label }}</button>
      </div>
      <ul>
        <li v-for="p in nearby" :key="p.osm">
          <span v-if="p.logo" class="lg"><img :src="apiAsset(p.logo)" alt="" loading="lazy" /></span>
          <i v-else :style="{ background: PLACE_CATEGORY[p.category].color }" />
          <span class="nm">{{ p.name }}</span>
          <span class="wk num">{{ walkLabel(p.w, p.d) }}</span>
        </li>
      </ul>
      <label class="switch small"><input v-model="state.places.all" type="checkbox" /><span class="knob" />показывать не только известные места</label>
      <button class="btn small wide2" @click="emit('places')">Показать места вокруг на карте</button>
    </div>
  </aside>
</template>

<style scoped>
.panel { position: absolute; right: 16px; top: 92px; width: 350px; max-height: calc(100% - 188px); overflow-y: auto; padding: 18px; }
.head { display: flex; justify-content: space-between; gap: 8px; }
h2 { font-size: 20px; margin: 6px 0 12px; font-weight: 800; letter-spacing: -0.01em; }
.big { font-size: 34px; font-weight: 800; margin: 6px 0 10px; letter-spacing: -0.02em; }
.big span { font-size: 14px; font-weight: 600; color: var(--muted); letter-spacing: 0; }
.note { font-size: 13px; color: var(--muted); line-height: 1.5; margin: 0 0 8px; }
.note b { color: var(--text); }
.note b.warn { color: var(--warn); }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
.grid div { padding: 10px 12px; border-radius: 12px; background: rgba(255,255,255,.04); border: 1px solid var(--line); display: grid; gap: 3px; }
.grid span { font-size: 11px; color: var(--muted); }
.floor-row { display: flex; align-items: center; gap: 12px; margin: 6px 0 2px; }
.floor-row input { flex: 1; accent-color: var(--accent); }
.floor-row b { font-size: 20px; width: 30px; text-align: right; }
.small { font-size: 12px; }
.mt { margin-top: 14px; }
.sides { display: grid; grid-template-columns: repeat(auto-fit, minmax(70px, 1fr)); gap: 6px; margin: 8px 0 12px; }
.side { display: grid; gap: 2px; padding: 8px; border-radius: 10px; border: 1px solid var(--line-strong); background: rgba(255,255,255,.03); cursor: pointer; text-align: left; }
.side b { font-size: 14px; }
.side span { font-size: 11px; color: var(--muted); }
.side.on { border-color: var(--accent); background: rgba(211,154,104,.16); }
.wide { width: 100%; height: 46px; }
.mt8 { margin-top: 8px; }
.btn:disabled { opacity: .5; cursor: default; }
.wide2 { width: 100%; margin-top: 10px; }
.near { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--line); }
.pk-card { width: 100%; margin-top: 14px; display: grid; grid-template-columns: 34px 1fr auto; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 14px; border: 1px solid var(--line-strong); background: rgba(255,255,255,.04); color: var(--text); cursor: pointer; text-align: left; }
.pk-card:hover { border-color: var(--accent); background: rgba(211,154,104,.12); }
.pk-ico { width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center; background: #2f6fde; color: #fff; font-weight: 900; font-size: 18px; }
.pk-t { display: grid; gap: 2px; }
.pk-t b { font-size: 13px; }
.pk-t small { font-size: 12px; color: var(--muted); }
.near-head { display: flex; justify-content: space-between; align-items: center; }
.cats { display: flex; flex-wrap: wrap; gap: 5px; margin: 10px 0; }
.cat { height: 26px; padding: 0 9px; border-radius: 999px; font-size: 11px; font-weight: 600; cursor: pointer; border: 1px solid var(--line-strong); background: transparent; color: var(--faint); }
.cat.on { color: var(--text); border-color: color-mix(in srgb, var(--c) 60%, transparent); background: color-mix(in srgb, var(--c) 16%, transparent); }
.near ul { list-style: none; margin: 0 0 10px; padding: 0; display: grid; gap: 6px; }
.near li { display: grid; grid-template-columns: 44px 1fr auto; gap: 8px; align-items: center; font-size: 13px; min-height: 22px; }
.near li i { width: 8px; height: 8px; border-radius: 50%; justify-self: center; }
.near .lg { display: grid; place-items: center; height: 20px; padding: 2px 4px; border-radius: 6px; background: #fff; }
.near .lg img { display: block; height: 14px; max-width: 36px; object-fit: contain; }
.nm { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.wk { color: var(--muted); font-size: 12px; white-space: nowrap; }
.switch { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--muted); cursor: pointer; user-select: none; }
.switch input { display: none; }
.knob { width: 30px; height: 18px; border-radius: 9px; background: rgba(255,255,255,.12); position: relative; transition: background .15s; flex: none; }
.knob::after { content: ''; position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; border-radius: 50%; background: #fff; transition: transform .15s; }
.switch input:checked + .knob { background: var(--ok); }
.switch input:checked + .knob::after { transform: translateX(12px); }
@media (max-width: 760px) {
  .panel { left: 10px; right: 10px; width: auto; top: auto; bottom: 144px; max-height: 44%; padding: 14px; }
}
</style>
