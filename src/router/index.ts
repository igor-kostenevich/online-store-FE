import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

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

export default router
