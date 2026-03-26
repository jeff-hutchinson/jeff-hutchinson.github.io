import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://laurievillefarms.com',
  base: '/',
  integrations: [
    sitemap({
      filter: (page) => 
        page !== 'https://laurievillefarms.com/admin-inventory/' && 
        page !== 'https://laurievillefarms.com/products/'
    })
  ],
});
