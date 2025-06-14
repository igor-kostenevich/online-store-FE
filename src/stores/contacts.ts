import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { UserContact } from '@/types/Interfaces/contacts'

const { api } = useApi()

export const useContactStore = defineStore('contact', {
  state: () => {
    return {}
  },

  actions: {
    async sendContact(userData: UserContact) {
      await api.post('/contact', userData)
    },
  },
})
