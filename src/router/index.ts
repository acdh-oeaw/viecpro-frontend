import { createRouter, createWebHistory } from "vue-router";
import landingPage from "../pages/LandingPage.vue";
import databaseSearchPage from "../pages/SearchPage.vue";
import entityDetailPage from "@/pages/EntityDetailPage.vue";
import deduplicationPage from "@/pages/DeduplicationPage.vue";
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
      component: () => import("../pages/AboutPage.vue"),
    },
    { path: "/search", name: "db-search", component: databaseSearchPage },
    {
      path: "/detail/:model/:object_id/",
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
