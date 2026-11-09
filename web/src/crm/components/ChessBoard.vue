<script setup lang="ts">
import { computed, ref } from 'vue'
import { crm } from '../api'
import { board, crmState, project, toast } from '../state'
import { STATUS_COLOR, STATUS_LABEL } from '@/domain/units'
import type { UnitStatus } from '@/domain/types'

const emit = defineEmits<{ changed: [] }>()
const STATUSES: UnitStatus[] = ['available', 'booked', 'sold', 'unavailable']
const bulkComment = ref('')
const SHORT: Record<string, string> = { sold: 'продана', unavailable: 'снята' }

const blockInfo = computed(() => crmState.stats?.by_block ?? [])
function blockStat(id: string) {
  return blockInfo.value.find((b) => b.block === id)
}

function short(price: number | null) {
  if (!price) return ''
  return price >= 1e9 ? `${(price / 1e9).toFixed(2).replace('.', ',')} млрд` : `${Math.round(price / 1e6)} млн`
}

function click(id: number, e: MouseEvent) {
  if (crmState.multi || e.shiftKey || e.metaKey || e.ctrlKey) {
    crmState.multi = true
    if (crmState.picked.has(id)) crmState.picked.delete(id)
    else crmState.picked.add(id)
    return
  }
  crmState.selectedId = crmState.selectedId === id ? null : id
}

function pickFloor(floor: number) {
  crmState.multi = true
  const ids = board.value.find((r) => r.floor === floor)?.units.map((u) => u.id) ?? []
  const all = ids.every((id) => crmState.picked.has(id))
  ids.forEach((id) => (all ? crmState.picked.delete(id) : crmState.picked.add(id)))
}

async function bulk(status: UnitStatus) {
  const ids = [...crmState.picked]
  if (!ids.length) return
  crmState.saving = true
  try {
    const r = await crm.bulk(crmState.slug, ids, status, bulkComment.value || undefined)
    toast(`Изменено: ${r.changed} из ${ids.length} → ${STATUS_LABEL[status]}`)
    crmState.picked.clear()
    crmState.multi = false
    bulkComment.value = ''
    emit('changed')
  } finally {
    crmState.saving = false
  }
}

function dim(status: string) {
  return crmState.statusFilter !== null && crmState.statusFilter !== status
}
</script>

<template>
  <section class="board glass">
    <div class="board-head">
      <div class="blocks scroll-thin">
        <button v-for="b in project?.blocks ?? []" :key="b.id" :class="{ on: crmState.block === b.id }" @click="crmState.block = b.id">
          <b>{{ b.label }}</b>
          <span>{{ b.levels }} эт. · <em class="ok">{{ blockStat(b.id)?.available ?? '—' }}</em> своб.</span>
        </button>
      </div>
      <div class="filters">
        <button :class="{ on: crmState.statusFilter === null }" @click="crmState.statusFilter = null">Все</button>
        <button v-for="s in STATUSES" :key="s" :class="{ on: crmState.statusFilter === s }" :style="{ '--c': STATUS_COLOR[s] }"
                @click="crmState.statusFilter = crmState.statusFilter === s ? null : s"><i />{{ STATUS_LABEL[s] }}</button>
        <label class="multi"><input v-model="crmState.multi" type="checkbox" @change="crmState.picked.clear()" /> Выбрать несколько</label>
      </div>
    </div>

    <div class="grid scroll-thin">
      <div v-for="row in board" :key="row.floor" class="row">
        <button class="fl num" title="Выбрать этаж целиком" @click="pickFloor(row.floor)">{{ row.floor }}</button>
        <button v-for="u in row.units" :key="u.id" class="cell"
                :class="{ sel: crmState.selectedId === u.id, picked: crmState.picked.has(u.id), dim: dim(u.status), test: u.test }"
                :style="{ '--c': STATUS_COLOR[u.status] }" :title="`№ ${u.number} · ${u.rooms}-комн. · ${u.area} м² · ${STATUS_LABEL[u.status]}`"
                @click="click(u.id, $event)">
          <b class="num">{{ u.number }}</b>
          <span>{{ u.rooms }}к · {{ Math.round(u.area) }} м²</span>
          <em class="num">{{ u.status === 'available' || u.status === 'booked' ? short(u.price) : SHORT[u.status] }}</em>
        </button>
      </div>
      <p v-if="!board.length" class="muted pad">В корпусе нет квартир.</p>
    </div>

    <Transition name="fade">
      <div v-if="crmState.picked.size" class="bulk glass">
        <b>Выбрано: {{ crmState.picked.size }}</b>
        <input v-model="bulkComment" placeholder="Комментарий (необязательно)" maxlength="500" />
        <button v-for="s in STATUSES" :key="s" class="btn small" :style="{ '--c': STATUS_COLOR[s] }" :disabled="crmState.saving" @click="bulk(s)">
          <i class="dot" />{{ STATUS_LABEL[s] }}
        </button>
        <button class="btn small ghost" @click="crmState.picked.clear()">Снять выбор</button>
      </div>
    </Transition>
  </section>
</template>
