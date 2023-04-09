import { createRouter, createWebHistory } from "vue-router";
import landingPage from "../pages/landingPage.vue";
import databaseSearchPage from "../pages/databaseSearchPage.vue";
import entityDetailPage from "@/pages/entityDetailPage.vue";
import deduplicationPage from "@/pages/deduplicationPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: landingPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/aboutPage.vue"),
    },
    { path: "/search", name: "db-search", component: databaseSearchPage },
    {
      path: "/:ent_type/:ent_model/detail/:ent_id/:doc_id/",
      component: entityDetailPage,
      props: true,
    },
    {
      path: "/deduplication",
      name: "Deduplication",
      component: deduplicationPage,
    },
  ],
});

export default router;
