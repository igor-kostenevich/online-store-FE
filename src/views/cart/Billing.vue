<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { onMounted, ref } from 'vue'
import { useValidation } from '@/composables/useValidation'
import paymentIcon from '@/assets/icons/paymentpng.png'
import { useRouter } from 'vue-router'
import { billingMethod } from '@/types/types/billing'

const router = useRouter()
const store = useCartStore()

const { onSubmit, fields, errors, metas } = useValidation({
  firstName: true,
  companyName: true,
  address: true,
  apartment: true,
  town: true,
  phone: true,
  email: true,
})

const coupon = ref('')

const submitOrder = onSubmit(() => {
  router.push({ name: 'billingCompleted' })
  store.clearCart()
})

onMounted(() => {
  store.loadFromLocalStorage()
})

const paymentMethod = ref<billingMethod>('card')
</script>

<template>
  <section>
    <div class="container px-4 lg:px-0">
      <div class="flex flex-col lg:flex-row lg:justify-between gap-10">
        <div class="w-full lg:flex-[0_1_38%]">
          <h1 class="text-3xl lg:text-4xl font-medium pb-10">Billing Details</h1>

          <form
            class="flex flex-col gap-6"
            @submit.prevent="submitOrder"
          >
            <div class="flex flex-col gap-y-6">
              <div>
                <BaseInput
                  v-model="fields.firstName.value"
                  label="First Name"
                  :error="metas.firstNameMeta.touched ? errors.firstNameError.value : ''"
                  placeholder="Md"
                  view="secondary"
                  class="mt-2"
                />
              </div>

              <div>
                <BaseInput
                  v-model="fields.companyName.value"
                  label="Company Name"
                  :error="metas.companyNameMeta.touched ? errors.companyNameError.value : ''"
                  placeholder="Company Name"
                  view="secondary"
                  class="mt-2"
                />
              </div>

              <div>
                <BaseInput
                  v-model="fields.address.value"
                  label="Street Address*"
                  :error="metas.addressMeta.touched ? errors.addressError.value : ''"
                  placeholder="Street Address"
                  view="secondary"
                  class="mt-2"
                />
              </div>

              <div>
                <BaseInput
                  v-model="fields.apartment.value"
                  label="Apartment, floor, etc. (optional)"
                  :error="metas.apartmentMeta.touched ? errors.apartmentError.value : ''"
                  placeholder="Apartment"
                  view="secondary"
                  class="mt-2"
                />
              </div>

              <div>
                <BaseInput
                  v-model="fields.town.value"
                  label="Town/City*"
                  :error="metas.townMeta.touched ? errors.townError.value : ''"
                  placeholder="Town/City"
                  view="secondary"
                  class="mt-2"
                />
              </div>

              <div>
                <BaseInput
                  v-model="fields.phone.value"
                  label="Phone Number*"
                  :error="metas.phoneMeta.touched ? errors.phoneError.value : ''"
                  placeholder="Phone number"
                  view="secondary"
                  class="mt-2"
                />
              </div>

              <div>
                <BaseInput
                  v-model="fields.email.value"
                  label="Email"
                  :error="metas.emailMeta.touched ? errors.emailError.value : ''"
                  placeholder="rimel1111@gmail.com"
                  view="secondary"
                  class="mt-2"
                />
              </div>
            </div>
          </form>
        </div>

        <div class="w-full lg:flex-[0_1_42%] pt-12 lg:pt-[80px]">
          <div
            v-for="product in store.cartProducts"
            :key="product.id"
            class="mt-6"
          >
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <img
                  :src="product.images?.[0]?.url"
                  alt="Product"
                  class="w-[54px] h-[54px] object-contain"
                />
                <span class="font-medium">{{ product.name }}</span>
              </div>
              <div>${{ product.price }}</div>
            </div>
          </div>

          <div class="flex justify-between border-b border-gray pb-3 mt-8">
            <span>Subtotal:</span>
            <div>{{ store.sumOfProducts.toFixed(2) }}</div>
          </div>

          <div class="flex justify-between border-b border-gray pt-3 pb-3">
            <span>Shipping:</span>
            <div>Free</div>
          </div>

          <div class="flex justify-between pt-3">
            <span>Total:</span>
            <div>{{ store.sumOfProducts.toFixed(2) }}</div>
          </div>

          <div class="mt-6 space-y-5">
            <div
              class="flex items-center justify-between px-2 py-3 rounded cursor-pointer transition-all duration-200 hover:bg-gray-100"
              :class="paymentMethod === 'bank' ? 'bg-gray-100 text-black' : 'text-gray-600'"
              @click="paymentMethod = 'bank'"
            >
              <div class="flex items-center gap-3">
                <span class="w-5 h-5 rounded-full border border-black flex items-center justify-center transition-all duration-200">
                  <span
                    v-if="paymentMethod === 'bank'"
                    class="w-3 h-3 rounded-full bg-black"
                  />
                </span>
                <span class="text-base">Bank</span>
              </div>

              <img
                :src="paymentIcon"
                alt="Payment"
                class="h-5"
              />
            </div>

            <div
              class="flex items-center justify-between px-2 py-3 rounded cursor-pointer transition-all duration-200 hover:bg-gray-100"
              :class="paymentMethod === 'cod' ? 'bg-gray-100 text-black' : 'text-gray-600'"
              @click="paymentMethod = 'cod'"
            >
              <div class="flex items-center gap-3">
                <span class="w-5 h-5 rounded-full border border-black flex items-center justify-center transition-all duration-200">
                  <span
                    v-if="paymentMethod === 'cod'"
                    class="w-3 h-3 rounded-full bg-black"
                  />
                </span>
                <span class="text-base">Cash on delivery</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6 mt-8 lg:flex-row lg:justify-between">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-start w-full">
              <BaseInput
                :model-value="coupon"
                placeholder="Coupon Code"
                view="secondary"
                class="w-full lg:min-w-[300px]"
              />
              <BaseButton class="whitespace-nowrap lg:ml-4">Apply Coupon</BaseButton>
            </div>
          </div>

          <div class="mt-8">
            <BaseButton @click="submitOrder">Place Order</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
