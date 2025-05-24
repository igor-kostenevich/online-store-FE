<script setup lang="ts">
import Header from '@/components/Common/Header.vue'
import Footer from '@/components/Common/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-grow">
      <div class="flex h-full">
        <div class="flex flex-col flex-1 py-6 px-4 md:px-8 overflow-y-auto">
          <router-view />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
