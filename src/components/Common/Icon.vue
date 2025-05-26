<script setup lang="ts">
import Cameras from '@/assets/images/categorySlides/Category-Camera.svg'
import Phones from '@/assets/images/categorySlides/Category-CellPhone.svg'
import Laptops from '@/assets/images/categorySlides/Category-Computer.svg'
import Tablets from '@/assets/images/categorySlides/Category-Gamepad.svg'
import Wearables from '@/assets/images/categorySlides/Category-Headphone.svg'
import Gaming from '@/assets/images/categorySlides/Category-Headphone.svg'

const icons: Record<string, string> = {
  'electronics-cameras': Cameras,
  'electronics-phones': Phones,
  'electronics-laptops': Laptops,
  'electronics-tablets': Tablets,
  'electronics-wearables': Wearables,
  'electronics-gaming': Gaming,
}

defineProps<{
  name: string
}>()
</script>

<template>
  <img
    v-if="icons[name]"
    :src="icons[name]"
    alt="icon"
    class="w-10 h-10 object-contain mx-auto mb-2 transition group-hover:invert"
  />

  <svg
    v-if="name === 'arrow-right'"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.7583 20.5C39.7583 9.73045 31.0278 1 20.2583 1C9.48875 1 0.758301 9.73045 0.758301 20.5C0.758301 31.2696 9.48875 40 20.2583 40C31.0278 40 39.7583 31.2696 39.7583 20.5Z"
      stroke="currentColor"
    />
    <path
      d="M20.2583 28.5L28.2583 20.5M28.2583 20.5L20.2583 12.5M28.2583 20.5H12.2583"
      stroke="currentColor"
    />
  </svg>
</template>
