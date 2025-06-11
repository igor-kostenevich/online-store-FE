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
      discounts: { items: [] as ProductsResponse[], loaded: false },
      bestSelling: { data: [] as ProductsResponse[], loaded: false },
      all: { items: [] as ProductsResponse[], loaded: false },
    },
  }),

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
      if (this.allProducts.discounts.loaded) return
      const response = await api.get('/product/discounts', { limit, page })
      this.allProducts.discounts.items = response
      this.allProducts.discounts.loaded = true
    },

    async getBestSelling(limit: number, page: number) {
      if (this.allProducts.bestSelling.loaded) return
      const response = await api.get('/product/best-selling', { limit, page })
      this.allProducts.bestSelling.data = response
      this.allProducts.bestSelling.loaded = true
    },

    async getAllProducts(limit: number, page: number) {
      if (this.allProducts.all.loaded) return
      const response = await api.get('/product/', { limit, page })
      this.allProducts.all.items = response
      this.allProducts.all.loaded = true
    },
  },
})
