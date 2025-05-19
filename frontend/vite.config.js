import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    host: true,
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to the backend
    }
  },
  plugins: [react()],
})
