import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { RegisterValues, LoginValues, UpdatedValues, User } from '@/types/Interfaces/auth'
import { notify } from '@kyvg/vue3-notification'

const { api } = useApi()

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {} as User,
    accessToken: localStorage.getItem('accessToken') as string | null,
  }),

  getters: {
    isAuthenticated: state => !!state.accessToken,
  },

  actions: {
    async register(userData: RegisterValues) {
      await api.post('/auth/register', userData)
      notify({
        title: 'Success!',
        text: 'Registration completed.',
        type: 'success',
      })
    },

    async login(userData: LoginValues) {
      const { accessToken } = await api.post('/auth/login', userData)
      localStorage.setItem('accessToken', accessToken)
      notify({
        title: 'Success!',
        text: 'Logged in successfully.',
        type: 'success',
      })
    },

    async getProfile() {
      this.user = await api.get('/auth/profile')
    },

    async updateProfile(data: UpdatedValues) {
      this.user = await api.patch('/auth/profile', data)
      notify({
        title: 'Success!',
        text: 'Profile updated.',
        type: 'success',
      })
    },

    async logOut() {
      await api.post('/auth/logout', {})
      localStorage.removeItem('accessToken')
      this.user = {} as User
      notify({
        title: 'Success!',
        text: 'Logged out successfully.',
        type: 'success',
      })
    },
  },
})
