<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'
import { ChevronDownIcon, HeartIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import debounce from 'lodash.debounce'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'
import { useProductsStore } from '@/stores/products'
import { ProductComplete } from '@/types/Interfaces/products'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()
const productStore = useProductsStore()

const isOpen = ref(false)
const language = [{ name: 'English' }, { name: 'Українська' }, { name: 'Deutsch' }]
const selectedLanguage = ref(language[0])

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : 'auto'
}

const handleLogout = async () => {
  await authStore.logOut()
}

const query = ref<string>('')
const selectedProduct = ref<ProductComplete | null>(null)
const debouncedSearch = debounce((q: string) => {
  productStore.searchProducts(q)
}, 300)

watch(
  query,
  q => {
    debouncedSearch(q)
  },
  { immediate: true },
)

watch(selectedProduct, product => {
  if (product) {
    router.push({ name: 'productDetails', params: { slug: product.slug } })
  }
})
</script>

<template>
  <div class="fixed w-full z-20">
    <div class="top_header header-top w-full items-center text-sm bg-text-black text-white">
      <div class="container flex justify-between items-center">
        <div class="w-full text-center">
          <span class="text-[11px] xs:text-sm"> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
        </div>
        <Listbox v-model="selectedLanguage">
          <div class="relative">
            <ListboxButton class="cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left text-[11px] xs:text-sm">
              <span class="block truncate">{{ selectedLanguage.name }}</span>
              <ChevronDownIcon class="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </ListboxButton>
            <ListboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-[11px] xs:text-sm shadow-lg ring-1 ring-black/5">
              <ListboxOption
                v-for="lang in language"
                :key="lang.name"
                v-slot="{ active, selected }"
                :value="lang"
              >
                <li
                  :class="[
                    active ? 'bg-gray-100 text-amber-900' : 'text-gray-900',
                    selected ? 'font-medium' : 'font-normal',
                    'relative cursor-default select-none py-2 pl-4 pr-4',
                  ]"
                >
                  {{ lang.name }}
                </li>
              </ListboxOption>
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>

    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-3 lg:px-0 py-4 flex items-center justify-between lg:justify-normal lg:gap-10">
        <router-link to="/home">
          <img
            src="../../assets/images/logo.svg"
            alt="logo"
            class="h-5 xs:h-6"
          />
        </router-link>

        <div class="flex items-center gap-4 lg:hidden">
          <router-link to="/wishlist">
            <HeartIcon
              v-if="authStore.isAuthenticated"
              class="h-5 w-5 cursor-pointer"
            />
          </router-link>
          <div class="relative">
            <ShoppingCartIcon class="h-5 w-5 cursor-pointer" />
            <span
              v-if="cartStore.quantityOfProducts > 0"
              class="absolute -top-1 -right-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-red text-[10px] text-white"
            >
              {{ cartStore.quantityOfProducts }}
            </span>
          </div>
          <Menu
            as="div"
            class="relative"
          >
            <MenuButton v-if="!authStore.isAuthenticated">
              <UserIcon class="h-5 w-5 cursor-pointer mt-1" />
            </MenuButton>
            <MenuItems class="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg text-sm">
              <MenuItem v-slot="{ active }">
                <router-link
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                  to="/account"
                >
                  Manage My Account
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                  to="/orders"
                >
                  My Orders
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                  to="/reviews"
                >
                  My Reviews
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[active ? 'bg-gray-100' : '', 'block w-full text-left px-4 py-2']"
                  @click="handleLogout"
                >
                  Logout
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
          <button
            class="flex flex-col gap-y-1"
            @click="toggleMenu"
          >
            <span :class="['block h-[2px] w-6 transition-transform bg-black', isOpen ? 'rotate-45 translate-y-1.5' : 'bg-black']" />
            <span :class="['block h-[2px] w-6 transition-opacity bg-black', isOpen ? 'opacity-0' : 'bg-black']" />
            <span :class="['block h-[2px] w-6 transition-transform bg-black', isOpen ? '-rotate-45 -translate-y-1.5' : 'bg-black']" />
          </button>
        </div>

        <div class="hidden lg:flex items-center justify-between w-full">
          <nav class="flex gap-12 mx-auto text-base">
            <router-link
              to="/home"
              class="font-medium"
              :class="route.path === '/home' ? 'text-secondary-red' : 'text-black hover:text-secondary-red transition'"
              >Home
            </router-link>

            <router-link
              to="/contact"
              class="font-medium"
              :class="route.path === '/contact' ? 'text-secondary-red' : 'text-black hover:text-secondary-red transition'"
              >Contact
            </router-link>

            <router-link
              to="/about"
              class="font-medium"
              :class="route.path === '/about' ? 'text-secondary-red' : 'text-black hover:text-secondary-red transition'"
              >About
            </router-link>

            <router-link
              v-if="!authStore.isAuthenticated"
              to="/sign-up"
              class="font-medium"
              :class="route.path === '/sign-up' ? 'text-secondary-red' : 'text-black hover:text-secondary-red transition'"
              >Sign Up
            </router-link>
          </nav>

          <div class="flex items-center gap-4">
            <div class="relative w-[290px]">
              <Combobox
                v-model="selectedProduct"
                as="div"
              >
                <ComboboxInput
                  class="w-full rounded bg-[#f5f5f5] py-2 pl-3 pr-8 text-sm border-transparent focus:border-gray-400 hover:border-gray-300 transition"
                  placeholder="What are you looking for?"
                  @input="
                    (e: InputEvent) => {
                      query = (e.target as HTMLInputElement).value
                    }
                  "
                />
                <MagnifyingGlassIcon class="absolute top-1/2 right-2 h-5 w-5 -translate-y-1/2" />
                <ComboboxOptions class="absolute mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 z-50">
                  <template v-if="productStore.">
                    <ComboboxOption
                      disabled
                      class="cursor-default select-none py-2 px-4 text-gray-700"
                    >
                      No products found
                    </ComboboxOption>
                  </template>
                  <template v-else>
                    <ComboboxOption
                      v-for="product in productStore.searchResults"
                      :key="product.id"
                      as="div"
                      :value="product"
                      class="cursor-pointer select-none py-2 pl-4 pr-4 hover:bg-gray-100"
                    >
                      <div class="flex items-center gap-2 text-[12px]">
                        <span class="flex-[0_1_60%]">{{ product.name }}</span>
                        <span class="text-secondary-red flex-[0_1_30%]">${{ product.price }}</span>
                        <img
                          :src="product.image.url"
                          alt="photo"
                          class="h-12 w-12"
                        />
                      </div>
                    </ComboboxOption>
                  </template>
                </ComboboxOptions>
              </Combobox>
            </div>
            <router-link to="/wishlist">
              <HeartIcon
                v-if="authStore.isAuthenticated"
                class="h-5 w-5 cursor-pointer"
              />
            </router-link>
            <div class="relative">
              <router-link to="/cart">
                <ShoppingCartIcon class="h-5 w-5 cursor-pointer" />
                <span
                  v-if="cartStore.quantityOfProducts > 0"
                  class="absolute -top-1 -right-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-red text-[10px] text-white pointer-events-none"
                  >{{ cartStore.quantityOfProducts }}</span
                >
              </router-link>
            </div>

            <Menu
              as="div"
              class="relative"
            >
              <MenuButton v-if="authStore.isAuthenticated">
                <UserIcon class="h-5 w-5 cursor-pointer mt-1" />
              </MenuButton>
              <MenuItems class="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg text-sm">
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                    to="/account/profile"
                    >Manage My Account
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                    to="/orders"
                    >My Orders
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                    to="/reviews"
                    >My Reviews
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[active ? 'bg-gray-100' : '', 'block w-full text-left px-4 py-2']"
                    @click="handleLogout"
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <transition name="slide">
        <div
          v-if="isOpen"
          class="lg:hidden fixed top-[90px] bottom-0 left-0 w-full bg-white overflow-y-auto z-40"
        >
          <div class="container p-3">
            <div class="mb-4 relative w-full">
              <Combobox
                v-model="selectedProduct"
                as="div"
              >
                <ComboboxInput
                  class="w-full rounded bg-[#f5f5f5] py-2 pl-3 pr-8 text-sm border-transparent focus:border-gray-400 hover:border-gray-300 transition"
                  placeholder="What are you looking for?"
                  @input="
                    (e: InputEvent) => {
                      query = (e.target as HTMLInputElement).value
                    }
                  "
                />
                <MagnifyingGlassIcon class="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 pointer-events-none" />
                <ComboboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 z-50">
                  <ComboboxOption
                    v-for="product in productStore.searchResults"
                    :key="product.id"
                    :value="product"
                    class="cursor-pointer select-none py-2 pl-4 pr-4 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <img
                      :src="product.image.url"
                      alt="photo"
                      class="h-12 w-12 object-cover"
                    />
                    <span class="text-[14px] flex-[0_1_70%]">{{ product.name }}</span>
                    <span class="text-secondary-red flex-[0_1_30%]">${{ product.price }}</span>
                  </ComboboxOption>
                </ComboboxOptions>
              </Combobox>
            </div>

            <nav class="flex flex-col gap-4 border-t border-b border-gray-200 py-4 text-base">
              <router-link
                to="/home"
                class="text-xl"
                :class="route.path === '/home' ? 'text-secondary-red' : 'text-black hover:text-secondary-red transition'"
                >Home
              </router-link>
              <router-link
                to="/contact"
                class="text-xl"
                :class="route.path === '/contact' ? 'text-secondary-red' : 'text-black hover:text-secondary-red transition'"
                >Contact
              </router-link>
              <router-link
                to="/about"
                class="text-xl"
                :class="route.path === '/about' ? 'text-secondary-red' : 'text-black hover:text-secondary-red transition'"
                >About
              </router-link>
              <router-link
                v-if="!authStore.isAuthenticated"
                to="/sign-up"
                class="text-xl"
                :class="route.path === '/sign-up' ? 'text-secondary-red' : 'text-black hover:text-secondary-red transition'"
                >Sign Up
              </router-link>
            </nav>
          </div>
        </div>
      </transition>
    </header>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
