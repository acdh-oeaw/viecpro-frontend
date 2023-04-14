import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import SearchPage from '../pages/SearchPage.vue';
import SearchPageNew from '../pages/SearchPageNew.vue';
import EntityDetailPage from '@/pages/EntityDetailPage.vue';
import DeduplicationPage from '@/pages/DeduplicationPage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue'),
    },
    { path: '/search', name: 'db-search', component: SearchPage },
    {
      path: '/detail/:model/:object_id/',
      component: EntityDetailPage,
      props: true,
    },
    { path: '/search/:collection/', name: 'search_new', component: SearchPageNew, props = true },
    // {
    //   path: "/deduplication",
    //   name: "Deduplication",
    //   component: DeduplicationPage,
    // },
  ],
});

export default router;
