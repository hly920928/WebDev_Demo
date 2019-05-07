import Vue from 'vue'
import App from './App'
import router from './router/router'
import store_1 from './store/store_1'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store_1,
  render: h => h(App)
})
