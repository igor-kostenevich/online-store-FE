<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { onMounted } from 'vue'

const store = useProductsStore()

onMounted(() => {
  store.getOrders()
})
</script>

<template>
  <section class="pt-[140px] pb-[70px]">
    <div class="container px-4 sm:px-6 lg:px-8">
      <h2 class="section-title mb-10">Order Products</h2>

      <div
        v-for="order in store.orders"
        :key="order.id"
        class="border rounded-lg p-4 mb-6"
      >
        <div class="flex flex-col sm:flex-row justify-between mb-2">
          <span class="font-medium">Order #{{ order.id }}</span>
          <span class="text-sm text-gray-500 mt-1 sm:mt-0">
            {{ new Date(order.createdAt).toLocaleDateString() }}
          </span>
        </div>
        <div class="mb-4">Status: {{ order.status }}</div>

        <div
          v-for="(item, index) in order.items"
          :key="index"
          class="flex flex-col sm:flex-row items-start sm:items-center border-t py-3 first:border-t-0"
        >
          <img
            :src="item.image"
            alt=""
            class="h-16 w-16 sm:h-20 sm:w-20 object-contain mb-2 sm:mb-0 sm:mr-4"
          />
          <div class="flex-1">
            <div class="font-medium text-sm sm:text-base">{{ item.name }}</div>
            <div class="text-xs sm:text-sm text-gray-500">quantity: {{ item.quantity }}</div>
          </div>
          <div class="font-medium text-sm sm:text-base mt-2 sm:mt-0">${{ (item.price * item.quantity).toFixed(2) }}</div>
        </div>

        <div class="text-right font-semibold mt-4 text-sm sm:text-base">Total: ${{ order.total.toFixed(2) }}</div>
      </div>
    </div>
  </section>
</template>
