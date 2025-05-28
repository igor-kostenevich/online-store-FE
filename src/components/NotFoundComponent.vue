<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <section>
    <div class="container">
      <div class="pt-[170px] px-4 flex gap-2">
        <template
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
        >
          <router-link :to="crumb.to">{{ crumb.name }}</router-link>
          <span v-if="index < breadcrumbs.length - 1">/</span>
        </template>
      </div>
      <div class="pt-[35px] lg:pt-[90px] pb-[100px] flex justify-center flex-col items-center">
        <h1 class="font-medium text-[50px] lg:text-[110px] pb-3">404 Not Found</h1>
        <h3 class="pb-8 lg:pb-16">Your visited page not found. You may go home page.</h3>

        <router-link :to="{ name: 'home' }">
          <base-button>Back to home page</base-button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
