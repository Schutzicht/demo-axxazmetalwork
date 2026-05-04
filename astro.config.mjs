// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  i18n: {
    locales: [
      'nl', 'en',
      'de', 'fr', 'es', 'it', 'pt', 'pl', 'ro', 'hu', 'cs', 'sk', 'uk',
      'bg', 'hr', 'el', 'lt', 'lv', 'et', 'sl', 'da', 'sv', 'no', 'fi', 'tr',
      'tl', 'vi', 'id', 'hi', 'bn',
    ],
    defaultLocale: 'nl',
    routing: { prefixDefaultLocale: false },
  },
});
