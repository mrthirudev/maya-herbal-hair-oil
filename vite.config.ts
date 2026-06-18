import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/maya-herbal-hair-oil/',
  plugins: [react()],
  server: {
    port: 5173
  }
})
