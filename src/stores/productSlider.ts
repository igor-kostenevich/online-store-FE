import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import img1 from '@/assets/images/slides/01.png'
import img2 from '@/assets/images/slides/02.png'
import img3 from '@/assets/images/slides/03.png'
import img4 from '@/assets/images/slides/04.png'
import img5 from '@/assets/images/slides/05.png'

export const useProductSlider = defineStore('productSlider', () => {
  const products = reactive([
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      image: img1,
      price: 120,
      oldPrice: 160,
      discount: 40,
      rating: 4.8,
      reviewsCount: 88,
      isFavorite: false,
      isViewed: false,
      currency: '$',
    },
    {
      id: 2,
      title: 'AK-900 Wired Keyboard',
      image: img2,
      price: 96,
      oldPrice: 120,
      discount: 20,
      rating: 4.6,
      reviewsCount: 64,
      isFavorite: true,
      isViewed: true,
      currency: '$',
    },
    {
      id: 3,
      title: 'IPS LCD Gaming Monitor',
      image: img3,
      price: 370,
      oldPrice: 400,
      discount: 8,
      rating: 4.9,
      reviewsCount: 99,
      isFavorite: false,
      isViewed: true,
      currency: '$',
    },
    {
      id: 4,
      title: 'S-Series Comfort Chair',
      image: img4,
      price: 375,
      oldPrice: 500,
      discount: 25,
      rating: 4.4,
      reviewsCount: 51,
      isFavorite: true,
      isViewed: false,
      currency: '$',
    },
    {
      id: 5,
      title: 'S-Series Comfort Chair',
      image: img5,
      price: 375,
      oldPrice: 500,
      discount: 25,
      rating: 4.4,
      reviewsCount: 51,
      isFavorite: true,
      isViewed: false,
      currency: '$',
    },
  ])

  const getProducts = computed(() => products)

  return { products, getProducts }
})
