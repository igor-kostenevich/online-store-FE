<template>
  <div class="flex items-center border rounded overflow-hidden w-[170px]">
    <button
      class="w-1/3 py-1 text-xl border-r hover:bg-secondary-red hover:text-white duration-100 ease-in"
      @click="decrease"
    >
      –
    </button>
    <div class="w-1/2 text-center text-xl">{{ modelValue }}</div>
    <button
      class="w-1/3 py-1 text-xl border-l hover:bg-secondary-red hover:text-white duration-100 ease-in"
      @click="increase"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue: number
  min?: number
  max?: number
}>()

const emit = defineEmits(['update:modelValue'])

const decrease = () => {
  if (props.min === undefined || props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
  }
}

const increase = () => {
  if (props.max === undefined || props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1)
  }
}
</script>
