import { defineConfig } from "astro/config";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kitilab.netlify.app/",
  integrations: [
    compress({
      html: true,
      js: true,
    }),
    partytown(),
    sitemap(),
  ],
});
