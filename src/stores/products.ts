import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { IProductsResponse, ISearchResult, IProduct, IProductBanner, IOrders } from '@/types/Interfaces/products'
import { useMemoize } from '@vueuse/core'
import { notify } from '@kyvg/vue3-notification'

const { api, loading } = useApi()

let memoizedFetch: ReturnType<typeof useMemoize>
let memoizedWishList: ReturnType<typeof useMemoize>

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: {} as IProductsResponse,
    newArrivalProducts: [] as IProduct[],
    exploreProducts: [] as IProduct[],
    bestSellingProducts: [] as IProduct[],
    cardProductDetails: {} as IProduct,
    searchResults: [] as ISearchResult[],
    banner: {} as IProductBanner,

    allProducts: {
      discounts: {} as Record<number, IProductsResponse>,
      bestSelling: {} as Record<number, IProductsResponse>,
      all: {} as Record<number, IProductsResponse>,
    },
    wishList: [] as IProduct[],
    loading,
    orders: [] as IOrders[],
  }),

  actions: {
    async fetchHomePageData() {
      if (!memoizedFetch) {
        memoizedFetch = useMemoize(
          async (): Promise<{
            discounts: IProductsResponse
            newArrivals: IProduct[]
            bestSelling: IProduct[]
            banner: IProductBanner
            allProducts: IProduct[]
          }> => {
            return api.get('/product/homepage')
          },
        )
      }

      const { discounts, newArrivals, bestSelling, banner, allProducts } = await memoizedFetch()
      this.products = discounts
      this.newArrivalProducts = newArrivals
      this.bestSellingProducts = bestSelling
      this.banner = banner
      this.exploreProducts = allProducts
    },

    async getWishList() {
      if (!memoizedWishList) {
        memoizedWishList = useMemoize(async (): Promise<IProduct[]> => {
          return api.get('/wishlist')
        })
      }
      this.wishList = await memoizedWishList()
    },

    async addToWishList(productId: string) {
      const added = await api.post('/wishlist', { productId })
      this.wishList.push({ ...added, heart: true })
    },

    async removeFromWishList(productId: string) {
      await api.delete(`/wishlist/${productId}`)
      notify({ title: 'Success!', text: 'Item removed from your wishlist.', type: 'success' })
      memoizedWishList = undefined
      this.wishList = this.wishList.filter(p => String(p.id) !== productId)
    },

    async clearWishList() {
      const ids = this.wishList.map(p => p.id)
      await Promise.all(ids.map(id => api.delete(`/wishlist/${id}`)))
      this.wishList = []
    },

    async getOrders() {
      this.orders = await api.get('/order')
    },

    async searchProducts(q: string) {
      if (q.length > 3) {
        this.searchResults = await api.get('/product/search', { q })
      }
    },

    async getDiscountProducts(limit: number, page: number) {
      if (this.allProducts.discounts[page]) return
      const response = await api.get('/product/discounts', { limit, page })
      this.allProducts.discounts[page] = response
    },

    async getBestSelling(limit: number, page: number) {
      if (this.allProducts.bestSelling[page]) return
      const response = await api.get('/product/best-selling', { limit, page })
      this.allProducts.bestSelling[page] = response
    },

    async getAllProducts(limit: number, page: number) {
      if (this.allProducts.all[page]) return
      const response = await api.get('/product/', { limit, page })
      this.allProducts.all[page] = response
    },

    async getProductDetails(slug: string) {
      if (!this.cardProductDetails.id) {
        this.cardProductDetails = await api.get(`/product/${slug}`)
      }
    },

    async addToWishList(productId: string) {
      const { api: apiWishList } = useApi()
      await apiWishList.post('/wishlist', { productId })
      notify({
        title: 'Add product to wishlist',
        text: 'Product has been added to your wishlist',
        type: 'success',
      })
    },
 async getWishList() {
      if (!memoizedWishList) {
        memoizedWishList = useMemoize(async (): Promise<IProduct[]> => {
          return api.get('/wishlist')
        })
      }
      this.wishList = await memoizedWishList()
    },

  },
})
