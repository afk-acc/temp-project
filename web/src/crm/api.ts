import { get, send } from '@/api/http'
import type { Unit, UnitStatus } from '@/domain/types'

/** API CRM: все запросы под сессией менеджера (Sanctum), данные живут только в бэкенде. */
export interface CrmUser { id: number; name: string; email: string }
export interface CrmProject { slug: string; name: string; developer: string; mode: string; units: number; blocks: { id: string; label: string; levels: number }[] }
export interface CrmUnit extends Unit { updated_at: string | null }
export interface CrmStats {
  total: number
  by_status: Record<UnitStatus, number>
  available_value: number
  by_block: { block: string | null; total: number; available: number; sold: number }[]
  recent: { id: number; unit_id: number; unit_number: number; block: string | null; floor: number; from_status: string; to_status: string; to_price: number | null; user: string | null; at: string }[]
  leads_new: number
}
export interface HistoryItem { id: number; from_status: string; to_status: string; from_price: number | null; to_price: number | null; comment: string | null; user: string | null; at: string }
export interface Lead { id: number; name: string; phone: string; comment: string | null; status: 'new' | 'in_progress' | 'done'; source: string; created_at: string; unit: { id: number; number: number; block: string | null; floor: number; rooms: number; area: number } | null }

export const crm = {
  login: (email: string, password: string) => send<CrmUser>('POST', '/crm/login', { email, password }),
  logout: () => send<{ ok: boolean }>('POST', '/crm/logout'),
  me: () => get<CrmUser>('/crm/me'),
  projects: () => get<{ items: CrmProject[] }>('/crm/projects'),
  stats: (slug: string) => get<CrmStats>(`/crm/projects/${slug}/stats`),
  units: (slug: string, block?: string | null) => get<{ items: CrmUnit[] }>(`/crm/projects/${slug}/units${block ? `?block=${encodeURIComponent(block)}` : ''}`),
  update: (id: number, body: { status?: UnitStatus; price?: number | null; comment?: string | null }) => send<CrmUnit>('PATCH', `/crm/units/${id}`, body),
  bulk: (project: string, ids: number[], status: UnitStatus, comment?: string) => send<{ changed: number }>('POST', '/crm/units/bulk', { project, ids, status, comment }),
  history: (id: number) => get<{ items: HistoryItem[] }>(`/crm/units/${id}/history`),
  leads: (slug: string) => get<{ items: Lead[] }>(`/crm/projects/${slug}/leads`),
  leadStatus: (id: number, status: Lead['status']) => send<{ id: number; status: string }>('PATCH', `/crm/leads/${id}`, { status }),
}
