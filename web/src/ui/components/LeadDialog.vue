<script setup lang="ts">
import { ref } from 'vue'
import { selectedUnit } from '@/app/state'
defineEmits<{ close: [] }>()
const sent = ref(false)
const name = ref('')
const phone = ref('+998 ')
</script>

<template>
  <div class="veil" @click.self="$emit('close')">
    <form class="dlg glass" @submit.prevent="sent = true">
      <template v-if="!sent">
        <div class="eyebrow">Квартира № {{ selectedUnit?.number }}</div>
        <h2>Узнать цену и записаться на показ</h2>
        <label>Имя<input v-model="name" required autocomplete="name" /></label>
        <label>Телефон<input v-model="phone" required inputmode="tel" autocomplete="tel" /></label>
        <button class="btn primary" type="submit">Отправить</button>
        <p class="note">Демо: заявка никуда не уходит и не сохраняется.</p>
      </template>
      <template v-else>
        <h2>Так это работает в рабочей версии</h2>
        <p class="txt">Заявка с номером квартиры, этажом и тем, что человек смотрел, за секунды попадает в CRM застройщика (amoCRM, Bitrix24, Uysot) и менеджеру в Telegram.</p>
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
.note { font-size: 11px; color: var(--faint); margin: 0; }
.txt { font-size: 14px; color: var(--muted); line-height: 1.5; margin: 0; }
</style>
