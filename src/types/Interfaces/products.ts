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
