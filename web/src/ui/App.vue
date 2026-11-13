<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { api } from '@/api/client'
import { activeAzimuth, activeFloors, activeLayout, activeType, data, floorStats, hasParking, isLive, isMassing, scopeUnits, selectedBlock, selectedUnit, state } from '@/app/state'
import type { FloorType } from '@/domain/types'
import { summarizeView, unitFacades, type Facade } from '@/domain/views'
import { Engine } from '@/scene/Engine'
import TopBar from './components/TopBar.vue'
import FloorRail from './components/FloorRail.vue'
import SidePanel from './components/SidePanel.vue'
import AtmosphereBar from './components/AtmosphereBar.vue'
import WalkHud from './components/WalkHud.vue'
import HoverTip from './components/HoverTip.vue'
import DataSheet from './components/DataSheet.vue'
import LeadDialog from './components/LeadDialog.vue'
import LoaderScreen from './components/LoaderScreen.vue'
import BlockRail from './components/BlockRail.vue'
import BlockPanel from './components/BlockPanel.vue'
import ParkingPanel from './components/ParkingPanel.vue'
import type { BlockSide } from '@/scene/massing'

let SLUG = new URLSearchParams(location.search).get('p') || ''
const host = ref<HTMLDivElement>()
let engine: Engine | null = null // eslint-disable-line prefer-const

// ---------- загрузка ----------

onMounted(async () => {
  engine = new Engine(host.value!, {
    hoverFloor: (n, x, y) => {
      state.hoverFloor = n
      state.tip = { x, y }
    },
    clickFloor: (n) => selectFloor(n),
    hoverUnit: (id, x, y) => {
      state.hoverUnit = id
      state.tip = { x, y }
    },
    clickUnit: (id) => selectUnit(id),
    interacted: () => (state.touched = true),
    xrEnded: () => (state.xrActive = false),
    hoverBlock: (id, x, y) => {
      state.hoverBlock = id
      state.tip = { x, y }
    },
    clickBlock: (id) => selectBlock(id),
    hoverSpot: (id, x, y) => {
      state.parking.hoverSpot = id
      state.tip = { x, y }
    },
    clickSpot: (id) => selectSpot(id),
    clickParking: () => openParking(),
  })
  try {
    state.progress = 0.05
    const index = await api.projects()
    data.projects.value = index.items
    if (!index.items.some((p) => p.slug === SLUG)) SLUG = index.items[0].slug
    // паркинга может не быть (C1, старая статическая выкладка) — тогда просто без него
    const [project, units, context, parking] = await Promise.all([api.project(SLUG), api.units(SLUG), api.context(SLUG), api.parking(SLUG).catch(() => null)])
    document.title = `ЖК ${project.name} — 3D · Spliti`
    state.progress = 0.35
    const ids = [...new Set(project.building.floors.map((f) => f.type))]
    const types = new Map<string, FloorType>()
    let done = 0
    await Promise.all(ids.map(async (id) => {
      types.set(id, await api.floorType(SLUG, id))
      done++
      state.progress = 0.35 + 0.5 * (done / ids.length)
    }))
    data.project.value = project
    data.units.value = units.items
    data.context.value = context
    data.types.value = types
    data.observedAt.value = units.observed_at
    data.parking.value = parking?.levels.length ? parking : null
    // реальные планировки (чертёж и комнаты из каталога) — только у ЖК, где квартиры ссылаются на тип
    if (units.items.some((u) => u.type_code)) {
      api.apartmentTypes(SLUG).then((r) => (data.aptTypes.value = new Map(r.items.map((t) => [t.code, t])))).catch(() => {})
    }
    engine.load(project, context, types)
    if (data.parking.value) {
      engine.loadParking(data.parking.value)
      engine.styleParking(state.parking.filter, null, null)
    }
    if (import.meta.env.DEV) (window as unknown as { __engine: Engine }).__engine = engine
    engine.setSun(state.sun.day, state.sun.hour)
    engine.setAtmosphere(state.atmo.season, state.atmo.weather)
    engine.setPlaceFilter(state.places.cats, state.places.all, state.places.on)
    state.progress = 1
    state.xrSupported = await engine.xr.checkSupport()
    setTimeout(() => (state.loading = false), 250)
  } catch (e) {
    state.error = e instanceof Error ? e.message : String(e)
  }
  window.addEventListener('keydown', onKey)
  liveTimer = window.setInterval(() => void refreshUnits(), LIVE_MS)
  document.addEventListener('visibilitychange', onVisible)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  clearInterval(liveTimer)
  document.removeEventListener('visibilitychange', onVisible)
  engine?.dispose()
})

