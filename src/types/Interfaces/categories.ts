export interface CategoryChild {
  id: number
  slug: string
  name: string
}

export interface CategoryMenu {
  id: number
  slug: string
  name: string
  children: CategoryChild[]
}
