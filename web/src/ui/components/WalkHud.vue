<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { selectedUnit } from '@/app/state'
import { formatArea } from '@/domain/format'

defineProps<{ xrSupported: boolean }>()
const emit = defineEmits<{ exit: []; vr: []; stick: [x: number, y: number] }>()

const touch = matchMedia('(pointer: coarse)').matches
const base = ref<HTMLDivElement>()
const knob = ref({ x: 0, y: 0 })
let pid: number | null = null

function onDown(e: PointerEvent) {
  pid = e.pointerId
  ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  onMove(e)
}
function onMove(e: PointerEvent) {
  if (pid !== e.pointerId || !base.value) return
  const r = base.value.getBoundingClientRect()
  const R = r.width / 2
  let x = (e.clientX - (r.left + R)) / R
  let y = (e.clientY - (r.top + R)) / R
  const l = Math.hypot(x, y)
  if (l > 1) { x /= l; y /= l }
  knob.value = { x, y }
  emit('stick', x, y)
}
function onUp(e: PointerEvent) {
  if (pid !== e.pointerId) return
  pid = null
  knob.value = { x: 0, y: 0 }
  emit('stick', 0, 0)
}
onBeforeUnmount(() => emit('stick', 0, 0))
</script>

<template>
  <div class="hud">
    <div class="info glass">
      <button class="btn small" @click="$emit('exit')">
        <svg width="14" height="14" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>
        Выйти
      </button>
      <div v-if="selectedUnit" class="what">
        <b>№ {{ selectedUnit.number }}</b> · {{ selectedUnit.rooms }}-комн. · {{ formatArea(selectedUnit.area) }}
      </div>
      <button v-if="xrSupported" class="btn small primary" @click="$emit('vr')">Войти в VR</button>
    </div>
    <div v-if="!touch" class="keys glass">
      <span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ходьба</span>
      <span><kbd>Shift</kbd> быстрее</span>
      <span>мышь — обзор</span>
      <span><kbd>Esc</kbd> выйти</span>
    </div>
    <div v-else ref="base" class="stick" @pointerdown="onDown" @pointermove="onMove" @pointerup="onUp" @pointercancel="onUp">
      <div class="knob" :style="{ transform: `translate(${knob.x * 34}px, ${knob.y * 34}px)` }" />
    </div>
    <div v-if="touch" class="look-hint">Ведите пальцем по экрану, чтобы осмотреться</div>
  </div>
</template>

<style scoped>
.hud { position: absolute; inset: 0; pointer-events: none; }
.info { position: absolute; top: 92px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 14px; padding: 8px 10px; pointer-events: auto; white-space: nowrap; }
.what { font-size: 13px; color: var(--muted); }
.what b { color: var(--text); }
.keys { position: absolute; left: 16px; bottom: 84px; display: flex; gap: 16px; padding: 10px 14px; font-size: 12px; color: var(--muted); }
kbd { display: inline-block; min-width: 22px; padding: 2px 6px; margin-right: 3px; border-radius: 6px; border: 1px solid var(--line-strong); background: rgba(255,255,255,.06); font: 600 11px var(--font); color: var(--text); text-align: center; }
.stick { position: absolute; left: 24px; bottom: 86px; width: 116px; height: 116px; border-radius: 50%; background: rgba(13,15,19,.45); border: 1px solid var(--line-strong); backdrop-filter: var(--blur); -webkit-backdrop-filter: var(--blur); pointer-events: auto; touch-action: none; display: grid; place-items: center; }
.knob { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, var(--accent-2), var(--accent)); box-shadow: 0 6px 20px rgba(211,154,104,.4); }
.look-hint { position: absolute; right: 16px; bottom: 96px; max-width: 150px; font-size: 11px; color: rgba(255,255,255,.7); text-align: right; text-shadow: 0 1px 4px rgba(0,0,0,.6); }
@media (max-width: 760px) {
  .info { top: 66px; left: 10px; right: 10px; transform: none; justify-content: space-between; }
  .what { overflow: hidden; text-overflow: ellipsis; }
}
</style>
