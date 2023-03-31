import { fileURLToPath, URL } from "node:url";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve, dirname } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter(), vue(),  VueI18nPlugin({
    include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "./",
  server: { host: true, port: 3000 },
  define: { "process.env": {} },
  //build: { outDir: ".output" },
});
