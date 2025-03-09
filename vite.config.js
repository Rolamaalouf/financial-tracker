import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: mode === 'development' ? {
    proxy: {
      '/api': {
        target: 'https://fin-sync-1.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    }
  } : undefined, // Disable proxy in production
}));
