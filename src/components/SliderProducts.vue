<script setup lang="ts">
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import { useProductsStore } from '@/stores/products'
import Slider from '@/components/Slider.vue'
import BaseDate from '@/components/shared/BaseDate.vue'

const productSlider = useProductsStore()

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
      <div class="flex flex-col md:flex-row md:justify-between relative">
        <div class="flex flex-col md:flex-row gap-x-20">
          <div>
            <div class="section-subtitle">Today’s</div>
            <div class="section-title mb-[20px] md:mb-[40px]">Flash Sales</div>
          </div>
          <BaseDate
            :days="3"
            :hours="23"
            :minutes="19"
            :seconds="56"
          />
        </div>

        <div class="absolute bottom-[75%] md:bottom-[30%] right-[5%] md:right-[0%] z-10 flex gap-2">
          <button
            class="flex items-center justify-center bg-[#f5f5f5] !w-[46px] !h-[46px] p-1 transition rounded-full cursor-pointer products-slider-next rotate-180"
            type="button"
          >
            <ArrowRightIcon class="!w-[19px] !h-[16px] text-black" />
          </button>

          <button
            class="flex items-center justify-center bg-[#f5f5f5] !w-[46px] !h-[46px] p-1 transition rounded-full cursor-pointer products-slider-prev rotate-180"
            type="button"
          >
            <ArrowLeftIcon class="!w-[19px] !h-[16px] text-black" />
          </button>
        </div>
      </div>

      <Slider
        :items="productSlider.products"
        :slides-view="4"
        :space-between="20"
        slide-effect="slide"
        :slide-start="0"
        :navigation="true"
        next-btn-id=".products-slider-next"
        prev-btn-id=".products-slider-prev"
        :loop="true"
        :breakpoints="breakpoints"
        class="mt-10 md:mt-0"
      >
        <template #slide="{ item }">
          <BaseProductCard
            :key="item.id"
            :product="item"
            class="h-full"
          />
        </template>
      </Slider>

      <router-link to="#">
        <BaseButton class="mt-10 mx-auto flex">View All Products</BaseButton>
      </router-link>
    </div>
  </section>
</template>
