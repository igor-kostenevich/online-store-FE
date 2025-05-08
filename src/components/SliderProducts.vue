<script setup lang="ts">
import { HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'
import { useProductsStore } from '@/stores/products'
import Vue3StarRatings from 'vue3-star-ratings'
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
      <div class="flex flex-col md:flex-row md:justify-between">
        <div>
          <div class="section-subtitle">This Month</div>
          <div class="section-title mb-[20px] md:mb-[40px]">Explore Our Products</div>
        </div>

        <BaseDate
          :days="3"
          :hours="23"
          :minutes="19"
          :seconds="56"
        />
      </div>

      <Slider
        :items="productSlider.products"
        :slides-view="4"
        :space-between="20"
        slide-effect="slide"
        :slide-start="0"
        :loop="true"
        :breakpoints="breakpoints"
        class="mt-20"
      >
        <template #slide="{ item }">
          <div class="p-4 cursor-pointer">
            <div class="relative bg-secondary-medium-white p-10 mb-0.5 group">
              <img
                :src="item.image"
                alt="image"
                class="h-32 object-contain mx-auto mb-2"
              />

              <base-button class="absolute top-3 left-3 pt-1 pb-1 pl-3 pr-3"> -40%</base-button>

              <HeartIcon class="w-8 bg-white rounded-xl p-1 absolute top-3 right-3"></HeartIcon>

              <EyeIcon class="w-8 bg-white rounded-xl p-1 absolute top-[25%] right-3"></EyeIcon>

              <BaseButton class="absolute w-[100%] bg-text-black bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add To Cart
              </BaseButton>
            </div>

            <div class="font-semibold">{{ item.title }}</div>
            <div class="text-red-500 font-bold">
              {{ item.currency }}{{ item.price }}
              <span class="line-through text-gray-400 text-sm ml-2"> {{ item.currency }}{{ item.oldPrice }} </span>
            </div>

            <Vue3StarRatings
              v-model="item.rating"
              :star-size="17"
              star-color="#ff9800"
              inactive-color="#999"
              :number-of-stars="5"
              :disable-click="false"
              class="block w-fit"
            />
          </div>
        </template>
      </Slider>

      <router-link to="#">
        <BaseButton class="mt-10 mx-auto flex">View All Products</BaseButton>
      </router-link>
    </div>
  </section>
</template>
