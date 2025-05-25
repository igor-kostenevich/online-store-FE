export interface NewArrivalProducts {
  id: string
  name: string
  slug: string
  description: string
  price: number
  oldPrice: number
  discount: number
  stock: number
  category: {
    id: string
    name: string
    slug: string
    parentId: string
    children: {
      id: string
      name: string
      slug: string
      parentId: string
    }[]
  }
  images: {
    id: string
    url: string
    isMain: boolean
  }[]
  colors: string[]
  sizes: string[]
  isNew: boolean
  averageRating: number
  reviewCount: number
  createdAt: string
  updatedAt: string
}

export interface BaseProductCard {
  id: string
  averageRating: number
  price: number
  oldPrice: number
  images: { url: string }[]
  discount: number
  isNew: boolean
  currency: string
  name: string
}

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
  oldPrice: number
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
  currency: string
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

export interface ProductDetails {
  id: number
  name: string
  price: number
  description: string
  averageRating: number
  reviewCount: number
  inStock: boolean
  isNew: boolean
  slug: string
  images: ProductImage[]
  colors: string[]
  sizes: string[]
}
