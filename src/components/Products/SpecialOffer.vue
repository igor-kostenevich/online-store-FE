<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useTimer } from '@/composables/useTimer'
import { useProductsStore } from '@/stores/products'

const timer = useTimer()
const store = useProductsStore()
let intervalId: number

onMounted(() => {
  watch(
    () => store.banner.expiresAt,
    expiresAt => {
      if (expiresAt) {
        timer.setTargetDate(expiresAt)
        intervalId = window.setInterval(() => {
          timer.tick()
          if (timer.isFinished.value) {
            clearInterval(intervalId)
          }
        }, 1000)
      }
    },
    { immediate: true },
  )
})
</script>

<template>
  <section class="pt-[100px] pb-[10px]">
    <div class="container">
      <div
        v-if="store.banner.product"
        class="relative w-full min-h-[400px] md:h-[500px] py-10 bg-contain bg-no-repeat bg-center"
        :style="`background-image: url('${store.banner.product.images[0].url}')`"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
        <div class="absolute inset-0 bg-gradient-to-l from-gray-900/80 to-transparent" />

        <div class="relative z-10 flex flex-col justify-center h-full px-6 md:px-12">
          <div class="text-primary-white text-xl md:text-3xl max-w-[443px] leading-[1.3]">
            {{ store.banner.product.description }}
          </div>
          <div class="mt-5 text-xl font-semibold text-primary-white">
            {{ store.banner.product.category.name }}
          </div>
          <div class="flex items-center gap-4 mt-9 flex-wrap">
            <div class="text-center bg-primary-white p-2 rounded-full w-[55px] h-[55px] md:w-[62px] md:h-[62px] flex flex-col items-center justify-center">
              <div class="font-bold">{{ timer.leftDays.value.toString().padStart(2, '0') }}</div>
              <div class="text-[10px] leading-[1.1] break-words text-center">Days</div>
            </div>
            <div class="text-center bg-primary-white p-2 rounded-full w-[55px] h-[55px] md:w-[62px] md:h-[62px] flex flex-col items-center justify-center">
              <div class="font-bold">{{ timer.leftHours.value.toString().padStart(2, '0') }}</div>
              <div class="text-[10px] leading-[1.1] break-words text-center">Hours</div>
            </div>
            <div class="text-center bg-primary-white p-2 rounded-full w-[55px] h-[55px] md:w-[62px] md:h-[62px] flex flex-col items-center justify-center">
              <div class="font-bold">{{ timer.leftMinutes.value.toString().padStart(2, '0') }}</div>
              <div class="text-[10px] leading-[1.1] break-words text-center">Minutes</div>
            </div>
            <div class="text-center bg-primary-white p-2 rounded-full w-[55px] h-[55px] md:w-[62px] md:h-[62px] flex flex-col items-center justify-center">
              <div class="font-bold">{{ timer.leftSeconds.value.toString().padStart(2, '0') }}</div>
              <div class="text-[10px] leading-[1.1] break-words text-center">Seconds</div>
            </div>
          </div>

          <router-link :to="{ name: 'productDetails', params: { slug: store.banner.product.slug } }">
            <base-button class="mt-10 mb-12 self-baseline">Buy Now!</base-button>
          </router-link>
        </div>
      </div>

      <div
        v-else
        class="relative w-full min-h-[400px] md:h-[500px] py-10 bg-gray-200 rounded-md animate-pulse overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-200/50" />
        <div class="absolute inset-0 bg-gradient-to-l from-gray-200 to-gray-200/50" />

        <div class="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 space-y-4">
          <div class="h-6 bg-gray-300 rounded w-3/5" />
          <div class="h-6 bg-gray-300 rounded w-2/5" />
          <div class="flex items-center gap-4 mt-6">
            <div class="h-[62px] w-[62px] bg-gray-300 rounded-full" />
            <div class="h-[62px] w-[62px] bg-gray-300 rounded-full" />
            <div class="h-[62px] w-[62px] bg-gray-300 rounded-full" />
            <div class="h-[62px] w-[62px] bg-gray-300 rounded-full" />
          </div>
          <div class="h-12 bg-gray-300 rounded w-32 mt-8" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
