<script setup lang="ts">
import { watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/Products/ProductCard.vue'
import Pagination from '@/components/Pagination.vue'

const store = useProductsStore()
const route = useRoute()
const router = useRouter()
const currentPage = computed(() => {
  const page = Number(route.query.page)
  return isNaN(page) || page < 1 ? 1 : page
})

watch(
  currentPage,
  newPage => {
    store.getAllProducts(20, newPage)
  },
  { immediate: true },
)

function onChangePage(newPage: number) {
  router.push({
    path: `/products/explore/`,
    query: {
      page: newPage,
    },
  })
}

const loading = computed(() => {
  const items = store.allProducts.all.items.data
  return !items || items.length === 0
})
</script>

<template>
  <section class="pt-[140px] pb-[70px]">
    <div class="container">
      <div class="section-title mb-10">explore Products</div>

      <div
        v-if="loading"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <ProductCard
          v-for="n in 24"
          :key="n"
          loading
          class="h-full"
        />
      </div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <ProductCard
          v-for="item in store.allProducts.all.items.data"
          :key="item.id"
          :product="item"
        />
      </div>

      <Pagination
        v-if="!loading"
        :current-page="currentPage"
        :total-pages="store.allProducts.all.items.meta?.totalPages ?? 1"
        @change-page="onChangePage"
      />
    </div>
  </section>
</template>
