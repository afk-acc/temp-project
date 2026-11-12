<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
import { state } from '@/app/state'
import { SEASONS, WEATHERS, seasonDay, type Season, type Weather } from '@/domain/atmosphere'

/**
 * Атмосфера: сезон (дата солнца и ландшафт), погода и время суток с автопрокруткой.
 * Снегопад бывает зимой — выбор «Снег» переключает сезон на зиму.
 */
const season = computed(() => SEASONS.find((s) => s.id === state.atmo.season)!)
const time = computed(() => {
  const h = Math.floor(state.sun.hour) % 24
  const m = Math.round((state.sun.hour - Math.floor(state.sun.hour)) * 60) % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
})
const isNight = computed(() => state.sun.hour < 6 || state.sun.hour >= 19.5)

function setSeason(s: Season) {
  state.atmo.season = s
  state.sun.day = seasonDay(s)
  if (s !== 'winter' && state.atmo.weather === 'snow') state.atmo.weather = 'clear'
}

function setWeather(w: Weather) {
  state.atmo.weather = w
  if (w === 'snow' && state.atmo.season !== 'winter') setSeason('winter')
}

// ---------- автопрокрутка суток: полный день за ~16 секунд ----------
let raf = 0
let last = 0
function tick(t: number) {
  const dt = Math.min((t - last) / 1000, 0.1)
  last = t
  state.sun.hour = (state.sun.hour + dt * 1.5) % 24
  raf = requestAnimationFrame(tick)
}
watch(() => state.atmo.playing, (on) => {
  cancelAnimationFrame(raf)
  if (on) {
    last = performance.now()
    raf = requestAnimationFrame(tick)
  }
})
onBeforeUnmount(() => cancelAnimationFrame(raf))

function onSlide() {
  state.atmo.playing = false
}
</script>

