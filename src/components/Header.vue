<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon, HeartIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const isOpen = ref(false)
const language = [{ name: 'English' }, { name: 'Українська' }, { name: 'Deutsch' }]
const selectedPerson = ref(language[0])
</script>

<template>
  <div class="top_header header-top w-full items-center text-sm bg-text-black text-white">
    <div class="container flex justify-between items-center">
      <div class="w-full text-center">
        <div class="header-top__text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a
            href="#"
            class="underline font-bold ml-1"
          >
            ShopNow
          </a>
        </div>
      </div>
      <div class="ml-auto">
        <Listbox v-model="selectedPerson">
          <div class="relative">
            <ListboxButton class="relative cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left sm:text-sm">
              <span class="block truncate">{{ selectedPerson.name }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute ListboxOptions mt-1 max-h-60 overflow-auto z-100 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-for="person in language"
                  v-slot="{ active, selected }"
                  :key="person.name"
                  :value="person"
                  as="template"
                >
                  <li :class="[active ? 'bg-buttons-hoverBlue text-amber-900' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-10 pr-4']">
                    <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ person.name }}</span>
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                    />
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </div>
  </div>

  <header class="bg-white border-b border-gray-200">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between lg:justify-normal lg:gap-10">
      <router-link :to="{ path: '/home' }">
        <img
          src="../assets/images/logo.svg"
          alt="logo"
          class="h-6"
        />
      </router-link>

      <div class="flex items-center gap-4 lg:hidden">
        <HeartIcon class="h-5 w-5 text-black cursor-pointer" />
        <ShoppingCartIcon class="h-5 w-5 text-black cursor-pointer" />

        <Menu
          as="div"
          class="relative"
        >
          <MenuButton>
            <UserIcon class="h-5 w-5 text-black cursor-pointer mt-1" />
          </MenuButton>

          <MenuItems class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm z-50">
            <MenuItem v-slot="{ active }">
              <router-link
                :to="{ path: '/account' }"
                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
              >
                Manage My Account
              </router-link>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <router-link
                :to="{ path: '/orders' }"
                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
              >
                My Orders
              </router-link>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <router-link
                :to="{ path: '/reviews' }"
                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
              >
                My Reviews
              </router-link>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <router-link
                :to="{ path: '/logout' }"
                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
              >
                Logout
              </router-link>
            </MenuItem>
          </MenuItems>
        </Menu>

        <button @click="isOpen = !isOpen">
          <span class="block w-6 h-[2px] bg-black mb-[4px]" />
          <span class="block w-6 h-[2px] bg-black mb-[4px]" />
          <span class="block w-6 h-[2px] bg-black" />
        </button>
      </div>

      <div class="hidden lg:flex items-center justify-between w-full">
        <nav class="flex gap-6 mx-auto">
          <router-link
            to="/home"
            class="text-sm font-medium"
            >Home</router-link
          >
          <router-link
            to="/contact"
            class="text-sm font-medium"
            >Contact</router-link
          >
          <router-link
            to="/about"
            class="text-sm font-medium"
            >About</router-link
          >
          <router-link
            to="/signup"
            class="text-sm font-medium"
            >Sign Up</router-link
          >
        </nav>

        <div class="flex items-center gap-4">
          <div class="relative w-[243px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              class="bg-secondary-mediumWhite rounded-s pt-2 pb-2 pr-8 pl-3 text-sm w-full"
            />
            <MagnifyingGlassIcon class="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <HeartIcon class="h-5 w-5 text-black cursor-pointer" />
          <ShoppingCartIcon class="h-5 w-5 text-black cursor-pointer" />
          <Menu
            as="div"
            class="relative"
          >
            <MenuButton>
              <UserIcon class="h-5 w-5 text-black cursor-pointer mt-1" />
            </MenuButton>

            <MenuItems class="absolute z-40 right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm z-50">
              <MenuItem v-slot="{ active }">
                <router-link
                  :to="{ path: '/account' }"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                >
                  Manage My Account
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  :to="{ path: '/orders' }"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                >
                  My Orders
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  :to="{ path: '/reviews' }"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                >
                  My Reviews
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  :to="{ path: '/logout' }"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                >
                  Logout
                </router-link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="lg:hidden absolute left-0 w-full bg-white z-50 shadow-lg p-4 absolute top-[90px]"
      >
        <div class="relative w-full mb-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            class="bg-secondary-mediumWhite rounded pt-2 pb-2 pr-8 pl-3 text-sm w-full"
          />
          <MagnifyingGlassIcon class="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <nav class="flex flex-col gap-4 text-sm">
          <router-link to="/home">Home</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/signup">Sign Up</router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.ListboxOptions {
  z-index: 40;
}
</style>
