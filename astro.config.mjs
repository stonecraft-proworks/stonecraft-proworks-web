// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { pavers } from './src/data/pavers.ts';

// Misma regla que showMaterials en src/data/flags.ts: /materials no entra en
// el sitemap publico mientras el catalogo este vacio.
const showMaterials = pavers.length > 0 || process.env.PUBLIC_SHOW_PENDING === 'true';

export default defineConfig({
  site: 'https://stonecraftproworks.com',
  integrations: [
    sitemap({ filter: (page) => showMaterials || !page.includes('/materials') }),
  ],
  vite: { plugins: [tailwindcss()] },
});
