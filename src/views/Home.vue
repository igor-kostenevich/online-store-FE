<script setup lang="ts">
import MenuProducts from '@/components/sliders/MenuProducts.vue'
import BestSelling from '@/components/BestSelling.vue'
import InfoSection from '@/components/InfoSection.vue'
import SpecialOffer from '@/components/SpecialOffer.vue'
import NewArrival from '@/components/NewArrival.vue'
import ExploreProducts from '@/components/sliders/ExploreProducts.vue'
import SliderCategory from '@/components/sliders/SliderCategory.vue'
import SliderProducts from '@/components/sliders/SliderProducts.vue'
</script>

<template>
  <MenuProducts />
  <SliderProducts />
  <SliderCategory />
  <BestSelling />
  <SpecialOffer />
  <ExploreProducts />
  <NewArrival />
  <InfoSection />
</template>
