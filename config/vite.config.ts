import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte(),
    commonjs(),
  ],
  build: {
    outDir: path.resolve(__dirname, '../remote'),
    // minify: false,
    lib: {
      entry: path.resolve(__dirname, '../frontend/integration.js'),
      fileName: (format) => `modules/svelte-integration.js`,
      formats: ['amd'],
    },
    // sourcemap: true, // Enable source maps
    rollupOptions: {
      output: {
        assetFileNames: `tutorialreversisvelte.css`,
      },
    },
  },
})

