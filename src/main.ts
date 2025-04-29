import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import Icon from '@/assets/images/components/Icon.vue'
import { i18n } from './i18n'
import Notifications from '@kyvg/vue3-notification'

import vue3StarRatings from 'vue3-star-ratings'
import BaseButton from '@/assets/images/components/shared/BaseButton.vue'
import BaseInput from '@/assets/images/components/shared/BaseInput.vue'
import BaseTextArea from '@/assets/images/components/shared/BaseTextArea.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const app = createApp(App)

app.use(router).use(pinia).use(i18n).use(Notifications)
app.component('Icon', Icon)

app.component('vue3-star-ratings', vue3StarRatings)
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('BaseTextArea', BaseTextArea)

app.mount('#app')
