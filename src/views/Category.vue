<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Pagination from '@/components/Pagination.vue'
import ProductCard from '@/components/Products/ProductCard.vue'

const store = useCategoriesStore()
const route = useRoute()
const router = useRouter()

watch(
  () => [route.params.slug, route.query.page],
  ([slug, page]) => {
    const p = Number(page) || 1
    store.getCategoriesMenuProducts(slug as string, 20, p)
  },
  { immediate: true },
)

function onChangePage(newPage: number) {
  const slug = route.params.slug as string
  router.push({
    name: 'сategory',
    params: { slug },
    query: { page: newPage },
  })
}
</script>

<template>
  <section class="pt-[140px]">
    <div class="container">
      <div
        v-if="store.loading"
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
          v-for="product in store.categoryProducts.data"
          :key="product.id"
          :product="product"
        />
      </div>

      <Pagination
        :current-page="Number(route.query.page) || 1"
        :total-pages="store.categoryProducts?.meta?.totalPages ?? 1"
        @change-page="onChangePage"
      />
    </div>
  </section>
</template>

<style scoped></style>
