<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useCategoriesStore } from '@/stores/categories'
import Slider from '@/components/Common/Slider.vue'
import { useRouter } from 'vue-router'

const categoryStore = useCategoriesStore()
const router = useRouter()

const breakpoints = {
  320: { slidesPerView: 1 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  1280: { slidesPerView: 6 },
}

const goToCategory = (slug: string) => {
  router.push(`/category/${slug}`)
}
</script>

<template>
  <section class="pt-[70px] pb-[10px]">
    <div class="container">
      <div class="relative">
        <div>
          <div class="section-subtitle">Categories</div>
          <div class="section-title">Browse By Category</div>
        </div>
        <div class="absolute bottom-[60%] md:bottom-[0%] right-[1%] md:right-[0%] z-10 flex gap-2">
          <button
            type="button"
            class="category-slider-prev flex items-center justify-center bg-[#f5f5f5] w-[46px] h-[46px] p-1 rounded-full cursor-pointer transition"
          >
            <ArrowLeftIcon class="w-[19px] h-[16px]" />
          </button>
          <button
            type="button"
            class="category-slider-next flex items-center justify-center bg-[#f5f5f5] w-[46px] h-[46px] p-1 rounded-full cursor-pointer transition"
          >
            <ArrowRightIcon class="w-[19px] h-[16px]" />
          </button>
        </div>
      </div>

      <Slider
        :items="categoryStore.categoriesBrowse"
        :slides-view="6"
        :space-between="20"
        slide-effect="slide"
        :slide-start="1"
        :loop="true"
        :navigation="true"
        next-btn-id=".category-slider-next"
        prev-btn-id=".category-slider-prev"
        :breakpoints="breakpoints"
        class="mt-10"
      >
        <template #slide="{ item }">
          <div
            class="group transition duration-150 ease-in-out border-2 border-solid cursor-pointer py-5 hover:bg-red-500"
            @click="goToCategory(item.slug)"
          >
            <div class="relative mb-0.5 flex justify-center">
              <Icon
                :name="item.slug"
                class="text-black transition group-hover:text-white"
              />
            </div>
            <div class="font-semibold text-center text-black transition group-hover:text-white">
              {{ item.name }}
            </div>
          </div>
        </template>
      </Slider>
    </div>
  </section>
</template>
