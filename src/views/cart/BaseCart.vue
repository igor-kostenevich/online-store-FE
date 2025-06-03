<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
const { breadcrumbs } = useBreadcrumbs()
const store = useCartStore()

const router = useRouter()
onMounted(() => {
  if (store.cartProducts.length === 0) {
    router.push({ name: 'home' })
  }
})
</script>

<template>
  <section>
    <div class="container px-4">
      <div class="flex flex-wrap items-center px-4 mb-6 text-sm text-text-gray gap-2 pt-[140px]">
        <template
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
        >
          <router-link :to="crumb.to">{{ crumb.name }}</router-link>
          <span v-if="index < breadcrumbs.length - 1">/</span>
        </template>
      </div>

      <router-view />
    </div>
  </section>
</template>

<style scoped></style>
