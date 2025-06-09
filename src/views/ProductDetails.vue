<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'
import Slider from '@/components/Common/Slider.vue'
import { onMounted, ref } from 'vue'
import { useProductsStore } from '@/stores/products'
import Vue3StarRatings from 'vue3-star-ratings'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import Icon from '@/components/Common/Icon.vue'
import { useCartStore } from '@/stores/cart'

const { breadcrumbs } = useBreadcrumbs()
const store = useProductsStore()
const quantity = ref(1)
const route = useRoute()
const cartStore = useCartStore()

const selectedColor = ref<string>('')
const selectedSize = ref<string>('')

onMounted(async () => {
  const slug = route.params.slug as string
  await store.getProductDetails(slug)
  selectedColor.value = store.cardProductDetails.colors?.[0] ?? ''
  selectedSize.value = store.cardProductDetails.sizes?.[0] ?? ''
})
</script>

<template>
  <section class="pt-[120px]">
    <div class="container">
      <div class="flex flex-wrap items-center mb-6 text-sm text-text-gray gap-2 pb-[30px] lg:pb-[70px]">
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
              <div class="bg-secondary-medium-white h-[100%] flex items-center justify-center max-h-[550px] p-6">
                <img
                  :src="item.url"
                  class="main-img w-full h-full object-contain"
                />
              </div>
            </template>

            <template #thumb="{ item }">
              <div class="w-[110px] h-[130px] rounded-md overflow-hidden border border-gray-300/50 flex items-center justify-center transition">
                <img
                  :src="item.url"
                  class="w-full h-full object-contain py-3"
                />
              </div>
            </template>
          </Slider>
        </div>

        <div class="flex flex-col">
          <h2 class="font-semibold text-xl sm:text-2xl mb-4">
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
              class="-translate-y-0.3"
            />
            <div class="text-sm text-text-gray border-r-2 pr-2 translate-y-0.5">({{ store.cardProductDetails.reviewCount }} Reviews)</div>

            <div :class="[store.cardProductDetails.stock ? 'text-secondary-red' : 'text-text-gray', 'font-medium']">
              {{ store.cardProductDetails.stock ? 'In Stock' : 'Out of stock' }}
            </div>
          </div>

          <div class="text-xl sm:text-2xl mb-6">${{ store.cardProductDetails.price }}</div>

          <p
            :class="['ml-2 text-sm pb-6', store.cardProductDetails.colors?.length && store.cardProductDetails.sizes?.length ? 'border-b border-black-300' : '']"
          >
            {{ store.cardProductDetails.description }}
          </p>
          <div
            v-if="store.cardProductDetails.colors && store.cardProductDetails.sizes.length"
            class="mt-6"
          >
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

            <div
              v-if="store.cardProductDetails.sizes && store.cardProductDetails.sizes.length"
              class="mb-4 flex flex-wrap items-center"
            >
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
            <BaseButton
              class="!py-2 !px-12"
              @click.stop="cartStore.addToCart(store.cardProductDetails)"
              >Buy Now</BaseButton
            >

            <HeartIcon
              class="w-10 border border-black rounded-[4px] p-2.5 cursor-pointer"
              :class="{ 'text-secondary-red': store.cardProductDetails.isNew }"
              @click="store.cardProductDetails.isNew = !store.cardProductDetails.isNew"
            />
          </div>

          <div class="border rounded-[5px] border-black py-6 px-4">
            <div class="border-b border-black pb-4 flex items-center gap-4">
              <Icon
                name="delivery"
                class="w-[40px] h-[40px]"
              />
              <div>
                <div class="font-semibold text-lg">Free Delivery</div>
                <p class="underline text-sm font-medium">Enter your postal code for Delivery Availability</p>
              </div>
            </div>

            <div class="pt-4 flex items-center gap-4">
              <Icon
                name="returns"
                class="w-[40px] h-[40px]"
              />
              <div>
                <div class="font-semibold text-lg">Return Delivery</div>
                <p class="text-sm font-medium">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="text-2xl font-semibold mb-6">Reviews</h3>
        <div
          v-for="review in store.cardProductDetails.reviews"
          :key="review.id"
          class="mb-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm"
        >
          <Vue3StarRatings
            v-model="review.rating"
            :star-size="16"
            :number-of-stars="5"
            :read-only="true"
            :disable-click="true"
            inactive-color="#DDD"
            class="mb-3"
          />
          <p class="text-gray-800">
            {{ review.text }}
          </p>
        </div>
      </div>

      <div class="bg-gray-200 mb-[50px]" />
      <div class="flex md:flex-row flex-col justify-between">
        <div>
          <div class="section-subtitle">Related Item</div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <ProductCard
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
