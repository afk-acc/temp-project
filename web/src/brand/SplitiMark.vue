<script setup lang="ts">
import { MARK } from './geometry'

/** Знак Spliti: дом, разрезанный на этажи, средний этаж выдвинут. Цвет — currentColor, акцент — --brand-accent. */
withDefaults(defineProps<{ size?: number; animated?: boolean }>(), { size: 32, animated: false })
const [mx, my, mx1, my1] = MARK.mid
const [lx, ly, lx1, ly1] = MARK.low
</script>

<template>
  <svg class="spliti-mark" :class="{ animated }" viewBox="0 0 64 64" :width="size" :height="size" role="img" aria-label="Spliti">
    <g :transform="`translate(${MARK.dx} 0)`">
      <path :d="MARK.top" fill="currentColor" />
      <rect class="slab" :x="mx" :y="my" :width="mx1 - mx" :height="my1 - my" fill="var(--brand-accent, #D9A06E)" />
      <rect :x="lx" :y="ly" :width="lx1 - lx" :height="ly1 - ly" fill="currentColor" />
    </g>
  </svg>
</template>

<style scoped>
.spliti-mark { display: block; flex: none; }
.animated .slab { animation: spliti-slide 1.6s cubic-bezier(.65, 0, .35, 1) infinite alternate; }
@keyframes spliti-slide { from { transform: translateX(-8px); } to { transform: translateX(0); } }
@media (prefers-reduced-motion: reduce) { .animated .slab { animation: none; } }
</style>
