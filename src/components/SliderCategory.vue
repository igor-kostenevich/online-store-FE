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
    slidesPerView: 6,
  },
}
</script>

<template>
  <section class="pt-[70px] pb-[10px]">
    <div class="container">
      <div class="relative">
        <div>
          <div class="section-subtitle">Categories</div>
          <div class="section-title">Browse By Category</div>
        </div>

        <div class="absolute bottom-[60%] md:bottom-[0%] right-[1%] md:right-[0%] z-10 flex gap-2">
          <button
            class="category-slider-next flex items-center justify-center bg-[#f5f5f5] !w-[46px] !h-[46px] p-1 transition rounded-full cursor-pointer rotate-180"
            type="button"
          >
            <ArrowRightIcon class="!w-[19px] !h-[16px] text-black" />
          </button>

          <button
            class="category-slider-prev flex items-center justify-center bg-[#f5f5f5] !w-[46px] !h-[46px] p-1 transition rounded-full cursor-pointer rotate-180"
            type="button"
          >
            <ArrowLeftIcon class="!w-[19px] !h-[16px] text-black" />
          </button>
        </div>
      </div>
      <Slider
        :items="categoryStore.categoriesBrowse"
        :slides-view="6"
        :space-between="20"
        slide-effect="slide"
        :slide-start="1"
        :loop="true"
        :navigation="true"
        next-btn-id=".category-slider-next"
        prev-btn-id=".category-slider-prev"
        :breakpoints="breakpoints"
        class="mt-10"
      >
        <template #slide="{ item }">
          <div class="hover:bg-button-secondary-default transition duration-150 ease-in-out border-2 border-solid p-4 cursor-pointer">
            <div class="relative mb-0.5 group">
              <img
                :src="item.image"
                alt="image"
                class="h-20 object-contain mx-auto mb-2 transition group-hover:invert"
              />
            </div>

            <div class="font-semibold text-center">{{ item.title }}</div>
          </div>
        </template>
      </Slider>
    </div>
  </section>
</template>
