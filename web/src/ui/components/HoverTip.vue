<script setup lang="ts">
import { computed } from 'vue'
import { data, floorStats, hoveredUnit, isMassing, state } from '@/app/state'
import { STATUS_COLOR, STATUS_LABEL } from '@/domain/units'
import { formatArea } from '@/domain/format'

const floor = computed(() => (state.mode === 'building' && state.hoverFloor !== null ? floorStats.value.find((f) => f.n === state.hoverFloor) : null))
const block = computed(() => (state.hoverBlock ? data.project.value?.building.blocks?.find((b) => b.id === state.hoverBlock) ?? null : null))
const unit = computed(() => (state.mode === 'floor' && state.unitId !== state.hoverUnit ? hoveredUnit.value : null))
</script>

<template>
  <div v-if="floor || unit || block" class="tip glass" :style="{ left: `${state.tip.x + 16}px`, top: `${state.tip.y + 16}px` }">
    <template v-if="floor">
      <b>{{ floor.n }} этаж</b>
      <span v-if="floor.residential">в продаже {{ floor.available }} из {{ floor.total }}</span>
      <span v-else>{{ floor.n === 1 && !isMassing ? 'лобби и коммерция' : 'коммерция' }}</span>
    </template>
    <template v-else-if="block">
      <b>{{ block.label }}</b>
      <span>{{ block.levels }} этажей · {{ block.address }}</span>
    </template>
    <template v-else-if="unit">
      <b>№ {{ unit.number }} · {{ unit.rooms }}-комн. · {{ formatArea(unit.area) }}</b>
      <span :style="{ color: STATUS_COLOR[unit.status] }">{{ STATUS_LABEL[unit.status] }}</span>
    </template>
  </div>
</template>

<style scoped>
.tip { position: absolute; pointer-events: none; padding: 8px 12px; display: grid; gap: 2px; font-size: 12px; border-radius: 10px; color: var(--muted); z-index: 10; }
.tip b { color: var(--text); font-size: 13px; }
@media (pointer: coarse) { .tip { display: none; } }
</style>
