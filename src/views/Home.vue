<script setup lang="ts">

import Slider from '@/components/Slider.vue'
import img1 from '@/assets/images/slides/01.png'
import img2 from '@/assets/images/slides/02.png'
import img3 from '@/assets/images/slides/03.png'
import img4 from '@/assets/images/slides/04.png'
import img5 from '@/assets/images/slides/05.png'

import { ref } from 'vue'

const products = ref([
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
    currency: '$'
  },
  {
    id: 2,
    title: 'AK-900 Wired Keyboard',
    image:img2,
    price: 96,
    oldPrice: 120,
    discount: 20,
    rating: 4.6,
    reviewsCount: 64,
    isFavorite: true,
    isViewed: true,
    currency: '$'
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
    currency: '$'
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
    currency: '$'
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
    currency: '$'
  }
])

</script>

<template>
  <Slider
    :items="products"
    :slidesView="4"
    :spaceBetween="20"
    slideEffect="slide"
    :slideStart="0"
    :loop="true"
  >
    <template #slide="{ item }">
      <div class="p-4 bg-secondary-mediumWhite">
        <img :src="item.image"
             alt="image"
             class="h-32 object-contain  mx-auto mb-2" />
        <div class="font-semibold">{{ item.title }}</div>
        <div class="text-red-500 font-bold">
          {{ item.currency }}{{ item.price }}
          <span class="line-through text-gray-400 text-sm ml-2">
            {{ item.currency }}{{ item.oldPrice }}
          </span>
        </div>
        <div class="text-sm text-yellow-400">
          ⭐ {{ item.rating }} <span class="text-gray-500">({{ item.reviewsCount }})</span>
        </div>
      </div>
    </template>
  </Slider>
</template>

