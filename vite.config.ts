import { fileURLToPath, URL } from "node:url";

import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
	define: {
		// FIXME: why is this necessary?
		"process.env": {},
	},
	plugins: [
		vue(),
		VueI18nPlugin({
			include: [fileURLToPath(new URL("./src/locales/**", import.meta.url))],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"~": fileURLToPath(new URL(".", import.meta.url)),
		},
		preserveSymlinks: true,
	},
	server: {
		port: 3000,
	},
});
