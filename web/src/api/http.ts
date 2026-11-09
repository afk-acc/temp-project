/**
 * HTTP к API. База — от адреса приложения (в разработке /api, на сервере <путь>/api).
 * Изменяющие запросы идут с CSRF-токеном Sanctum (кука XSRF-TOKEN → заголовок X-XSRF-TOKEN);
 * сессия — httpOnly-кука, фронт ничего не хранит.
 */
export const BASE = `${import.meta.env.BASE_URL}api`

export class ApiError extends Error {
  constructor(public status: number, public body: unknown, message: string) {
    super(message)
  }

  /** Первое сообщение валидации Laravel ({errors: {field: [msg]}}) или текст ответа */
  get firstMessage(): string {
    const b = this.body as { message?: string; errors?: Record<string, string[]> } | null
    const first = b?.errors ? Object.values(b.errors)[0]?.[0] : undefined
    return first ?? b?.message ?? this.message
  }
}

async function parse<T>(res: Response, path: string): Promise<T> {
  const body = res.headers.get('content-type')?.includes('json') ? await res.json() : null
  if (!res.ok) throw new ApiError(res.status, body, `API ${path}: ${res.status}`)
  return body as T
}

export async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { headers: { Accept: 'application/json' }, credentials: 'same-origin' })
  return parse<T>(res, path)
}

function xsrf(): string | null {
  const m = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/)
  return m ? decodeURIComponent(m[1]) : null
}

let csrfReady: Promise<void> | null = null
function ensureCsrf(): Promise<void> {
  if (xsrf()) return Promise.resolve()
  csrfReady ??= fetch(`${import.meta.env.BASE_URL}sanctum/csrf-cookie`, { credentials: 'same-origin' }).then(() => undefined)
  return csrfReady
}

export async function send<T>(method: 'POST' | 'PATCH' | 'DELETE', path: string, body?: unknown): Promise<T> {
  await ensureCsrf()
  const res = await fetch(`${BASE}${path}`, {
    method,
    credentials: 'same-origin',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-XSRF-TOKEN': xsrf() ?? '' },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  if (res.status === 419) {
    // токен устарел — получить новый и повторить один раз
    csrfReady = null
    document.cookie = 'XSRF-TOKEN=; Max-Age=0; path=/'
    await ensureCsrf()
    const retry = await fetch(`${BASE}${path}`, {
      method, credentials: 'same-origin',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-XSRF-TOKEN': xsrf() ?? '' },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
    return parse<T>(retry, path)
  }
  return parse<T>(res, path)
}
