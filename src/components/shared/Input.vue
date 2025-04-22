<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  error?: string
  disabled?: boolean
  placeholder?: string
  type?: string
}>()

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:modelValue', value: string): void
}>()

const inputClass = computed(() => {
  return [
    'outline-none border-0 w-full transition duration-200 ease-in bg-transparent border-b border-black',
    'focus:border-buttons-green hover:border-gray-400',
    props.disabled ? 'cursor-not-allowed bg-gray-300' : '',
    props.error ? 'border-red-500' : '',
  ].join(' ')
})
</script>

<template>
  <label class="block w-full">
    <span
      v-if="label"
      class="block mb-1 text-sm font-medium text-gray-700"
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
