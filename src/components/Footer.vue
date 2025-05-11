<script setup lang="ts">
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <footer class="bg-black text-white font-inter pt-10 pb-10">
    <div class="container">
      <div class="p-5">
        <div class="flex flex-col md:items-center justify-center gap-y-10 gap-x-20 md:flex-row">
          <div class="self-start">
            <div class="footer__title text-2xl font-bold pb-6">Exclusive</div>
            <div class="footer__subtitle">SubScribe</div>
            <div class="footer__text pt-2 mb-3">Get 10% off your first order</div>

            <div class="relative overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                class="bg-transparent border-2 border-white text-white rounded py-2 pl-4 pr-10 w-full focus:outline-none focus:border-gray-400"
              />
              <PaperAirplaneIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white rotate-45" />
            </div>
          </div>

          <div class="self-start">
            <div class="text-2xl font-bold pb-6">Support</div>
            <div>
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </div>
            <div class="flex flex-col gap-4 pt-3">
              <a
                href="mailto:exclusive@gmail.com"
                class="transition hover:text-gray-400"
              >
                exclusive@gmail.com
              </a>
              <a
                href="tel:+88015-88888-9999"
                class="transition hover:text-gray-400"
              >
                +88015-88888-9999
              </a>
            </div>
          </div>

          <div class="self-start">
            <div class="text-2xl font-bold pb-6">Account</div>
            <ul class="flex flex-col gap-4">
              <li>
                <router-link
                  to="/account"
                  class="transition hover:text-gray-400"
                >
                  My Account
                </router-link>
              </li>
              <li>
                <router-link
                  to="/login"
                  class="transition hover:text-gray-400"
                >
                  Login / Register
                </router-link>
              </li>
              <li>
                <router-link
                  to="/cart"
                  class="transition hover:text-gray-400"
                >
                  Cart
                </router-link>
              </li>
              <li>
                <router-link
                  to="/wishlist"
                  class="transition hover:text-gray-400"
                >
                  Wishlist
                </router-link>
              </li>
              <li>
                <router-link
                  to="/shop"
                  class="transition hover:text-gray-400"
                >
                  Shop
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
