<script setup lang="ts">
import { useExploreProducts } from '@/stores/exploreProducts'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import Slider from '@/components/Slider.vue'
const store = useExploreProducts()

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
  <div class="container mb-[140px]">
    <div>
      <div>
        <div class="section-subtitle">This Month</div>
        <div class="section-title">Explore Our Products</div>
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
      <template #navigation>
        <div class="absolute -top-14 right-[10%] md:right-[4%] z-10 flex gap-2">
          <button
            class="flex items-center justify-center bg-white rounded-full w-8 h-8 p-2 shadow-md cursor-pointer swiper-button-prev"
            type="button"
          >
            <ArrowRightIcon class="w-5 h-5 text-black" />
          </button>
          <button
            class="flex items-center justify-center bg-white rounded-full w-8 h-8 p-2 shadow-md cursor-pointer swiper-button-next"
            type="button"
          >
            <ArrowLeftIcon class="w-5 h-5 text-black" />
          </button>
        </div>
      </template>

      <template #slide="{ item }">
        <BaseProductCard
          :key="item.id"
          :product="item"
          class="h-full"
        />
      </template>
    </Slider>

    <router-link to="#">
      <BaseButton class="flex justify-center items-center mt-20 mx-auto"> View All Products </BaseButton>
    </router-link>
  </div>
</template>

<style scoped></style>
