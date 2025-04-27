<script setup lang="ts">
import { useValidation } from '@/composables/useValidation'

const { onSubmit, fields, errors, metas } = useValidation()
</script>

<template>
  <div>
    <div class="container">
      <div class="flex flex-col md:flex-row gap-16">
        <div class="login__image">
          <img
            class="w-[500px ]md:w-[800px]"
            src="@/assets/images/loginImg.png"
            alt="image"
          />
        </div>

        <form
          class="pt-20"
          @submit="onSubmit"
        >
          <div class="text-4xl">Log in to Exclusive</div>
          <div class="pt-2">Enter your details below</div>

          <div class="flex flex-col gap-5 pt-10">
            <BaseInput
              v-model="fields.email.value"
              :error="metas.emailMeta.touched ? errors.emailError : ''"
              placeholder="Email or Phone Number"
            />
            <BaseInput
              v-model="fields.password.value"
              :error="metas.passwordMeta.touched ? errors.passwordError : ''"
              type="password"
              placeholder="create new password"
            />
          </div>

          <div class="mt-7 flex items-center gap-4">
            <BaseButton type="submit"> reset password </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
