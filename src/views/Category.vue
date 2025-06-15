<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = useCategoriesStore()
const route = useRoute()
onMounted(() => {
  const slug = route.params.slug as string
  store.getCategoriesMenuProducts(slug, 20, 1)
})
</script>

<template>
  <section class="pt-[140px]">
    <div class="container">
      <!--      <ProductCard-->
      <!--        v-for="product in store.categoryProducts.data"-->
      <!--        :product="product"-->
      <!--      />-->
    </div>
  </section>
</template>

<style scoped></style>
