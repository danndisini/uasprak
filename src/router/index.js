import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/weather' // Redirect root path to weather page
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../components/Weather.vue') // Import Weather component
    },
    {
      path: '/meeting1',
      name: 'meeting1',
      component: () => import('../components/Meeting1.vue') // Import Meeting1 component
    },
    // Add more routes as needed
  ]
});

export default router;
