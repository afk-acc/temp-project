<script setup lang="ts">
import { ref, watch } from 'vue'
import { ApiError } from '@/api/http'
import { apiAsset, api } from '@/api/client'
import { crm, type HistoryItem } from '../api'
import { crmState, project, selected, toast } from '../state'
import { STATUS_COLOR, STATUS_LABEL } from '@/domain/units'
import { formatArea, formatSum } from '@/domain/format'
import type { ApartmentType, UnitStatus } from '@/domain/types'

const emit = defineEmits<{ changed: [] }>()
const STATUSES: UnitStatus[] = ['available', 'booked', 'sold', 'unavailable']
const status = ref<UnitStatus>('available')
const price = ref('')
const comment = ref('')
const history = ref<HistoryItem[]>([])
const error = ref('')
const types = ref<Map<string, ApartmentType>>(new Map())
const root = ref<HTMLElement>()

watch(() => crmState.slug, async (slug) => {
  types.value = new Map()
  if (!slug) return
  try {
    types.value = new Map((await api.apartmentTypes(slug)).items.map((t) => [t.code, t]))
  } catch { /* у проекта нет каталога типов */ }
}, { immediate: true })

// только смена квартиры сбрасывает форму: перечитывание шахматки (каждые 30 с) не затирает начатую правку
watch(() => selected.value?.id, async () => {
  const u = selected.value
  error.value = ''
  comment.value = ''
  history.value = []
  if (!u) return
  // на телефоне карточка под шахматкой — прокрутить к ней
  if (window.innerWidth < 1000) requestAnimationFrame(() => root.value?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  status.value = u.status
  price.value = u.price ? String(u.price).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : ''
  history.value = (await crm.history(u.id)).items
}, { immediate: true })

function parsePrice(v: string): number | null {
  const d = v.replace(/\D+/g, '')
  return d ? Number(d) : null
}

async function save() {
  const u = selected.value
  if (!u) return
  error.value = ''
  crmState.saving = true
  try {
    await crm.update(u.id, { status: status.value, price: parsePrice(price.value), comment: comment.value || null })
    toast(`№ ${u.number}: ${STATUS_LABEL[status.value]}`)
    emit('changed')
    history.value = (await crm.history(u.id)).items
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
    <template v-if="selected">
      <div class="eyebrow">{{ project?.blocks.find((b) => b.id === selected!.block)?.label ?? 'Дом' }} · {{ selected.floor }} этаж</div>
      <h2>Квартира № {{ selected.number }}</h2>
      <div class="meta">{{ selected.rooms }}-комн. · {{ formatArea(selected.area, true) }}<span v-if="selected.type_code"> · тип {{ selected.type_code }}</span></div>
      <img v-if="selected.type_code && types.get(selected.type_code)" class="plan" :src="apiAsset(types.get(selected.type_code)!.image)" alt="Планировка" />

      <div class="eyebrow mt">Статус</div>
      <div class="seg">
        <button v-for="s in STATUSES" :key="s" :class="{ on: status === s }" :style="{ '--c': STATUS_COLOR[s] }" @click="status = s">
          <i />{{ STATUS_LABEL[s] }}
        </button>
      </div>
      <label class="fld">Цена, сум<input v-model="price" inputmode="numeric" placeholder="не указана" /></label>
      <div class="muted small" v-if="parsePrice(price)">{{ formatSum(parsePrice(price)) }} · {{ formatSum(Math.round(parsePrice(price)! / selected.area)) }} за м²</div>
      <label class="fld">Комментарий<input v-model="comment" maxlength="500" placeholder="например: бронь до пятницы" /></label>
      <div v-if="error" class="err">{{ error }}</div>
      <button class="btn primary wide" :disabled="crmState.saving" @click="save">Сохранить</button>
      <p v-if="selected.test" class="note">Стартовые данные тестовые. После сохранения квартира ведётся в CRM.</p>

      <div class="eyebrow mt">История</div>
      <ul class="hist">
        <li v-for="h in history" :key="h.id">
          <span class="when">{{ when(h.at) }}</span>
          <span><i :style="{ background: STATUS_COLOR[h.from_status as UnitStatus] }" />→<i :style="{ background: STATUS_COLOR[h.to_status as UnitStatus] }" />
            {{ STATUS_LABEL[h.to_status as UnitStatus] }}<template v-if="h.to_price !== h.from_price"> · {{ formatSum(h.to_price) }}</template></span>
          <span class="who">{{ h.user ?? 'система' }}</span>
          <span v-if="h.comment" class="cm">«{{ h.comment }}»</span>
        </li>
        <li v-if="!history.length" class="muted">Изменений ещё не было</li>
      </ul>
    </template>
    <div v-else class="empty">
      <b>Выберите квартиру в шахматке</b>
      <p class="muted">Клик — карточка и смена статуса. Shift или «Выбрать несколько» — изменить пачкой. Номер этажа — выбрать весь этаж.</p>
    </div>
  </aside>
</template>
