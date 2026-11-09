<script setup lang="ts">
import { MARK, WORD } from './geometry'

/** Знак + надпись spliti. height — высота логотипа в px; цвет — currentColor, акцент — --brand-accent. */
withDefaults(defineProps<{ height?: number; word?: boolean }>(), { height: 28, word: true })
const K = 92 / 64
const GAP = 26
const wordX = 64 * K + MARK.dx * K + GAP
const width = wordX + WORD.width + 4
const [mx, my, mx1, my1] = MARK.mid
const [lx, ly, lx1, ly1] = MARK.low
</script>

<template>
  <svg class="spliti-logo" :viewBox="`0 0 ${word ? width : 64 * K + MARK.dx * K + 4} 92`" :height="height" role="img" aria-label="Spliti">
    <g :transform="`translate(${MARK.dx * K} 0) scale(${K})`">
      <path :d="MARK.top" fill="currentColor" />
      <rect :x="mx" :y="my" :width="mx1 - mx" :height="my1 - my" fill="var(--brand-accent, #D9A06E)" />
      <rect :x="lx" :y="ly" :width="lx1 - lx" :height="ly1 - ly" fill="currentColor" />
    </g>
    <g v-if="word" :transform="`translate(${wordX} 2)`">
      <g fill="none" stroke="currentColor" :stroke-width="WORD.stroke"><path v-for="d in WORD.paths" :key="d" :d="d" /></g>
      <rect v-for="([x, y, w, h, hot], i) in WORD.dots" :key="i" :x="x" :y="y" :width="w" :height="h" :fill="hot ? 'var(--brand-accent, #D9A06E)' : 'currentColor'" />
    </g>
  </svg>
</template>

<style scoped>
.spliti-logo { display: block; flex: none; }
</style>
