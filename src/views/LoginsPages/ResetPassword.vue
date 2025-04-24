<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

// yup-схема
const schema = yup.object({
  email: yup
    .string()
    .required('Email або телефон обовʼязковий')
    .matches(/^(\+?\d{10,13}|[^@\s]+@[^@\s]+\.[^@\s]+)$/, 'Некоректний email або телефон'),

  password: yup
    .string()
    .required('придумайте новий пароль')
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')


const onSubmit = handleSubmit(values => {
  console.log('Form submitted:', values)
})
</script>

<template>
  <div >
    <div class="container">
      <div class=" flex flex-col  md:flex-row gap-16">
        <div class="login__image">
          <img
class="  w-[500px ]md:w-[800px]"
               src="@/assets/images/loginImg.png"
               alt="image"
          />
        </div>

        <form
          class=" pt-20"
          @submit="onSubmit"
        >
          <div class=" text-4xl">Log in to Exclusive</div>
          <div class=" pt-2">Enter your details below</div>

          <div class=" flex flex-col gap-5 pt-10">
            <BaseInput
              v-model="email"
              :error="emailError"
              placeholder="Email or Phone Number"
            />
            <BaseInput
              v-model="password"
              :error="passwordError"
              type="password"
              placeholder="create new password"
            />
          </div>

          <div class=" mt-7 flex items-center gap-4">
            <BaseButton type="submit"> reset password </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
