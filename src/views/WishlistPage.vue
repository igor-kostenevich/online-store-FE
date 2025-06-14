<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { onMounted } from 'vue'
import ProductCard from '@/components/Products/ProductCard.vue'

const store = useProductsStore()

onMounted(() => {
  store.getWishList()
})
</script>

<template>
  <section class="pt-[140px]">
    <h1 class="text-[20px] pb-[30px] lg:pb-[75px]">Wishlist ({{ store.wishList.length }})</h1>
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <ProductCard
          v-for="(product, index) in store.wishList"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
