<script setup lang="ts">
import { watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/Products/ProductCard.vue'
import Pagination from '@/components/Pagination.vue'

const store = useProductsStore()
const route = useRoute()
const router = useRouter()
const currentPage = computed(() => Number(route.query.page))

watch(
  currentPage,
  newPage => {
    store.getDiscountProducts(20, newPage)
  },
  { immediate: true },
)

function onChangePage(newPage: number) {
  router.push({
    path: `/products/discount/`,
    query: {
      page: newPage,
    },
  })
}
</script>

<template>
  <section class="pt-[140px] pb-[70px]">
    <div class="container">
      <div class="section-title mb-10">Discounted Products</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="item in store.products.items"
          :key="item.id"
          :product="item"
        />
      </div>

      <Pagination
        :current-page="currentPage"
        :total-pages="store.products.meta?.totalPages"
        class="mt-10"
        @change-page="onChangePage"
      />
    </div>
  </section>
</template>
