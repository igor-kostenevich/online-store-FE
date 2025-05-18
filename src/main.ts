import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import Icon from '@/components/common/Icon.vue'
import { i18n } from './i18n'
import Notifications from '@kyvg/vue3-notification'

import vue3StarRatings from 'vue3-star-ratings'
import BaseButton from '@/components/shared/BaseButton.vue'
import BaseInput from '@/components/shared/BaseInput.vue'
import BaseTextArea from '@/components/shared/BaseTextArea.vue'
import BaseProductCard from '@/components/common/BaseProductCard.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/effect-fade'

const app = createApp(App)

app.use(router).use(pinia).use(i18n).use(Notifications)
app.component('Icon', Icon)

app.component('vue3-star-ratings', vue3StarRatings)
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('BaseTextArea', BaseTextArea)
app.component('BaseProductCard', BaseProductCard)

app.mount('#app')
