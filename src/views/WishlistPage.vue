<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const productStore = useProductsStore()
const cartStore = useCartStore()
const router = useRouter()

onMounted(() => {
  productStore.getWishList()
})

function moveAllToCart() {
  productStore.wishList.forEach(product => {
    cartStore.addToCart(product)
  })

  router.push({ name: 'cartOverview' })
  productStore.clearWishList()
}
</script>

<template>
  <section class="pt-[140px] pb-[150px]">
    <div class="container">
      <div class="flex justify-between items-center">
        <h1 class="text-[20px] pb-[30px] lg:pb-[60px]">Wishlist ({{ productStore.wishList.length }})</h1>
        <BaseButton
          view="secondary"
          class="self-start"
          @click="moveAllToCart"
        >
          Move all to Cart
        </BaseButton>
      </div>
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <ProductCard
            v-for="product in productStore.wishList"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
