<script setup lang="ts">
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import { useProductsStore } from '@/stores/products'
import Slider from '@/components/Common/Slider.vue'
import BaseDate from '@/components/Shared/BaseDate.vue'
import ProductCard from '@/components/Products/ProductCard.vue'

const productSlider = useProductsStore()

const breakpoints = {
  320: { slidesPerView: 1 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  1280: { slidesPerView: 4 },
}
</script>

<template>
  <section class="pt-[70px] pb-[10px]">
    <div class="container">
      <div class="flex flex-col md:flex-row md:justify-between relative mb-6">
        <div class="flex flex-col md:flex-row gap-x-20">
          <div>
            <div class="section-subtitle">Today’s</div>
            <div class="section-title mb-[20px] md:mb-[40px]">Flash Sales</div>
          </div>
          <BaseDate
            v-if="productSlider.products?.expiresAt"
            :expires-at="productSlider.products.expiresAt"
          />
        </div>
        <div class="absolute bottom-[75%] md:bottom-[33%] right-[5%] md:right-[0%] z-10 flex gap-2">
          <button
            class="products-slider-prev flex items-center justify-center bg-[#f5f5f5] w-[46px] h-[46px] p-1 rounded-full cursor-pointer transition"
            type="button"
          >
            <ArrowLeftIcon class="w-[19px] h-[16px]" />
          </button>

          <button
            class="products-slider-next flex items-center justify-center bg-[#f5f5f5] w-[46px] h-[46px] p-1 rounded-full cursor-pointer transition"
            type="button"
          >
            <ArrowRightIcon class="w-[19px] h-[16px]" />
          </button>
        </div>
      </div>

      <div
        v-if="!productSlider.isHomePageLoaded"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <ProductCard
          v-for="n in 4"
          :key="n"
          loading
          class="h-full"
        />
      </div>

      <Slider
        v-else
        :items="productSlider.products.items"
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
          <ProductCard
            :key="item.id"
            :product="item"
            class="h-full"
          />
        </template>
      </Slider>

      <router-link :to="{ name: 'discountProducts' }">
        <BaseButton class="mt-10 mx-auto flex">View All Products</BaseButton>
      </router-link>
    </div>
  </section>
</template>

<style scoped></style>
