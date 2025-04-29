<script setup lang="ts">
import Header from '@/assets/images/components/Header.vue'
import Footer from '@/assets/images/components/Footer.vue'
</script>

<template>
  <Header />
  <main class="content h-full">
    <div class="flex h-full">
      <div class="flex flex-col flex-1 py-6 px-4 md:px-8 overflow-y-auto">
        <router-view />
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>
