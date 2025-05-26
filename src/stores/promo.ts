import { defineStore } from 'pinia'

import { useApi } from '@/composables/useApi'
import { ProductDetails } from '@/types/Interfaces/products'

const { api } = useApi()

export const usePromoStore = defineStore('promo', {
  state: () => ({
    promoBanner: [] as ProductDetails,
  }),

  actions: {
    async getPromoBanner() {
      this.promoBanner = await api.get('/promo/banner')
    },
  },
})
