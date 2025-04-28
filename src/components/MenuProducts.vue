<script setup lang="ts">
import { ref } from 'vue'
import { useMenuProduct } from '@/stores/menuProducts'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const menuProducts = useMenuProduct()
const openId = ref<number | null>(null)

const toggle = (id: number) => {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div>
    <ul class="flex flex-col  font-inter font-medium">
      <li
        v-for="item in menuProducts.getMenu"
        :key="item.id"
        class="flex flex-col"
      >
        <button
          type="button"
          @click="toggle(item.id)"
          class="flex items-center  px-1.5 py-1.5  "
        >
          <span class="hover:text-secondary-red transition">{{ item.label }}</span>
          <ChevronRightIcon
            v-if="item.children.length"
            class="w-5 h-5 text-black transition-transform duration-300"
            :class="{ 'rotate-90': openId === item.id }"
          />
        </button>

        <ul
          v-if="item.children.length && openId === item.id"
          class="flex flex-col pl-4 gap-1 mt-1"
        >
          <li
            v-for="child in item.children"
            :key="child.id"
            class="px-2 py-1 "
          >
            {{ child.label }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
