<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import Slider from '@/components/Common/Slider.vue'
import ProductCard from '@/components/Products/ProductCard.vue'

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
  <section class="pt-[70px] pb-[10px]">
    <div class="container">
      <div class="relative">
        <div>
          <div class="section-subtitle">Our Products</div>
          <div class="section-title">Explore Our Products</div>
        </div>

        <div class="absolute bottom-[65%] md:bottom-[0%] right-[0%] md:right-[0%] z-10 flex gap-2">
          <button
            class="explore-slider-prev flex items-center justify-center bg-[#f5f5f5] w-[46px] h-[46px] p-1 rounded-full cursor-pointer transition"
            type="button"
          >
            <ArrowLeftIcon class="w-[19px] h-[16px]" />
          </button>

          <button
            class="explore-slider-next flex items-center justify-center bg-[#f5f5f5] w-[46px] h-[46px] p-1 rounded-full cursor-pointer transition"
            type="button"
          >
            <ArrowRightIcon class="w-[19px] h-[16px]" />
          </button>
        </div>
      </div>

      <div
        v-if="!store.isHomePageLoaded"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <ProductCard
          v-for="n in 8"
          :key="n"
          loading
          class="h-full"
        />
      </div>

      <Slider
        v-else
        :items="store.exploreProducts"
        :slides-view="4"
        :slides-per-group="4"
        :space-between="20"
        slide-effect="slide"
        :slide-start="0"
        :loop="true"
        :loop-fill-group-with-blank="true"
        :navigation="true"
        next-btn-id=".explore-slider-next"
        prev-btn-id=".explore-slider-prev"
        :breakpoints="breakpoints"
        :grid="{ rows: 2, fill: 'row' }"
        class="mt-10"
      >
        <template #slide="{ item }">
          <ProductCard
            :key="item.id"
            :product="item"
            class="h-full"
          />
        </template>
      </Slider>

      <router-link :to="{ name: 'explore' }">
        <BaseButton class="flex justify-center items-center mt-20 mx-auto">View All Products</BaseButton>
      </router-link>
    </div>
  </section>
</template>

<style scoped></style>
