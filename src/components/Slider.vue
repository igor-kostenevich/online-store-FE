<template>
  <div class="relative">
    <swiper
      class="w-full"
      :modules="modules"
      :slides-per-view="slidesView"
      :space-between="spaceBetween"
      :loop="loop"
      :effect="slideEffect"
      :initial-slide="slideStart"
      :pagination="pagination ? { el: '.swiper-pagination', clickable: true } : false"
      :navigation="navigation ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } : false"
      :breakpoints="breakpoints"
      :autoplay="{ delay: 3000 }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="index"
      >
        <slot
          name="slide"
          :item="item"
          :index="index"
        />
      </swiper-slide>
    </swiper>

    <slot name="navigation" />
    <slot name="pagination" />
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules'

const modules = [Pagination, Navigation, EffectFade, Autoplay]

defineProps<{
  slidesView: number
  spaceBetween: number
  slideEffect: string
  slideStart: number
  loop: boolean
  items: any[]
  pagination?: boolean
  navigation?: boolean
  breakpoints?: any[]
}>()

const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style scoped>
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none !important;
}
</style>
