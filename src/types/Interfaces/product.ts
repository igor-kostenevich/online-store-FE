export interface ProductImage {
  id: string
  url: string
  isMain: boolean
  productId: string
  createdAt: string
}

export interface ProductReview {
  id: string
  rating: number
  text: string
  productId: string
  userId: string
  createdAt: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  parentId?: string
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  oldPrice: number | null
  discount: number
  isNew: boolean
  averageRating: number
  reviewCount: number
  stock: number
  colors: string[]
  sizes: string[]
  images: ProductImage[]
  reviews: ProductReview[]
  category: ProductCategory
  categoryId: string
  createdAt: string
  updatedAt: string
  expiresAt: string
}

export interface ProductMeta {
  page: number
  limit: number
  itemCount: number
  totalItems: number
  totalPages: number
}

export interface ProductsResponse {
  items: Product[]
  meta: ProductMeta
  expiresAt: string
}
