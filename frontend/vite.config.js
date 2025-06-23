import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', // This is the key fix for image paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Organizes assets in a dedicated folder
  },
  server: {
    port: 3000,
  }
});