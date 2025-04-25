<template>
  <swiper
    class="w-full h-[300px]"
    :slides-per-view="slidesView"
    :space-between="spaceBetween"
    :loop="loop"
    :effect="slideEffect"
    :initial-slide="slideStart"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in items"
                  :key="index">
      <slot name="slide"
            :item="item"
            :index="index" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
const props = defineProps<{
  slidesView: number
  spaceBetween: number
  slideEffect: string
  slideStart: number
  loop: boolean
  items: any[]
}>()

const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>
