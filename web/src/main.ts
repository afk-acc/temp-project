import { createApp } from 'vue'
import App from './ui/App.vue'
import './ui/theme.css'

createApp(App).mount('#app')
// замеры производительности — только в dev: window.__perf
if (import.meta.env.DEV) void import('./dev/perfProbe')
