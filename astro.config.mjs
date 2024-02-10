import { defineConfig } from 'astro/config';

import Vue from "@astrojs/vue";
import UnoCSS from 'unocss/astro'
import Icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
      Vue(),
      UnoCSS({
          injectReset: true,
      }),
      Icon()
  ]
});