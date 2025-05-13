// vite.config.js

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = mode === 'production' ? '/my-port-admin/' : '/';

  return {
    plugins: [react()],
    base: base,
    // ... other Vite configurations
  };
});