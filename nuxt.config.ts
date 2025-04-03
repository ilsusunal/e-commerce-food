// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
  ],
  css: ["@/assets/css/tailwind.css"],
  fonts: {
    families: [
      {
        name: "Poppins",
        provider: "google",
        weights: [400, 600, 700],
      },
      {
        name: "Quicksand",
        provider: "google",
        weights: [400, 500, 600, 700],
      },
    ],
  },
});
