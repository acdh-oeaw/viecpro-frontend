import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import InstantSearch from "vue-instantsearch/vue3/es"; // Vue 3

import "./style/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(InstantSearch);

app.mount("#app");
