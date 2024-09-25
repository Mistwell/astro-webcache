import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://astro-webcache.vercel.app/",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
	],
	trailingSlash: "never",
});
