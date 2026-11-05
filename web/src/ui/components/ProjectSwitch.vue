<script setup lang="ts">
import { data } from '@/app/state'

defineProps<{ current: string }>()
function go(slug: string) {
  const u = new URL(location.href)
  u.searchParams.set('p', slug)
  location.href = u.toString()
}
</script>

<template>
  <label v-if="data.projects.value.length > 1" class="sw">
    <select :value="current" aria-label="Жилой комплекс" @change="go(($event.target as HTMLSelectElement).value)">
      <option v-for="p in data.projects.value" :key="p.slug" :value="p.slug">ЖК {{ p.name }} · {{ p.developer }}</option>
    </select>
  </label>
</template>

<style scoped>
.sw select { height: 44px; border-radius: 14px; border: 1px solid var(--line); background: var(--panel); color: var(--text); padding: 0 12px; font: 600 13px var(--font); backdrop-filter: var(--blur); -webkit-backdrop-filter: var(--blur); box-shadow: var(--shadow); cursor: pointer; max-width: 230px; }
@media (max-width: 760px) { .sw select { max-width: 120px; font-size: 12px; } }
</style>
