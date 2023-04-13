import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve, dirname } from "node:path";



// const viteEnv = {}
// Object.keys(process.env).forEach((key) => {
//   if (key.startsWith(`VITE_`)) {
//     viteEnv[`import.meta.env.${key}`] = process.env[key]
//   }
// })
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      runtimeOnly: false,

      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
    }),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/",
  server: { host: true, port: 3000 },
  define: { "process.env": {} }, // TODO: this works now, but might need a config later
  //build: { outDir: ".output" },
  //build: { modulePreload: { polyfill: true } },
});
