// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt"],
  elementPlus: {},
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  plugins: [{ src: "@/plugins/baidu", mode: "client" }],
});