// ---------- живые статусы: CRM — источник правды, сайт перечитывает квартиры ----------

const LIVE_MS = 20000
let liveTimer = 0
let refreshing = false

async function refreshUnits() {
  if (!isLive.value || refreshing || document.hidden || state.loading) return
  refreshing = true
  try {
    const fresh = (await api.units(SLUG)).items
    const old = new Map(data.units.value.map((u) => [u.id, u]))
    const changed = fresh.some((u) => {
      const o = old.get(u.id)
      return !o || o.status !== u.status || o.price !== u.price
    })
    if (changed) {
      data.units.value = fresh
      engine?.updateUnits(scopeUnits.value, state.filter, state.hoverUnit, state.unitId)
    }
    await refreshParking()
  } catch { /* сеть моргнула — попробуем в следующий раз */ } finally {
    refreshing = false
  }
}

/** Статусы мест паркинга — тем же таймером, что квартиры */
async function refreshParking() {
  if (!hasParking.value) return
  const fresh = await api.parking(SLUG)
  const old = new Map(data.parking.value!.spots.map((s) => [s.id, s]))
  if (!fresh.spots.some((s) => old.get(s.id)?.status !== s.status || old.get(s.id)?.price !== s.price)) return
  data.parking.value = fresh
  engine?.updateParking(fresh.spots)
  engine?.styleParking(state.parking.filter, state.parking.hoverSpot, state.parking.spotId)
}

function onVisible() {
  if (!document.hidden) void refreshUnits()
}

// ---------- действия ----------

async function selectFloor(n: number) {
  if (!engine) return
  if (isMassing.value) {
    if (!state.blockId) return
    let layout = data.blockLayouts.value.get(state.blockId)
    if (!layout) {
      layout = await api.block(SLUG, state.blockId)
      const m = new Map(data.blockLayouts.value)
      m.set(layout.id, layout)
      data.blockLayouts.value = m
    }
    state.floor = n
    state.blockFloor = n
    state.unitId = null
    state.hoverUnit = null
    state.mode = 'floor'
    engine.openBlockFloor(layout, n, scopeUnits.value, state.filter)
    return
  }
  state.floor = n
  state.unitId = null
  state.hoverUnit = null
  state.hoverFloor = null
  state.mode = 'floor'
  engine.showFloor(n, data.units.value, state.filter)
}

function selectUnit(id: number | null) {
  if (id === null) {
    state.unitId = null
    return
  }
  const u = scopeUnits.value.find((x) => x.id === id)
  if (!u) return
  if (state.floor !== u.floor || state.mode !== 'floor') void selectFloor(u.floor)
  state.unitId = id
}

const sides = ref<BlockSide[]>([])

// ---------- паркинг ----------

function openParking(level?: number) {
  if (!engine || !data.parking.value) return
  const lv = level ?? state.parking.level ?? data.parking.value.levels[0].level
  // выбранное место с другого уровня — снимаем выбор, карточка не должна врать
  if (data.parking.value.spots.find((s) => s.id === state.parking.spotId)?.level !== lv) state.parking.spotId = null
  state.parking.level = lv
  state.mode = 'parking'
  state.blockId = null
  state.floor = null
  state.unitId = null
  state.hoverBlock = null
  engine.showParking(lv)
  engine.styleParking(state.parking.filter, state.parking.hoverSpot, state.parking.spotId)
}

function selectSpot(id: number | null) {
  if (id === null) {
    state.parking.spotId = null
    return
  }
  const s = data.parking.value?.spots.find((x) => x.id === id)
  if (!s) return
  if (state.mode !== 'parking' || state.parking.level !== s.level) openParking(s.level)
  state.parking.spotId = id
}

function selectBlock(id: string) {
  if (!engine) return
  // по умолчанию — жилой этаж (у корпусов с коммерцией первый этаж без квартир)
  if (state.blockId !== id) state.blockFloor = Math.min(Math.max(state.blockFloor || 5, 2), selectedBlockLevels(id))
  state.blockId = id
  state.mode = 'block'
  state.viewSide = 0
  engine.selectBlock(id, state.blockFloor)
  sides.value = engine.blockSides(id)
  recomputeBlockSun()
}

function selectedBlockLevels(id: string) {
  return data.project.value?.building.blocks?.find((b) => b.id === id)?.levels ?? 1
}

