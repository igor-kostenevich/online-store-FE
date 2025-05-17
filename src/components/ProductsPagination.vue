<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits(['change-page'])

function changePage(page: number) {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('change-page', page)
  }
}

const pages = computed(() => {
  const pagesArray: number[] = []
  for (let i = 1; i <= props.totalPages; i++) {
    pagesArray.push(i)
  }
  return pagesArray
})
</script>

<template>
  <div class="flex justify-center items-center flex-wrap gap-2 mt-8">
    <button
      class="px-4 py-2 border rounded text-sm"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Prev
    </button>

    <button
      v-for="p in pages"
      :key="p"
      class="px-4 py-2 border rounded text-sm"
      :class="{
        'bg-black text-white': currentPage === p,
        'bg-white text-black': currentPage !== p,
      }"
      @click="changePage(p)"
    >
      {{ p }}
    </button>

    <button
      class="px-4 py-2 border rounded text-sm"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<style scoped></style>
