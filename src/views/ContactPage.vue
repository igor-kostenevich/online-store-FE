<script setup lang="ts">
import { useBreadcrumbs } from '@/composables/breadcrumbs'
import { useValidation } from '@/composables/useValidation'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { useContactStore } from '@/stores/contacts'

const { onSubmit, fields, errors, metas } = useValidation({
  name: true,
  message: true,
  email: true,
  phone: true,
})
const store = useContactStore()
const sendEmail = onSubmit(async () => {
  await store.sendContact({
    email: fields.email.value,
    phone: fields.phone.value,
    name: fields.name.value,
    message: fields.message.value,
    hidden: '',
  })
  fields.message.value = ''
})

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <section class="pt-[100px] md:pt-[160px] pb-[100px]">
    <div class="container px-4">
      <div class="flex flex-wrap items-center mb-6 text-sm text-text-gray gap-2 pb-[80px]">
        <template
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
        >
          <router-link :to="crumb.to">{{ crumb.name }}</router-link>
          <span v-if="index < breadcrumbs.length - 1">/</span>
        </template>
      </div>

      <div class="flex flex-col lg:flex-row gap-y-8 lg:gap-x-5">
        <div class="bg-primary-white rounded-lg shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] py-10 px-6 md:px-8 w-full lg:max-w-[30%]">
          <div class="border-b border-[#7d8184] pb-7">
            <div class="flex items-center gap-4 pb-4">
              <div class="bg-secondary-red p-2.5 rounded-full">
                <PhoneIcon class="w-5 h-5 text-white" />
              </div>
              <span class="font-medium">Call To Us</span>
            </div>
            <div class="text-sm pb-2">We are available 24/7 days a week.</div>
            <a
              href="tel:8801611112222"
              class="text-sm block"
              >Phone: +8801611112222</a
            >
          </div>

          <div class="pt-7">
            <div class="flex items-center gap-4 pb-4">
              <div class="bg-secondary-red p-2.5 rounded-full">
                <EnvelopeIcon class="w-5 h-5 text-white" />
              </div>
              <span class="font-medium">Write To Us</span>
            </div>
            <div class="text-sm pb-2">Fill out our form and we will contact<br />you within 24 hours.</div>
            <a
              href="mailto:customer@exclusive.com"
              class="text-sm block pb-1"
              >Emails: customer@exclusive.com</a
            >
            <a
              href="mailto:support@exclusive.com"
              class="text-sm"
              >Emails: support@exclusive.com</a
            >
          </div>
        </div>

        <div class="w-full bg-primary-white rounded-lg shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] px-6 md:px-8 py-10">
          <form @submit.prevent="sendEmail">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col md:flex-row gap-x-4 gap-y-4">
                <div class="w-full">
                  <BaseInput
                    v-model="fields.name.value"
                    :error="metas.nameMeta.touched ? errors.nameError.value : ''"
                    placeholder="Your Name *"
                    view="secondary"
                  />
                </div>
                <div class="w-full">
                  <BaseInput
                    v-model="fields.email.value"
                    :error="metas.emailMeta.touched ? errors.emailError.value : ''"
                    placeholder="Your Email *"
                    view="secondary"
                  />
                </div>
                <div class="w-full">
                  <BaseInput
                    v-model="fields.phone.value"
                    :error="metas.phoneMeta.touched ? errors.phoneError.value : ''"
                    placeholder="Phone number"
                    view="secondary"
                  />
                  <input
                    type="text"
                    name="hidden"
                    class="hidden"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </div>
              </div>

              <BaseTextArea
                v-model="fields.message.value"
                :error="metas.messageMeta.touched ? errors.messageError.value : ''"
                area-placeholder="Your Message"
                height="8"
              />

              <div class="mt-7 flex items-center justify-end">
                <BaseButton type="submit">Send Message</BaseButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
