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
  <div class="flex-[0_1_64%] bg-primary-white shadow-md p-5 md:p-10 rounded-sm">
    <h3 class="text-xl text-secondary-red font-medium">Edit Your Profile</h3>

    <form @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col xs:flex-row gap-x-12 gap-y-2">
          <div class="w-full">
            <label>First Name</label>
            <input
              v-model="fields.firstName.value"
              :error="metas.firstNameMeta.touched ? errors.firstNameError : ''"
              placeholder="Md"
              class="block bg-secondary-medium-white mt-2 text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
            />
          </div>

          <div class="w-full">
            <label>Last Name</label>
            <input
              v-model="fields.lastName.value"
              :error="metas.lastNameMeta.touched ? errors.lastNameError : ''"
              placeholder="Rimel"
              class="block bg-secondary-medium-white mt-2 text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
            />
          </div>
        </div>

        <div class="flex flex-col xs:flex-row gap-x-12 gap-y-2">
          <div class="w-full">
            <label>Email</label>
            <input
              v-model="fields.email.value"
              :error="metas.emailMeta.touched ? errors.emailError : ''"
              placeholder="rimel1111@gmail.com"
              class="block bg-secondary-medium-white mt-2 text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
            />
          </div>

          <div class="w-full">
            <label>Address</label>
            <input
              v-model="fields.address.value"
              :error="metas.addressMeta.touched ? errors.addressError : ''"
              placeholder="Kingston, 5236, United State"
              class="block bg-secondary-medium-white mt-2 text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
            />
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="font-medium">Password Changes</h4>

          <input
            v-model="fields.password.value"
            :error="metas.passwordMeta.touched ? errors.passwordError : ''"
            type="password"
            placeholder="Current Password"
            class="block bg-secondary-medium-white text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
          />

          <input
            v-model="fields.newPassword.value"
            :error="metas.newPasswordMeta.touched ? errors.newPasswordError : ''"
            type="password"
            placeholder="New Password"
            class="block bg-secondary-medium-white text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
          />

          <input
            v-model="fields.confirmPassword.value"
            :error="metas.confirmPasswordMeta.touched ? errors.confirmPasswordError : ''"
            type="password"
            placeholder="Confirm New Password"
            class="block bg-secondary-medium-white text-text-gray rounded-[5px] pt-3 pb-3 pl-4 w-full"
          />
        </div>
      </div>

      <div class="mt-11 flex items-center gap-4 justify-end">
        <div class="cursor-pointer">Cancel</div>
        <BaseButton type="submit">Save Changes</BaseButton>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
