import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import { defineConfig } from 'astro/config';

const enableKeystatic = process.env.ENABLE_KEYSTATIC === 'true' || process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://socks.sillylittle.tech',
  integrations: [
    react(),
    markdoc(),
    ...(enableKeystatic ? [keystatic()] : []),
    starlight({
      title: 'Socks',
      description: 'Friendly tips for staying safer, calmer, and more intentional online.',
      logo: {
        src: './public/socks-icon.png',
        alt: 'Socks'
      },
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/SillyLittleTech/socks'
        }
      ],
      editLink: {
        baseUrl: 'https://github.com/SillyLittleTech/socks/edit/main/'
      },
      sidebar: [
        { label: 'Start Here', slug: 'index' },
        {
          label: 'Keeping Out Of Harms Way',
          autogenerate: { directory: 'keeping-out-of-harms-way' }
        },
        {
          label: 'Taking Control Of Your Data',
          autogenerate: { directory: 'taking-control-of-your-data' }
        },
        {
          label: 'Making Your Presence Online',
          autogenerate: { directory: 'making-your-presence-online' }
        },
        {
          label: 'Learning Into Code',
          autogenerate: { directory: 'learning-into-code' }
        },
        {
          label: 'Resources',
          autogenerate: { directory: 'resources' }
        }
      ]
    })
  ]
});
