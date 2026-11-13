<script setup lang="ts">
import { computed, ref } from 'vue'
import { api, ApiError } from '@/api/client'
import { data, selectedBlock, selectedSpot, selectedUnit, state } from '@/app/state'
import { levelLabel } from '@/domain/parking'
defineEmits<{ close: [] }>()

/** sent — заявка сохранена в CRM; demo — бэкенда нет (статичная выкладка), показываем, как это работает */
const result = ref<'form' | 'sent' | 'demo'>('form')
const name = ref('')
const phone = ref('+998 ')
const error = ref('')
const busy = ref(false)
/** заявка из паркинга — на место, иначе — на квартиру */
const spot = computed(() => (state.mode === 'parking' ? selectedSpot.value : null))
const where = computed(() => {
  if (spot.value) return `Паркинг · уровень ${levelLabel(spot.value.level)} · место ${spot.value.code}`
  const u = selectedUnit.value
  if (!u) return ''
  return `${selectedBlock.value ? `${selectedBlock.value.label} · ` : ''}${u.floor} этаж · квартира № ${u.number}`
})

async function submit() {
  const p = data.project.value
  if (!p) return
  error.value = ''
  busy.value = true
  try {
    await api.lead({
      project: p.slug, name: name.value.trim(), phone: phone.value,
      ...(spot.value ? { parking_spot_id: spot.value.id } : { unit_id: selectedUnit.value?.id ?? null }),
    })
    result.value = 'sent'
  } catch (e) {
    if (e instanceof ApiError && e.status === 422) error.value = e.firstMessage
    else if (e instanceof ApiError && (e.status === 404 || e.status === 405)) result.value = 'demo'
    else error.value = e instanceof ApiError && e.status === 429 ? 'Слишком много заявок подряд. Попробуйте через минуту.' : 'Не удалось отправить. Проверьте интернет и попробуйте ещё раз.'
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <div class="veil" @click.self="$emit('close')">
    <form class="dlg glass" @submit.prevent="submit">
      <template v-if="result === 'form'">
        <div class="eyebrow">{{ where }}</div>
        <h2>Узнать цену и записаться на показ</h2>
        <label>Имя<input v-model="name" required maxlength="80" autocomplete="name" /></label>
        <label>Телефон<input v-model="phone" required inputmode="tel" autocomplete="tel" /></label>
        <div v-if="error" class="err">{{ error }}</div>
        <button class="btn primary" type="submit" :disabled="busy">{{ busy ? 'Отправляем…' : 'Отправить' }}</button>
        <p class="note">Имя и телефон получит только отдел продаж — чтобы перезвонить по {{ spot ? 'этому месту' : 'этой квартире' }}.</p>
      </template>
      <template v-else-if="result === 'sent'">
        <h2>Заявка отправлена</h2>
        <p class="txt">Менеджер получил её вместе с {{ spot ? 'номером места и уровнем паркинга' : 'номером квартиры и этажом' }} и перезвонит вам.</p>
        <button class="btn" type="button" @click="$emit('close')">Хорошо</button>
      </template>
      <template v-else>
        <h2>Так это работает в рабочей версии</h2>
        <p class="txt">Заявка с номером квартиры, этажом и тем, что человек смотрел, за секунды попадает в CRM отдела продаж — менеджер видит её во вкладке «Заявки». Сейчас демо открыто без сервера заявок, поэтому эта заявка не сохранена.</p>
        <button class="btn" type="button" @click="$emit('close')">Понятно</button>
      </template>
    </form>
  </div>
</template>

<style scoped>
.veil { position: absolute; inset: 0; background: rgba(5,6,8,.45); display: grid; place-items: center; z-index: 20; padding: 16px; }
.dlg { width: min(400px, 100%); padding: 22px; display: grid; gap: 12px; background: rgba(15,17,21,.94); }
h2 { margin: 0 0 4px; font-size: 20px; }
label { display: grid; gap: 6px; font-size: 12px; color: var(--muted); }
input { height: 44px; border-radius: 12px; border: 1px solid var(--line-strong); background: rgba(255,255,255,.04); color: var(--text); padding: 0 14px; font-size: 15px; outline: none; }
input:focus { border-color: var(--accent); }
.err { color: #ff8a8e; font-size: 13px; font-weight: 600; }
.btn:disabled { opacity: .6; }
.note { font-size: 11px; color: var(--faint); margin: 0; line-height: 1.4; }
.txt { font-size: 14px; color: var(--muted); line-height: 1.5; margin: 0; }
</style>
