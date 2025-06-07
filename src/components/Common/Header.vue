<script setup>
import { computed, ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon, HeartIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/vue'

const isOpen = ref(false)
const language = [{ name: 'English' }, { name: 'Українська' }, { name: 'Deutsch' }]
const selectedLanguage = ref(language[0])

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : 'auto'
}

const people = ['Durward Reynolds', 'Kenton Towne', 'Therese Wunsch', 'Benedict Kessler', 'Katelyn Rohan']
const selectedPerson = ref(people[0])
const query = ref('')

const filteredPeople = computed(() =>
  query.value === ''
    ? people
    : people.filter(person => {
        return person.toLowerCase().includes(query.value.toLowerCase())
      }),
)
</script>

<template>
  <div class="fixed w-full z-20">
    <div class="top_header header-top w-full items-center text-sm bg-text-black text-white">
      <div class="container flex justify-between items-center">
        <div class="w-full text-center">
          <div class="header-top__text">
            <span class="text-xs xs:text-sm"> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
            <a
              href="#"
              class="underline font-bold ml-1"
              >ShopNow</a
            >
          </div>
        </div>

        <div class="ml-auto">
          <Listbox v-model="selectedLanguage">
            <div class="relative">
              <ListboxButton class="relative cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left sm:text-sm">
                <span class="block truncate">{{ selectedLanguage.name }}</span>
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
                  class="absolute mt-1 max-h-60 overflow-auto z-50 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    v-for="person in language"
                    v-slot="{ active, selected }"
                    :key="person.name"
                    :value="person"
                    as="template"
                  >
                    <li :class="[active ? 'bg-white text-amber-900' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-4 pr-4 cursor-pointer']">
                      <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ person.name }}</span>
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
            src="../../assets/images/logo.svg"
            alt="logo"
            class="h-5 xs:h-6"
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
            <MenuItems class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm z-40">
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

          <button @click="toggleMenu">
            <span class="block w-6 h-[2px] bg-black mb-[4px]" />
            <span class="block w-6 h-[2px] bg-black mb-[4px]" />
            <span class="block w-6 h-[2px] bg-black" />
          </button>
        </div>

        <div class="hidden lg:flex items-center justify-between w-full">
          <nav class="flex gap-12 mx-auto text-base">
            <router-link
              to="/home"
              class="relative font-medium text-black hover:text-secondary-red transition"
              >Home
            </router-link>
            <router-link
              to="/contact"
              class="relative font-medium text-black hover:text-secondary-red transition"
            >
              Contact
            </router-link>
            <router-link
              to="/about"
              class="relative font-medium text-black hover:text-secondary-red transition"
              >About
            </router-link>
            <router-link
              to="/signup"
              class="relative font-medium text-black hover:text-secondary-red transition"
              >Sign Up
            </router-link>
          </nav>

          <div class="flex items-center gap-4">
            <div class="relative w-[243px]">
              <Combobox v-model="selectedPerson">
                <ComboboxInput
                  class="bg-[#f5f5f5] rounded-s pt-2 pb-2 pr-8 pl-3 text-sm w-full border border-transparent focus:border-gray-400 hover:border-gray-300 focus:outline-none transition"
                  placeholder="What are you looking for?"
                  @input="query = $event.target.value"
                />
                <MagnifyingGlassIcon class="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5" />
                <ComboboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50"
                >
                  <ComboboxOption
                    v-for="person in filteredPeople"
                    :key="person"
                    :value="person"
                    class="cursor-pointer select-none py-2 pl-4 pr-4 hover:bg-gray-100"
                  >
                    {{ person }}
                  </ComboboxOption>
                </ComboboxOptions>
              </Combobox>
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
              <MenuItems class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm z-40">
                <MenuItem v-slot="{ active }">
                  <router-link
                    :to="{ path: '/account/profile' }"
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
          class="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto mt-[90px]"
        >
          <div class="container p-3">
            <div class="relative w-full mb-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                class="bg-[#f5f5f5] rounded pt-2 pb-2 pr-8 pl-3 text-sm w-full border border-transparent focus:border-gray-400 hover:border-gray-300 focus:outline-none transition"
              />
              <MagnifyingGlassIcon class="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div class="border-t border-b border-gray-200 py-4">
              <nav class="flex flex-col gap-4 text-base">
                <router-link
                  to="/home"
                  class="text-xl"
                  >Home
                </router-link>
                <router-link
                  to="/contact"
                  class="text-xl"
                  >Contact
                </router-link>
                <router-link
                  to="/about"
                  class="text-xl"
                  >About
                </router-link>
                <router-link
                  to="/signup "
                  class="text-xl"
                  >Sign Up
                </router-link>
              </nav>
            </div>
          </div>
        </div>
      </transition>
    </header>
  </div>
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
</style>
