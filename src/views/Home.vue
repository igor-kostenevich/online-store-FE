<script setup lang="ts">
import MenuProducts from '@/components/Sliders/MenuProducts.vue'
import BestSelling from '@/components/Products/BestSelling.vue'
import InfoSection from '@/components/Products/InfoSection.vue'
import SpecialOffer from '@/components/Products/SpecialOffer.vue'
import NewArrival from '@/components/Products/NewArrival.vue'
import ExploreProducts from '@/components/Sliders/ExploreProducts.vue'
import SliderCategory from '@/components/Sliders/SliderCategory.vue'
import SliderProducts from '@/components/Sliders/SliderProducts.vue'
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
