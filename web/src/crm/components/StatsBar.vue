<script setup lang="ts">
import type { CrmStats } from '../api'
import { STATUS_COLOR, STATUS_LABEL } from '@/domain/units'
import { formatSum } from '@/domain/format'

defineProps<{ stats: CrmStats }>()
const ORDER = ['available', 'booked', 'sold', 'unavailable'] as const
</script>

<template>
  <section class="stats">
    <div class="tile"><span>Квартир</span><b class="num">{{ stats.total }}</b></div>
    <div v-for="s in ORDER" :key="s" class="tile" :style="{ '--c': STATUS_COLOR[s] }">
      <span><i />{{ STATUS_LABEL[s] }}</span>
      <b class="num">{{ stats.by_status[s] }}</b>
      <em class="num">{{ stats.total ? Math.round((stats.by_status[s] / stats.total) * 100) : 0 }}%</em>
    </div>
    <div class="tile wide"><span>Предложение (в продаже)</span><b class="num">{{ formatSum(stats.available_value) }}</b></div>
    <div class="tile"><span>Новые заявки</span><b class="num" :class="{ hot: stats.leads_new }">{{ stats.leads_new }}</b></div>
  </section>
</template>
