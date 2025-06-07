<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  error?: string
  disabled?: boolean
  placeholder?: string
  type?: string
  view?: 'secondary'
}>()

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:modelValue', value: string): void
}>()

const inputClass = computed(() => {
  if (props.view === 'secondary') {
    return [
      'block bg-secondary-medium-white   text-text-gray rounded-[5px]',
      'pt-3 pb-3 pl-4 w-full',
      props.disabled ? 'cursor-not-allowed bg-black-300' : '',
      props.error ? 'border border-red-500' : 'border border-transparent',
    ].join(' ')
  }
  return [
    'outline-none w-full transition duration-200 ease-in bg-transparent border-b',
    'border-gray-400 focus:border-black',
    'pb-1',
    props.disabled ? 'cursor-not-allowed bg-black-300' : '',
    props.error ? 'border-red-500 focus:border-red-500' : '',
  ].join(' ')
})
</script>

<template>
  <label class="block w-full">
    <span
      v-if="label"
      class="block mb-2 text-sm font-medium text-gray-400"
    >
      {{ label }}
    </span>

    <input
      :type="type || 'text'"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :class="inputClass"
      @input="event => emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />

    <p
      v-if="error"
      class="text-red-500 text-xs mt-1"
    >
      {{ error }}
    </p>
  </label>
</template>
