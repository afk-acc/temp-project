import { computed, ref, shallowRef } from 'vue'
import { siteApi } from './api'
import type { Lang, SitePayload } from './types'

/**
 * Язык и контент сайта. Тексты приходят из бэкенда; язык — в адресе (?lang=uz).
 * Ответы держатся в памяти на время открытой страницы, чтобы переключение RU/UZ не мигало, — в браузере ничего не сохраняется.
 */
export type { Lang } from './types'

const loaded = new Map<Lang, SitePayload>()
export const lang = ref<Lang>(new URLSearchParams(location.search).get('lang') === 'uz' ? 'uz' : 'ru')
export const site = shallowRef<SitePayload | null>(null)
export const failed = ref(false)

/** Тексты текущего языка; компоненты страницы рендерятся только после загрузки */
export const t = computed(() => site.value!.content)

export async function load(l: Lang = lang.value) {
  failed.value = false
  try {
    const data = loaded.get(l) ?? (await siteApi.content(l))
    loaded.set(l, data)
    site.value = data
    lang.value = data.lang
    document.documentElement.lang = data.lang
    document.title = data.content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', data.content.meta.description)
  } catch {
    failed.value = !site.value
  }
}

export async function setLang(l: Lang) {
  const u = new URL(location.href)
  if (l === 'ru') u.searchParams.delete('lang')
  else u.searchParams.set('lang', l)
  history.replaceState(null, '', u)
  await load(l)
}
