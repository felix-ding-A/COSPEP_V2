// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://cospep.com',
  integrations: [react(), partytown({
    config: {
      forward: ['dataLayer.push', 'clarity'],
    },
  })],
  output: 'server',
  adapter: vercel(),
  // 301 redirects: /en/xxx → /xxx (canonical, no language prefix for English)
  redirects: {
    '/en': '/',
    '/en/[...slug]': '/[...slug]',
  },
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});