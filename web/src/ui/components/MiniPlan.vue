<script setup lang="ts">
import { computed } from 'vue'
import { activeFloors, activeType, scopeUnits } from '@/app/state'
import type { Unit } from '@/domain/types'
import { STATUS_COLOR } from '@/domain/units'

const props = defineProps<{ unit: Unit }>()

const plan = computed(() => {
  const f = activeFloors.value.find((x) => x.n === props.unit.floor)!
  const t = activeType(f.type)!
  const others = scopeUnits.value.filter((u) => u.floor === props.unit.floor && u.id !== props.unit.id && u.polygon)
  const [x0, y0, x1, y1] = t.bbox
  const pad = 1
  const vb = `${x0 - pad} ${-(y1 + pad)} ${x1 - x0 + pad * 2} ${y1 - y0 + pad * 2}`
  const pts = (poly: [number, number][]) => poly.map(([x, y]) => `${x},${-y}`).join(' ')
  return {
    vb,
    slab: t.slab,
    walls: [...t.walls_ext, ...t.walls_int],
    me: pts(props.unit.polygon ?? []),
    others: others.map((u) => pts(u.polygon!)),
  }
})
</script>

<template>
  <svg class="mini" :viewBox="plan.vb" preserveAspectRatio="xMidYMid meet" aria-label="Положение квартиры на этаже">
    <rect v-for="(r, i) in plan.slab" :key="'s' + i" :x="r[0]" :y="-r[3]" :width="r[2] - r[0]" :height="r[3] - r[1]" class="slab" />
    <polygon v-for="(p, i) in plan.others" :key="'o' + i" :points="p" class="other" />
    <polygon :points="plan.me" class="me" :style="{ fill: STATUS_COLOR[unit.status] }" />
    <rect v-for="(r, i) in plan.walls" :key="'w' + i" :x="r[0]" :y="-r[3]" :width="r[2] - r[0]" :height="r[3] - r[1]" class="wall" />
    <polygon :points="plan.me" class="me-line" />
  </svg>
</template>

<style scoped>
.mini { width: 100%; height: 170px; display: block; border-radius: 12px; background: rgba(255,255,255,.03); border: 1px solid var(--line); }
.slab { fill: rgba(255,255,255,.05); }
.other { fill: rgba(255,255,255,.04); stroke: rgba(255,255,255,.12); stroke-width: .08; }
.me { fill-opacity: .35; }
.me-line { fill: none; stroke: #fff; stroke-width: .18; }
.wall { fill: rgba(235,238,242,.55); }
</style>