<template>
  <div class="atmo glass">
    <div class="seg seasons" role="group" aria-label="Сезон">
      <button
        v-for="s in SEASONS" :key="s.id" :class="{ on: state.atmo.season === s.id }" :title="s.hint"
        @click="setSeason(s.id)"
      >
        <svg v-if="s.id === 'winter'" viewBox="0 0 24 24"><path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11M9.5 3.8 12 6l2.5-2.2M9.5 20.2 12 18l2.5 2.2" /></svg>
        <svg v-else-if="s.id === 'spring'" viewBox="0 0 24 24"><circle cx="12" cy="10" r="2.6" /><path d="M12 7.4C11 4.5 13 3 12 3s1 1.5 0 4.4M14.4 9.2c2.6-1.6 3.6.6 4.2-.2s-1.8-1.2-4.2.2M14 12.4c1.6 2.6-.4 3.8.4 4.2s1-1.8-.4-4.2M10 12.4c-1.6 2.6.4 3.8-.4 4.2s-1-1.8.4-4.2M9.6 9.2C7 7.6 6 9.8 5.4 9s1.8-1.2 4.2.2M12 13v8" /></svg>
        <svg v-else-if="s.id === 'summer'" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
        <svg v-else viewBox="0 0 24 24"><path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15ZM5 19l8-8" /></svg>
        <span>{{ s.label }}</span>
      </button>
    </div>

    <div class="seg weather" role="group" aria-label="Погода">
      <button
        v-for="w in WEATHERS" :key="w.id" :class="{ on: state.atmo.weather === w.id }" :title="w.label"
        @click="setWeather(w.id)"
      >
        <svg v-if="w.id === 'clear'" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" /></svg>
        <svg v-else-if="w.id === 'cloudy'" viewBox="0 0 24 24"><path d="M7 18h10.5a4 4 0 0 0 .4-8 6 6 0 0 0-11.4 1.6A3.3 3.3 0 0 0 7 18Z" /></svg>
        <svg v-else-if="w.id === 'rain'" viewBox="0 0 24 24"><path d="M7 14h10.5a3.6 3.6 0 0 0 .4-7.2A5.6 5.6 0 0 0 7.2 8.3 2.9 2.9 0 0 0 7 14ZM8 17l-1 3M12 17l-1 3M16 17l-1 3" /></svg>
        <svg v-else viewBox="0 0 24 24"><path d="M7 13h10.5a3.6 3.6 0 0 0 .4-7.2A5.6 5.6 0 0 0 7.2 7.3 2.9 2.9 0 0 0 7 13Z" /><circle cx="8" cy="17" r=".9" /><circle cx="12" cy="19.5" r=".9" /><circle cx="16" cy="17" r=".9" /></svg>
        <span>{{ w.label }}</span>
      </button>
    </div>

    <div class="clock">
      <button class="play" :class="{ on: state.atmo.playing }" :title="state.atmo.playing ? 'Остановить' : 'Прокрутить сутки'" @click="state.atmo.playing = !state.atmo.playing">
        <svg v-if="!state.atmo.playing" viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5Z" class="fill" /></svg>
        <svg v-else viewBox="0 0 24 24"><path d="M8 5.5v13M16 5.5v13" /></svg>
      </button>
      <button class="play" :class="{ on: state.atmo.sunPath }" title="Путь солнца над домом" @click="state.atmo.sunPath = !state.atmo.sunPath">
        <svg viewBox="0 0 24 24"><path d="M3 19a9 9 0 0 1 18 0" stroke-dasharray="2.2 2.4" /><circle cx="15.5" cy="11.6" r="2.4" class="fill" /><path d="M2 19h20" /></svg>
      </button>
      <input
        v-model.number="state.sun.hour" class="slider" type="range" min="0" max="23.75" step="0.25"
        aria-label="Время суток" @input="onSlide"
      />
      <div class="t">
        <svg v-if="isNight" viewBox="0 0 24 24" class="moon"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" class="fill" /></svg>
        <svg v-else viewBox="0 0 24 24" class="sunico"><circle cx="12" cy="12" r="4.5" class="fill" /></svg>
        <b class="num">{{ time }}</b>
        <span class="d">{{ season.dateLabel }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.atmo {
  position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
  display: flex; align-items: center; gap: 10px; padding: 7px 10px; max-width: calc(100vw - 32px);
}
.seg { display: flex; gap: 2px; background: rgba(255, 255, 255, .04); border-radius: 11px; padding: 3px; }
.seg button {
  display: inline-flex; align-items: center; gap: 6px; border: none; background: transparent;
  padding: 7px 10px; border-radius: 8px; font-size: 12.5px; font-weight: 600; color: var(--muted);
  cursor: pointer; white-space: nowrap; transition: background .15s, color .15s;
}
.seg button:hover { color: var(--text); }
.seg button.on { background: rgba(255, 255, 255, .13); color: var(--text); }
.seg svg, .play svg, .t svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
.seg circle { fill: currentColor; stroke: none; }
.seasons button.on svg { color: var(--accent-2); }
.weather button.on svg { color: #9cc7ff; }
svg .fill { fill: currentColor; stroke: none; }

.clock { display: flex; align-items: center; gap: 10px; padding-left: 4px; }
.play {
  width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, .05); display: grid; place-items: center; cursor: pointer; color: var(--text); flex: none;
}
.play.on { background: var(--accent); border-color: var(--accent); color: #1a1208; }
.slider {
  -webkit-appearance: none; appearance: none; width: 200px; height: 6px; border-radius: 3px; cursor: pointer;
  /* шкала суток: ночь — рассвет — день — закат — ночь */
  background: linear-gradient(90deg, #1b2236 0%, #26304a 20%, #e6a46a 26%, #9cc2e6 34%, #b9d6f0 50%, #9cc2e6 70%, #e88f5a 78%, #2a2f4a 85%, #1b2236 100%);
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #fff;
  border: 3px solid var(--accent); box-shadow: 0 1px 4px rgba(0, 0, 0, .4);
}
.slider::-moz-range-thumb { width: 12px; height: 12px; border-radius: 50%; background: #fff; border: 3px solid var(--accent); }
.t { display: flex; align-items: center; gap: 6px; min-width: 104px; }
.t b { font-size: 14px; font-weight: 700; width: 42px; }
.t .d { font-size: 11.5px; color: var(--muted); white-space: nowrap; }
.sunico { color: var(--accent-2); }
.moon { color: #c8d4ff; }

/* ноутбук и уже: сезон и погода — первой строкой, сутки — второй */
@media (max-width: 1180px) {
  .atmo { flex-wrap: wrap; justify-content: center; row-gap: 6px; }
  .clock { flex-basis: 100%; justify-content: center; }
  .slider { flex: 1; width: auto; max-width: 420px; }
}
@media (max-width: 760px) {
  .atmo { left: 10px; right: 10px; transform: none; bottom: 10px; max-width: none; padding: 6px; gap: 6px; }
  .seg { flex: 1; }
  .seg button { flex: 1; justify-content: center; padding: 6px 4px; }
  .seg button span { display: none; }
  .t .d { display: none; }
  .t { min-width: 0; }
}
</style>
