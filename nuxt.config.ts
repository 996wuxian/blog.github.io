import path from "path";
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/motion/nuxt",
    "@vueuse/sound/nuxt",
  ],
  css: ["~/assets/sass/global.scss"],
  app: {
    baseURL: "/blog.github.io/",
    head: {
      title: "wuxian's blog",
      link: [
        { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://chinese-fonts-cdn.deno.dev/packages/rmjzqpybxs/dist/瑞美加张清平硬笔行书/result.css",
        },
      ],
    },
  },
  devtools: { enabled: false },
  devServer: {
    port: 9527,
  },
  vite: {
    optimizeDeps: {
      include: ["howler"],
    },
  },

  plugins: [{ src: "@/plugins/aos.client.ts", ssr: false, mode: "client" }],

  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs"),
    },
  },
});
