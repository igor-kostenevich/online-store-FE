<script setup lang="ts">
import MenuProducts from '@/components/Sliders/MenuProducts.vue'
import BestSelling from '@/components/Products/BestSelling.vue'
import InfoSection from '@/components/Products/InfoSection.vue'
import SpecialOffer from '@/components/Products/SpecialOffer.vue'
import NewArrival from '@/components/Products/NewArrival.vue'
import ExploreProducts from '@/components/Sliders/ExploreProducts.vue'
import SliderCategory from '@/components/Sliders/SliderCategory.vue'
import SliderProducts from '@/components/Sliders/SliderProducts.vue'
import { useCategoriesStore } from '@/stores/categories'
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useAuthStore } from '@/stores/auth'

const store = useCategoriesStore()
const productStore = useProductsStore()
const authStore = useAuthStore()
onMounted(async () => {
  if (authStore.isAuthenticated) {
    await productStore.getWishList()
  }

  await store.getHomePageData()
})
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
