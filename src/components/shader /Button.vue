<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button
    :class="[
      'button bg-buttons-red text-white pt-3 pb-3 pl-10 pr-10 text-base font-medium rounded-md hover:bg-buttons-hoverRed transition duration-150 ease-in-out ',
      { disabled },
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  transition: all 0.2s ease-in-out;
}

.button:active {
  outline: 1px solid black;
  color: black;
  background: transparent;
}
.button:focus {
  outline: 1px solid black;
}

.button.disabled {
  cursor: not-allowed;
  background-color: #e07575;
}
</style>
