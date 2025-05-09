<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useValidation } from '@/composables/useValidation'

const authStore = useAuthStore()
const { onSubmit, fields, errors, metas } = useValidation()

onMounted(async () => {
  await authStore.getProfile()
  fields.text.value = authStore.user?.name
  fields.email.value = authStore.user?.email
})

const handleSubmit = onSubmit(async () => {
  await authStore.updateProfile({
    name: fields.text.value as string,
    email: fields.email.value as string,
    password: fields.password.value as string,
  })
  fields.password.value = ''
})
</script>

<template>
  <section class="pt-[130px] pb-[140px]">
    <div class="container max-w-xl mx-auto">
      <h2 class="text-2xl font-bold mb-6">My profile</h2>

      <div class="mb-4">Current name : {{ authStore.user?.name }}</div>
      <div class="mb-4">Email: {{ authStore.user?.email }}</div>
      <div class="mb-8">Role: {{ authStore.user?.role }}</div>

      <form
        class="flex flex-col gap-6"
        @submit.prevent="handleSubmit"
      >
        <BaseInput
          v-model="fields.text.value"
          :error="metas.textMeta.touched ? errors.textError : ''"
          placeholder="Нове ім’я"
        />
        <BaseInput
          v-model="fields.email.value"
          :error="metas.emailMeta.touched ? errors.emailError : ''"
          placeholder="Новий email"
        />
        <BaseInput
          v-model="fields.password.value"
          :error="metas.passwordMeta.touched ? errors.passwordError : ''"
          placeholder="new password"
          type="password"
        />

        <BaseButton type="submit">Зберегти зміни</BaseButton>
      </form>
    </div>
  </section>
</template>
