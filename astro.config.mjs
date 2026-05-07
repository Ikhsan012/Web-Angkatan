import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Ganti dari '@astrojs/node'
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  image: {
    domains: ['kwcftnoczlayucmxtlrs.supabase.co']
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  // Atau 'hybrid' tergantung kebutuhan data dinamis lu
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});