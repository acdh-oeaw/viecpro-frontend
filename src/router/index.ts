import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import SearchPage from '../pages/SearchPage.vue';
import EntityDetailPage from '@/pages/EntityDetailPage.vue';
import DetailPageSource from '@/pages/DetailPageSource.vue';
import DetailPageFunction from '@/pages/DetailPageFunction.vue';
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
    { path: '/search/:collection/', name: 'db-search', component: SearchPage, props: true },
    {
      path: '/detail/:model/:object_id/',
      component: EntityDetailPage,
      props: true,
    },
    {
      path: '/register/source/:object_id/',
      component: DetailPageSource,
      props: true,
    },
    {
      path: '/register/function/:object_id/',
      component: DetailPageFunction,
      props: true,
    },
    // { path: '/search/:collection/', name: 'search_new', components: SearchPage, props: true },
    // {
    //   path: "/deduplication",
    //   name: "Deduplication",
    //   component: DeduplicationPage,
    // },
  ],
});

export default router;
