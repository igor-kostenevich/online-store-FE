<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { computed } from 'vue'
import ProductCard from '@/components/Products/ProductCard.vue'

const store = useProductsStore()

const loading = computed(() => {
  const items = store.products?.items
  return !items || items.length === 0
})
</script>
<template>
  <section class="pt-[70px] pb-[70px]">
    <div class="container">
      <div class="h-px bg-gray-200 mb-[50px]" />
      <div class="flex md:flex-row flex-col justify-between">
        <div>
          <div class="section-subtitle">This Month</div>
          <div class="section-title">Best Selling Products</div>
        </div>

        <router-link :to="{ name: 'best-selling' }">
          <BaseButton class="self-center mb-4 md:mb-0">View All</BaseButton>
        </router-link>
      </div>

      <div
        v-if="loading"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <ProductCard
          v-for="n in 4"
          :key="n"
          loading
          class="h-full"
        />
      </div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
      >
        <ProductCard
          v-for="product in store.bestSellingProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
