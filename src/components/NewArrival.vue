<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { computed, onMounted } from 'vue'

const store = useProductsStore()
const products = computed(() => store.newArrivalProducts)
onMounted(() => {
  store.getNewArrivalProducts()
})
</script>

<template>
  <section class="pt-[70px] pb-[70px]">
    <div class="container">
      <div>
        <div class="section-subtitle">Featured</div>
        <div class="section-title">New Arrival</div>
      </div>

      <div class="grid gap-4 text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-none lg:grid-rows-2">
        <div
          v-for="(product, index) in products.slice(0, 4)"
          :key="product.id"
          :class="[
            'bg-cover bg-center relative md:p-6 p-4',
            index === 0 ? 'lg:col-span-2 lg:row-span-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[550px]' : 'min-h-[300px] sm:min-h-[350px]',
            index === 1 ? 'lg:col-span-2' : '',
          ]"
          :style="{ backgroundImage: `url(${product.images[0]?.url})` }"
        >
          <div class="absolute bottom-4 left-4 right-4">
            <h2 class="text-lg font-bold">{{ product.name }}</h2>
            <p class="pt-1 pb-1">{{ product.description }}</p>
            <RouterLink :to="product.slug">
              <span class="mt-3 underline">Shop Now</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
