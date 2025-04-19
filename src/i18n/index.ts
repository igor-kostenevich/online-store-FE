import { createI18n } from 'vue-i18n'
import type { Locale } from '@/types/Enums'
import en from '@/lang/en.json'

const getBrowserLocale = () => {
  const browserLanguage = navigator.language.split('-')[0]
  return browserLanguage === 'en' || browserLanguage === 'pl' ? browserLanguage : 'en'
}

const DEFAULT_LOCALE: string = localStorage.getItem('lang') || getBrowserLocale()

const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  legacy: false,
  globalInjection: true,
  fallbackLocale: 'en',
  messages: {
    en,
  },
})

const t = i18n.global.t

const changeLocale = (locale: Locale) => {
  i18n.global.locale.value = locale
}

export { i18n, DEFAULT_LOCALE, changeLocale, t }
