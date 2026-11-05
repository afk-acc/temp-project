<script setup lang="ts">
import { computed } from 'vue'
import { state } from '@/app/state'

const year = new Date().getFullYear()
const presets = computed(() => [
  { label: 'Сегодня', day: todayIso() },
  { label: '21 марта', day: `${year}-03-21` },
  { label: '21 июня', day: `${year}-06-21` },
  { label: '21 дек', day: `${year}-12-21` },
])
const time = computed(() => {
  const h = Math.floor(state.sun.hour)
  const m = Math.round((state.sun.hour - h) * 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
})
function todayIso() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
</script>

<template>
  <div class="sun glass">
    <svg class="ico" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    <div class="days">
      <button v-for="p in presets" :key="p.label" :class="{ on: state.sun.day === p.day }" @click="state.sun.day = p.day">{{ p.label }}</button>
    </div>
    <input v-model.number="state.sun.hour" type="range" min="5" max="21" step="0.25" aria-label="Время суток" />
    <span class="t num">{{ time }}</span>
  </div>
</template>

<style scoped>
.sun { position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%); display: flex; align-items: center; gap: 12px; padding: 8px 14px; height: 56px; }
.ico { color: var(--accent-2); flex: none; }
.days { display: flex; gap: 2px; background: rgba(255,255,255,.04); border-radius: 10px; padding: 3px; }
.days button { border: none; background: transparent; padding: 6px 10px; border-radius: 8px; font-size: 12px; font-weight: 600; color: var(--muted); cursor: pointer; white-space: nowrap; }
.days button.on { background: rgba(255,255,255,.12); color: var(--text); }
input[type=range] { width: 220px; accent-color: var(--accent); }
.t { font-weight: 700; font-size: 14px; width: 44px; }
@media (max-width: 760px) {
  .sun { left: 10px; right: 10px; transform: none; bottom: 10px; height: 54px; gap: 8px; padding: 8px 10px; }
  .days button { padding: 6px 6px; font-size: 11px; }
  .days button:nth-child(4) { display: none; }
  input[type=range] { flex: 1; width: auto; min-width: 60px; }
  .ico { display: none; }
}
</style>
