import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

import {SITE_METADATA} from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    site: SITE_METADATA.siteUrl,
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true
        },
        speedInsights: {
            enabled: true
        }
    }),
    integrations: [mdx(), sitemap(), tailwind()]
});
