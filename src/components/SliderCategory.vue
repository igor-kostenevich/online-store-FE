<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useCategoriesStore } from '@/stores/categories'

import Slider from '@/components/Slider.vue'

const categoryStore = useCategoriesStore()

const breakpoints = {
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
}
</script>

<template>
  <section class="pt-[70px] pb-[70px]">
    <div class="container">
      <div class="relative">
        <div>
          <div class="section-subtitle">This Month</div>
          <div class="section-title">Browse By Category</div>
        </div>

        <div class="absolute md:bottom-[27%] right-[10%] md:right-[4%] z-10 flex gap-2">
          <button
            class="flex items-center justify-center bg-[#f5f5f5] w-[46px] h-[46px] p-1 transition rounded-full cursor-pointer swiper-button-next rotate-180"
            type="button"
          >
            <ArrowRightIcon class="!w-[19px] !h-[16px] text-black" />
          </button>

          <button
            class="flex items-center justify-center bg-[#f5f5f5] w-[46px] h-[46px] p-1 transition rounded-full cursor-pointer swiper-button-prev rotate-180"
            type="button"
          >
            <ArrowLeftIcon class="!w-[19px] !h-[16px] text-black" />
          </button>
        </div>
      </div>
      <Slider
        :items="categoryStore.categoriesBrowse"
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
        <template #slide="{ item }">
          <div class="hover:bg-button-secondary-default transition duration-150 ease-in-out border-2 border-solid p-4 cursor-pointer">
            <div class="relative p-10 mb-0.5 group">
              <img
                :src="item.image"
                alt="image"
                class="h-32 object-contain mx-auto mb-2 transition group-hover:invert"
              />
            </div>

            <div class="font-semibold">{{ item.title }}</div>
          </div>
        </template>
      </Slider>
    </div>
  </section>
</template>
