import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import BootstrapVue from 'bootstrap-vue'
import 'vuetify/dist/vuetify.min.css'

Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
