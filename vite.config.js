import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const scriptUrl = env.VITE_GOOGLE_APPS_SCRIPT_URL
  let proxy = {}
  if (scriptUrl) {
    try {
      const u = new URL(scriptUrl)
      proxy = {
        '/api/contact': {
          target: u.origin,
          changeOrigin: true,
          secure: true,
          rewrite: () => u.pathname + u.search,
        },
      }
    } catch (_) {}
  }
  return {
    base: process.env.VITE_BASE || '/',
    plugins: [react()],
    server: { proxy },
  }
})
