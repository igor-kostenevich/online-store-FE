<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useTimer } from '@/composables/useTimer'

const props = defineProps<{
  days: number
  hours: number
  minutes: number
  seconds: number
}>()

const timer = useTimer()

let intervalId: number

onMounted(() => {
  timer.setTime(props.days, props.hours, props.minutes, props.seconds)

  intervalId = setInterval(() => {
    timer.tick()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="text-center">
      <div class="text-sm">Days</div>
      <div class="text-4xl font-bold">{{ timer.leftDays.value.toString().padStart(2, '0') }}</div>
    </div>
    <div class="text-pink-400 text-3xl mt-4">:</div>
    <div class="text-center">
      <div class="text-sm">Hours</div>
      <div class="text-4xl font-bold">{{ timer.leftHours.value.toString().padStart(2, '0') }}</div>
    </div>
    <div class="text-pink-400 text-3xl mt-4">:</div>
    <div class="text-center">
      <div class="text-sm">Minutes</div>
      <div class="text-4xl font-bold">{{ timer.leftMinutes.value.toString().padStart(2, '0') }}</div>
    </div>
    <div class="text-pink-400 text-3xl mt-4">:</div>
    <div class="text-center">
      <div class="text-sm">Seconds</div>
      <div class="text-4xl font-bold">{{ timer.leftSeconds.value.toString().padStart(2, '0') }}</div>
    </div>
  </div>
</template>

<style scoped></style>
