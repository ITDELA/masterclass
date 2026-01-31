// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Tu dominio completo
  site: "https://ITDELA.github.io",

  // El nombre de tu repositorio con barras al inicio y final
  // base: '/masterclass/',
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    assets: "assets", // Esto cambia '_astro' por 'assets'
  },

  integrations: [react()],
});
