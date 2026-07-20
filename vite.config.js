import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/vexig-website/',
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
})
