<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { ApiError } from '@/api/http'
import { crm } from './api'
import { crmState, project, toast } from './state'
import SplitiLogo from '@/brand/SplitiLogo.vue'
import LoginView from './components/LoginView.vue'
import StatsBar from './components/StatsBar.vue'
import ChessBoard from './components/ChessBoard.vue'
import UnitEditor from './components/UnitEditor.vue'
import ParkingBoard from './components/ParkingBoard.vue'
import SpotEditor from './components/SpotEditor.vue'
import LeadsTable from './components/LeadsTable.vue'
import ActivityFeed from './components/ActivityFeed.vue'

let timer = 0

onMounted(async () => {
  try {
    crmState.user = await crm.me()
    await loadProjects()
  } catch (e) {
    if (!(e instanceof ApiError && e.status === 401)) toast('Сервер CRM недоступен')
  } finally {
    crmState.booting = false
  }
  timer = window.setInterval(() => { if (crmState.user) void refresh(false) }, 30000)
})
onBeforeUnmount(() => clearInterval(timer))

async function loadProjects() {
  crmState.projects = (await crm.projects()).items
  const fromUrl = new URLSearchParams(location.search).get('p')
  crmState.slug = crmState.projects.find((p) => p.slug === fromUrl)?.slug ?? crmState.projects[0]?.slug ?? ''
}

async function refresh(withUnits = true) {
  if (!crmState.slug) return
  const [stats, leads] = await Promise.all([crm.stats(crmState.slug), crm.leads(crmState.slug)])
  crmState.stats = stats
  crmState.leads = leads.items
  if (withUnits || crmState.tab === 'board') crmState.units = (await crm.units(crmState.slug, crmState.block)).items
  if (withUnits || crmState.tab === 'parking') await loadParking()
}

async function loadParking() {
  if (!project.value?.parking_levels) {
    crmState.parking = null
    if (crmState.tab === 'parking') crmState.tab = 'board'
    return
  }
  crmState.parking = await crm.parking(crmState.slug)
  if (!crmState.parking.levels.some((l) => l.level === crmState.parkingLevel)) crmState.parkingLevel = crmState.parking.levels[0]?.level ?? null
}

watch(() => crmState.slug, async (slug) => {
  if (!slug) return
  crmState.block = project.value?.blocks[0]?.id ?? null
  crmState.selectedId = null
  crmState.picked.clear()
  crmState.spotId = null
  crmState.spotPicked.clear()
  const u = new URL(location.href)
  u.searchParams.set('p', slug)
  history.replaceState(null, '', u)
  await refresh()
})
watch(() => crmState.block, async () => {
  crmState.selectedId = null
  crmState.picked.clear()
  if (crmState.slug) crmState.units = (await crm.units(crmState.slug, crmState.block)).items
})

async function onLogin() {
  await loadProjects()
}

async function logout() {
  await crm.logout().catch(() => {})
  crmState.user = null
}
</script>

<template>
  <div class="crm">
    <div v-if="crmState.booting" class="boot">Загрузка…</div>
    <LoginView v-else-if="!crmState.user" @done="onLogin" />
    <template v-else>
      <header class="bar">
        <div class="brand"><SplitiLogo :height="22" /><span class="tag">CRM</span></div>
        <select v-model="crmState.slug" class="proj" aria-label="Жилой комплекс">
          <option v-for="p in crmState.projects" :key="p.slug" :value="p.slug">ЖК {{ p.name }} · {{ p.developer }}</option>
        </select>
        <nav class="tabs">
          <button :class="{ on: crmState.tab === 'board' }" @click="crmState.tab = 'board'">Шахматка</button>
          <button v-if="project?.parking_levels" :class="{ on: crmState.tab === 'parking' }" @click="crmState.tab = 'parking'">Паркинг</button>
          <button :class="{ on: crmState.tab === 'leads' }" @click="crmState.tab = 'leads'">
            Заявки <i v-if="crmState.stats?.leads_new" class="badge">{{ crmState.stats.leads_new }}</i>
          </button>
          <button :class="{ on: crmState.tab === 'feed' }" @click="crmState.tab = 'feed'">Изменения</button>
        </nav>
        <div class="right">
          <a class="btn small" :href="`../demo/?p=${crmState.slug}`" target="_blank" rel="noopener">Открыть 3D-сайт ↗</a>
          <span class="me">{{ crmState.user.name }}</span>
          <button class="btn small ghost" @click="logout">Выйти</button>
        </div>
      </header>

      <StatsBar v-if="crmState.stats" :stats="crmState.stats" />

      <main v-if="crmState.tab === 'board'" class="main">
        <ChessBoard @changed="refresh" />
        <UnitEditor @changed="refresh" />
      </main>
      <main v-else-if="crmState.tab === 'parking'" class="main">
        <ParkingBoard @changed="refresh" />
        <SpotEditor @changed="refresh" />
      </main>
      <main v-else-if="crmState.tab === 'leads'" class="main single">
        <LeadsTable @changed="refresh" />
      </main>
      <main v-else class="main single">
        <ActivityFeed />
      </main>
    </template>
    <Transition name="fade"><div v-if="crmState.toast" class="toast glass">{{ crmState.toast }}</div></Transition>
  </div>
</template>
