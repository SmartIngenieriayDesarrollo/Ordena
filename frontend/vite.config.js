import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/', // Cambiar si el frontend está en un subdirectorio
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    minify: 'esbuild', // Usar esbuild en lugar de terser (más rápido)
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['@heroicons/react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
