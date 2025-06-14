<script setup lang="ts">
import { ref } from 'vue'
import { useCategoriesStore } from '@/stores/categories'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Slider from '@/components/Common/Slider.vue'
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
    <section class="pt-[130px] pb-[10px]">
      <div class="container">
        <div class="flex flex-col lg:flex-row gap-8 items-stretch min-h-[100%]">
          <div class="flex flex-[0_1_20%] flex-col gap-4 lg:pr-6 border-r-0 lg:border-r lg:border-gray-200 order-2 lg:order-1">
            <template v-if="!store.loading">
              <ul class="flex flex-col font-inter font-medium gap-2">
                <li
                  v-for="item in store.categoriesMenu"
                  :key="item.id"
                  class="flex flex-col"
                >
                  <div class="flex items-center justify-between w-full px-1.5 py-0 lg:py-1.5">
                    <button
                      type="button"
                      class="text-left flex-1 hover:text-secondary-red transition"
                      @click="item.children.length ? toggle(item.id) : goToCategory(item.slug)"
                    >
                      {{ item.name }}
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
                      v-for="(child, index) in item.children"
                      :key="index"
                      class="py-1 cursor-pointer text-sm hover:text-secondary-red transition"
                      @click="goToCategory(child.slug)"
                    >
                      {{ child.name }}
                    </li>
                  </ul>
                </li>
              </ul>
            </template>
            <template v-else>
              <ContentLoader
                v-for="n in 8"
                :key="n"
                :height="40"
                :width="`100%`"
              >
                <rect
                  x="0"
                  y="0"
                  rx="4"
                  ry="4"
                  width="100%"
                  height="16"
                />
              </ContentLoader>
            </template>
          </div>
          <Slider
            :slides-view="1"
            :space-between="0"
            slide-effect="fade"
            :slide-start="1"
            :pagination="{ clickable: true }"
            :navigation="true"
            :loop="true"
            :items="store.promoSlides"
            :required="false"
            :default="() => []"
            class="flex-[0_1_80%] max-w-full overflow-hidden order-1 lg:order-2"
          >
            <template #slide="{ item }">
              <div class="cursor-pointer w-full">
                <div class="relative w-full aspect-[2/1]">
                  <img
                    :src="item.image"
                    alt="image"
                    class="w-full h-full object-cover"
                  />

                  <div class="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-12 text-white bg-black/30">
                    <h2 class="text-lg md:text-4xl font-bold mb-1">{{ item.title }}</h2>
                    <p class="text-sm md:text-lg mb-3">{{ item.text }}</p>
                    <router-link
                      to="#"
                      class="underline"
                    >
                      Shop now
                    </router-link>
                  </div>
                </div>
              </div>
            </template>
          </Slider>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
