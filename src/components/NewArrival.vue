<script setup lang="ts">
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const products = store.newArrivalProducts
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
          class="lg:col-span-2 lg:row-span-2 bg-cover bg-center relative md:p-6 p-4 min-h-[400px] sm:min-h-[500px] lg:min-h-[550px]"
          :style="{ backgroundImage: `url(${products[0].imageUrl})` }"
        >
          <div class="absolute bottom-4 left-4 right-4">
            <h2 class="text-lg font-bold">{{ products[0].title }}</h2>
            <p class="pt-1 pb-1">{{ products[0].description }}</p>
            <RouterLink :to="products[0].slug">
              <span class="mt-3 underline">Shop Now</span>
            </RouterLink>
          </div>
        </div>

        <div
          class="lg:col-span-2 bg-cover bg-center relative md:p-6 p-4 min-h-[300px] sm:min-h-[350px]"
          :style="{ backgroundImage: `url(${products[1].imageUrl})` }"
        >
          <div class="absolute bottom-4 left-4 right-4">
            <h2 class="text-lg font-bold">{{ products[1].title }}</h2>
            <p class="pt-1 pb-1">{{ products[1].description }}</p>
            <RouterLink :to="products[1].slug">
              <span class="mt-3 underline">Shop Now</span>
            </RouterLink>
          </div>
        </div>

        <div
          class="bg-cover bg-center relative md:p-6 p-4 min-h-[300px] sm:min-h-[350px]"
          :style="{ backgroundImage: `url(${products[2].imageUrl})` }"
        >
          <div class="absolute bottom-4 left-4 right-4">
            <h2 class="text-lg font-bold">{{ products[2].title }}</h2>
            <p class="pt-1 pb-1">{{ products[2].description }}</p>
            <RouterLink :to="products[2].slug">
              <span class="mt-3 underline">Shop Now</span>
            </RouterLink>
          </div>
        </div>

        <div
          class="bg-cover bg-center relative md:p-6 p-4 min-h-[300px] sm:min-h-[350px]"
          :style="{ backgroundImage: `url(${products[3].imageUrl})` }"
        >
          <div class="absolute bottom-4 left-4 right-4">
            <h2 class="text-lg font-bold">{{ products[3].title }}</h2>
            <p class="pt-1 pb-1">{{ products[3].description }}</p>
            <RouterLink :to="products[3].slug">
              <span class="mt-3 underline">Shop Now</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
