import { defineStore } from 'pinia'
import ps from '@/assets/images/newArrival/ps.png'
import columns from '@/assets/images/newArrival/columns.png'
import gucci from '@/assets/images/newArrival/gucci.png'
import women from '@/assets/images/newArrival/women.png'
export const useNewArrival = defineStore('newArrival', {
  state: () => ({
    newArrivalProducts: [
      {
        id: 1,
        title: 'PlayStation 5',
        description: 'Black and White version of the PS5 coming out on sale.',
        imageUrl: ps,
        slug: '/products/playstation-5',
      },
      {
        id: 2,
        title: 'Women’s Collections',
        description: 'Featured woman collections that give you another vibe.',
        imageUrl: women,
        slug: '/products/women-collections',
      },
      {
        id: 3,
        title: 'Speakers',
        description: 'Amazon wireless speakers',
        imageUrl: columns,
        slug: '/products/speakers',
      },
      {
        id: 4,
        title: 'Perfume',
        description: 'GUCCI INTENSE OUD EDP',
        imageUrl: gucci,
        slug: '/products/perfume',
      },
    ],
  }),
})
