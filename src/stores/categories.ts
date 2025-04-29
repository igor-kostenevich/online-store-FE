import { defineStore } from 'pinia'

import img1 from '@/assets/images/categorySlides/Category-SmartWatch.svg'
import img2 from '@/assets/images/categorySlides/Category-Computer.svg'
import img3 from '@/assets/images/categorySlides/Category-CellPhone.svg'
import img4 from '@/assets/images/categorySlides/Category-Headphone.svg'
import img5 from '@/assets/images/categorySlides/Category-Gamepad.svg'
import img6 from '@/assets/images/categorySlides/Category-SmartWatch.svg'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    bannerImages: [
      {
        id: 1,
        title: 'Camera',
        image: img1,
      },

      {
        id: 2,
        title: 'Computers',
        image: img2,
      },
      {
        id: 3,
        title: 'Phone',
        image: img3,
      },
      {
        id: 4,
        title: 'Headphone',
        image: img4,
      },
      {
        id: 5,
        title: 'Gamepad',
        image: img5,
      },
      {
        id: 6,
        title: 'SmartWatch',
        image: img6,
      },
    ],
  }),
})
