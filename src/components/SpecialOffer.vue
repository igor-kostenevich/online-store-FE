<script setup lang="ts">
import { useTimer } from '@/composables/useTimer'
import { useSpecialOffer } from '@/stores/specialOffer'
import { onMounted } from 'vue'

const timer = useTimer()
const store = useSpecialOffer()
const product = store.productName[0]
let intervalId: number

onMounted(()=>{
  timer.setTime(10,4,50,20)
  intervalId = setInterval(() => {
    timer.tick()
  }, 1000)


  
})

</script>

<template>
  <div class="container mt-[140px]">
    <div :style="`background-image: url(${product.imageUrl})`">
      <div class="text-primary-white p-12">
        <div class="text-5xl max-w-[443px]">{{product.title}}</div>

        <div class="mt-5  text-xl  font-semibold">{{product.productName}}</div>

        <div class="flex items-center gap-4 mt-9 text-primary-light-black">

          <div class="text-center bg-primary-white p-2 rounded-full w-[62px] h-[62px] ">
            <div class="font-bold">{{ timer.leftHours.value.toString().padStart(2, '0') }}</div>
            <div class="text-xs">Hours</div>
          </div>

          <div class="text-center bg-primary-white p-2 rounded-full w-[62px] h-[62px]">
            <div class=" font-bold">{{ timer.leftDays.value.toString().padStart(2, '0') }}</div>
            <div class="text-xs">Days</div>
          </div>



          <div class="text-center bg-primary-white p-2 rounded-full w-[62px] h-[62px]">
            <div class=" font-bold">{{ timer.leftMinutes.value.toString().padStart(2, '0') }}</div>
            <div class="text-xs">Minutes</div>
          </div>
          <div class="text-center  bg-primary-white p-2 rounded-full w-[62px] h-[62px]">
            <div class=" font-bold">{{ timer.leftSeconds.value.toString().padStart(2, '0') }}</div>
            <div class="text-xs">Seconds</div>
          </div>
        </div>



        <base-button class="mt-10 mb-12">
          Buy Now!
        </base-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
