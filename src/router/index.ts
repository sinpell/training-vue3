import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: () => import('../views/ProductPage.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/essential',
      name:'essential',
      component: () => import('../views/BasicEssential.vue'),
    },
    {
      path: '/component',
      name: 'Component',
      component: () => import('../views/BasicComponent.vue'),
    },
    {
      path:'/router',
      name:'router',
      component: () => import('../views/BasicRouter.vue'),
    },
  ],
})

export default router
