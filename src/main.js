import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue2TouchEvents from 'vue2-touch-events'
import App from './App.vue'
import router from './router'
import './bus'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(Vue2TouchEvents)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
