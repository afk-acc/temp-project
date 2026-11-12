<script setup lang="ts">
import { computed } from 'vue'
import type { SunHours } from '@/scene/Engine'
import { formatDuration } from '@/domain/format'
import { clockLabel } from '@/domain/sun'

/**
 * Солнце в окнах за день: полоса от восхода до заката, солнечные интервалы подсвечены.
 * Покупатель видит не только «сколько», но и «когда»: утреннее солнце в спальне или вечернее в гостиной.
 */
const props = defineProps<{ hours: SunHours | null; dayLabel: string }>()

const span = computed(() => {
  const h = props.hours
  if (!h || h.sunrise === null || h.sunset === null) return null
  const a = h.sunrise
  const len = h.sunset - a
  return {
    pos: (t: number) => `${((t - a) / len) * 100}%`,
    width: (x: number, y: number) => `${((y - x) / len) * 100}%`,
    sunrise: clockLabel(h.sunrise),
    sunset: clockLabel(h.sunset),
    noon: (12 - a) / len,
  }
})
const intervalsText = computed(() => props.hours?.intervals.map(([a, b]) => `${clockLabel(a)}–${clockLabel(b)}`).join(', ') ?? '')
</script>

<template>
  <div class="sunstrip">
    <div class="top">
      <span class="eyebrow">Солнце в окнах · {{ dayLabel }}</span>
      <span v-if="hours" class="day muted">световой день {{ formatDuration(hours.dayMinutes) }}</span>
    </div>
    <div class="value">
      <b class="num">{{ hours === null ? 'считаем…' : hours.minutes ? formatDuration(hours.minutes) : 'нет прямого солнца' }}</b>
      <span v-if="hours?.minutes" class="muted num">{{ intervalsText }}</span>
    </div>
    <div v-if="span && hours" class="bar" role="img" :aria-label="`Солнце в окнах: ${intervalsText || 'нет'}`">
      <i v-for="(iv, k) in hours.intervals" :key="k" :style="{ left: span.pos(iv[0]), width: span.width(iv[0], iv[1]) }" />
    </div>
    <div v-if="span" class="ends num"><span>восход {{ span.sunrise }}</span><span>закат {{ span.sunset }}</span></div>
  </div>
</template>

<style scoped>
.sunstrip { margin-top: 14px; padding: 12px 14px; border-radius: 12px; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--line); }
.top { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.day { font-size: 11.5px; white-space: nowrap; }
.value { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; margin: 6px 0 10px; }
.value b { font-size: 18px; font-weight: 700; color: var(--accent-2); }
.value span { font-size: 12px; }
.bar { position: relative; height: 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); overflow: hidden; }
.bar i { position: absolute; top: 0; bottom: 0; border-radius: 4px; background: linear-gradient(90deg, #f2c79e, #ffd98a); }
.ends { display: flex; justify-content: space-between; margin-top: 6px; font-size: 11px; color: var(--faint); }
.muted { color: var(--muted); }
</style>
