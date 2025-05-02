<script setup lang="ts">
import { useBestSelling } from '@/stores/bestSelling'
import BaseButton from '@/components/shared/BaseButton.vue'

const store = useBestSelling()
</script>

<template>
  <div class="container px-4">
    <div class="md:flex-row flex-col justify-between">
      <div>
        <div class="section-subtitle">This Month</div>
        <div class="section-title">Best Selling Products</div>
      </div>
      <BaseButton class="self-center mb-4 md:mb-0"> View All </BaseButton>
    </div>
    <div class="flex justify-between flex-wrap gap-4">
      <BaseProductCard
        v-for="product in store.bestSellingProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped></style>
