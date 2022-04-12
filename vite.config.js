import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { base_url } from './config'

export default defineConfig({
  base: `/${base_url}/`,
  plugins: [react()]
})
