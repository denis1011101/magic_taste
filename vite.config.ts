import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'app/javascript',
  base: '/',
  build: {
    outDir: resolve(new URL('.', import.meta.url).pathname, 'public', 'vite'),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(new URL('.', import.meta.url).pathname, 'app/javascript', 'main.tsx')
      }
    }
  },
  server: {
    port: 3001,
    proxy: {
      '/': 'http://localhost:3002'
    }
  }
});