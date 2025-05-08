<script setup lang="ts">
import MenuProducts from '@/components/MenuProducts.vue'
import BestSelling from '@/components/BestSelling.vue'
import InfoSection from '@/components/InfoSection.vue'
import SpecialOffer from '@/components/SpecialOffer.vue'
import NewArrival from '@/components/NewArrival.vue'
import ExploreProducts from '@/components/ExploreProducts.vue'
import SliderCategory from '@/components/SliderCategory.vue'
import SliderProducts from '@/components/SliderProducts.vue'
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
