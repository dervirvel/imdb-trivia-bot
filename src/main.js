import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
import VueAxios from 'vue-axios'
import cheerio from 'cheerio';

import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(VueAxios, axios)
Vue.use(cheerio)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
