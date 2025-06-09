import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import { NewArrivalProducts, ProductsResponse, ProductDetails, SearchResults, ProductCard, Product } from '@/types/Interfaces/products'

const { api } = useApi()

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: {} as Product,
    newArrivalProducts: [] as NewArrivalProducts[],
    exploreProducts: [] as ProductsResponse[], // тимчасово порожній
    bestSellingProducts: [] as ProductsResponse[],
    cardProduct: [],
    cardProductDetails: {} as ProductDetails,
    searchResults: {} as SearchResults,
    banner: {} as any,
  }),

  actions: {
    async fetchHomePageData(limit: number = 20, page: number = 1) {
      const response = await api.get('/product/homepage', { limit, page })

      this.products = response.discounts
      this.newArrivalProducts = response.newArrivals
      this.bestSellingProducts = response.bestSelling
      this.banner = response.banner
      this.exploreProducts = response.allProducts
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
      this.searchResults = await api.get('/product/search', { q })
    },
  },
})
