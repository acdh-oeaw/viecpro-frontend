import "@fontsource/roboto-flex/variable-full.css";
import "tailwindcss/tailwind.css";
import "@/styles/index.css";

import messages from "@intlify/unplugin-vue-i18n/messages";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import instantsearch from "vue-instantsearch/vue3/es";

import App from "@/App.vue";
import type de from "@/locales/de.json";
import router from "@/router";

const i18n = createI18n<typeof de, "de" | "en", false>({
	availableLocales: ["de", "en"],
	legacy: false,
	locale: "de",
	messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(instantsearch);
app.use(i18n);

app.mount("#app");
