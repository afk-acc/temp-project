<script setup lang="ts">
import type { FloorStat } from '@/app/state'
import { STATUS_COLOR } from '@/domain/units'
import { isMassing } from '@/app/state'

defineProps<{ floors: FloorStat[]; current: number | null; count: number }>()
defineEmits<{ select: [n: number]; hover: [n: number | null] }>()
</script>

<template>
  <nav class="rail glass" aria-label="Этажи">
    <div class="head eyebrow">Этажи</div>
    <ul class="list scroll-thin">
      <li
        v-for="f in floors"
        :key="f.n"
        :class="{ active: f.n === current, dim: f.residential && f.matching === 0 }"
        @click="$emit('select', f.n)"
        @mouseenter="$emit('hover', f.n)"
        @mouseleave="$emit('hover', null)"
      >
        <span class="n num">{{ f.n }}</span>
        <span v-if="f.residential" class="dots">
          <i v-for="(s, i) in f.statuses" :key="i" :style="{ background: STATUS_COLOR[s] }" />
        </span>
        <span v-else class="tag">{{ f.n === 1 && !isMassing ? 'лобби' : 'коммерция' }}</span>
        <span v-if="f.residential" class="free num" :class="{ zero: f.available === 0 }">{{ f.available || '—' }}</span>
      </li>
    </ul>
    <div class="legend">
      <span><i :style="{ background: STATUS_COLOR.available }" />в продаже</span>
      <span><i :style="{ background: STATUS_COLOR.booked }" />бронь</span>
      <span><i :style="{ background: STATUS_COLOR.sold }" />продана</span>
    </div>
  </nav>
</template>

<style scoped>
.rail { position: absolute; left: 16px; top: 92px; bottom: 96px; width: 214px; display: flex; flex-direction: column; padding: 12px 8px 10px; }
.head { padding: 0 10px 8px; display: flex; justify-content: space-between; }
.list { list-style: none; margin: 0; padding: 0; overflow-y: auto; flex: 1; }
li { display: grid; grid-template-columns: 26px 1fr 26px; align-items: center; gap: 8px; height: 26px; padding: 0 10px; border-radius: 8px; cursor: pointer; transition: background .12s; }
li:hover { background: rgba(255,255,255,.06); }
li.active { background: linear-gradient(90deg, rgba(211,154,104,.28), rgba(211,154,104,.08)); box-shadow: inset 2px 0 0 var(--accent); }
li.dim { opacity: .38; }
.n { font-weight: 700; font-size: 13px; text-align: right; color: var(--text); }
.dots { display: flex; gap: 3px; flex-wrap: nowrap; overflow: hidden; }
.dots i { width: 7px; height: 7px; border-radius: 2px; flex: none; opacity: .92; }
.tag { font-size: 11px; color: var(--faint); }
.free { font-size: 12px; font-weight: 700; color: var(--ok); text-align: right; }
.free.zero { color: var(--faint); font-weight: 500; }
.legend { display: flex; flex-wrap: wrap; gap: 4px 10px; padding: 10px 10px 0; border-top: 1px solid var(--line); margin-top: 8px; font-size: 11px; color: var(--muted); }
.legend i { display: inline-block; width: 7px; height: 7px; border-radius: 2px; margin-right: 5px; }
@media (max-width: 760px) {
  .rail { left: 10px; right: 10px; top: auto; bottom: 74px; width: auto; height: 64px; padding: 8px; flex-direction: row; align-items: center; }
  .head, .legend { display: none; }
  .list { display: flex; flex-direction: row; overflow-x: auto; overflow-y: hidden; gap: 4px; }
  li { flex: none; grid-template-columns: 1fr; grid-template-rows: 18px 14px; height: 46px; width: 44px; padding: 4px; justify-items: center; gap: 2px; }
  .n { text-align: center; }
  .dots { display: none; }
  .tag { font-size: 9px; }
  .free { text-align: center; font-size: 11px; }
}
</style>
