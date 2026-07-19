import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://dchorazkiewicz.github.io',
  base: '/basic_mathematics',
  integrations: [
    starlight({
      title: 'Basic Mathematics',
      description: 'Interaktywny dokument matematyczny: geometria analityczna, algebra liniowa i analiza.',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/dchorazkiewicz/basic_mathematics'
      },
      sidebar: [
        {
          label: 'Geometria analityczna',
          collapsed: false,
          autogenerate: { directory: 'geometria-analityczna' }
        },
        {
          label: 'Algebra liniowa',
          collapsed: false,
          autogenerate: { directory: 'algebra-liniowa' }
        },
        {
          label: 'Analiza matematyczna',
          collapsed: false,
          autogenerate: { directory: 'analiza' }
        }
      ]
    }),
    mdx()
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, {
      throwOnError: false,
      strict: false,
      macros: {
        '\\R': '\\mathbb{R}',
        '\\N': '\\mathbb{N}',
        '\\Z': '\\mathbb{Z}',
        '\\Q': '\\mathbb{Q}',
        '\\C': '\\mathbb{C}',
        '\\vect': '\\boldsymbol{#1}'
      }
    }]]
  }
});
