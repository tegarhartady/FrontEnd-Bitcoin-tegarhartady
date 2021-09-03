import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false
import Vue2Filters from 'vue2-filters'



import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vue2Filters)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
