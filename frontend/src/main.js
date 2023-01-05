import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwibmFtZSI6Ikl1cnkiLCJlbWFpbCI6Im1hbmluQGdtYWlsLmNvbSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjcyOTIyODQ0LCJleHAiOjE2NzMxODIwNDR9.t_gdtBHau7ZapDxSdpLel_ZcXPUSwfhZ9JtxMPvTpik'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')