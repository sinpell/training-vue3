import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('../views/LoginView.vue'),
    },
    // /abc to path /essential
    {
      path: '/abc',
      redirect: '/essential'
    },
    //alias path not change /foo show path /foo but data is aboutpage
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('@/views/AboutView.vue'),
      alias: ['/foo', '/bar', '/baz'],
      meta: { requireAuth: true }
    },
    {
      path: '/blank',
      component: () => import('../layouts/BlankLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home2',
          component: HomeView,
        },
      ]
    },
    {
      path: '/default',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('../views/AboutView.vue'),
        },
      ]
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: () => import('../views/ProductPage.vue'),
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


// ยิง api เช็คว่า login หรือไม่
const isLogin = false

router.beforeEach((to, form, next) => {
  if (
    to.name !== 'Login' &&
    to.meta?.requireAuth &&
    !isLogin
  ) {
    next({ name: 'LoginPage' })
  } else {
    next()
  }
})

export default router
