import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://joey33o.github.io',
  base: '/IS117-Museum-/',
  integrations: [tailwind()],
});
