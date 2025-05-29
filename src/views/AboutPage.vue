<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'
import Slider from '@/components/Common/Slider.vue'

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <section class="pt-[140px]">
    <div class="container px-4">
      <div class="flex flex-wrap items-center mb-6 text-sm text-text-gray gap-2">
        <template
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
        >
          <router-link :to="crumb.to">{{ crumb.name }}</router-link>
          <span v-if="index < breadcrumbs.length - 1">/</span>
        </template>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="w-full lg:w-1/2">
          <h2 class="font-semibold text-5xl pb-10">Our Story</h2>

          <div>
            <p class="text-base leading-relaxed pb-6">
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range
              of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            </p>

            <p class="text-base leading-relaxed">
              Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
        </div>

        <div class="w-full lg:w-1/2">
          <img
            src="@/assets/about/SideImage.png"
            alt="photo"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

      <Slider
        :items="productSlider.products.items"
        :slides-view="4"
        :space-between="20"
        slide-effect="slide"
        :slide-start="0"
        :navigation="true"
        next-btn-id=".products-slider-next"
        prev-btn-id=".products-slider-prev"
        :loop="true"
        :breakpoints="breakpoints"
        class="mt-10 md:mt-0"
      >
        <template #slide="{ item }">
          <ProductCard
            :key="item.id"
            :product="item"
            class="h-full"
            @click="toDetails(item)"
          />
        </template>
      </Slider>
    </div>
  </section>
</template>

<style scoped></style>
