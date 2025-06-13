import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import { NewArrivalProducts, ProductsResponse, ProductDetails, SearchResults, bannerResult, Product } from '@/types/Interfaces/products'

const { api } = useApi()

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: {} as Product,
    newArrivalProducts: [] as NewArrivalProducts[],
    exploreProducts: [] as ProductsResponse[],
    bestSellingProducts: [] as ProductsResponse[],
    cardProduct: [],
    cardProductDetails: {} as ProductDetails,
    searchResults: {} as SearchResults,
    banner: {} as bannerResult,
    isHomePageLoaded: false,

    allProducts: {
      discounts: {} as { [page: number]: ProductsResponse },
      bestSelling: {} as { [page: number]: ProductsResponse },
      all: {} as { [page: number]: ProductsResponse },
    },
    wishList: [] as Product[],
    isLoadingAll: false,
  }),

  getters: {
    isFavorite: state => (id: string) => state.wishList.some((item: Product) => item.id === id),
  },
  actions: {
    async fetchHomePageData(limit = 20, page = 1) {
      if (this.isHomePageLoaded) return

      const response = await api.get('/product/homepage', { limit, page })

      this.products = response.discounts
      this.newArrivalProducts = response.newArrivals
      this.bestSellingProducts = response.bestSelling
      this.banner = response.banner
      this.exploreProducts = response.allProducts

      this.isHomePageLoaded = true
    },

    async getProductDetails(slug: string) {
      if (Object.keys(this.cardProductDetails).length === 0) {
        this.cardProductDetails = await api.get(`/product/${slug}`)
      }
    },

    setProductDetails(details: ProductDetails) {
      this.cardProductDetails = details
    },

    async searchProducts(q: string) {
      if (q.length > 3) {
        this.searchResults = await api.get('/product/search', { q })
      }
    },

    async getDiscountProducts(limit: number, page: number) {
      if (this.allProducts.discounts[page]) return
      this.isLoadingAll = true
      const response = await api.get('/product/discounts', { limit, page })
      this.allProducts.discounts[page] = response
      this.isLoadingAll = false
    },

    async getBestSelling(limit: number, page: number) {
      if (this.allProducts.bestSelling[page]) return
      this.isLoadingAll = true
      const response = await api.get('/product/best-selling', { limit, page })
      this.allProducts.bestSelling[page] = response
      this.isLoadingAll = false
    },

    async getAllProducts(limit: number, page: number) {
      if (this.allProducts.all[page]) return
      this.isLoadingAll = true
      const response = await api.get('/product/', { limit, page })
      this.allProducts.all[page] = response
      this.isLoadingAll = false
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
