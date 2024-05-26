import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "source-map-js": "source-map"
  },
  plugins: [react()],
})
