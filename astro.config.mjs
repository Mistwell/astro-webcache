import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://astro-webcache.vercel.app/",
    integrations: [tailwind({
        applyBaseStyles: false,
		}), sitemap(), react()],
    trailingSlash: "never",
});