<script setup lang="ts">
import { useValidation } from '@/composables/useValidation'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const { onSubmit, fields, errors, metas } = useValidation()
const authStore = useAuthStore()
const router = useRouter()

const handleSubmit = onSubmit(async () => {
  const userData = {
    email: fields.email.value,
    password: fields.password.value,
  }

  await authStore.login(userData)
  router.push('/home')
})
</script>

<template>
  <div class="flex-[0_1_64%]">
    <h3 class="text-xl text-secondary-red font-medium">Edit Your Profile</h3>

    <form @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-10">
        <div class="flex gap-2">
          <div class="w-full">
            <label>First Name</label>

            <input
              v-model="fields.text.value"
              :error="metas.textMeta.touched ? errors.textError : ''"
              placeholder="Md"
              class="block bg-red-500 text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
            />
          </div>

          <div class="w-full">
            <label>First Name</label>

            <input
              v-model="fields.text.value"
              :error="metas.textMeta.touched ? errors.textError : ''"
              placeholder="Md"
              class="block bg-red-500 text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
            />
          </div>
        </div>
        <!--        <BaseInput-->
        <!--          v-model="fields.email.value"-->
        <!--          :error="metas.emailMeta.touched ? errors.emailError : ''"-->
        <!--          placeholder="Email or Phone Number"-->
        <!--        />-->
        <!--        <BaseInput-->
        <!--          v-model="fields.password.value"-->
        <!--          :error="metas.passwordMeta.touched ? errors.passwordError : ''"-->
        <!--          type="password"-->
        <!--          placeholder="Password"-->
        <!--        />-->
      </div>

      <div class="mt-11 flex items-center gap-4 justify-between">
        <div class="cursor-pointer">Cancel</div>
        <BaseButton type="submit">Save Changes</BaseButton>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
