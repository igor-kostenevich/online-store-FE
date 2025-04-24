
<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'


const schema = yup.object({
  email: yup
    .string()
    .required('Email або телефон обовʼязковий')
    .matches(/^(\+?\d{10,13}|[^@\s]+@[^@\s]+\.[^@\s]+)$/, 'Некоректний email або телефон'),
  password: yup.string().min(6, 'Мінімум 6 символів').required('Пароль обовʼязковий'),
  text: yup.string().required('імя обовʼязкове ')

})

const { handleSubmit } = useForm({
  validationSchema: schema
})

const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')
const { value: text, errorMessage: textError } = useField('text')

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values)
})
</script>

<template>

  <div class="login">
    <div class="container">
      <div class="login__body flex flex-col  md:flex-row gap-16">
        <div class="login__image">
          <img
class="  w-[500px ]md:w-[800px]"
               src="@/assets/images/loginImg.png"
               alt="image"
          />
        </div>

        <form
          class="login__form pt-20"
          @submit="onSubmit"
        >
          <div class="login__title text-4xl">Log in to Exclusive</div>
          <div class="login__subitle pt-2">Enter your details below</div>

          <div class="inputs flex flex-col gap-5 pt-10">

            <BaseInput
              v-model="text"
              :error="textError"
              placeholder="Name"
            />
            <BaseInput
              v-model="email"
              :error="emailError"
              placeholder="Email or Phone Number"
            />
            <BaseInput
              v-model="password"
              :error="passwordError"
              type="password"
              placeholder= " пароль"
            />
          </div>


          <div class="buttons mt-7 flex items-center gap-4">
            <BaseButton type="submit">
              Log In
            </BaseButton>
            <router-link
:to="{name:'reset-password'}"
                         class="text-secondary-red cursor-pointer">Forget Password?</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
