<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <section>
    <div class="container">
      <div class="flex flex-wrap items-center mb-6 text-sm text-text-gray gap-2 pt-[140px]">
        <template
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
        >
          <router-link
            :to="crumb.to"
            :class="index === breadcrumbs.length - 1 ? 'text-black' : ''"
          >
            {{ crumb.name }}
          </router-link>
          <span v-if="index < breadcrumbs.length - 1">/</span>
        </template>
      </div>

      <router-view />
    </div>
  </section>
</template>

<style scoped></style>
