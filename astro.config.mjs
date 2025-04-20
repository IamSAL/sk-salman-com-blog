// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // TODO: Set your site URL https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
  // TODO: Get this from the site-config
  site: "https://sk-salman.com/",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), react()],
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  },
});
