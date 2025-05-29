import { defineStore } from 'pinia'
import aside from '@/assets/images/aside.png'
import { useApi } from '@/composables/useApi'
import { CategoryMenu } from '@/types/Interfaces/categories'

const { api } = useApi()

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    promoSlides: [
      {
        id: 1,
        title: 'MacBook Pro M4',
        text: 'Unmatched performance for developers and creators.',
        image: 'https://www.apple.com/newsroom/images/2024/10/new-macbook-pro/article/Apple-MacBook-Pro-M4-Magic-Keyboard-close-up_big.jpg.large.jpg',
      },
      {
        id: 2,
        title: 'Welcome to the Future',
        text: 'A new design. A new era. All for you.',
        image: aside,
      },
      {
        id: 3,
        title: 'OLED MacBook Pro',
        text: 'Deeper colors. More detail. Stunning quality.',
        image: 'https://s3-eu-central-1.amazonaws.com/proit.prod/2024/09/OLED-MacBook-Pro-launch-2026.jpg',
      },
    ],
    categoriesBrowse: [],
    categoriesMenu: [] as CategoryMenu[],
  }),

  actions: {
    async getCategoriesMenu() {
      this.categoriesMenu = await api.get('/category')
    },
    async getCategoriesBrowse() {
      this.categoriesBrowse = await api.get('/category/electronics/children')
    },
  },
})
