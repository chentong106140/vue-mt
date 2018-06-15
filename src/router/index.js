import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import Home from '../pages/Home.vue'
import Fujin from '../pages/Fujin.vue'
import Guang from '../pages/Guang.vue'
import Me from '../pages/Me.vue'
import Order from '../pages/Order.vue'
import MeiShi from '../pages/MeiShi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          redirect:'/Home'
        },
        {
          path: '/Home',
          name: 'home',
          component: Home
        }, {
          path: '/Guang',
          name: 'guang',
          component: Guang
        }, {
          path: '/Me',
          name: 'me',
          component: Me
        }, {
          path: '/Order',
          name: 'order',
          component: Order
        }, {
          path: '/Fujin',
          name: 'fujin',
          component: Fujin
        }
      ]
    },{
      path: '/MeiShi',
      name: 'meishi',
      component: MeiShi
    }
  ]
})
