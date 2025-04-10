// vite.config.js

import { defineConfig } from 'vite';
import { resolve } from 'path';

const project = process.env.PROJECT || '.';

export default defineConfig({
  root: resolve(__dirname, project),
});