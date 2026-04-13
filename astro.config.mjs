import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Ganti dari '@astrojs/node'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Pakai adapter Vercel biar sinkron sama package.json lu
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
