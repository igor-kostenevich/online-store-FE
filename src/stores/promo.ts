import { defineStore } from 'pinia'

import { useApi } from '@/composables/useApi'
import { ProductDetails } from '@/types/Interfaces/products'

const { api } = useApi()

export const usePromoStore = defineStore('promo', {
  state: () => ({
    promoProducts: {} as ProductDetails,
  }),

  actions: {
    async getPromoProducts() {
      this.promoProducts = await api.get('/promo/banner')
    },
  },
})
