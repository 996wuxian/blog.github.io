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
    buildAssetsDir: "nuxt_assets",
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
  image: {
    // 配置图片模块
    domains: ["996wuxian.github.io"], // 允许的域名
    format: ["webp", "jpg", "png"],
    dir: "public", // 图片存储目录
    staticFilename: "[publicPath]/[name][ext]", // 静态文件命名规则
    // 配置图片 provider
    provider: "ipx",
    ipx: {
      publicPath: "/blog.github.io", // 匹配 baseURL
    },
  },
  experimental: {
    payloadExtraction: false,
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
