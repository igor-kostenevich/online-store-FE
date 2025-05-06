<script setup lang="ts">
import { useValidation } from '@/composables/useValidation'

const { onSubmit, fields, errors, metas } = useValidation()
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
        <form @submit.prevent="onSubmit">
          <div class="text-4xl">Log in to Exclusive</div>
          <div class="pt-2">Enter your details below</div>

          <div class="flex flex-col gap-10 pt-10">
            <BaseInput
              v-model="fields.email.value"
              :error="metas.emailMeta.touched ? errors.emailError : ''"
              placeholder="Email or Phone Number"
            />
            <BaseInput
              v-model="fields.password.value"
              :error="metas.passwordMeta.touched ? errors.passwordError : ''"
              type="password"
              placeholder="Create new password"
            />
          </div>

          <div class="mt-11 flex items-center gap-4">
            <BaseButton type="submit">Reset Password</BaseButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
