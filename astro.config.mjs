import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://damien-lo.github.io",
  integrations: [sitemap()],
});
