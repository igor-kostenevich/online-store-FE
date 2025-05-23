<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <section class="pt-[120px]">
    <div class="container">
      <div class="flex justify-between items-center mb-6">
        <div class="flex gap-2 text-sm text-text-gray">
          <template
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
          >
            <router-link :to="crumb.to">{{ crumb.name }}</router-link>
            <span v-if="index < breadcrumbs.length - 1">/</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
