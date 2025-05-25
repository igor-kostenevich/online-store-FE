<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'
import Slider from '@/components/Common/Slider.vue'
import { onMounted, ref } from 'vue'
import { useProductsStore } from '@/stores/products'
import Vue3StarRatings from 'vue3-star-ratings'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'

const { breadcrumbs } = useBreadcrumbs()
const store = useProductsStore()
const quantity = ref(1)
const route = useRoute()
const selectedColor = ref<string>('')
const selectedSize = ref<string>('')

onMounted(async () => {
  const slug = route.params.id as string
  await store.getProductDetails(slug)
})
</script>

<template>
  <section class="pt-[120px]">
    <div class="container px-4 lg:px-0">
      <div class="flex flex-wrap items-center mb-6 text-sm text-text-gray gap-2">
        <template
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
        >
          <router-link :to="crumb.to">{{ crumb.name }}</router-link>
          <span v-if="index < breadcrumbs.length - 1">/</span>
        </template>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
        <div>
          <Slider
            :items="store.cardProductDetails.images"
            :slides-view="1"
            :space-between="0"
            slide-effect="fade"
            :slide-start="0"
            :loop="true"
            :use-thumbs="true"
          >
            <template #slide="{ item }">
              <div class="bg-secondary-medium-white px-5 h-[100%] flex items-center justify-center">
                <img
                  :src="item.url"
                  class="main-img w-full h-full object-contain"
                />
              </div>
            </template>

            <template #thumb="{ item }">
              <div class="bg-secondary-medium-white px-3 w-[100px] sm:w-[140px] h-[120px] py-2 flex items-center justify-center overflow-hidden mr-4">
                <img
                  :src="item.url"
                  class="thumb-img w-full h-full object-contain"
                />
              </div>
            </template>
          </Slider>
        </div>

        <div class="flex flex-col">
          <h2 class="font-semibold text-xl sm:text-2xl mb-3">
            {{ store.cardProductDetails.name }}
          </h2>

          <div class="flex flex-wrap gap-2 items-center mb-4">
            <Vue3StarRatings
              v-model="store.cardProductDetails.averageRating"
              :star-size="17"
              star-color="#ff9800"
              :read-only="true"
              inactive-color="#999"
              :number-of-stars="5"
              :disable-click="true"
              class="block w-fit"
            />
            <div class="text-sm text-text-gray">({{ store.cardProductDetails.reviewCount }} Reviews)</div>
            <div class="text-secondary-red">In Stock</div>
          </div>

          <div class="text-xl sm:text-2xl mb-6">${{ store.cardProductDetails.price }}</div>

          <p class="ml-2 text-sm border-b-black border-b pb-6">
            {{ store.cardProductDetails.description }}
          </p>

          <div class="mt-6">
            <div class="mb-4 flex flex-wrap items-center">
              <p class="font-medium text-xl">Colours:</p>
              <div class="flex gap-3 ml-4 mt-2 sm:mt-0">
                <div
                  v-for="color in store.cardProductDetails.colors"
                  :key="color"
                  :class="[
                    'w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ring-2',
                    selectedColor === color ? 'ring-black ring-offset-2' : 'ring-transparent',
                  ]"
                  :style="{ backgroundColor: color }"
                  @click="selectedColor = color"
                />
              </div>
            </div>

            <div class="mb-4 flex flex-wrap items-center">
              <p class="font-medium text-xl">Size:</p>
              <div class="flex gap-3 ml-4 mt-2 sm:mt-0">
                <button
                  v-for="size in store.cardProductDetails.sizes"
                  :key="size"
                  :class="[
                    'w-8 h-8 border rounded text-sm font-medium',
                    selectedSize === size ? 'bg-red-400 text-white border-red-400' : 'bg-white text-black',
                  ]"
                  @click="selectedSize = size"
                >
                  {{ size }}
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4 mb-10">
            <BaseQuantity
              v-model="quantity"
              :min="1"
              :max="20"
            />
            <BaseButton class="!py-2 !px-12">Buy Now</BaseButton>
            <HeartIcon
              class="w-10 border border-black rounded-[4px] p-2.5 cursor-pointer"
              :class="{ 'text-secondary-red': store.cardProductDetails.isNew }"
              @click="store.cardProductDetails.isNew = !store.cardProductDetails.isNew"
            />
          </div>

          <div class="border rounded-[5px] border-black py-6 px-4">
            <div class="border-b border-black pb-4 flex items-start gap-4">
              <img
                src="@/assets/icons/delivery.svg"
                alt="icon"
              />
              <div>
                <div class="font-semibold text-lg">Free Delivery</div>
                <p class="underline text-sm font-medium">Enter your postal code for Delivery Availability</p>
              </div>
            </div>

            <div class="pt-4 flex items-start gap-4">
              <img
                src="@/assets/icons/return.svg"
                alt="icon"
              />
              <div>
                <div class="font-semibold text-lg">Return Delivery</div>
                <p class="text-sm font-medium">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-200 mb-[50px]" />
      <div class="flex md:flex-row flex-col justify-between">
        <div>
          <div class="section-subtitle">Related Item</div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <BaseProductCard
          v-for="product in store.bestSellingProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.relative {
  display: flex;
  gap: 20px;
}
</style>
