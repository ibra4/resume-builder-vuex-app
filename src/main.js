import Vue from 'vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import 'vuetify/dist/vuetify.min.css'

// Vue.use(BootstrapVue)
Vue.use(vuetify)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
