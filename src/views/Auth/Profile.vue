<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(async () => {
  await authStore.getProfile()
  console.log(authStore.user)
})
</script>

<template>
  <section>
    <div class="container">
      <div class="pt-[130px] pb-[140px]">
        <h2 class="text-xl font-bold">Welcome, {{ authStore.user?.name }}</h2>
        <p>Email: {{ authStore.user?.email }}</p>
        <h3 class="font-bold">role: {{ authStore.user?.role }}</h3>
      </div>
    </div>
  </section>
</template>
