<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'
import InfoSection from '@/components/Products/InfoSection.vue'
import Icon from '@/components/Common/Icon.vue'

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <section class="pt-[140px] relative overflow-visible">
    <div class="container relative z-10">
      <div class>
        <div class="flex flex-wrap items-center mb-6 text-sm text-text-gray gap-2">
          <template
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
          >
            <router-link :to="crumb.to">{{ crumb.name }}</router-link>
            <span v-if="index < breadcrumbs.length - 1">/</span>
          </template>
        </div>
      </div>
      <div class="pb-[140px]">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="w-full lg:w-1/2 lg:pt-[100px]">
            <h2 class="font-semibold text-5xl pb-10">Our Story</h2>
            <div class="max-w-[525px]">
              <p class="text-base leading-relaxed pb-6">
                Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range
                of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
              </p>
              <p class="text-base leading-relaxed">
                Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from
                consumer.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/2 lg:hidden">
            <img
              src="@/assets/about/SideImage.png"
              alt="photo"
              class="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:block absolute top-[140px] right-0 w-1/2 translate-x-8">
      <img
        src="@/assets/about/SideImage.png"
        alt="photo"
        class="w-full h-[609px] object-cover"
      />
    </div>
  </section>

  <section class="pb-[140px] lg:pt-[180px]">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        <div class="group flex flex-col items-center border border-gray py-8 px-12 hover:bg-red-500 transition duration-150">
          <div class="mb-2">
            <Icon name="shop" />
          </div>
          <div class="text-[32px] font-bold group-hover:text-white">10.5k</div>
          <div class="text-[15px] group-hover:text-white">Sallers active our site</div>
        </div>

        <div class="group flex flex-col items-center border border-gray py-8 px-12 hover:bg-red-500 transition duration-150">
          <div class="mb-2">
            <Icon name="dolar" />
          </div>
          <div class="text-[32px] font-bold group-hover:text-white">33k</div>
          <div class="text-[15px] group-hover:text-white">Mopnthly Produduct Sale</div>
        </div>

        <div class="group flex flex-col items-center border border-gray py-8 px-12 hover:bg-red-500 transition duration-150">
          <div class="mb-2">
            <Icon name="services" />
          </div>
          <div class="text-[32px] font-bold group-hover:text-white">45.5k</div>
          <div class="text-[15px] group-hover:text-white">Customer active in our site</div>
        </div>

        <div class="group flex flex-col items-center border border-gray py-8 px-12 hover:bg-red-500 transition duration-150">
          <div class="mb-2">
            <Icon name="money" />
          </div>
          <div class="text-[32px] font-bold group-hover:text-white">25k</div>
          <div class="text-[15px] group-hover:text-white">Anual gross sale in our site</div>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-[60px]">
    <div class="container">
      <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="flex flex-col">
          <div class="pb-8 w-full max-w-[370px]">
            <img
              src="../assets/about/01.png"
              alt="photo"
              class="w-full object-cover"
            />
          </div>
          <div class="text-3xl font-medium pb-2">Tom Cruise</div>
          <div class="pb-2">Founder & Chairman</div>
          <div class="flex gap-3">
            <Icon name="twitter" />
            <Icon name="instagram" />
            <Icon name="linkedin" />
          </div>
        </div>

        <div class="flex flex-col">
          <div class="pb-6 rounded-[4px] w-full max-w-[370px]">
            <img
              src="../assets/about/02.png"
              alt="photo"
              class="w-full object-cover"
            />
          </div>
          <div class="text-3xl font-medium pb-2">Emma Watson</div>
          <div class="pb-2">Managing Director</div>
          <div class="flex gap-3">
            <Icon name="twitter" />
            <Icon name="instagram" />
            <Icon name="linkedin" />
          </div>
        </div>

        <div class="flex flex-col">
          <div class="pb-6 w-full max-w-[370px]">
            <img
              src="../assets/about/03.png"
              alt="photo"
              class="w-full object-cover"
            />
          </div>
          <div class="text-3xl font-medium pb-2">Will Smith</div>
          <div class="pb-2">Product Designer</div>
          <div class="flex gap-3">
            <Icon name="twitter" />
            <Icon name="instagram" />
            <Icon name="linkedin" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <InfoSection />
</template>

<style scoped></style>
