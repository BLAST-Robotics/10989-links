// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://links.team10989.org",
  outDir: "dist",
  build: {
    // Force all CSS to be inlined into the <head>
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});