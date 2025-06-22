<template>
  <router-link
    :to="to"
    v-bind="attrs"
  >
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'

defineProps<{ to: string }>()
const attrs = useAttrs()
</script>
