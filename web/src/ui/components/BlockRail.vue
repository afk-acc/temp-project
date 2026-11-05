<script setup lang="ts">
import type { Block } from '@/domain/types'

defineProps<{ blocks: Block[]; current: string | null }>()
defineEmits<{ select: [id: string]; hover: [id: string | null] }>()
</script>

<template>
  <nav class="rail glass" aria-label="Корпуса">
    <div class="head eyebrow">Корпуса</div>
    <ul class="list scroll-thin">
      <li v-for="b in blocks" :key="b.id" :class="{ active: b.id === current }"
          @click="$emit('select', b.id)" @mouseenter="$emit('hover', b.id)" @mouseleave="$emit('hover', null)">
        <span class="n num">26/{{ b.n }}</span>
        <span class="bar"><i :style="{ width: `${(b.levels / 12) * 100}%` }" /></span>
        <span class="lv num">{{ b.levels }} эт.</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.rail { position: absolute; left: 16px; top: 92px; width: 214px; max-height: calc(100% - 188px); display: flex; flex-direction: column; padding: 12px 8px 10px; }
.head { padding: 0 10px 8px; }
.list { list-style: none; margin: 0; padding: 0; overflow-y: auto; }
li { display: grid; grid-template-columns: 48px 1fr 44px; align-items: center; gap: 8px; height: 30px; padding: 0 10px; border-radius: 8px; cursor: pointer; transition: background .12s; }
li:hover { background: rgba(255,255,255,.06); }
li.active { background: linear-gradient(90deg, rgba(211,154,104,.28), rgba(211,154,104,.08)); box-shadow: inset 2px 0 0 var(--accent); }
.n { font-weight: 700; font-size: 13px; }
.bar { height: 6px; border-radius: 3px; background: rgba(255,255,255,.07); overflow: hidden; }
.bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); }
.lv { font-size: 12px; color: var(--muted); text-align: right; }
@media (max-width: 760px) {
  .rail { left: 10px; right: 10px; top: auto; bottom: 74px; width: auto; height: 60px; max-height: none; padding: 8px; flex-direction: row; align-items: center; }
  .head { display: none; }
  .list { display: flex; overflow-x: auto; gap: 4px; }
  li { flex: none; grid-template-columns: 1fr; grid-template-rows: 18px 14px; height: 44px; width: 56px; padding: 4px; justify-items: center; gap: 2px; }
  .bar { display: none; }
  .lv { text-align: center; font-size: 11px; }
}
</style>
