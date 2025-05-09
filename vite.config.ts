import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import RubyPlugin from "vite-plugin-ruby";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      fastRefresh: true
    }),
    RubyPlugin(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 200 })
  ],
  root: './app/frontend',
  build: {
    outDir: '../../public/vite-assets',
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  resolve: {
    alias: {
      '@': '/app/frontend'
    }
  }
});