import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import { RegisterValues, LoginValues } from '@/types/Interfaces/auth'

export const useAuthStore = defineStore('auth', {
  state: () => {
    const { api } = useApi()
    return {
      api,
    }
  },

  actions: {
    async register(userData: RegisterValues) {
      await this.api.post('/auth/register', userData)
    },

    async login(userData: LoginValues) {
      const response = await this.api.post('/auth/login', userData)
      const { accessToken } = response

      localStorage.setItem('accessToken', accessToken)
    },
  },
})
