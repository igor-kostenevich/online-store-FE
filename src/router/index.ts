import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Auth/Login.vue'
import ResetPassword from '@/views/Auth/ResetPassword.vue'
import SignUp from '@/views/Auth/SignUp.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main',
    },
    component: Home,
    alias: '/home',
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'main',
    },
    component: Login,
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    meta: {
      layout: 'main',
    },
    component: SignUp,
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    meta: {
      layout: 'main',
      auth: true,
    },
    component: ResetPassword,
  },
  {
    path: '/category/:slug',
    name: 'сategory',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Category.vue'),
  },

  // {
  //   path: '/:notFound(.*)',
  //   name: 'error',
  //   meta: { layout: 'error' },
  //   component: NotFoundComponent,
  // },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.be
export default router
