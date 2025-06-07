import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import Icon from '@/components/Common/Icon.vue'
import { i18n } from './i18n'
import Notifications from '@kyvg/vue3-notification'
import { ContentLoader } from 'vue-content-loader'

import vue3StarRatings from 'vue3-star-ratings'
import BaseButton from '@/components/Shared/BaseButton.vue'
import BaseInput from '@/components/Shared/BaseInput.vue'
import BaseTextArea from '@/components/Shared/BaseTextArea.vue'
import ProductCard from '@/components/Products/ProductCard.vue'
import BaseQuantity from '@/components/Shared/BaseQuantity.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

const app = createApp(App)

app.use(router).use(pinia).use(i18n).use(Notifications)
app.component('Icon', Icon)

app.component('vue3-star-ratings', vue3StarRatings)
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('BaseTextArea', BaseTextArea)
app.component('ProductCard', ProductCard)
app.component('BaseQuantity', BaseQuantity)
app.component('ContentLoader', ContentLoader)
app.mount('#app')
