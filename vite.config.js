import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change output directory to "build" for Vercel
    chunkSizeWarningLimit: 800, // Increase chunk size limit to avoid warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Split dependencies into a separate chunk
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://fin-sync-1.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

