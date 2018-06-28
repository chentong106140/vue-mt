// http://edu.51cto.com//center/course/lesson/index?id=199407
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import './ui'


Vue.config.productionTip = false


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<app ></app>'
});

window.vm = vm;

/**
 * vm.$route:当前路由
 * vm.$router:总的路由对象
 */


window.addEventListener("popstate", function (event) {
  var len = window.history.length - store.state.history.length;
  console.log("Main----popstate>>>>>>>", vm.$route.path,window.history.length,store.state.history.length,-len);
  if(window.history && vm.$route.path=="/Home")
  {
    store.commit("history/go",-len);
     // vm.$router.replace("/Home");
  }
}, false);
