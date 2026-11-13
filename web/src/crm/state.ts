import { computed, reactive } from 'vue'
import type { CrmParking, CrmProject, CrmStats, CrmUnit, CrmUser, Lead } from './api'

/** Состояние экрана CRM (только представление: всё приходит из API и перечитывается). */
export const crmState = reactive({
  booting: true,
  user: null as CrmUser | null,
  projects: [] as CrmProject[],
  slug: '' as string,
  tab: 'board' as 'board' | 'parking' | 'leads' | 'feed',
  block: null as string | null,
  units: [] as CrmUnit[],
  stats: null as CrmStats | null,
  leads: [] as Lead[],
  selectedId: null as number | null,
  multi: false,
  picked: new Set<number>(),
  statusFilter: null as string | null,
  saving: false,
  toast: '' as string,
  // паркинг: план уровня, выбранное место, выбор пачкой
  parking: null as CrmParking | null,
  parkingLevel: null as number | null,
  spotId: null as number | null,
  spotPicked: new Set<number>(),
  spotMulti: false,
  spotStatusFilter: null as string | null,
})

export const project = computed(() => crmState.projects.find((p) => p.slug === crmState.slug) ?? null)
export const selected = computed(() => crmState.units.find((u) => u.id === crmState.selectedId) ?? null)
export const selectedSpot = computed(() => crmState.parking?.spots.find((s) => s.id === crmState.spotId) ?? null)
export const parkingLevel = computed(() => crmState.parking?.levels.find((l) => l.level === crmState.parkingLevel) ?? crmState.parking?.levels[0] ?? null)

/** Шахматка: этажи сверху вниз, в этаже — квартиры по номеру */
export const board = computed(() => {
  const byFloor = new Map<number, CrmUnit[]>()
  for (const u of crmState.units) {
    if (!byFloor.has(u.floor)) byFloor.set(u.floor, [])
    byFloor.get(u.floor)!.push(u)
  }
  return [...byFloor.entries()].sort((a, b) => b[0] - a[0]).map(([floor, list]) => ({ floor, units: list.sort((a, b) => a.number - b.number) }))
})

export function toast(msg: string) {
  crmState.toast = msg
  setTimeout(() => { if (crmState.toast === msg) crmState.toast = '' }, 2600)
}
