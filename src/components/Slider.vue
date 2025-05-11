<template>
  <div class="relative">
    <swiper
      class="w-full"
      :modules="modules"
      :slides-per-view="slidesView"
      :slides-per-group="slidesPerGroup"
      :space-between="spaceBetween"
      :loop="loop"
      :loop-fill-group-with-blank="loopFillGroupWithBlank"
      :effect="slideEffect"
      :fade-effect="{ crossFade: true }"
      :initial-slide="slideStart"
      :navigation="navigation ? { nextEl: nextBtnId, prevEl: prevBtnId } : false"
      :breakpoints="breakpoints"
      :pagination="pagination"
      :grid="grid"
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
import { Pagination, Navigation, EffectFade, Autoplay, Grid } from 'swiper/modules'

const modules = [Pagination, Navigation, EffectFade, Autoplay, Grid]

defineProps<{
  slidesView: number
  spaceBetween: number
  slideEffect: string
  slideStart: number
  loop?: boolean
  items: any[]
  pagination?: boolean
  navigation?: boolean
  breakpoints?: any
  slidesPerGroup?: number
  grid?: Object
  loopFillGroupWithBlank?: boolean
  nextBtnId?: string
  prevBtnId?: string
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
