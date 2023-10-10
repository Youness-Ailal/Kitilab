import { defineConfig } from "astro/config";
import compress from "astro-compress";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [compress({
    html: true,
    js: true
  }), partytown()]
});