<script setup lang="ts">
import { onMounted } from 'vue'
import { useBreadcrumbs } from '@/composables/breadcrumbs'
import { useValidation } from '@/composables/useValidation'
import { useAuthStore } from '@/stores/auth'
import SideBarAccount from '@/components/Common/SideBarAccount.vue'

const authStore = useAuthStore()
const { fields } = useValidation({ firstName: true })
const { breadcrumbs } = useBreadcrumbs()

onMounted(async () => {
  await authStore.getProfile()
  fields.firstName.value = authStore.user.firstName
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

        <div>
          Welcome! <span class="text-secondary-red">{{ fields.firstName.value }}</span>
        </div>
      </div>

      <div class="flex md:flex-row flex-col pt-20">
        <SideBarAccount class="flex-[0_1_30%]" />
        <router-view />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
