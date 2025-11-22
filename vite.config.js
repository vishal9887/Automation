import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Keep config minimal — Tailwind is configured via PostCSS (postcss.config.cjs).
export default defineConfig({
  plugins: [react()],
})


