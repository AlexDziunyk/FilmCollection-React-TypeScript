import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
base: "/FilmCollection-React-TypeScript"
export default defineConfig({
  plugins: [react()],
})
