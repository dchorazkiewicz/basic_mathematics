import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dchorazkiewicz.github.io',
  base: '/basic_mathematics',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    build: { cssMinify: true }
  }
});
