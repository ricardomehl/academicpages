// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro'; // Sanity CMS Astro Integration

// https://astro.build/config
export default defineConfig({
  site: 'https://ricardomehl.github.io',
  integrations: [
    
    // SANITY CMS INTEGRATION
    sanity({
      projectId: 'cu3650s0',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: true,
      // Optional: log server-side Sanity client requests.
      // Modes: 'dev' | 'build' | 'always'
      logClientRequests: 'dev',
    })
  ],
});