<script setup lang="ts">
import { data, isMassing } from '@/app/state'
import { formatDate } from '@/domain/format'
defineEmits<{ close: [] }>()
</script>

<template>
  <div class="veil" @click.self="$emit('close')">
    <div class="sheet glass scroll-thin" role="dialog" aria-label="О данных">
      <div class="head">
        <div>
          <div class="eyebrow">О данных</div>
          <h2>Как собран этот макет</h2>
        </div>
        <button class="btn ghost icon" aria-label="Закрыть" @click="$emit('close')">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </div>
      <ol v-if="isMassing" class="how">
        <li><b>Корпуса</b> — контуры, адреса и этажность из OpenStreetMap: точное положение каждого дома.</li>
        <li><b>Статус и участники</b> — госпортал строек Shaffof qurilish: заказчик, проектировщик, подрядчик.</li>
        <li><b>Места рядом</b> — магазины, банки, школы, метро из OpenStreetMap; время пешком — по расстоянию с поправкой на улицы.</li>
        <li><b>Вид из окна и солнце</b> — считаются по реальному окружению для любого этажа и стороны.</li>
      </ol>
      <ol v-else class="how">
        <li><b>Место и этажность</b> — госпортал строек Shaffof qurilish: координаты, 30 этажей, заказчик, срок.</li>
        <li><b>Стены и окна</b> — извлечены программой из поэтажных планов застройщика, без ручной отрисовки. Каждая квартира — объект с номером из каталога.</li>
        <li><b>Статусы</b> — каталог застройщика. В рабочей версии обновляются сами из CRM.</li>
        <li><b>Окружение и вид из окон</b> — OpenStreetMap; солнце считается по координатам и дате.</li>
      </ol>
      <div class="eyebrow">Источники</div>
      <table>
        <tr v-for="s in data.project.value!.sources" :key="s.what"><td>{{ s.what }}</td><td>{{ s.source }}<br /><span class="muted">на {{ formatDate(s.date) }}</span></td></tr>
      </table>
      <div class="eyebrow">Условности демо</div>
      <ul class="asm">
        <li v-for="a in data.project.value!.assumptions" :key="a">{{ a }}</li>
      </ul>
      <p class="disc">{{ data.project.value!.disclaimer }} {{ data.context.value?.attribution }}</p>
    </div>
  </div>
</template>

<style scoped>
.veil { position: absolute; inset: 0; background: rgba(5,6,8,.45); display: grid; place-items: center; z-index: 20; padding: 16px; }
.sheet { width: min(620px, 100%); max-height: calc(100% - 32px); overflow-y: auto; padding: 22px; background: rgba(15,17,21,.92); }
.head { display: flex; justify-content: space-between; align-items: flex-start; }
h2 { margin: 6px 0 14px; font-size: 22px; letter-spacing: -0.01em; }
.how { margin: 0 0 18px; padding-left: 20px; display: grid; gap: 8px; font-size: 14px; line-height: 1.5; color: var(--muted); }
.how b { color: var(--text); }
table { width: 100%; border-collapse: collapse; margin: 8px 0 18px; font-size: 13px; }
td { padding: 9px 0; border-bottom: 1px solid var(--line); vertical-align: top; }
td:first-child { color: var(--muted); width: 44%; padding-right: 12px; }
.asm { margin: 8px 0 14px; padding-left: 18px; font-size: 13px; color: var(--muted); display: grid; gap: 5px; line-height: 1.45; }
.disc { font-size: 12px; color: var(--faint); margin: 0; }
</style>
