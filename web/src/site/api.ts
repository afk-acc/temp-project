import { get, send } from '@/api/http'
import type { Lang, SitePayload } from './types'

/** Сайт Spliti ничего не хранит у себя: тексты и контакты — GET /api/site, обращения — POST /api/inquiries. */
export interface InquiryBody { name: string; company?: string; phone: string; message?: string; lang: Lang; website?: string }

export const siteApi = {
  content: (lang: Lang) => get<SitePayload>(`/site?lang=${lang}`),
  inquiry: (body: InquiryBody) => send<{ ok: boolean }>('POST', '/inquiries', body),
}
