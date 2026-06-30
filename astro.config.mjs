// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ashton22305.github.io',
  base: '/personal-webpage',
  vite: {
    plugins: [tailwindcss()],
  },
});
