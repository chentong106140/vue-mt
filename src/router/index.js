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

import Store from '../vuex/index.js'

Vue.use(Router)

var router = new Router(
  {
    mode: 'history',
    routes: [
      {
        path: '*',
        redirect: '/Main',
        beforeEnter: function (to, from, next) {
          console.log("router--*--beforeEnter>>>>>>>>>>>>>>");
          console.log("%c%s", "color:red", "to: ", to);
          console.log("%c%s", "color:red", "from: ", from);
          console.log("%c%s", "color:red", "router: ", router);
          next();
        }
      },
      {
        path: '/',
        redirect: '/Main',
        beforeEnter: function (to, from, next) {
          console.log("router--/--beforeEnter>>>>>>>>>>>>>>");
          console.log("%c%s", "color:red", "to: ", to);
          console.log("%c%s", "color:red", "from: ", from);
          console.log("%c%s", "color:red", "router: ", router);
          next();
        }
      },
      {
        path: '/Main',
        component: Main,
        beforeEnter: function (to, from, next) {
          console.log("router--/Main--beforeEnter>>>>>>>>>>>>>>");
          console.log("%c%s", "color:red", "to: ", to);
          console.log("%c%s", "color:red", "from: ", from);
          console.log("%c%s", "color:red", "router: ", router);
          next();
        },
        children: [
          {
            path: '/',
            name: 'Home',
            redirect: '/Home',
            beforeEnter: function (to, from, next) {
              console.log("router--''--beforeEnter>>>>>>>>>>>>>>");
              console.log("%c%s", "color:red", "to: ", to);
              console.log("%c%s", "color:red", "from: ", from);
              console.log("%c%s", "color:red", "router: ", router);
              next();
            }
          },
          {
            path: '/Home',
            name: 'home',
            component: Home,
            beforeEnter: function (to, from, next) {
              console.log("router--/Home--beforeEnter>>>>>>>>>>>>>>");
              console.log("%c%s", "color:red", "to: ", to);
              console.log("%c%s", "color:red", "from: ", from);
              console.log("%c%s", "color:red", "router: ", router);
              next();
            }
          }, {
            path: '/Guang',
            name: 'guang',
            component: Guang,
            beforeEnter: function (to, from, next) {
              console.log("router--/Guang--beforeEnter>>>>>>>>>>>>>>");
              console.log("%c%s", "color:red", "to: ", to);
              console.log("%c%s", "color:red", "from: ", from);
              console.log("%c%s", "color:red", "router: ", router);
              next();
            }
          }, {
            path: '/Me',
            name: 'me',
            component: Me,
            meta: {requiresAuth: true},
            beforeEnter: function (to, from, next) {
              console.log("router--/Me--beforeEnter>>>>>>>>>>>>>>");
              console.log("%c%s", "color:red", "to: ", to);
              console.log("%c%s", "color:red", "from: ", from);
              console.log("%c%s", "color:red", "router: ", router);
              next();
            }
          }, {
            path: '/Order',
            name: 'order',
            component: Order,
            beforeEnter: function (to, from, next) {
              console.log("router--/Order--beforeEnter>>>>>>>>>>>>>>");
              console.log("%c%s", "color:red", "to: ", to);
              console.log("%c%s", "color:red", "from: ", from);
              console.log("%c%s", "color:red", "router: ", router);
              next();
            }
          }, {
            path: '/Fujin',
            name: 'fujin',
            component: Fujin,
            beforeEnter: function (to, from, next) {
              console.log("router--/Fujin--beforeEnter>>>>>>>>>>>>>>");
              console.log("%c%s", "color:red", "to: ", to);
              console.log("%c%s", "color:red", "from: ", from);
              console.log("%c%s", "color:red", "router: ", router);
              next();
            }
          }
        ]
      }, {
        path: '/MeiShi',
        name: 'meishi',
        component: MeiShi,
        beforeEnter: function (to, from, next) {
          console.log("router--/MeiShi--beforeEnter>>>>>>>>>>>>>>");
          console.log("%c%s", "color:red", "to: ", to);
          console.log("%c%s", "color:red", "from: ", from);
          console.log("%c%s", "color:red", "router: ", router);
          next();
        }
      }, {
        path: '/Map',
        name: 'map',
        component: Map
      }, {
        path: '/Map_Search',
        name: 'map-search',
        component: MeiShi
      }
    ]
  });

/**
 * 全局守卫
 */
router.beforeEach(function (to, from, next) {
  console.log("router---beforeEach>>>>>>>>>>>>>>");
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数
  console.log("%c%s", "color:red", "to: ", to);
  console.log("%c%s", "color:red", "from: ", from);
  console.log("%c%s", "color:red", "router: ", router);

  //判断是否是首次登入，由于/Home首页路由，是通过/路由重定向过来的，也就是说在首次登入的时候才会重定向，所以，to路由会存在redirectedFrom属性
  //通过如下判断，能够确定app首次进入的时候，我们记录window.history.length的长度方便app返回退出
  if(to.redirectedFrom && to.redirectedFrom == '/')
  {
    Store.commit("history/initLength");
  }




  //一个路由可能嵌套了多个路由，例如，进入一个子路由，这个子路由对象的matched数组会包含当前路由所有的路由信息
  //例如/Home这个路由，他是/Main路由下的子路由，所以路由对象的.matched数组属性会包含/Home与/Main路由的路由信息
  //通过matched属性，可以获取当前路由所关联所有路由的meta元数据属性
  console.log("%c%s", "color:red", "matched: ", to.matched);
  //判断路由元数据中是否存在requiresAuth属性，意义在于是否需要鉴权
  //数组some方法，判断数组中是否存在符合函数内要求的条件，如果函数内返回true，那么some就返回true,如果函数内返回false，继续判断下一个数组元素是否符合要求，直到最后
  var requiresAuth = to.matched.some(function (router) {
    return router.meta.requiresAuth == true
  });
  //如果当前路由需要鉴权，同时，用户是未登陆状态，就跳转到登陆页面，此处目前先跳转到首页
  if (requiresAuth && !Store.state.user.isLogin) {
      next({
        path:'/Main',
        replace:true
      });
      //效果同上
     /* router.replace({path:"/Main",query:{redirect:to.fullPath}});*/
  }else{
    next();
  }




});

/**
 * 全局解析守卫
 */
router.beforeResolve(function (to, from, next) {
  console.log("router---beforeResolve>>>>>>>>>>>>>>");
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数
  console.log("%c%s", "color:red", "to: ", to);
  console.log("%c%s", "color:red", "from: ", from);
  console.log("%c%s", "color:red", "router: ", router);
  next();
});

/**
 * 全局后置钩子
 */
router.afterEach(function (to, from) {
  console.log("router---afterEach>>>>>>>>>>>>>>");
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  console.log("%c%s", "color:red", "to: ", to);
  console.log("%c%s", "color:red", "from: ", from);
  console.log("%c%s", "color:red", "router: ", router);
  Store.commit("history/toAssignment",to);
  Store.commit("history/fromAssignment",from);

});

export default router
