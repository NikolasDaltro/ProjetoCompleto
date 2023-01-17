import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik5pa29sYXMgRGFsdHJvIiwiZW1haWwiOiJuaWtvbGFzZHNhbnRvc0Bob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzM5NjYyNzcsImV4cCI6MTY3NDIyNTQ3N30.JZTqwvPfpkWuAV5o5WqDUcJBfQRcNahMp4__AixyRjQ'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')