// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
