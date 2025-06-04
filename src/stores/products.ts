import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import { NewArrivalProducts, ProductsResponse, ProductDetails } from '@/types/Interfaces/products'

const { api } = useApi()

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: {} as ProductsResponse,
    newArrivalProducts: [] as NewArrivalProducts[],
    exploreProducts: {},
    bestSellingProducts: [] as ProductsResponse,
    cardProduct: [],
    cardProductDetails: {} as ProductDetails,
  }),

  actions: {
    async getDiscountProducts(limit: number, page: number) {
      this.products = await api.get('/product/discounts', {
        limit,
        page,
      })
    },

    async getNewArrivalProducts() {
      this.newArrivalProducts = await api.get('/product/new-arrivals')
    },

    setProductDetails(details: ProductDetails) {
      this.cardProductDetails = details
    },

    async getProductDetails(slug: string) {
      if (Object.keys(this.cardProductDetails).length === 0) {
        this.cardProductDetails = await api.get(`/product/${slug}`)
      }
    },

    async getBestSellingProducts(limit: number, page: number) {
      this.bestSellingProducts = await api.get('/product/best-selling', { limit, page })
    },

    async getExploreProducts(limit: number, page: number) {
      this.exploreProducts = await api.get('/product/', { limit, page })
    },
  },
})
