import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import API from './api/index'
import fetch from './middlewares/fetch'
import './common/style/index.scss'
import getValue from './common/utils/getValue'
import './common/utils/rem'
import * as cookie from './common/utils/cookie'
import * as state from './common/utils/constant'

Vue.config.productionTip = false
Vue.prototype.API = API
Vue.prototype.fetch = fetch
Vue.prototype.getValue = getValue
Vue.prototype.cookie = cookie
Vue.prototype.state = state


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
