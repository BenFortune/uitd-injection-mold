import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    }
  }),
  integrations: [sitemap()],
  site: 'https://upperiowatoolanddieinjectionmoldingandtooling.com'
});