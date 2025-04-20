<script setup lang="ts">
defineProps<{
  areaPlaceholder: string
  error?: string
  disabled?: boolean
}>()
</script>

<template>
  <div>
    <textarea
      :placeholder="areaPlaceholder"
      class="p-3 "
      :class="{ disabled }"
    ></textarea>

    <div class="error">
      <div v-if="error">{{error}}</div>
    </div>
  </div>
</template>

<style scoped>

textarea.disabled {
    cursor: not-allowed;

}
</style>
