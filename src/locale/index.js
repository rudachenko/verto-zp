import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'
import ua from './ua.json'

Vue.use(VueI18n)

const TRANSLATIONS = {
  en: en,
  ua: ua
}

const messages = Object.assign(TRANSLATIONS)

const i18n = new VueI18n({
  locale: 'ua',
  messages
})

export default i18n
