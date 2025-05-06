<script setup lang="ts">
import { ref } from 'vue'
import { useCategoriesStore } from '@/stores/categories'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Slider from '@/components/Slider.vue'
import { onMounted } from 'vue'
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

onMounted(() => {
  console.log('---slider')
  console.log(store.promoSlides) // має бути масив з 3 об'єктами
})
</script>

<template>
  <div>
    <section class="pt-[130px] pb-[70px]">
      <div class="container">
        <div class="flex flex-col lg:flex-row gap-8 items-stretch px-4 min-h-[600px]">
          <!-- Сайдбар меню -->
          <ul class="flex flex-[0_1_20%] flex-col font-inter font-medium gap-2 pr-6 border-r border-gray-200">
            <li
              v-for="item in store.categoriesMenu"
              :key="item.id"
              class="flex flex-col"
            >
              <div class="flex items-center justify-between w-full px-1.5 py-1.5">
                <button
                  type="button"
                  class="text-left flex-1 hover:text-secondary-red transition"
                  @click="item.children.length ? toggle(item.id) : goToCategory(item.slug)"
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
                  class="px-2 py-1 cursor-pointer"
                  @click="goToCategory(child.slug)"
                >
                  {{ child.label }}
                </li>
              </ul>
            </li>
          </ul>

          <!-- Слайдер -->
          <Slider
            slides-view="1"
            space-between="0"
            slide-effect="fade"
            slide-start="1"
            :pagination="true"
            :navigation="true"
            :loop="true"
            :items="store.promoSlides"
            class="flex-[0_1_80%] max-w-full overflow-hidden h-full"
          >
            <template #slide="{ item }">
              <div class="cursor-pointer h-full">
                <div class="relative w-full h-full">
                  <img
                    :src="item.image"
                    alt="image"
                    class="w-full h-full object-cover"
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
    </section>
  </div>
</template>

<style scoped></style>
