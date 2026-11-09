<script setup lang="ts">
import { ref } from 'vue'
import { ApiError } from '@/api/http'
import { crm } from '../api'
import { crmState } from '../state'
import SplitiMark from '@/brand/SplitiMark.vue'

const emit = defineEmits<{ done: [] }>()
const email = ref('')
const password = ref('')
const error = ref('')
const busy = ref(false)

async function submit() {
  error.value = ''
  busy.value = true
  try {
    crmState.user = await crm.login(email.value.trim(), password.value)
    emit('done')
  } catch (e) {
    error.value = e instanceof ApiError ? e.firstMessage : 'Сервер недоступен'
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <div class="login">
    <form class="card glass" @submit.prevent="submit">
      <SplitiMark :size="48" class="lm" />
      <h1>Spliti CRM</h1>
      <p class="muted">Управление статусами и ценами квартир, заявки с 3D-сайта</p>
      <label>Почта<input v-model="email" type="email" autocomplete="username" required /></label>
      <label>Пароль<input v-model="password" type="password" autocomplete="current-password" required /></label>
      <div v-if="error" class="err">{{ error }}</div>
      <button class="btn primary" :disabled="busy">{{ busy ? 'Входим…' : 'Войти' }}</button>
    </form>
  </div>
</template>
