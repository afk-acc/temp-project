<script setup lang="ts">
import SplitiLogo from '@/brand/SplitiLogo.vue'
import { data, hasParking } from '@/app/state'
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
      <ol v-if="data.project.value!.about?.length" class="how">
        <li v-for="a in data.project.value!.about" :key="a.title"><b>{{ a.title }}</b> — {{ a.text }}</li>
      </ol>
      <div class="eyebrow">Источники</div>
      <table>
        <tr v-for="s in data.project.value!.sources" :key="s.what"><td>{{ s.what }}</td><td>{{ s.source }}<br /><span class="muted">на {{ formatDate(s.date) }}</span></td></tr>
      </table>
      <div class="eyebrow">Условности демо</div>
      <ul class="asm">
        <li v-for="a in data.project.value!.assumptions" :key="a">{{ a }}</li>
      </ul>
      <div class="eyebrow">Общее для всех ЖК в демо</div>
      <ul class="asm">
        <li><b>Солнце</b> — положение по координатам дома и дате (алгоритм NOAA); часы солнца в окнах считаются с учётом соседних домов и корпусов ЖК, без деревьев и облаков.</li>
        <li><b>Сезоны и погода</b> — сезон задаёт дату (21 декабря, 21 марта, 21 июня, 23 сентября) и вид двора; облака, дождь, снег и ночь — для наглядности, это не прогноз.</li>
        <li><b>Ремонт и мебель</b> в прогулке — три примера отделки и типовая мебель, расставленная программой; это не дизайн-проект и не входит в цену.</li>
        <li><b>Вид из окна</b> — модель окружения по OpenStreetMap, не фотография: соседние дома упрощены.</li>
        <li v-if="hasParking"><b>Паркинг</b> — раскладка мест, статусы и цены тестовые: планов паркинга застройщика в открытом доступе нет.</li>
      </ul>
      <p class="disc">{{ data.project.value!.disclaimer }} {{ data.context.value?.attribution }}</p>
      <div class="made"><SplitiLogo :height="16" /><span>3D-модель, шахматка и CRM</span></div>
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
.asm b { color: var(--text); font-weight: 600; }
.asm { margin: 8px 0 14px; padding-left: 18px; font-size: 13px; color: var(--muted); display: grid; gap: 5px; line-height: 1.45; }
.disc { font-size: 12px; color: var(--faint); margin: 0; }
.made { display: flex; align-items: center; gap: 10px; margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--line); color: var(--muted); font-size: 12px; --brand-accent: var(--accent); }
</style>
