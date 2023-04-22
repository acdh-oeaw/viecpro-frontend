import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import InstantSearch from "vue-instantsearch/vue3/es"; // Vue 3
import messages from "@intlify/unplugin-vue-i18n/messages";
import "./style/main.css";



const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "de",
  fallbackLocale: "de",
  availableLocales: ["en", "de"],
  messages: messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(InstantSearch);
app.use(i18n);

app.mount("#app");
