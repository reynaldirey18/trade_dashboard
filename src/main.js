import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' // Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax styles
import store from './store/store' // Store vuex
import i18n from './i18n/i18n' // il8n
import { ValidationProvider } from 'vee-validate' // VeeValidate
import vSelect from 'vue-select' // vueSelect
import axios from 'axios' // axios
import cookie from 'js-cookie' // js-cookie
import Clipboard from 'v-clipboard' // Clipbord
// import VueMqtt from 'vue-mqtt' // mqtt
import './assets/scss/main.scss' // Styles: SCSS
import './assets/scss/customScssTready.scss' // Styles tready : SCSS
import '@/assets/css/main.css' // css tailwind

Vue.use(Vuesax)
Vue.use(Clipboard)
// Vue.use(VueMqtt, 'broker.mqttdashboard.com', 8000, { clientId: 'WebClient-' + parseInt(Math.random() * 100000) })

Vue.component('v-select', vSelect)
Vue.component('ValidationProvider', ValidationProvider)

Vue.config.productionTip = false

const axiosOptoins = {
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 180000, // 3 menit
  headers: {}
}

if (cookie.getJSON('userdata') !== undefined) {
  const auth = cookie.getJSON('userdata')
  console.log(auth)
  store.commit('SET_LOGIN', auth)

  axiosOptoins.headers.Authorization = 'Bearer ' + auth.access_token
  console.log(auth)
  store.commit('retrieveToken', auth.access_token)
}

Vue.prototype.$axios = axios.create(axiosOptoins)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
