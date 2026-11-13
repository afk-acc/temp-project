<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ApiError } from '@/api/http'
import { crm, type HistoryItem } from '../api'
import { crmState, parkingLevel, selectedSpot, toast } from '../state'
import { STATUS_COLOR } from '@/domain/units'
import { KIND_LABEL, SPOT_STATUS_LABEL, formatSize, levelLabel, nearestCore } from '@/domain/parking'
import { formatArea, formatSum } from '@/domain/format'
import type { UnitStatus } from '@/domain/types'

/** Карточка машино-места в CRM: статус, цена, комментарий, история — как у квартиры. */
const emit = defineEmits<{ changed: [] }>()
const STATUSES: UnitStatus[] = ['available', 'booked', 'sold', 'unavailable']
const status = ref<UnitStatus>('available')
const price = ref('')
const comment = ref('')
const history = ref<HistoryItem[]>([])
const error = ref('')
const root = ref<HTMLElement>()

const core = computed(() => (selectedSpot.value ? nearestCore(selectedSpot.value, parkingLevel.value) : null))

// перечитывание плана (раз в 30 с) не сбрасывает начатую правку — только смена места
watch(() => selectedSpot.value?.id, async () => {
  const s = selectedSpot.value
  error.value = ''
  comment.value = ''
  history.value = []
  if (!s) return
  if (window.innerWidth < 1000) requestAnimationFrame(() => root.value?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  status.value = s.status
  price.value = s.price ? String(s.price).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : ''
  history.value = (await crm.spotHistory(s.id)).items
}, { immediate: true })

function parsePrice(v: string): number | null {
  const d = v.replace(/\D+/g, '')
  return d ? Number(d) : null
}

async function save() {
  const s = selectedSpot.value
  if (!s) return
  error.value = ''
  crmState.saving = true
  try {
    await crm.updateSpot(s.id, { status: status.value, price: parsePrice(price.value), comment: comment.value || null })
    toast(`Место ${s.code}: ${SPOT_STATUS_LABEL[status.value]}`)
    emit('changed')
    history.value = (await crm.spotHistory(s.id)).items
    comment.value = ''
  } catch (e) {
    error.value = e instanceof ApiError ? e.firstMessage : 'Не удалось сохранить'
  } finally {
    crmState.saving = false
  }
}

function when(iso: string) {
  return new Date(iso).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
}
</script>

<template>
  <aside ref="root" class="editor glass scroll-thin">
    <template v-if="selectedSpot">
      <div class="eyebrow">Паркинг · уровень {{ levelLabel(selectedSpot.level) }}</div>
      <h2>Место {{ selectedSpot.code }}</h2>
      <div class="meta">{{ KIND_LABEL[selectedSpot.kind] }} · {{ formatSize(selectedSpot.polygon) }} · {{ formatArea(selectedSpot.area) }}</div>
      <div v-if="core" class="meta muted">{{ core.label }} — {{ core.meters }} м</div>

      <div class="eyebrow mt">Статус</div>
      <div class="seg">
        <button v-for="s in STATUSES" :key="s" :class="{ on: status === s }" :style="{ '--c': STATUS_COLOR[s] }" @click="status = s">
          <i />{{ SPOT_STATUS_LABEL[s] }}
        </button>
      </div>
      <label class="fld">Цена, сум<input v-model="price" inputmode="numeric" placeholder="не указана" /></label>
      <div v-if="parsePrice(price)" class="muted small">{{ formatSum(parsePrice(price)) }}</div>
      <label class="fld">Комментарий<input v-model="comment" maxlength="500" placeholder="например: бронь до пятницы" /></label>
      <div v-if="error" class="err">{{ error }}</div>
      <button class="btn primary wide" :disabled="crmState.saving" @click="save">Сохранить</button>
      <p v-if="selectedSpot.test" class="note">Стартовые данные тестовые. После сохранения место ведётся в CRM.</p>

      <div class="eyebrow mt">История</div>
      <ul class="hist">
        <li v-for="h in history" :key="h.id">
          <span class="when">{{ when(h.at) }}</span>
          <span><i :style="{ background: STATUS_COLOR[h.from_status as UnitStatus] }" />→<i :style="{ background: STATUS_COLOR[h.to_status as UnitStatus] }" />
            {{ SPOT_STATUS_LABEL[h.to_status as UnitStatus] }}<template v-if="h.to_price !== h.from_price"> · {{ formatSum(h.to_price) }}</template></span>
          <span class="who">{{ h.user ?? 'система' }}</span>
          <span v-if="h.comment" class="cm">"{{ h.comment }}"</span>
        </li>
        <li v-if="!history.length" class="muted">Изменений ещё не было</li>
      </ul>
    </template>
    <div v-else class="empty">
      <b>Выберите место на плане</b>
      <p class="muted">Клик — карточка и смена статуса. Shift или "Выбрать несколько" — изменить пачкой, "Весь уровень" — выбрать все места уровня.</p>
    </div>
  </aside>
</template>
