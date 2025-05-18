<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits(['change-page'])

function changePage(page: number) {
  if (page !== props.currentPage) {
    emit('change-page', page)
  }
}

const pages = computed(() => {
  const p: (number | string)[] = []

  p.push(1)

  if (props.currentPage > 3) {
    p.push('…')
  }

  for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
    if (i > 1 && i < props.totalPages) {
      p.push(i)
    }
  }

  if (props.currentPage < props.totalPages - 2) {
    p.push('…')
  }

  if (props.totalPages > 1) {
    p.push(props.totalPages)
  }

  return p
})
</script>

<template>
  <div class="flex justify-center items-center gap-2 mt-10">
    <button
      class="px-4 py-2 border rounded text-sm"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Prev
    </button>

    <template
      v-for="p in pages"
      :key="p + ''"
    >
      <button
        v-if="typeof p === 'number'"
        class="px-4 py-2 border rounded text-sm"
        :class="{
          'bg-black text-white': p === currentPage,
          'bg-white text-black': p !== currentPage,
        }"
        @click="changePage(p)"
      >
        {{ p }}
      </button>

      <span
        v-else
        class="px-4 py-2 text-sm select-none"
      >
        …
      </span>
    </template>

    <button
      class="px-4 py-2 border rounded text-sm"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>
