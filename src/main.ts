import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import Icon from '@/components/Icon.vue'
import { i18n } from './i18n'
import Notifications from '@kyvg/vue3-notification'




import BaseInput from '@/components/shared/BaseInput.vue'
import BaseButton from '@/components/shared/BaseButton.vue'
import BaseTextArea from '@/components/shared/BaseTextArea.vue'
const app = createApp(App)

app.use(router).use(pinia).use(i18n).use(Notifications)
app.component('Icon', Icon)
app.component('BaseInput', BaseInput)
app.component('BaseButton', BaseButton)
app.component('BaseTextArea', BaseTextArea)

app.mount('#app')
