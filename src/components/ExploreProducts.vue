<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import Slider from '@/components/Slider.vue'
const store = useProductsStore()

const breakpoints = {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: { rows: 2, fill: 'row' },
  },
  640: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: { rows: 2, fill: 'row' },
  },
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: { rows: 2, fill: 'row' },
  },
  1280: {
    slidesPerView: 4,
    slidesPerGroup: 4,
    grid: { rows: 2, fill: 'row' },
  },
}
</script>

<template>
  <section class="pt-[70px] pb-[70px]">
    <div class="container">
      <div class="relative">
        <div>
          <div class="section-subtitle">This Month</div>
          <div class="section-title">Explore Our Products</div>
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
        :items="store.exploreProducts"
        :slides-view="4"
        :slides-per-group="4"
        :space-between="20"
        slide-effect="slide"
        :slide-start="0"
        :pagination="true"
        :loop="true"
        :loop-fill-group-with-blank="true"
        :navigation="true"
        :breakpoints="breakpoints"
        :grid="{ rows: 2, fill: 'row' }"
        class="mt-20"
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
        <BaseButton class="flex justify-center items-center mt-20 mx-auto">View All Products</BaseButton>
      </router-link>
    </div>
  </section>
</template>

<style scoped></style>
