import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { CategoryMenu } from '@/types/Interfaces/categories'
import aside from '@/assets/images/aside.png'
import { useProductsStore } from './products'
import type { IProductsResponse } from '@/types/Interfaces/products'
import { useMemoize } from '@vueuse/core'
const { api, loading } = useApi()


let memoizedFetch: ReturnType<typeof useMemoize>

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    promoSlides: [
      {
        id: 1,
        title: 'MacBook Pro M4',
        text: 'Unmatched performance for developers and creators.',
        image: 'https://www.apple.com/newsroom/images/2024/10/new-macbook-pro/article/Apple-MacBook-Pro-M4-Magic-Keyboard-close-up_big.jpg.large.jpg',
      },
      {
        id: 2,
        title: 'Welcome to the Future',
        text: 'A new design. A new era. All for you.',
        image: aside,
      },
      {
        id: 3,
        title: 'OLED MacBook Pro',
        text: 'Deeper colors. More detail. Stunning quality.',
        image: 'https://s3-eu-central-1.amazonaws.com/proit.prod/2024/09/OLED-MacBook-Pro-launch-2026.jpg',
      },
    ],
    categoriesBrowse: [],
    categoriesMenu: [] as CategoryMenu[],
    categoryProducts: [] as IProductsResponse[],
    loading,
  }),

  actions: {
    async getHomePageData() {
      const productsStore = useProductsStore()

      await Promise.all([productsStore.fetchHomePageData(), this.getCategoriesMenu(), this.getCategoriesBrowse()])
    },
    async getCategoriesMenu() {
      if (this.categoriesMenu && Object.keys(this.categoriesMenu).length > 0) return
      this.categoriesMenu = await api.get('/category')
    },
    async getCategoriesBrowse() {
      if (this.categoriesBrowse && Object.keys(this.categoriesBrowse).length > 0) return
      this.categoriesBrowse = await api.get('/category/electronics/children')
    },
    async getCategoriesMenuProducts(categorySlug: string, limit: number, page: number) {
      if (!memoizedFetch) {
        memoizedFetch = useMemoize(
          async (slug: string, lim: number, pg: number): Promise<IProductsResponse[]> => {
            return await api.get(`/product/category-products/${slug}`, { limit: lim, page: pg })
          }
        )
      }

      const res = await memoizedFetch(categorySlug, limit, page)
      this.categoryProducts = res
    },
  },
})
