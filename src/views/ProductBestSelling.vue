<script setup lang="ts">
import { watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import BaseProductCard from '@/components/Products/ProductCard.vue'
import Pagination from '@/components/Pagination.vue'

const store = useProductsStore()
const route = useRoute()
const router = useRouter()
const currentPage = computed(() => Number(route.query.page))

watch(
  currentPage,
  newPage => {
    store.getBestSellingProducts(20, newPage)
  },
  { immediate: true },
)

function onChangePage(newPage: number) {
  router.push({
    path: `/products/best-selling/`,
    query: {
      page: newPage,
    },
  })
}
</script>

<template>
  <section class="pt-[140px] pb-[70px]">
    <div class="container">
      <div class="section-title mb-10">Best-Selling Products</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <BaseProductCard
          v-for="item in store.bestSellingProducts.data"
          :key="item.id"
          :product="item"
        />
      </div>

      <Pagination
        :current-page="currentPage"
        :total-pages="store.bestSellingProducts.meta?.totalPages"
        class="mt-10"
        @change-page="onChangePage"
      />
    </div>
  </section>
</template>
