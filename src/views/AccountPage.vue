<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SideBarAccount from '@/components/Common/SideBarAccount.vue'

const route = useRoute()

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  const crumbs = [{ name: 'Home', to: '/' }]

  paths.forEach((segment, index) => {
    const to = '/' + paths.slice(0, index + 1).join('/')
    crumbs.push({
      name: segment.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
      to,
    })
  })

  return crumbs
})
</script>

<template>
  <section class="pt-[140px]">
    <div class="container">
      <div class="flex justify-between items-center mb-6">
        <div class="flex gap-2 text-sm text-text-gray">
          <template
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
          >
            <router-link :to="crumb.to">{{ crumb.name }}</router-link>
            <span v-if="index < breadcrumbs.length - 1">/</span>
          </template>
        </div>

        <div>Welcome! <span class="text-secondary-red">Md Rimel</span></div>
      </div>

      <div class="flex md:flex-row flex-col pt-20">
        <SideBarAccount class="flex-[0_1_30%]" />
        <router-view />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
