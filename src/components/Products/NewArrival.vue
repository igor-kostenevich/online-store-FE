<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { computed } from 'vue'

const store = useProductsStore()
const products = computed(() => store.newArrivalProducts)
</script>

<template>
  <section class="pt-[70px] pb-[10px]">
    <div class="container">
      <div>
        <div class="section-subtitle">Featured</div>
        <div class="section-title">New Arrival</div>
      </div>

      <div class="grid gap-4 text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        <div
          v-for="(product, index) in products.slice(0, 4)"
          :key="product.id"
          :class="[
            'relative overflow-hidden',
            index === 0 ? 'lg:col-span-2 lg:row-span-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[550px]' : 'min-h-[300px] sm:min-h-[350px]',
            index === 1 ? 'lg:col-span-2' : '',
          ]"
        >
          <img
            class="absolute inset-0 w-full h-full object-contain p-10"
            :src="product.images[0]?.url"
            alt=""
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div class="absolute bottom-4 left-4 right-4">
            <h2 class="text-xl font-bold drop-shadow-lg">{{ product.name }}</h2>
            <p class="mt-1 text-sm drop-shadow-sm">{{ product.description }}</p>
            <RouterLink :to="product.slug">
              <span class="mt-3 inline-block underline drop-shadow-md">Shop Now</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
