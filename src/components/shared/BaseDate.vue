<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useTimerStore } from '@/stores/timer'

const props = defineProps<{
  days: number
  hours: number
  minutes: number
  seconds: number
}>()

const timerStore = useTimerStore()

let intervalId: number

onMounted(() => {
  timerStore.setTime(props.days, props.hours, props.minutes, props.seconds)

  intervalId = setInterval(() => {
    timerStore.tick()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="text-center">
      <div class="text-4xl font-bold">{{ timerStore.leftDays.toString().padStart(2, '0') }}</div>
      <div class="text-sm">Days</div>
    </div>
    <div class="text-pink-400 text-3xl">:</div>
    <div class="text-center">
      <div class="text-4xl font-bold">{{ timerStore.leftHours.toString().padStart(2, '0') }}</div>
      <div class="text-sm">Hours</div>
    </div>
    <div class="text-pink-400 text-3xl">:</div>
    <div class="text-center">
      <div class="text-4xl font-bold">{{ timerStore.leftMinutes.toString().padStart(2, '0') }}</div>
      <div class="text-sm">Minutes</div>
    </div>
    <div class="text-pink-400 text-3xl">:</div>
    <div class="text-center">
      <div class="text-4xl font-bold">{{ timerStore.leftSeconds.toString().padStart(2, '0') }}</div>
      <div class="text-sm">Seconds</div>
    </div>
  </div>
</template>

<style scoped>
</style>
