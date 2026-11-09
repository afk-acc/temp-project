import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// Все данные — только из бэкенда: /api и /sanctum проксируются в Laravel (php artisan serve --port=8010).
// Другой адрес бэкенда: BACKEND_URL=http://… npm run dev
const BACKEND = process.env.BACKEND_URL || 'http://localhost:8010'
const proxy = { '/api': { target: BACKEND, changeOrigin: false }, '/sanctum': { target: BACKEND, changeOrigin: false } }
const here = dirname(fileURLToPath(import.meta.url))
// три страницы, адреса одинаковы локально и на spliti.uz: / — сайт Spliti, /demo/ — 3D-сайт ЖК, /crm/ — CRM.
// ONLY=main — собрать только 3D (статическая выкладка демо без бэкенда)
const ENTRIES: Record<string, string> = { site: 'index.html', main: 'demo/index.html', crm: 'crm/index.html' }
const ONLY = process.env.ONLY?.split(',')
const input = Object.fromEntries(Object.entries(ENTRIES).filter(([k]) => !ONLY || ONLY.includes(k)).map(([k, f]) => [k, resolve(here, f)]))

export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': resolve(here, 'src') } },
  server: {
    host: true,
    port: 5180,
    strictPort: true,
    proxy,
  },
  preview: { host: true, port: 5181, proxy },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900,
    rollupOptions: { input },
  },
})
