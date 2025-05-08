<script setup lang="ts">
import Vue3StarRatings from 'vue3-star-ratings'
import BaseButton from '@/components/shared/BaseButton.vue'
import { HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'

const props = defineProps<{
  product: Object
}>()

const rating = ref(props.product.rating)
const isFavorite = ref(props.product.isFavorite)

const discountForCard = computed(() => {
  const price = props.product.price
  const oldPrice = props.product.oldPrice
  return Math.round(((oldPrice - price) / oldPrice) * 100)
})
</script>

<template>
  <div class="cursor-pointer">
    <div class="relative bg-secondary-mediumWhite p-10 mb-0.5 group bg-secondary-medium-white">
      <img
        :src="product.image"
        alt="image"
        class="h-full object-contain mx-auto mb-2"
      />

      <div
        v-if="product.discount"
        class="absolute bg-button-secondary-default rounded-md text-primary-white top-3 left-3 pt-1 pb-1 pl-3 pr-3"
      >
        -{{ discountForCard }}%
      </div>

      <HeartIcon
        class="w-8 bg-white rounded-xl p-1 absolute top-3 right-3"
        :class="{ 'text-secondary-red': isFavorite }"
        @click="isFavorite = !isFavorite"
      ></HeartIcon>

      <EyeIcon class="w-8 bg-white rounded-xl p-1 absolute top-[25%] right-3"></EyeIcon>

      <BaseButton class="absolute w-[100%] bg-text-black bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add To Cart
      </BaseButton>
    </div>

    <div class="p-2 flex flex-col gap-1">
      <div class="font-semibold text-base">{{ product.title }}</div>

      <div class="flex items-center text-red-500 font-bold text-lg">
        {{ product.currency }}{{ product.price }}
        <span
          v-if="product.oldPrice"
          class="line-through text-gray-400 text-sm ml-2 font-normal"
        >
          {{ product.currency }}{{ product.oldPrice }}
        </span>
      </div>

      <Vue3StarRatings
        v-model="rating"
        :star-size="17"
        star-color="#ff9800"
        inactive-color="#999"
        :number-of-stars="5"
        :disable-click="false"
        class="block w-fit"
      />
    </div>
  </div>
</template>

<style scoped></style>
