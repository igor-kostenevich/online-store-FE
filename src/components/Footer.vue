<script setup lang="ts">
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <footer class="bg-black text-white font-inter pt-10 pb-10">
    <div class="container">
      <div>
        <div class="flex flex-col md:items-center justify-center gap-20 md:flex-row">
          <div class="">
            <div class="footer__title text-2xl font-bold">Exclusive</div>
            <div class="footer__subtitle pt-2">SubScribe</div>
            <div class="footer__text pt-2 mb-3">Get 10% off your first order</div>

            <div class="relative">
              <input
                type="email"
                placeholder="Enter your email"
                class="bg-transparent border-2 border-white text-white rounded py-2 pl-4 pr-10 w-full focus:outline-none focus:border-gray-400"
              />
              <PaperAirplaneIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white rotate-45" />
            </div>
          </div>

          <div class="">
            <div class="text-2xl font-bold">Support</div>
            <div class="pt-2">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </div>
            <div class="flex flex-col gap-3 pt-3">
              <a href="mailto:exclusive@gmail.com ">exclusive@gmail.com</a>
              <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
            </div>
          </div>

          <div>
            <div class="text-2xl font-bold">Account</div>
            <ul class="mt-3 flex flex-col gap-2">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
