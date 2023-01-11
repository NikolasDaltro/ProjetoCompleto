import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik5pa29sYXMgRGFsdHJvIiwiZW1haWwiOiJuaWtvbGFzZHNhbnRvc0Bob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzMzODQ5NzAsImV4cCI6MTY3MzY0NDE3MH0.r6381YnQeiIctkZC6j1Tv_SLbl0DZ31OvALZWXOzHTY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')