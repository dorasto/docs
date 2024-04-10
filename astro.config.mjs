import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://dorasto.github.io',
  base: 'docs'
  integrations: [starlight({
    title: 'Doras.to',
    logo: {
      light: './src/assets/favicon.svg',
      dark: './src/assets/favicon-white.svg'
    },
    customCss: ['./src/styles/custom.css'],
    editLink: {
      baseUrl: 'https://github.com/doras-to/docs/edit/master/'
    },
    social: {
      github: 'https://github.com/doras-to/docs'
    },
    sidebar: [{
      label: 'Guides',
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Getting Started',
          link: '/guides/getting-started/'
        }, {
          label: 'Migrating from Mystlink',
          link: '/mystlink/waitlist/'
        }]
    }, {
      label: 'Core Features',
      items: [{
        label: 'Understanding Links',
        link: '/links'
      }]
    }, {
      label: 'Contributing',
      autogenerate: {
        directory: 'contributing'
      }
    }]
  }), react(), tailwind()],
  output: "hybrid",
  adapter: cloudflare()
});
