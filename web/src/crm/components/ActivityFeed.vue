<script setup lang="ts">
import { crmState, project } from '../state'
import { STATUS_COLOR, STATUS_LABEL } from '@/domain/units'
import { formatSum } from '@/domain/format'
import type { UnitStatus } from '@/domain/types'

function when(iso: string) {
  return new Date(iso).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
}
</script>

<template>
  <section class="feed glass">
    <div class="eyebrow">Последние изменения</div>
    <ul>
      <li v-for="r in crmState.stats?.recent ?? []" :key="r.id">
        <span class="when num">{{ when(r.at) }}</span>
        <b>{{ project?.blocks.find((b) => b.id === r.block)?.label ?? '' }} · {{ r.floor }} эт. · № {{ r.unit_number }}</b>
        <span><i :style="{ background: STATUS_COLOR[r.from_status as UnitStatus] }" /> → <i :style="{ background: STATUS_COLOR[r.to_status as UnitStatus] }" />
          {{ STATUS_LABEL[r.to_status as UnitStatus] }}<template v-if="r.to_price"> · {{ formatSum(r.to_price) }}</template></span>
        <span class="muted">{{ r.user ?? 'система' }}</span>
      </li>
      <li v-if="!(crmState.stats?.recent ?? []).length" class="muted">Изменений ещё не было</li>
    </ul>
  </section>
</template>
