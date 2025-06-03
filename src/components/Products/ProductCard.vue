<script setup lang="ts">
import Vue3StarRatings from 'vue3-star-ratings'
import { ProductCard } from '@/types/Interfaces/products'
import { HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

import { useCartStore } from '@/stores/cart'

const props = defineProps<{
  product: ProductCard
}>()

const rating = ref(props.product.averageRating)
const isFavorite = ref(props.product.isNew)
const router = useRouter()
const store = useCartStore()

const discountForCard = computed(() => {
  const price = props.product.price
  const oldPrice = props.product.oldPrice
  return Math.round(((oldPrice - price) / oldPrice) * 100)
})

function addToCart(e: MouseEvent) {
  e.stopPropagation()
  store.addToCart(props.product)
  router.push({ name: 'cartOverview' })
}

onMounted(() => {
  store.loadFromLocalStorage()

  console.log(store.cartProducts)
})
</script>

<template>
  <div class="cursor-pointer flex flex-col h-full">
    <div class="relative bg-secondary-mediumWhite p-10 mb-0.5 group bg-secondary-medium-white flex items-center justify-center h-[300px]">
      <img
        :src="product.images?.[0]?.url"
        alt="image"
        class="h-full object-fill mx-auto"
      />

      <div
        v-if="product.discount"
        class="absolute bg-button-secondary-default rounded-md text-primary-white pointer-events-none top-3 left-3 pt-1 pb-1 pl-3 pr-3"
      >
        -{{ discountForCard }}%
      </div>

      <HeartIcon
        class="w-8 bg-white rounded-xl p-1 absolute top-3 right-3"
        :class="{ 'text-secondary-red': isFavorite }"
        @click="isFavorite = !isFavorite"
      />

      <EyeIcon class="w-8 bg-white rounded-xl p-1 absolute top-[25%] right-3" />

      <BaseButton
        class="absolute w-full bg-text-black bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        @click="addToCart"
      >
        Add To Cart
      </BaseButton>
    </div>

    <div class="p-2 flex flex-col justify-between flex-1 gap-1">
      <div class="font-semibold text-base">
        {{ product.name }}
      </div>

      <div class="flex items-center text-red-500 font-bold text-lg">
        ${{ product.price }}
        <span
          v-if="product.oldPrice"
          class="line-through text-gray-400 text-sm ml-2 font-normal"
        >
          ${{ product.oldPrice }}
        </span>
      </div>

      <Vue3StarRatings
        v-model="rating"
        :star-size="17"
        star-color="#ff9800"
        :read-only="true"
        inactive-color="#999"
        :number-of-stars="5"
        :disable-click="true"
        class="block w-fit"
      />
    </div>
  </div>
</template>

<style scoped></style>
