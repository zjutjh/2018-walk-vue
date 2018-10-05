import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import API from './api/index'
import fetch from './middlewares/fetch'
import './common/style/index.scss'
import getValue from './common/utils/getValue'

Vue.config.productionTip = false
Vue.prototype.API = API
Vue.prototype.fetch = fetch
Vue.prototype.getValue = getValue

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
