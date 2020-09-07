import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/locale/index'
import './assets/main.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const firebaseConfig = {
  apiKey: "AIzaSyAq-UiSPdLX7g1BUHAGk6cn6lgd1ahXeZo",
  authDomain: "verto-zp.firebaseapp.com",
  databaseURL: "https://verto-zp.firebaseio.com",
  projectId: "verto-zp",
  storageBucket: "verto-zp.appspot.com",
  messagingSenderId: "312768490360",
  appId: "1:312768490360:web:b8a832822fd17fd225f68d"
};

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
