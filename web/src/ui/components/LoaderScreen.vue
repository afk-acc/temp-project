<script setup lang="ts">
import SplitiMark from '@/brand/SplitiMark.vue'
defineProps<{ progress: number; error: string }>()
</script>

<template>
  <div class="loader">
    <div class="box">
      <div class="mark"><SplitiMark :size="40" animated /></div>
      <div class="t">Собираем дом из открытых данных</div>
      <div class="steps muted">госреестр · поэтажные планы · OpenStreetMap</div>
      <div class="bar"><i :style="{ width: `${Math.round(progress * 100)}%` }" /></div>
      <div v-if="error" class="err">Не удалось загрузить: {{ error }}</div>
    </div>
  </div>
</template>

<style scoped>
.loader { position: absolute; inset: 0; display: grid; place-items: center; z-index: 30; background: radial-gradient(1200px 600px at 50% 40%, #1a1714 0%, #0b0d10 60%); }
.box { display: grid; justify-items: center; gap: 12px; padding: 24px; text-align: center; }
.mark { width: 64px; height: 64px; border-radius: 18px; background: linear-gradient(160deg, #22201d, #121315); border: 1px solid rgba(211,154,104,.3); display: grid; place-items: center; color: var(--text); --brand-accent: var(--accent); }
.t { font-weight: 800; font-size: 18px; letter-spacing: -0.01em; }
.steps { font-size: 13px; }
.bar { width: 240px; height: 4px; border-radius: 2px; background: rgba(255,255,255,.08); overflow: hidden; margin-top: 6px; }
.bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); transition: width .3s; }
.err { color: var(--bad); font-size: 13px; max-width: 320px; }
</style>
