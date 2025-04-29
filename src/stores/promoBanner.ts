import { defineStore } from 'pinia'
import aside from '@/assets/images/aside.png'
export const usePromoBanner = defineStore('promoBanner', {
  state: () => ({
    promoMenu: [
      {
        id: 1,
        label: "Woman's Fashion",
        slug: 'womens-fashion',
        children: [
          { label: 'Shirts', slug: 'shirts' },
          { label: 'Shoes', slug: 'shoes' },
        ],
      },
      {
        id: 2,
        label: "Men's Fashion",
        slug: 'mens-fashion',
        children: [
          { label: 'Shirts', slug: 'shirts' },
          { label: 'Shoes', slug: 'shoes' },
        ],
      },
      {
        id: 3,
        label: 'Electronics',
        slug: 'electronics',
        children: [],
      },
      {
        id: 4,
        label: 'Home & Lifestyle',
        slug: 'home-lifestyle',
        children: [],
      },
      {
        id: 5,
        label: 'Medicine',
        slug: 'medicine',
        children: [],
      },
      {
        id: 6,
        label: 'Sports & Outdoor',
        slug: 'sports-outdoor',
        children: [],
      },
      {
        id: 7,
        label: 'Baby’s & Toys',
        slug: 'babys-toys',
        children: [],
      },
      {
        id: 8,
        label: 'Baby’s & Toys',
        slug: 'babys-toys',
        children: [],
      },
      {
        id: 9,
        label: 'Groceries & Pets',
        slug: 'groceries-pets',
        children: [],
      },
      {
        id: 10,
        label: 'Health & Beauty',
        slug: 'health-beauty',
        children: [],
      },
    ],
    promoSlide: [
      {
        id: 1,
        image: 'https://www.apple.com/newsroom/images/2024/10/new-macbook-pro/article/Apple-MacBook-Pro-M4-Magic-Keyboard-close-up_big.jpg.large.jpg',
      },
      {
        id: 2,
        image: aside,
      },

      {
        id: 3,
        image: 'https://s3-eu-central-1.amazonaws.com/proit.prod/2024/09/OLED-MacBook-Pro-launch-2026.jpg',
      },
    ],
  }),
})
