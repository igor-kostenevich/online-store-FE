<script setup lang="ts">
import Vue3StarRatings from 'vue3-star-ratings'
import { ProductCard as ProductCardType } from '@/types/Interfaces/products'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'
import { useRouter } from 'vue-router'

const props = defineProps<{
  product: ProductCardType
}>()

const router = useRouter()
const productStore = useProductsStore()

const rating = ref(props.product.averageRating)
const isFavorite = ref(props.product.isNew)

const store = useCartStore()

const discountForCard = computed(() => {
  const price = props.product.price
  const oldPrice = props.product.oldPrice
  return Math.round(((oldPrice - price) / oldPrice) * 100)
})

function toDetails() {
  productStore.setProductDetails(props.product)
  router.push({ name: 'productDetails', params: { slug: props.product.slug } })
}
</script>

<template>
  <div
    class="cursor-pointer flex flex-col h-full"
    @click="toDetails"
  >
    <div class="relative bg-secondary-mediumWhite p-10 mb-0.5 rounded-[4px] group bg-secondary-medium-white flex items-center justify-center h-[300px]">
      <img
        :src="product.images?.[0]?.url"
        alt="image"
        class="h-full object-contain mx-auto"
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
        @click.stop="isFavorite = !isFavorite"
      />

      <BaseButton
        class="absolute w-full bg-text-black bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        @click.stop="store.addToCart(product)"
      >
        Add To Cart
      </BaseButton>
    </div>

    <div class="p-2 flex flex-col flex-1 gap-1">
      <div class="font-medium text-base min-h-[48px]">
        {{ product.name }}
      </div>

      <div class="flex font-medium items-center text-red-500 text-lg min-h-[32px]">
        ${{ product.price }}
        <span
          v-if="product.oldPrice"
          class="line-through text-gray-400 font-medium text-sm ml-2"
        >
          ${{ product.oldPrice }}
        </span>
      </div>

      <div class="flex gap-2 mt-auto items-center">
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
        <div class="text-sm opacity-50">({{ props.product.reviews.length }})</div>
      </div>
    </div>
  </div>
</template>
