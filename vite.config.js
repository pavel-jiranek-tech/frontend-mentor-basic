// vite.config.js

import { defineConfig } from 'vite';
import { resolve } from 'path';

const project = process.env.PROJECT || '.';

if (!project) {
  throw new Error('Missing PROJECT env variable (e.g. PROJECT=qr-code-component)');
}

export default defineConfig({
  root: resolve(__dirname, project),
  build: {
    outDir: resolve(__dirname, project, 'dist'),
    emptyOutDir: true
  },
  server: {
    open: true,
    watch: {
      // Forces Vite to watch files outside the project root (e.g. /dist)
      usePolling: true,
      interval: 100,
    }
  }
});