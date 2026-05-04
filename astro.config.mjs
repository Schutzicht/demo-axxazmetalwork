// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  i18n: {
    locales: ['nl', 'en', 'tl', 'de', 'pl'],
    defaultLocale: 'nl',
    routing: { prefixDefaultLocale: false },
  },
});
