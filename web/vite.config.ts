import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFile } from 'node:fs/promises'
import { resolve, normalize, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * На этапе 0 бэкенд заменяет каталог ../api-stub: запрос GET /api/projects/c1 → api-stub/projects/c1.json.
 * Фронт не знает, откуда данные: на этапе 2 тот же контракт отдаёт Laravel, а этот плагин уходит.
 */
function apiStub(): Plugin {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../api-stub')
  const handler = async (req: any, res: any, next: () => void) => {
    if (!req.url?.startsWith('/api/')) return next()
    const path = normalize(req.url.split('?')[0].replace(/^\/api\//, '')).replace(/^(\.\.(\/|\\|$))+/, '')
    // логотипы брендов — файлы как есть; всё остальное — JSON-ответы
    const media = path.match(/^brands\/[a-z0-9-]+\.(svg|png)$/)
    try {
      if (media) {
        const body = await readFile(resolve(root, path))
        res.setHeader('Content-Type', media[1] === 'svg' ? 'image/svg+xml' : 'image/png')
        res.setHeader('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'")
        res.setHeader('Cache-Control', 'public, max-age=3600')
        res.end(body)
        return
      }
      const body = await readFile(resolve(root, `${path}.json`))
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.setHeader('Cache-Control', 'no-store')
      res.end(body)
    } catch {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify({ message: 'Not found' }))
    }
  }
  return {
    name: 'api-stub',
    configureServer: (server) => { server.middlewares.use(handler) },
    configurePreviewServer: (server) => { server.middlewares.use(handler) },
  }
}

export default defineConfig({
  plugins: [vue(), apiStub()],
  resolve: { alias: { '@': resolve(dirname(fileURLToPath(import.meta.url)), 'src') } },
  server: { host: true, port: 5180 },
  preview: { host: true, port: 5181 },
  build: { target: 'es2020', chunkSizeWarningLimit: 900 },
})
