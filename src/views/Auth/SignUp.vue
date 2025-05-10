<script setup lang="ts">
import { useValidation } from '@/composables/useValidation'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const { onSubmit, fields, errors, metas } = useValidation(true)
const authStore = useAuthStore()
const router = useRouter()

const handleSubmit = onSubmit(async () => {
  const userData = {
    name: fields.text.value,
    email: fields.email.value,
    password: fields.password.value,
  }

  await authStore.register(userData)
  router.push('/home')
})
</script>

<template>
  <section class="pt-[140px] pb-[70px]">
    <div class="flex flex-col md:flex-row gap-20">
      <div class="flex-[0_1_50%]">
        <img
          class="ml-[-34px] w-full h-[781px]"
          src="@/assets/images/loginImg.png"
          alt="image"
        />
      </div>

      <div class="container m-0 flex-[0_1_30%] self-center">
        <form @submit.prevent="handleSubmit">
          <div class="text-4xl">Create an account</div>
          <div class="pt-2">Enter your details below</div>

          <div class="flex flex-col gap-10 pt-10">
            <BaseInput
              v-model="fields.text.value"
              :error="metas.textMeta.touched ? errors.textError : ''"
              placeholder="Name"
            />
            <BaseInput
              v-model="fields.email.value"
              :error="metas.emailMeta.touched ? errors.emailError : ''"
              placeholder="Email or Phone Number"
            />
            <BaseInput
              v-model="fields.password.value"
              :error="metas.passwordMeta.touched ? errors.passwordError : ''"
              type="password"
              placeholder="Password"
            />
          </div>

          <div class="mt-11 flex items-center gap-4 justify-between">
            <BaseButton type="submit">Log In</BaseButton>
            <router-link
              :to="{ name: 'reset-password' }"
              class="text-secondary-red cursor-pointer"
            >
              Forget Password?
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
