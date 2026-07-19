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
      description: 'Interaktywny wykład z geometrii analitycznej, algebry liniowej i analizy matematycznej.',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/dchorazkiewicz/basic_mathematics'
      },
      sidebar: [
        {
          label: 'Geometria analityczna',
          collapsed: false,
          items: [
            { label: 'Wprowadzenie', slug: 'geometria-analityczna/' },
            { label: 'Punkty i współrzędne', slug: 'geometria-analityczna/punkty-i-wspolrzedne' },
            { label: 'Wektory', slug: 'geometria-analityczna/wektory' },
            { label: 'Proste', slug: 'geometria-analityczna/proste' },
            { label: 'Płaszczyzny', slug: 'geometria-analityczna/plaszczyzny' }
          ]
        },
        {
          label: 'Algebra liniowa',
          collapsed: false,
          items: [
            { label: 'Wprowadzenie', slug: 'algebra-liniowa/' },
            { label: 'Macierze', slug: 'algebra-liniowa/macierze' },
            { label: 'Wyznaczniki', slug: 'algebra-liniowa/wyznaczniki' },
            { label: 'Układy równań', slug: 'algebra-liniowa/uklady-rownan' },
            { label: 'Przekształcenia liniowe', slug: 'algebra-liniowa/przeksztalcenia-liniowe' }
          ]
        },
        {
          label: 'Analiza matematyczna',
          collapsed: false,
          items: [
            { label: 'Wprowadzenie', slug: 'analiza/' },
            { label: 'Funkcje', slug: 'analiza/funkcje' },
            { label: 'Granice', slug: 'analiza/granice' },
            { label: 'Pochodne', slug: 'analiza/pochodne' },
            { label: 'Całki', slug: 'analiza/calki' }
          ]
        },
        {
          label: 'Warsztat autora',
          collapsed: true,
          items: [
            { label: 'Skład matematyczny', slug: 'warsztat/sklad-matematyczny' },
            { label: 'Komponenty dokumentu', slug: 'warsztat/komponenty' }
          ]
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
      trust: false,
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
