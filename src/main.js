import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import '@babel/polyfill'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "vuetify/dist/vuetify.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faSnapchatSquare,
  faYoutube,
  faWhatsapp,
  faWeixin,
  faPinterestSquare,
  faTumblrSquare,
  faSoundcloud,
  faSpotify,
  faLinkedin,
  faSkype,
  faGithubSquare,
  faBitbucket,
  faStackOverflow,
  faJsfiddle
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueHtml2Canvas from 'vue-html2canvas';
 
Vue.use(VueHtml2Canvas);
library.add(
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faSnapchatSquare,
  faYoutube,
  faWhatsapp,
  faWeixin,
  faPinterestSquare,
  faTumblrSquare,
  faSoundcloud,
  faSpotify,
  faLinkedin,
  faSkype,
  faGithubSquare,
  faBitbucket,
  faStackOverflow,
  faJsfiddle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(vuetify);
Vue.use(VueHtml2Canvas);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
