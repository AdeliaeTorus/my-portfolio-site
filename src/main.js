


import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'en', 
    messages: {
      en: require('./lang/en.json'),
      ja: require('./lang/ja.json')
    }
})

createApp(App).use(i18n).use(router).mount('#app')


