import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { RegisterValues, LoginValues, UpdatedValues, User } from '@/types/Interfaces/auth'

const { api } = useApi()

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {} as User,
      accessToken: localStorage.getItem('accessToken') as string | null,
    }
  },

  getters: {
    isAuthenticated: (state): boolean => !!state.accessToken,
  },
  actions: {
    async register(userData: RegisterValues) {
      await api.post('/auth/register', userData)
    },

    async login(userData: LoginValues) {
      const { accessToken } = await api.post('/auth/login', userData)
      localStorage.setItem('accessToken', accessToken)
    },
    async getProfile() {
      this.user = await api.get('/auth/profile')
    },

    async updateProfile(data: UpdatedValues) {
      this.user = await api.patch('/auth/profile', data)
    },
    async logOut() {
      await api.post('/auth/logout', {})
      localStorage.removeItem('accessToken')
      this.user = {} as User
    },
  },
})
