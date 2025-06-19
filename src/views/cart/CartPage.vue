<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { onMounted, ref, watch } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'

const store = useCartStore()
const couponCode = ref('')
onMounted(() => {
  store.loadFromLocalStorage()
})
watch(
  () => store.cartProducts,
  () => {
    store.saveToLocalStorage()
  },
  { deep: true },
)
</script>

<template>
  <section>
    <div class="container px-4">
      <div v-if="store.cartProducts.length">
        <div class="hidden lg:grid [grid-template-columns:2fr_1fr_1fr_1fr] gap-4 py-6 border-b shadow-card px-10">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        <div
          v-for="product in store.cartProducts"
          :key="product.id"
          class="flex flex-col lg:items-center gap-4 py-2 lg:py-6 border-b bg-primary-white px-4 shadow-card mt-6 lg:grid [grid-template-columns:2fr_1fr_1fr_1fr] lg:px-10 lg:mt-10 lg:gap-4"
        >
          <button
            class="lg:hidden ml-2 self-end mt-3"
            @click="store.removeFromCart(product.id)"
          >
            <TrashIcon class="w-5 h-5 text-gray-500" />
          </button>

          <div class="flex items-center gap-4">
            <img
              :src="product.images?.[0]?.url"
              alt="Product"
              class="w-20 h-20 object-contain"
            />
            <span>{{ product.name }}</span>
          </div>

          <div class="hidden lg:flex justify-between items-center">
            <span>${{ product.price }}</span>
          </div>
          <div class="hidden lg:block">
            <input
              v-model.number="product.quantity"
              type="number"
              min="1"
              class="border rounded text-center w-[72px] h-[44px]"
            />
          </div>
          <div class="hidden lg:flex items-center">
            ${{ (product.price * product.quantity).toFixed(2) }}
            <button
              class="ml-[60%]"
              @click="store.removeFromCart(product.id)"
            >
              <TrashIcon class="w-5 h-5 text-gray-500 hover:text-red-500 transition" />
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-6 mt-20 lg:flex-row lg:justify-between">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-start">
            <BaseInput
              v-model="couponCode"
              placeholder="Coupon Code"
              view="secondary"
              class="w-full lg:min-w-[300px]"
            />
            <BaseButton class="whitespace-nowrap lg:ml-4">Apply Coupon</BaseButton>
          </div>

          <div class="border border-black py-8 px-6 rounded-m w-full lg:flex-[0_1_30%]">
            <div class="pb-6 font-medium text-xl">Cart Total</div>
            <div class="flex justify-between border-b border-gray pb-4">
              <span>Subtotal:</span>
              <div>{{ store.sumOfProducts.toFixed(2) }}</div>
            </div>
            <div class="flex justify-between border-b border-gray pt-4 pb-4">
              <span>Shipping:</span>
              <div>Free</div>
            </div>
            <div class="flex justify-between pt-4">
              <span>Total:</span>
              <div>{{ store.sumOfProducts.toFixed(2) }}</div>
            </div>
            <div class="flex justify-center items-center mt-4">
              <router-link :to="{ name: 'billing' }">
                <BaseButton>Process to checkout</BaseButton>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="py-20 text-center text-lg"
      >
        There are no items in the cart
      </div>
    </div>
  </section>
</template>
