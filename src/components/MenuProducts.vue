<script setup lang="ts">
import { ref } from 'vue'
import { useCategoriesStore } from '@/stores/categories'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Slider from '@/components/Slider.vue'
import { useRouter } from 'vue-router'

const store = useCategoriesStore()
const openId = ref<number | null>(null)
const router = useRouter()

const goToCategory = (slug: string) => {
  router.push(`/category/${slug}`)
}

const toggle = (id: number) => {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div>
    <div class="container flex flex-col lg:flex-row gap-8 w-full items-start px-4">
      <ul class="flex flex-col self-start font-inter font-medium gap-2">
        <li
          v-for="item in store.categoriesMenu"
          :key="item.id"
          class="flex flex-col w-[250px]"
        >
          <div class="flex items-center justify-between w-full px-1.5 py-1.5">
            <button
              type="button"
              class="text-left flex-1 hover:text-secondary-red transition"
              @click="goToCategory(item.slug)"
            >
              {{ item.label }}
            </button>

            <button
              v-if="item.children.length"
              type="button"
              class="p-1"
              @click.stop="toggle(item.id)"
            >
              <ChevronRightIcon
                class="w-5 h-5 text-black transition-transform duration-300"
                :class="{ 'rotate-90': openId === item.id }"
              />
            </button>
          </div>

          <ul
            v-if="item.children.length && openId === item.id"
            class="flex flex-col pl-4 gap-1 mt-1"
          >
            <li
              v-for="child in item.children"
              :key="child.id"
              class="px-2 py-1"
              @click="goToCategory(child.slug)"
            >
              {{ child.label }}
            </li>
          </ul>
        </li>
      </ul>

      <Slider
        slides-view="1"
        space-between="0"
        slide-effect="fade"
        slide-start="1"
        :pagination="true"
        :navigation="true"
        :loop="true"
        :items="store.promoSlides"
        class="h-[100%] flex justify-center items-center w-full"
      >
        <template #slide="{ item }">
          <div class="cursor-pointer w-full">
            <div class="relative w-full">
              <img
                :src="item.image"
                alt="image"
                class="bg-black mb-2 w-[800px] lg:w-[892px] h-[344px]"
              />
            </div>
          </div>
        </template>

        <template #pagination>
          <div class="swiper-pagination absolute !left-[-15%]" />
        </template>
      </Slider>
    </div>
  </div>
</template>

<style scoped></style>
