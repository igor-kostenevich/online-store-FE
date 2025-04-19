import { Ref } from 'vue'

interface IApiMethods {
  get: (url: string, params?: any) => Promise<any>
  post: (url: string, data: any) => Promise<any>
  put: (url: string, data: any) => Promise<any>
  patch: (url: string, data: any) => Promise<any>
  delete: (url: string) => Promise<any>
}

export interface IApiComposition {
  api: IApiMethods
  loading: Ref<boolean>
}
