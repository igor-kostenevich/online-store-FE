<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useCategorySlider } from '@/stores/categorySlider'

import Slider from '@/components/Slider.vue'

const categorySlider = useCategorySlider()

const breakpoints = ref({
  320: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
  1280: {
    slidesPerView: 4,
  },
})
</script>

<template>
  <Slider
    :items="categorySlider.getCategory"
    :slides-view="4"
    :space-between="20"
    slide-effect="slide"
    :slide-start="0"
    :pagination="true"
    :loop="true"
    :navigation="true"
    :breakpoints="breakpoints"
    class="mt-20"
  >
    <template #navigation>
      <div class="absolute -top-[60px] right-[10%] md:right-[4%] z-10 flex gap-2">
        <button
          class="flex items-center justify-center bg-white rounded-full w-7 p-2 shadow-md cursor-pointer swiper-button-prev"
          type="button"
        >
          <ArrowLeftIcon class="w-6 h-6 text-black" />
        </button>
        <button
          class="flex items-center justify-center bg-white w-7 rounded-full p-2 shadow-md cursor-pointer swiper-button-next"
          type="button"
        >
          <ArrowRightIcon class="w-6 h-6 text-black" />
        </button>
      </div>
    </template>

    <template #slide="{ item }">
      <div class="hover:bg-button-secondary-default transition duration-150 ease-in-out border-2 border-solid p-4 cursor-pointer">
        <div class="relative p-10 mb-0.5 group">
          <img
            :src="item.image"
            alt="image"
            class="h-32 object-contain mx-auto mb-2"
          />
        </div>

        <div class="font-semibold">{{ item.title }}</div>
      </div>
    </template>
  </Slider>
</template>
