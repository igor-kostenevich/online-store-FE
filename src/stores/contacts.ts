import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { UserContact } from '@/types/Interfaces/contacts'
import { notify } from '@kyvg/vue3-notification'

const { api } = useApi()

export const useContactStore = defineStore('contact', {
  state: () => {
    return {}
  },

  actions: {
    async sendContact(userData: UserContact) {
      const response = await api.post('/contact', userData)
      notify({
        title: 'Contact Form Submitted',
        text: response.message,
        type: 'success',
      })
    },
  },
})
