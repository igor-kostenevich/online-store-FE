<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <!-- Icons -->
  <svg
    v-if="name === 'arrow-right'"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.7583 20.5C39.7583 9.73045 31.0278 1 20.2583 1C9.48875 1 0.758301 9.73045 0.758301 20.5C0.758301 31.2696 9.48875 40 20.2583 40C31.0278 40 39.7583 31.2696 39.7583 20.5Z"
      stroke="currentColor"
    />
    <path
      d="M20.2583 28.5L28.2583 20.5M28.2583 20.5L20.2583 12.5M28.2583 20.5H12.2583"
      stroke="currentColor"
    />
  </svg>
</template>
