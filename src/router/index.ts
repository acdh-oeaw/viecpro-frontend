import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import SearchPage from '../pages/SearchPage.vue';

import DetailPageFunction from '@/pages/DetailPageFunction.vue';
import PersonDetailPage from '@/pages/PersonDetailPage.vue';
import InstitutionDetailPage from '@/pages/InstitutionDetailPage.vue';
import QuelleDetailPage from '@/pages/QuelleDetailPage.vue';
import HofstaatDetailPage from '@/pages/HofstaatDetailPage.vue';
import PlaceDetailPage from '@/pages/PlaceDetailPage.vue';
import ErrorPage from '@/pages/ErrorPage.vue';
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
    // {
    //   path: '/detail/:model/:object_id/',
    //   component: EntityDetailPage,
    //   props: true,
    // },
    // {
    //   path: '/register/source/:object_id/',
    //   component: DetailPageSource,
    //   props: true,
    // },
    {
      path: '/register/function/:object_id/',
      component: DetailPageFunction,
      props: true,
    },
    {
      path: '/detail/Person/:object_id/',
      component: PersonDetailPage,
      props: true,
    },
    {
      path: '/detail/Institution/:object_id/',
      component: InstitutionDetailPage,
      props: true,
    },
    {
      path: '/detail/Reference/:object_id/',
      component: QuelleDetailPage,
      props: true,
    },
    {
      path: '/detail/Hofstaat/:object_id/',
      component: HofstaatDetailPage,
      props: true,
    },
    {
      path: '/detail/Place/:object_id/',
      component: PlaceDetailPage,
      props: true,
    },
    // {
    //   path: '/detail/:model/:object_id/',
    //   component: GenericDetailPage,
    //   props: true,
    // },
    { path: '/:pathMatch(.*)', component: ErrorPage, name: 'page-not-found' },

    // { path: '/search/:collection/', name: 'search_new', components: SearchPage, props: true },
    // {
    //   path: "/deduplication",
    //   name: "Deduplication",
    //   component: DeduplicationPage,
    // },
  ],
});

export default router;
