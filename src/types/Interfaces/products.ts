export interface IProductImage {
  id: string
  url: string
  isMain: boolean
}

export interface IProductReview {
  id: string
  rating: number
  text: string
  userId: string
  createdAt: string
}

export interface IProductCategory {
  id: string
  name: string
  slug: string
  parentId?: string
}

interface IPageMeta {
  page: number
  limit: number
  itemCount: number
  totalItems: number
  totalPages: number
}

export interface IProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number
  oldPrice: number
  discount: number
  isNew: boolean
  averageRating: number
  reviewCount: number
  stock: number
  currency: string
  quantity: number
  colors: string[]
  sizes: string[]
  images: IProductImage[]
  reviews: IProductReview[]
  category: IProductCategory
  createdAt: string
  updatedAt: string
  expiresAt?: string
}

export interface IProductsResponse {
  data: IProduct[]
  meta: IPageMeta
  expiresAt?: string
}

export interface ISearchResult {
  id: string
  name: string
  slug: string
  price: number
  image: Pick<IProductImage, 'id' | 'url'>
}

export interface IProductBanner {
  expiresAt: string
  product: IProduct
}
