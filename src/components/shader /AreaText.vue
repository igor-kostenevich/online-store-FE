<script setup lang="ts">
defineProps<{
  areaPlaceholder: string
  error?: string
  disabled?: boolean
  height?: number
}>()
</script>

<template>
  <div>
    <textarea
      :placeholder="areaPlaceholder"
      :disabled="disabled"
      :rows="height"
      class="p-3 bg-secondary-mediumWhite font-sans border border-transparent outline-none focus:border-buttons-green hover:border-buttons-hoverRed transition-colors duration-200 ease-in-out w-full disabled:cursor-not-allowed"
    />

    <div
      v-if="error"
      class="text-secondary-red mt-1 text-sm"
    >
      {{ error }}
    </div>
  </div>
</template>
