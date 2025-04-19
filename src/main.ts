import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import Icon from '@/components/Icon.vue'
import { i18n } from './i18n'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)

app.use(router).use(pinia).use(i18n).use(Notifications)
app.component('Icon', Icon)

app.mount('#app')
