<script setup lang="ts">
import { onMounted } from 'vue'
import { useValidation } from '@/composables/useValidation'
import { useAuthStore } from '@/stores/auth'

const { onSubmit, fields, errors, metas } = useValidation({
  requireFirstName: true,
  requireLastName: true,
  requireAddress: true,
  requireEmail: true,
  requirePassword: true,
  requireConfirmPassword: true,
  requireNewPassword: true,
  requirePhone: true,
})
const authStore = useAuthStore()

onMounted(async () => {
  await authStore.getProfile()

  fields.firstName.value = authStore.user?.firstName
  fields.lastName.value = authStore.user?.lastName
  fields.address.value = authStore.user?.address
  fields.email.value = authStore.user?.email
  fields.phone.value = authStore.user?.phone
})

const handleSubmit = onSubmit(async () => {
  await authStore.updateProfile({
    firstName: fields.firstName.value,
    lastName: fields.lastName.value,
    phone: fields.phone.value,
    address: fields.address.value,
    oldPassword: fields.password.value,
    newPassword: fields.newPassword.value,
    repeatPassword: fields.confirmPassword.value,
  })
  fields.password.value = ''
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

            <BaseInput
              v-model="fields.firstName.value"
              :error="metas.firstNameMeta.touched ? errors.firstNameError.value : ''"
              placeholder="Md"
              view="secondary"
            />
          </div>

          <div class="w-full">
            <label>Last Name</label>

            <BaseInput
              v-model="fields.lastName.value"
              :error="metas.lastNameMeta.touched ? errors.lastNameError.value : ''"
              placeholder="Rimel"
              view="secondary"
            />
          </div>
        </div>

        <div class="flex flex-col xs:flex-row gap-x-12 gap-y-2">
          <div class="w-full">
            <label>Email</label>

            <BaseInput
              v-model="fields.email.value"
              :error="metas.emailMeta.touched ? errors.emailError.value : ''"
              placeholder="rimel1111@gmail.com"
              view="secondary"
            />
          </div>

          <div class="w-full">
            <label>Address</label>

            <BaseInput
              v-model="fields.address.value"
              :error="metas.addressMeta.touched ? errors.addressError.value : ''"
              placeholder="Kingston, 5236, United State"
              view="secondary"
            />
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="font-medium">Phone Number</h4>

          <BaseInput
            v-model="fields.phone.value"
            :error="metas.phoneMeta.touched ? errors.phoneError.value : ''"
            placeholder="phone number"
            view="secondary"
          />
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-medium">Password Changes</h4>

          <BaseInput
            v-model="fields.password.value"
            :error="metas.passwordMeta.touched ? errors.passwordError.value : ''"
            placeholder="Current Password"
            view="secondary"
          />

          <BaseInput
            v-model="fields.newPassword.value"
            :error="metas.newPasswordMeta.touched ? errors.newPasswordError.value : ''"
            placeholder="New Password"
            view="secondary"
          />

          <BaseInput
            v-model="fields.confirmPassword.value"
            :error="metas.confirmPasswordMeta.touched ? errors.confirmPasswordError.value : ''"
            placeholder="Confirm New Password"
            view="secondary"
          />
        </div>
      </div>

      <div class="mt-11 flex items-center gap-4 justify-end">
        <BaseButton class="bg-transparent text-[#000]">Cancel</BaseButton>
        <BaseButton type="submit">Save Changes</BaseButton>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
