<script setup lang="ts"></script>

<template>
  <main class="content h-full">
    <div class="flex h-full">
      <div class="flex flex-col bg-gray-100 flex-1 py-6 px-4 md:px-8 overflow-y-auto">
        <router-view />
      </div>
    </div>
  </main>
</template>
