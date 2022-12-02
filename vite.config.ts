import { fileURLToPath, URL } from 'node:url'

import { defineConfig, preview } from 'vite'
import vue from '@vitejs/plugin-vue'
import Preview from 'vite-plugin-vue-component-preview';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Preview()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
