import { defineStore } from 'pinia'
import img1 from '@/assets/images/offerImg.png'

export const useSpecialOffer = defineStore('specialOffer', {
  state: () => ({
    productName: [
      {
        title: "Enhance Your Music Experience",
        productName: "JBL Boombox 3",
        imageUrl: img1,
        slug: "/product/boombox-3",
        expiresAt: "2024-05-10T23:59:59Z"
      }
    ]
  })
})
