<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useTimer } from '@/composables/useTimer'
import { usePromoStore } from '@/stores/promo'

const timer = useTimer()
const store = usePromoStore()

let intervalId: any

onMounted(async () => {
  await store.getPromoBanner()

  timer.setTargetDate(store.promoBanner.expiresAt)

  intervalId = setInterval(() => {
    timer.tick()
    if (timer.isFinished.value) {
      clearInterval(intervalId)
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <section class="pt-[100px] pb-[70px]">
    <div class="container">
      <div
        v-if="store.promoBanner.product"
        class="bg-cover bg-center bg-no-repeat"
        :style="`background-image: url('${store.promoBanner.product.images[0].url}')`"
      >
        <div class="text-primary-white p-8 md:p-12">
          <div class="text-3xl max-w-[443px] leading-[1.3]">
            {{ store.promoBanner.product.description }}
          </div>

          <div class="mt-5 text-xl font-semibold">{{ store.promoBanner.product.category.name }}</div>

          <div class="flex items-center gap-4 mt-9 text-primary-light-black flex-wrap">
            <div class="text-center bg-primary-white p-2 rounded-full w-[62px] h-[62px] flex flex-col items-center justify-center">
              <div class="font-bold">{{ timer.leftDays.value.toString().padStart(2, '0') }}</div>
              <div class="text-[10px] leading-[1.1] break-words text-center">Days</div>
            </div>

            <div class="text-center bg-primary-white p-2 rounded-full w-[62px] h-[62px] flex flex-col items-center justify-center">
              <div class="font-bold">{{ timer.leftHours.value.toString().padStart(2, '0') }}</div>
              <div class="text-[10px] leading-[1.1] break-words text-center">Hours</div>
            </div>

            <div class="text-center bg-primary-white p-2 rounded-full w-[62px] h-[62px] flex flex-col items-center justify-center">
              <div class="font-bold">{{ timer.leftMinutes.value.toString().padStart(2, '0') }}</div>
              <div class="text-[10px] leading-[1.1] break-words text-center">Minutes</div>
            </div>

            <div class="text-center bg-primary-white p-2 rounded-full w-[62px] h-[62px] flex flex-col items-center justify-center">
              <div class="font-bold">{{ timer.leftSeconds.value.toString().padStart(2, '0') }}</div>
              <div class="text-[10px] leading-[1.1] break-words text-center">Seconds</div>
            </div>
          </div>

          <base-button class="mt-10 mb-12">Buy Now!</base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
