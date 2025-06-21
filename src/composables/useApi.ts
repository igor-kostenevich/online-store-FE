import { ref } from 'vue'
import { router } from '@/router'
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import type { IApiComposition } from '@/types/Interfaces'
import { notify } from '@kyvg/vue3-notification'

export const api: AxiosInstance = axios.create({
  baseURL: 'https://api.family-love-haven.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  response => response,
  async error => {
    if (error && error.statusCode === 401) {
      const refreshToken = localStorage.getItem('refreshToken')
      try {
        const tokenResponse = await api.post('/auth/refresh', { refreshToken })
        localStorage.setItem('accessToken', tokenResponse.data.accessToken)
        error.config.headers['Authorization'] = `Bearer ${tokenResponse.data.accessToken}`

        return api.request(error.config)
      } catch (refreshError) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        if (router) {
          router.push('/login')
        }

        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export function useApi(): IApiComposition {
  const loading = ref(false)

  const get = async (url: string, params?: any): Promise<any> => {
    try {
      loading.value = true
      const response: AxiosResponse = await api.get(url, { params })
      return response.data
    } catch (error: any) {
      console.log(error);
      notify({
        title: 'Error!',
        text: error.response.data.message,
        type: 'error',
      })
      throw error
    } finally {
      loading.value = false
    }
  }

  const post = async (url: string, data: any): Promise<any> => {
    try {
      loading.value = true
      const response: AxiosResponse = await api.post(url, data)
      return response.data
    } catch (error: any) {
      notify({
        title: 'Error!',
        text: error.response.data.message,
        type: 'error',
      })
      throw error
    } finally {
      loading.value = false
    }
  }

  const put = async (url: string, data: any): Promise<any> => {
    try {
      loading.value = true
      const response: AxiosResponse = await api.put(url, data)
      return response.data
    } catch (error: any) {
      notify({
        title: 'Error!',
        text: error.response.data.message,
        type: 'error',
      })
      throw error
    } finally {
      loading.value = false
    }
  }

  const patch = async (url: string, data: any): Promise<any> => {
    try {
      loading.value = true
      const response: AxiosResponse = await api.patch(url, data)
      return response.data
    } catch (error: any) {
      notify({
        title: 'Error!',
        text: error.response.data.message,
        type: 'error',
      })
      throw error
    } finally {
      loading.value = false
    }
  }

  const del = async (url: string): Promise<any> => {
    try {
      loading.value = true
      const response: AxiosResponse = await api.delete(url)
      return response.data
    } catch (error: any) {
      notify({
        title: 'Error!',
        text: error.message,
        type: 'error',
      })
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    api: {
      get,
      post,
      put,
      delete: del,
      patch,
    },
    loading,
  }
}
