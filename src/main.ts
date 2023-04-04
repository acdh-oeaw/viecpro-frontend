import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import InstantSearch from "vue-instantsearch/vue3/es"; // Vue 3
import messages from "@intlify/unplugin-vue-i18n/messages";
import "./style/main.css";

import PersonMeta from "@/components/entity-components/entity-meta/PersonMeta.vue";
import InstitutionMeta from "@/components/entity-components/entity-meta/InstitutionMeta.vue";
import PlaceMeta from "@/components/entity-components/entity-meta/PlaceMeta.vue";
import WorkMeta from "@/components/entity-components/entity-meta/WorkMeta.vue";
import EntityMetaBase from "@/components/entity-components/entity-meta/EntityMetaBase.vue";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "de",
  fallbackLocale: "de",
  availableLocales: ["en", "de"],
  messages: messages,
});

const app = createApp(App);

const components = {
  PersonMeta: PersonMeta,
  InstitutionMeta: InstitutionMeta,
  PlaceMeta: PlaceMeta,
  WorkMeta: WorkMeta,
  EntityMetaBase: EntityMetaBase,
};

for (const [name, component] of Object.entries(components)) {
  app.component(name, component);
}
app.use(createPinia());
app.use(router);
app.use(InstantSearch);
app.use(i18n);

app.mount("#app");
