import Vue from 'vue'
import vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"
import '@mdi/font/css/materialdesignicons.css'

Vue.use(vuetify)

export default new vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
})