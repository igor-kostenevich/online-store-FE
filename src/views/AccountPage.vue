<script setup lang="ts">
import SiderBarAccount from '@/components/shared/SiderBarAccount.vue'
</script>

<template>
  <section class="pt-[140px]">
    <div class="container">
      <div class="flex justify-between">
        <div class="flex gap-3">
          <router-link
            to="/home"
            class="text-text-gray"
            >Home
          </router-link>
          <span class="text-text-gray">/</span>

          <router-link to="/account/profile">My Account</router-link>
        </div>

        <div>Welcome! <span class="text-secondary-red">Md Rimel</span></div>
      </div>

      <div class="flex pt-20">
        <SiderBarAccount class="flex-[0_1_30%]" />
        <router-view />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
