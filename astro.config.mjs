import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Ganti dari '@astrojs/node'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  image: {
    domains: ['kwcftnoczlayucmxtlrs.supabase.co']
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  output: 'server', // Atau 'hybrid' tergantung kebutuhan data dinamis lu
  vite: {
    plugins: [tailwindcss()],
  },
});
