<script setup lang="ts"></script>

<template>
  <section>
    <div class="container px-4 text-center">
      <div class="max-w-lg mx-auto flex flex-col items-center gap-6">
        <Icon name="arrow" />

        <h1 class="text-3xl font-semibold">Thank you for your order!</h1>
        <p class="text-gray-600">Your order has been placed successfully. We will contact you soon.</p>

        <router-link to="/home">
          <BaseButton> Back to Home </BaseButton>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
