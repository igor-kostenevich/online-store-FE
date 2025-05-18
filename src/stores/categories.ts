import { defineStore } from 'pinia'
import aside from '@/assets/images/aside.png'
import camera from '@/assets/images/categorySlides/Category-Camera.svg'
import phone from '@/assets/images/categorySlides/Category-CellPhone.svg'
import computer from '@/assets/images/categorySlides/Category-Computer.svg'
import pad from '@/assets/images/categorySlides/Category-Gamepad.svg'
import headphones from '@/assets/images/categorySlides/Category-Headphone.svg'
import watch from '@/assets/images/categorySlides/Category-SmartWatch.svg'
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
    categoriesBrowse: [
      {
        id: 1,
        image: camera,
        title: 'Camera',
      },
      {
        id: 2,
        image: phone,
        title: 'Phone',
      },
      {
        id: 3,
        image: computer,
        title: 'Computer',
      },
      {
        id: 4,
        image: pad,
        title: 'Pad',
      },
      {
        id: 5,
        image: headphones,
        title: 'Headphones',
      },
      {
        id: 6,
        image: watch,
        title: 'Watch',
      },
      {
        id: 7,
        image: headphones,
        title: 'Headphones',
      },
      {
        id: 8,
        image: headphones,
        title: 'Headphones',
      },
    ],
    categoriesMenu: [] as CategoryMenu[],
  }),

  actions: {
    async getCategoriesMenu() {
      this.categoriesMenu = await api.get('/category')
    },
  },
})
