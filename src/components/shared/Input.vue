/* eslint-disable */
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  disabled?: boolean
  type: string
  placeholder: string
  error?: string
  view?: 'default' | 'secondary'
}>()

const inputClass = computed(() => {
  const base = 'input outline-none border-0 transition duration-200 ease-in'

  const secondaryView = 'bg-[#e5e7eb] w-[470px] h-[50px] rounded-md px-3 py-2 focus:ring-2 focus:ring-buttons-green hover:bg-[#dcdcdc]'
  const defaultView = 'bg-transparent w-[370px] border-b border-black focus:border-buttons-green focus:ring-0 hover:border-gray-500'

  return `${base} ${props.view === 'secondary' ? secondaryView : defaultView}`
})
</script>

<template>
  <label>
    <input
      :class="[inputClass, { disabled }]"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
    />

    <div
      v-if="error"
      class="text-secondary-red mt-1 text-sm"
    >
      >
      {{ error }}
    </div>
  </label>
</template>

<style scoped>
.input.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.error {
  color: #db4444;
  font-size: 0.875rem;
  margin-top: 4px;
}
</style>
