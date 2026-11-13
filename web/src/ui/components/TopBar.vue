<script setup lang="ts">
import type { Project } from '@/domain/types'
import { formatDate, isFuture } from '@/domain/format'
import type { Mode } from '@/scene/Engine'
import ProjectSwitch from './ProjectSwitch.vue'

defineProps<{ project: Project; mode: Mode }>()
defineEmits<{ back: []; data: [] }>()
</script>

<template>
  <header class="top">
    <div class="brand glass">
      <div class="mark" aria-hidden="true"><span /><span /><span /></div>
      <div class="titles">
        <div class="name">ЖК {{ project.name }} <span class="dev">· {{ project.developer.brand }}</span></div>
        <div class="addr">{{ project.address.replace('Ташкент, ', '') }}</div>
      </div>
      <div class="sep" />
      <div class="gov" :title="`Госреестр строек, объект ${project.gov_registry.object_id}, данные на ${formatDate(project.gov_registry.observed_at)}`">
        <span class="pulse" />
        <!-- прошедший срок из госреестра не выдаём за обещание: показываем только будущий -->
        <span>{{ project.gov_registry.status_ru }}{{ isFuture(project.gov_registry.deadline) ? ` · срок ${formatDate(project.gov_registry.deadline)}` : ' · госреестр' }}</span>
      </div>
    </div>
    <div class="actions">
      <ProjectSwitch :current="project.slug" />
      <button v-if="mode !== 'building'" class="btn glass-btn" @click="$emit('back')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 21V9l8-6 8 6v12h-5v-7H9v7H4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
        <span class="lbl">Весь дом</span>
      </button>
      <button class="btn glass-btn" @click="$emit('data')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 11v6M12 7.5v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <span class="lbl">О данных</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.top { position: absolute; top: 16px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; pointer-events: none; }
.brand { display: flex; align-items: center; gap: 14px; padding: 10px 16px 10px 12px; pointer-events: auto; min-width: 0; }
.mark { width: 34px; height: 34px; border-radius: 10px; background: linear-gradient(160deg, #2a2420, #15120f); border: 1px solid rgba(211,154,104,.35); display: flex; align-items: flex-end; justify-content: center; gap: 3px; padding: 7px; flex: none; }
.mark span { width: 4px; background: linear-gradient(var(--accent-2), var(--accent)); border-radius: 1px; }
.mark span:nth-child(1) { height: 50%; } .mark span:nth-child(2) { height: 100%; } .mark span:nth-child(3) { height: 72%; }
.titles { min-width: 0; }
.name { font-weight: 800; font-size: 15px; letter-spacing: -0.01em; white-space: nowrap; }
.dev { color: var(--muted); font-weight: 600; }
.addr { font-size: 12px; color: var(--muted); margin-top: 2px; white-space: nowrap; }
.sep { width: 1px; height: 28px; background: var(--line); }
.gov { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; color: var(--muted); white-space: nowrap; cursor: help; }
.pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--warn); flex: none; box-shadow: 0 0 0 0 rgba(245,184,65,.6); animation: pulse 2.2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(245,184,65,.55); } 70% { box-shadow: 0 0 0 8px rgba(245,184,65,0); } 100% { box-shadow: 0 0 0 0 rgba(245,184,65,0); } }
.actions { display: flex; gap: 8px; pointer-events: auto; }
.glass-btn { background: var(--panel); backdrop-filter: var(--blur); -webkit-backdrop-filter: var(--blur); border-color: var(--line); box-shadow: var(--shadow); height: 44px; border-radius: 14px; }
@media (max-width: 760px) {
  .top { top: 10px; left: 10px; right: 10px; }
  .brand { padding: 8px 12px 8px 8px; gap: 10px; }
  .sep, .gov { display: none; }
  .addr { font-size: 11px; }
  .lbl { display: none; }
  .glass-btn { width: 44px; padding: 0; }
}
</style>
