<script setup lang="ts">
import { useBestSelling } from '@/stores/bestSelling'

const store = useBestSelling()
</script>

<template>
  <section class="pt-[100px] pb-[100px]">
    <div class="container px-4">
      <div class="h-px bg-gray-200 mb-[50px]"></div>

      <div class="flex md:flex-row flex-col justify-between">
        <div>
          <div class="section-subtitle">This Month</div>
          <div class="section-title">Best Selling Products</div>
        </div>
        <BaseButton class="self-center mb-4 md:mb-0">View All</BaseButton>
      </div>
      <div class="flex justify-between flex-wrap gap-4">
        <BaseProductCard
          v-for="product in store.bestSellingProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
