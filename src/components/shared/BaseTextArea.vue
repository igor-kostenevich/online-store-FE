<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  areaPlaceholder: string
  error?: string
  disabled?: boolean
  height?: number
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full">
    <textarea
      :value="props.modelValue"
      :placeholder="props.areaPlaceholder"
      :disabled="props.disabled"
      :rows="props.height || 4"
      :class="[
        'w-full p-3 font-poppins resize-none rounded-md transition-colors duration-200 ease-in-out outline-none',
        'bg-secondary-mediumWhite border',
        props.error ? 'border-secondary-red focus:border-secondary-red' : 'border-transparent focus:border-buttons-green hover:border-buttons-hoverRed',
        props.disabled ? 'cursor-not-allowed bg-gray-200' : '',
      ]"
      @input="(event) => {
        const target = (event as InputEvent).target as HTMLTextAreaElement | null;
        if (target) {
          $emit('update:modelValue', target.value);
        }
      }"
    />
    <p
      v-if="props.error"
      class="text-secondary-red mt-1 text-sm"
    >
      {{ props.error }}
    </p>
  </div>
</template>
