/** Ответ GET /api/site — тексты, контакты и ссылки сайта Spliti; хранятся в базе бэкенда (модуль Site). */
export type Lang = 'ru' | 'uz'

interface Titled { t: string; d: string }

export interface SiteContent {
  meta: { title: string; description: string }
  nav: { product: string; crm: string; process: string; faq: string; cta: string }
  hero: { eyebrow: string; title1: string; title2: string; lead: string; demo: string; talk: string; note: string; floor: string; onSale: string; of: string; hint: string }
  proof: { n: string; t: string }[]
  features: {
    eyebrow: string; title: string
    items: (Titled & { k: string; fig: string; image: string })[]
    lead: Titled & { name: string; where: string; status: string; ago: string; image: string }
  }
  crm: { eyebrow: string; title: string; lead: string; items: string[]; image: string; fig: string }
  open: { eyebrow: string; title: string; text: string; sources: string[] }
  process: { eyebrow: string; title: string; steps: Titled[] }
  audience: { eyebrow: string; items: Titled[] }
  faq: { eyebrow: string; items: { q: string; a: string }[] }
  form: {
    eyebrow: string; title: string; text: string; name: string; company: string; phone: string; message: string
    send: string; sending: string; privacy: string; ok: string; again: string; err: string; busy: string; offline: string; write: string
  }
  footer: { name: string; city: string; disc: string }
}

export interface SitePayload {
  lang: Lang
  langs: Lang[]
  content: SiteContent
  contacts: Partial<Record<'telegram' | 'phone' | 'email', string>>
  demo_url: string | null
  updated_at: string | null
}
