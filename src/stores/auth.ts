// token в localStorage ,query, fetch,
// stores/auth.ts
import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'

export const useAuthStore = defineStore('auth', () => {
  const { api, loading } = useApi()

  const register = async (userData: { email: string; password: string; name: string }) => {
    try {
      const response = await api.post('/auth/register', userData)
      return response
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  return {
    register,
    loading,
  }
})