function setBlockFloor(n: number) {
  if (!engine || !state.blockId) return
  engine.setBlockFloor(state.blockId, n)
  recomputeBlockSun()
}

function showView() {
  if (!engine || !state.blockId) return
  state.mode = 'view'
  engine.showView(state.blockId, state.blockFloor, state.viewSide)
}

let blockSunTimer = 0
function recomputeBlockSun() {
  clearTimeout(blockSunTimer)
  state.blockSun = null
  blockSunTimer = window.setTimeout(() => {
    if (engine && state.blockId) state.blockSun = engine.blockSunMinutes(state.blockId, state.blockFloor, state.sun.day)
  }, 60)
}

function backFromFloor() {
  if (isMassing.value && state.blockId) {
    state.floor = null
    state.unitId = null
    selectBlock(state.blockId)
  } else toBuilding()
}

function toBuilding() {
  state.parking.spotId = null
  state.parking.hoverSpot = null
  state.floor = null
  state.blockId = null
  state.mode = 'building'
  state.floor = null
  state.unitId = null
  state.hoverUnit = null
  engine?.flyToBuilding()
}

function startWalk() {
  const u = selectedUnit.value
  if (!engine || !u) return
  state.mode = 'walk'
  engine.setInteriorStyle(state.interior)
  engine.enterWalk(u, scopeUnits.value, facades.value)
}

function exitWalk() {
  const u = selectedUnit.value
  if (!engine) return
  if (state.mode === 'view' && state.blockId) {
    selectBlock(state.blockId)
    return
  }
  if (state.xrActive) return
  if (u) {
    state.mode = 'floor'
    engine.showFloor(u.floor, scopeUnits.value, state.filter)
    engine.styleUnits(state.filter, null, u.id)
  } else toBuilding()
}

async function enterVR() {
  const u = selectedUnit.value
  if (!engine || !u) return
  try {
    state.xrActive = true
    await engine.enterVR(u.floor)
  } catch {
    state.xrActive = false
  }
}

function onKey(e: KeyboardEvent) {
  if (e.key !== 'Escape') return
  if (state.showLead || state.showData) {
    state.showLead = false
    state.showData = false
  } else if (state.mode === 'walk' || state.mode === 'view') exitWalk()
  else if (state.mode === 'parking') {
    if (state.parking.spotId !== null) state.parking.spotId = null
    else toBuilding()
  }
  else if (state.mode === 'block') toBuilding()
  else if (state.unitId !== null) state.unitId = null
  else if (state.mode === 'floor') backFromFloor()
}

// ---------- производные данные карточки ----------

const facades = computed<Facade[]>(() => {
  const u = selectedUnit.value
  if (!u?.polygon) return []
  const f = activeFloors.value.find((x) => x.n === u.floor)
  const t = f && activeType(f.type)
  return t ? unitFacades(t, u.polygon, activeAzimuth.value) : []
})

const view = computed(() => {
  const u = selectedUnit.value
  const p = data.project.value
  const ctx = data.context.value
  if (!u || !p || !ctx || !facades.value.length) return null
  const f = activeFloors.value.find((x) => x.n === u.floor)!
  return summarizeView(facades.value, ctx, activeAzimuth.value, f.elevation + 1.5, activeLayout.value?.origin)
})

let sunTimer = 0
function recomputeSun() {
  clearTimeout(sunTimer)
  state.sunHours = null
  const u = selectedUnit.value
  const p = data.project.value
  if (!u || !p || !engine) return
  sunTimer = window.setTimeout(() => {
    const f = activeFloors.value.find((x) => x.n === u.floor)!
    state.sunHours = engine!.sunMinutes(facades.value, f.elevation, state.sun.day, activeAzimuth.value)
  }, 60)
}

// ---------- связь состояния со сценой ----------

watch(() => [state.filter.rooms.slice(), state.filter.onlyAvailable, state.hoverUnit, state.unitId] as const, () => {
  engine?.styleUnits(state.filter, state.hoverUnit, state.unitId)
})
watch(() => [state.parking.filter.kinds.slice(), state.parking.filter.onlyAvailable, state.parking.hoverSpot, state.parking.spotId] as const, () => {
  engine?.styleParking(state.parking.filter, state.parking.hoverSpot, state.parking.spotId)
})
watch(() => state.unitId, recomputeSun)
watch(() => state.sun.day, () => {
  recomputeSun()
  if (state.blockId) recomputeBlockSun()
})
watch(() => [state.places.cats.slice(), state.places.all, state.places.on] as const, () => {
  engine?.setPlaceFilter(state.places.cats, state.places.all, state.places.on)
})
watch(() => [state.sun.day, state.sun.hour] as const, ([d, h]) => engine?.setSun(d, h))
watch(() => [state.atmo.season, state.atmo.weather] as const, ([s, w]) => engine?.setAtmosphere(s, w))
watch(() => state.atmo.sunPath, (on) => engine?.setSunPathVisible(on))
watch(() => state.interior, (st) => engine?.setInteriorStyle(st))

