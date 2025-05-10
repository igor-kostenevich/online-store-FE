import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import { RegisterValues, LoginValues, UpdatedValues } from '@/types/Interfaces/auth'

export const useAuthStore = defineStore('auth', {
  state: () => {
    const { api } = useApi()
    return {
      api,
      user: null as any,
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
    async getProfile() {
      this.user = await this.api.get('/auth/profile')
    },

    async updateProfile(data: UpdatedValues) {
      this.user = await this.api.patch('/auth/profile', data)
    },
  },
})
