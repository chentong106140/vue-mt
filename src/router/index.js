import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import Home from '../pages/Home/Home.vue'
import Fujin from '../pages/Fujin/Fujin.vue'
import Guang from '../pages/Guang/Guang.vue'
import Me from '../pages/Me/Me.vue'
import Order from '../pages/Order/Order.vue'
import MeiShi from '../pages/MeiShi.vue'
import Map from '../pages/Map.vue'
import Map_Search from '../components/Map-Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'main',
          redirect: '/Home'
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
    }, {
      path: '/MeiShi',
      name: 'meishi',
      component: MeiShi
    }, {
      path: '/Map',
      name: 'map',
      component: Map
    }, {
      path: '/Map_Search',
      name: 'map-search',
      component: Map_Search
    }
  ]
})
