<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ApiError } from '@/api/http'
import { siteApi } from '../api'
import { lang, site, t } from '../i18n'

/** «Покажем ваш ЖК в 3D»: обращение уходит в бэкенд Spliti (модуль Inquiries). */
const f = reactive({ name: '', company: '', phone: '+998 ', message: '', website: '' })
const state = ref<'form' | 'sending' | 'ok' | 'offline'>('form')
const error = ref('')
// контакты — из настроек сайта в бэкенде (php artisan spliti:site-set contacts.telegram …); пустые не показываются
const contacts = computed(() => {
  const c = site.value?.contacts ?? {}
  return [
    c.telegram && { k: 'Telegram', v: `@${c.telegram}`, href: `https://t.me/${c.telegram}` },
    c.phone && { k: 'Tel', v: c.phone, href: `tel:${c.phone.replace(/\s+/g, '')}` },
    c.email && { k: 'E-mail', v: c.email, href: `mailto:${c.email}` },
  ].filter(Boolean) as { k: string; v: string; href: string }[]
})

async function submit() {
  error.value = ''
  state.value = 'sending'
  try {
    await siteApi.inquiry({ name: f.name.trim(), company: f.company.trim() || undefined, phone: f.phone, message: f.message.trim() || undefined, lang: lang.value, website: f.website || undefined })
    state.value = 'ok'
  } catch (e) {
    state.value = 'form'
    if (e instanceof ApiError && e.status === 422) error.value = e.firstMessage
    else if (e instanceof ApiError && e.status === 429) error.value = t.value.form.busy
    else if (e instanceof ApiError && (e.status === 404 || e.status === 405)) state.value = 'offline'
    else error.value = t.value.form.err
  }
}

function again() {
  Object.assign(f, { name: '', company: '', phone: '+998 ', message: '' })
  state.value = 'form'
}
</script>

<template>
  <div class="inq">
    <form v-if="state === 'form' || state === 'sending'" novalidate @submit.prevent="submit">
      <label><span>{{ t.form.name }}</span><input v-model="f.name" required maxlength="120" autocomplete="name" /></label>
      <label><span>{{ t.form.company }}</span><input v-model="f.company" maxlength="160" autocomplete="organization" /></label>
      <label><span>{{ t.form.phone }}</span><input v-model="f.phone" required inputmode="tel" autocomplete="tel" /></label>
      <label><span>{{ t.form.message }}</span><textarea v-model="f.message" rows="3" maxlength="1000" /></label>
      <!-- ловушка для ботов: человек это поле не видит -->
      <input v-model="f.website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" name="website" />
      <p v-if="error" class="err" role="alert">{{ error }}</p>
      <button class="btn primary" :disabled="state === 'sending'">{{ state === 'sending' ? t.form.sending : t.form.send }} <span aria-hidden="true">→</span></button>
      <p class="note mono">{{ t.form.privacy }}</p>
    </form>
    <div v-else-if="state === 'ok'" class="done">
      <div class="big">✓</div>
      <p>{{ t.form.ok }}</p>
      <button class="btn ghost" @click="again">{{ t.form.again }}</button>
    </div>
    <div v-else class="done">
      <p>{{ t.form.offline }}</p>
      <p v-if="contacts.length" class="muted">{{ t.form.write }}</p>
    </div>
    <ul v-if="contacts.length" class="contacts">
      <li v-for="c in contacts" :key="c.k"><span class="mono">{{ c.k }}</span><a :href="c.href">{{ c.v }}</a></li>
    </ul>
  </div>
</template>

<style scoped>
.inq { padding: 36px; border: 1px solid var(--line-2); background: linear-gradient(180deg, rgba(241, 236, 227, 0.035), rgba(241, 236, 227, 0.01)); position: relative; }
form { display: grid; gap: 22px; }
label { display: grid; gap: 8px; }
label span { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--faint); }
input, textarea { font: 500 17px var(--sans); color: var(--paper); background: transparent; border: 0; border-bottom: 1px solid var(--line-2); padding: 6px 0 10px; outline: none; resize: vertical; border-radius: 0; transition: border-color 0.25s; }
input:focus, textarea:focus { border-bottom-color: var(--copper); }
.hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
.err { margin: -6px 0 0; color: #ff8f8f; font-size: 14px; }
.btn { justify-self: start; }
.note { margin: 0; font-size: 11px; color: var(--faint); letter-spacing: 0.04em; }
.done { display: grid; gap: 14px; justify-items: start; min-height: 260px; align-content: center; }
.done p { margin: 0; font-size: 18px; }
.done .big { font: 400 56px var(--serif); color: var(--copper); line-height: 1; }
.contacts { list-style: none; margin: 28px 0 0; padding: 22px 0 0; border-top: 1px solid var(--line); display: grid; gap: 10px; }
.contacts li { display: flex; gap: 16px; align-items: baseline; }
.contacts span { width: 80px; font-size: 11px; letter-spacing: 0.12em; color: var(--faint); text-transform: uppercase; }
.contacts a { color: var(--paper); text-decoration: none; border-bottom: 1px solid var(--line-2); }
.contacts a:hover { border-color: var(--copper); }
@media (max-width: 600px) { .inq { padding: 24px 20px; } }
</style>
