<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { api } from '@/api/client'
import { activeAzimuth, activeFloors, activeLayout, activeType, data, floorStats, isMassing, scopeUnits, selectedBlock, selectedUnit, state } from '@/app/state'
import type { FloorType } from '@/domain/types'
import { summarizeView, unitFacades, type Facade } from '@/domain/views'
import { Engine } from '@/scene/Engine'
import TopBar from './components/TopBar.vue'
import FloorRail from './components/FloorRail.vue'
import SidePanel from './components/SidePanel.vue'
import SunBar from './components/SunBar.vue'
import WalkHud from './components/WalkHud.vue'
import HoverTip from './components/HoverTip.vue'
import DataSheet from './components/DataSheet.vue'
import LeadDialog from './components/LeadDialog.vue'
import LoaderScreen from './components/LoaderScreen.vue'
import BlockRail from './components/BlockRail.vue'
import BlockPanel from './components/BlockPanel.vue'
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
  })
  try {
    state.progress = 0.05
    const index = await api.projects()
    data.projects.value = index.items
    if (!index.items.some((p) => p.slug === SLUG)) SLUG = index.items[0].slug
    const [project, units, context] = await Promise.all([api.project(SLUG), api.units(SLUG), api.context(SLUG)])
    document.title = `ЖК ${project.name} — 3D-демо`
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
    engine.load(project, context, types)
    if (import.meta.env.DEV) (window as unknown as { __engine: Engine }).__engine = engine
    engine.setSun(state.sun.day, state.sun.hour)
    engine.setPlaceFilter(state.places.cats, state.places.all, state.places.on)
    state.progress = 1
    state.xrSupported = await engine.xr.checkSupport()
    setTimeout(() => (state.loading = false), 250)
  } catch (e) {
    state.error = e instanceof Error ? e.message : String(e)
  }
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  engine?.dispose()
})

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
  state.sunMinutes = null
  const u = selectedUnit.value
  const p = data.project.value
  if (!u || !p || !engine) return
  sunTimer = window.setTimeout(() => {
    const f = activeFloors.value.find((x) => x.n === u.floor)!
    state.sunMinutes = engine!.sunMinutes(facades.value, f.elevation, state.sun.day, activeAzimuth.value)
  }, 60)
}

// ---------- связь состояния со сценой ----------

watch(() => [state.filter.rooms.slice(), state.filter.onlyAvailable, state.hoverUnit, state.unitId] as const, () => {
  engine?.styleUnits(state.filter, state.hoverUnit, state.unitId)
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
        <BlockPanel v-if="state.mode === 'building' || state.mode === 'block'" :sides="sides" @close="toBuilding" @view="showView" @floor="setBlockFloor" @open-floor="selectFloor(state.blockFloor)" @places="engine?.flyToPlaces()" />
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
      <SunBar v-if="!state.xrActive" />
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
@media (max-width: 760px) {
  .view-hud { position: absolute; top: 92px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 14px; padding: 8px 14px 8px 8px; font-size: 13px; white-space: nowrap; }
@media (max-width: 760px) { .view-hud { top: 66px; left: 10px; right: 10px; transform: none; } .view-hud .muted { display: none; } }
.hint { bottom: auto; top: 76px; font-size: 12px; white-space: normal; width: calc(100% - 32px); text-align: center; }
}
</style>
