<script setup lang="ts">
const props = defineProps<{
  view?: 'primary' | 'secondary'
  disabled?: boolean
}>()
</script>

<template>
  <button
    :disabled="props.disabled"
    :class="[
      'text-base font-medium rounded-md px-10 py-3 transition duration-150 ease-in-out',

      props.view !== 'secondary'
        ? [
            'text-white',
            props.disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-button-secondary-hover hover:bg-button-secondary-default active:bg-button-primary-hover',
          ]
        : [
            props.disabled
              ? 'border border-gray-400 text-gray-400 cursor-not-allowed bg-white'
              : 'border border-black text-black bg-white hover:bg-gray-100 active:bg-gray-200',
          ],

      'focus:outline-black active:outline focus:outline-1',
    ]"
  >
    <slot />
  </button>
</template>
