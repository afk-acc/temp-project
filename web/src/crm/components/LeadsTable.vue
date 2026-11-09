<script setup lang="ts">
import { crm, type Lead } from '../api'
import { crmState, project, toast } from '../state'

const emit = defineEmits<{ changed: [] }>()
const LABEL: Record<Lead['status'], string> = { new: 'Новая', in_progress: 'В работе', done: 'Закрыта' }

async function setStatus(l: Lead, status: Lead['status']) {
  await crm.leadStatus(l.id, status)
  toast(`Заявка ${l.name}: ${LABEL[status]}`)
  emit('changed')
}
function when(iso: string) {
  return new Date(iso).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
}
function blockLabel(id: string | null) {
  return project.value?.blocks.find((b) => b.id === id)?.label ?? ''
}
</script>

<template>
  <section class="leads glass">
    <table>
      <thead><tr><th>Когда</th><th>Имя</th><th>Телефон</th><th>Квартира</th><th>Комментарий</th><th>Статус</th></tr></thead>
      <tbody>
        <tr v-for="l in crmState.leads" :key="l.id" :class="l.status">
          <td class="num">{{ when(l.created_at) }}</td>
          <td><b>{{ l.name }}</b></td>
          <td class="num"><a :href="`tel:${l.phone}`">{{ l.phone }}</a></td>
          <td>{{ l.unit ? `${blockLabel(l.unit.block)} · ${l.unit.floor} эт. · № ${l.unit.number} · ${l.unit.rooms}-комн.` : '—' }}</td>
          <td class="muted">{{ l.comment ?? '' }}</td>
          <td>
            <select :value="l.status" @change="setStatus(l, ($event.target as HTMLSelectElement).value as Lead['status'])">
              <option v-for="(v, k) in LABEL" :key="k" :value="k">{{ v }}</option>
            </select>
          </td>
        </tr>
        <tr v-if="!crmState.leads.length"><td colspan="6" class="muted pad">Заявок пока нет. Они приходят с 3D-сайта: «Узнать цену» в карточке квартиры.</td></tr>
      </tbody>
    </table>
  </section>
</template>
