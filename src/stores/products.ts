import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { IProductsResponse, ISearchResult, IProduct, IProductBanner } from '@/types/Interfaces/products'

const { api, loading } = useApi()

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
      discounts: {} as { [page: number]: IProductsResponse },
      bestSelling: {} as { [page: number]: IProductsResponse },
      all: {} as { [page: number]: IProductsResponse },
    },
    wishList: [] as IProduct[],
    loading,
  }),

  getters: {
    isFavorite: state => (id: string) => state.wishList.some((item: IProduct) => item.id === id),
  },
  actions: {
    async fetchHomePageData() {
      if (this.loading) return

      const {discounts, newArrivals, bestSelling, banner, allProducts} = await api.get('/product/homepage')

      this.products = discounts
      this.newArrivalProducts = newArrivals
      this.bestSellingProducts = bestSelling
      this.banner = banner
      this.exploreProducts = allProducts
    },

    async getProductDetails(slug: string) {
      if (Object.keys(this.cardProductDetails).length === 0) {
        this.cardProductDetails = await api.get(`/product/${slug}`)
      }
    },

    setProductDetails(details: IProduct) {
      this.cardProductDetails = details
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

    async addToWishList(productId: string) {
      await api.post('/wishlist', { productId })
    },
    async getWishList() {
      this.wishList = await api.get('/wishlist')
    },
    async removeFromWishList(productId: string) {
      await api.delete(`/wishlist/${productId}`)
    },
  },
})
