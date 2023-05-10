// my-blog/frontend/astro.config.mjs

import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '143n24zn',
    dataset: 'tikiraidersdata',
    apiVersion: '2023-04-12',
    useCdn: false
  })],
  output: "server",
  adapter: netlify()
});