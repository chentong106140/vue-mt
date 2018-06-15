// http://edu.51cto.com//center/course/lesson/index?id=199407
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import './ui'



Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<app></app>'
})
