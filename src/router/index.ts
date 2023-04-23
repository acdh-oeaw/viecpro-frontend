import { createRouter, createWebHistory } from 'vue-router';
import InDevelopmentPage from "@/pages/InDevelopmentPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InDevelopmentPage,
    },
    
  ],
});

export default router;