function railHover(n: number | null) {
  engine?.hoverFloorFromUI(n)
}

function setStick(x: number, y: number) {
  engine?.setStick(x, y)
}

const floorCount = computed(() => floorStats.value.length)
</script>

<template>
  <div class="app" :class="`mode-${state.mode}`">
    <div ref="host" class="stage" />

    <template v-if="!state.loading && data.project.value">
      <TopBar
        :project="data.project.value"
        :mode="state.mode"
        @back="toBuilding"
        @data="state.showData = true"
      />
      <template v-if="isMassing">
        <BlockRail v-if="state.mode === 'building' || state.mode === 'block'" :blocks="data.project.value.building.blocks ?? []" :current="state.blockId"
                   @select="selectBlock" @hover="(id) => (state.hoverBlock = id)" />
        <BlockPanel v-if="state.mode === 'building' || state.mode === 'block'" :sides="sides" @close="toBuilding" @view="showView" @floor="setBlockFloor" @open-floor="selectFloor(state.blockFloor)" @places="engine?.flyToPlaces()" @parking="openParking()" />
        <ParkingPanel v-if="state.mode === 'parking' && hasParking" @close="toBuilding" @level="openParking" @select="selectSpot" @lead="state.showLead = true" />
        <div v-if="state.mode === 'view' && selectedBlock" class="view-hud glass">
          <button class="btn small" @click="exitWalk">
            <svg width="14" height="14" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>
            Назад
          </button>
          <span><b>{{ selectedBlock.label }}</b> · {{ state.blockFloor }} этаж · {{ sides[state.viewSide]?.name }}</span>
          <span class="muted">тяните, чтобы осмотреться</span>
        </div>
      </template>
      <FloorRail
        v-if="(!isMassing || state.mode === 'floor') && state.mode !== 'walk'"
        :floors="floorStats"
        :current="state.floor"
        :count="floorCount"
        @select="selectFloor"
        @hover="railHover"
      />
      <SidePanel
        v-if="(!isMassing || state.mode === 'floor') && state.mode !== 'walk'"
        :view="view"
        @select-unit="selectUnit"
        @walk="startWalk"
        @lead="state.showLead = true"
        @back="backFromFloor"
      />
      <AtmosphereBar v-if="!state.xrActive" />
      <WalkHud
        v-if="state.mode === 'walk'"
        :xr-supported="state.xrSupported"
        @exit="exitWalk"
        @vr="enterVR"
        @stick="setStick"
      />
      <HoverTip />
      <Transition name="fade">
        <div v-if="state.mode === 'building' && !state.touched" class="hint glass">
          {{ isMassing ? 'Нажмите на корпус — покажем вид с любого этажа и солнце по сторонам' : 'Наведите на этаж и нажмите — откроется план с квартирами' }}
        </div>
      </Transition>
      <DataSheet v-if="state.showData" @close="state.showData = false" />
      <LeadDialog v-if="state.showLead" @close="state.showLead = false" />
    </template>

    <LoaderScreen v-if="state.loading" :progress="state.progress" :error="state.error" />
  </div>
</template>

<style scoped>
.app { position: fixed; inset: 0; }
.stage { position: absolute; inset: 0; isolation: isolate; z-index: 0; }
.view-hud { position: absolute; top: 92px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 14px; padding: 8px 14px 8px 8px; font-size: 13px; white-space: nowrap; }
@media (max-width: 760px) { .view-hud { top: 66px; left: 10px; right: 10px; transform: none; } .view-hud .muted { display: none; } }
.hint {
  position: absolute; left: 50%; bottom: 96px; transform: translateX(-50%);
  padding: 10px 16px; font-size: 13px; color: var(--muted); pointer-events: none; white-space: nowrap;
}
/* панель атмосферы в две строки — подсказка выше */
@media (max-width: 1180px) {
  .hint { bottom: 142px; }
}
@media (max-width: 760px) {
  .hint { bottom: auto; top: 76px; font-size: 12px; white-space: normal; width: calc(100% - 32px); text-align: center; }
}
</style>
