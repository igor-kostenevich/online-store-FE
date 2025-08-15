import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { UserContact } from '@/types/Interfaces/contacts'
import { notify } from '@kyvg/vue3-notification'

const { api } = useApi()

export const useContactStore = defineStore('contact', {
  state: () => ({}),

  actions: {
    async sendContact(userData: UserContact) {
      await api.post('/contact', userData)
      notify({
        title: 'success!',
        text: 'Your message has been sent.',
      })
    },
  },
})
