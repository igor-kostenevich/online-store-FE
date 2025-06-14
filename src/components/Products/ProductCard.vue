<script setup lang="ts">
import { ContentLoader } from 'vue-content-loader'
import Vue3StarRatings from 'vue3-star-ratings'
import { ProductCard as ProductCardType } from '@/types/Interfaces/products'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'
import { useRouter } from 'vue-router'

const props = defineProps<{
  product?: ProductCardType
  loading?: boolean
}>()

const loading = props.loading ?? false
const product = props.product!

const router = useRouter()
const productStore = useProductsStore()
const store = useCartStore()

const rating = ref(product?.averageRating || 0)
const isFavorite = ref(product?.isNew || false)

const discountForCard = computed(() => {
  if (!product || !product.oldPrice) return 0
  const price = product.price
  const oldPrice = product.oldPrice
  return Math.round(((oldPrice - price) / oldPrice) * 100)
})

function toDetails() {
  productStore.setProductDetails(product)
  router.push({ name: 'productDetails', params: { slug: product.slug } })
}
</script>

<template>
  <div>
    <div
      v-if="loading"
      class="animate-pulse flex flex-col h-full"
    >
      <div class="bg-secondary-mediumWhite mb-0.5 rounded-[4px] h-[300px]">
        <ContentLoader
          :height="300"
          :width="300"
        >
          <rect
            x="0"
            y="0"
            rx="4"
            ry="4"
            width="100%"
            height="100%"
          />
        </ContentLoader>
      </div>
      <div class="flex flex-col mt-9 flex-1 gap-2">
        <ContentLoader
          :height="24"
          :width="`60%`"
        >
          <rect
            x="0"
            y="0"
            rx="4"
            ry="4"
            width="100%"
            height="24"
          />
        </ContentLoader>
        <ContentLoader
          :height="20"
          :width="`30%`"
        >
          <rect
            x="0"
            y="0"
            rx="4"
            ry="4"
            width="100%"
            height="20"
          />
        </ContentLoader>
        <div class="flex gap-2 mt-auto items-center">
          <ContentLoader
            :height="17"
            :width="85"
          >
            <rect
              x="0"
              y="0"
              rx="4"
              ry="4"
              width="85"
              height="17"
            />
          </ContentLoader>
          <ContentLoader
            :height="16"
            :width="20"
          >
            <rect
              x="0"
              y="0"
              rx="4"
              ry="4"
              width="20"
              height="16"
            />
          </ContentLoader>
        </div>
      </div>
    </div>
    <div
      v-else
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
          <!--          <div class="text-sm opacity-50">({{ product.reviews.length }})</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
