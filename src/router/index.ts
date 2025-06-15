import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Auth/Login.vue'
import ResetPassword from '@/views/Auth/ResetPassword.vue'
import SignUp from '@/views/Auth/SignUp.vue'
import AccountPage from '@/views/AccountPage.vue'
import Profile from '@/views/Account/Profile.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import NotFoundComponent from '@/components/NotFoundComponent.vue'
import { useCartStore } from '@/stores/cart'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: Home,
    alias: '/home',
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'main' },
    component: Login,
  },
  {
    path: '/sign-up',
    name: 'signUp',
    meta: { layout: 'main' },
    component: SignUp,
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    meta: { layout: 'main' },
    component: ResetPassword,
  },

  {
    path: '/category/:slug',
    name: 'сategory',
    meta: { layout: 'main' },
    component: () => import('../views/Category.vue'),
  },

  {
    path: '/account',
    component: AccountPage,
    meta: { layout: 'main' },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: Profile,
      },
    ],
  },
  {
    path: '/gaming',
    component: ProductDetails,
    meta: { layout: 'main' },
  },
  {
    path: '/details/:slug',
    name: 'productDetails',
    props: true,
    component: ProductDetails,
    meta: { layout: 'main' },
  },
  {
    path: '/products/discount',
    name: 'discountProducts',
    meta: { layout: 'main' },
    component: () => import('../views/ProductsDiscount.vue'),
  },
  {
    path: '/products/best-selling',
    name: 'best-selling',
    meta: { layout: 'main' },
    component: () => import('../views/ProductBestSelling.vue'),
  },
  {
    path: '/products/explore',
    name: 'explore',
    meta: { layout: 'main' },
    component: () => import('../views/ProductsExplore.vue'),
  },

  {
    path: '/cart',
    component: () => import('@/views/cart/BaseCart.vue'),
    meta: { layout: 'main' },
    children: [
      {
        path: '',
        name: 'cartOverview',
        component: () => import('@/views/cart/CartPage.vue'),
      },
      {
        path: 'billing',
        name: 'billing',
        component: () => import('@/views/cart/Billing.vue'),
        beforeEnter: (to, from, next) => {
          const cartStore = useCartStore()
          cartStore.loadFromLocalStorage()
          if (!cartStore.cartProducts.length) {
            return next({ name: 'home' })
          }
          next()
        },
      },
      {
        path: 'billing/completed',
        name: 'billingCompleted',
        component: () => import('@/views/cart/Completed.vue'),
      },
    ],
  },

  {
    path: '/contact',
    name: 'contact',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/ContactPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/AboutPage.vue'),
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/WishlistPage.vue'),
  },
  {
    path: '/:notFound(.*)',
    name: 'error',
    meta: { layout: 'main' },
    component: NotFoundComponent,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const cartStore = useCartStore()
  if (!cartStore.cartProducts.length) {
    cartStore.loadFromLocalStorage()
  }
  next()
})

export default router
