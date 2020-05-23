import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// GoogleMap
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
