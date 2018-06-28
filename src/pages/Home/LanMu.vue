<template>
  <div class="lanmuWrapper">
    <mu-flex class="flex-wrapper" align-items="center">
      <mu-flex class="flex-child" justify-content="center" fill>
      <router-link  to="/MeiShi">
        <span class="new-icon-circle iconfont meishi" style="background: #fd9d21"></span>
        <span class="icon-desc">美食</span>
      </router-link>
      </mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>
        <router-link  to="/MeiShi">
          <span class="new-icon-circle iconfont dianying" style="background: #ff6767"></span>
          <span class="icon-desc">猫眼电影</span>
        </router-link>
      </mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>
        <router-link  to="/MeiShi">
          <span class="new-icon-circle iconfont jiudian" style="background:  #8a90fa"></span>
          <span class="icon-desc">酒店</span>
        </router-link>
      </mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>
        <router-link  to="/MeiShi">
          <span class="new-icon-circle iconfont waimai" style="background: #fed030"></span>
          <span class="icon-desc">外卖</span>
        </router-link>
      </mu-flex>
    </mu-flex>
    <mu-flex class="flex-wrapper" align-items="center">
      <mu-flex class="flex-child " justify-content="center" fill>
        <router-link  to="/MeiShi">
          <span class="new-icon-circle iconfont ktv" style="background: #fed030"></span>
          <span class="icon-desc">KTV</span>
        </router-link>
      </mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>
        <router-link  to="/MeiShi">
          <span class="new-icon-circle iconfont zhoubianyou" style="background: #4dc6ee"></span>
          <span class="icon-desc">周边游</span>
        </router-link>
      </mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>
        <router-link  to="/MeiShi">
          <span class="new-icon-circle iconfont liren" style="background: #ff80c2"></span>
          <span class="icon-desc">丽人</span>
        </router-link>
      </mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>
        <router-link  to="/MeiShi">
          <span class="new-icon-circle iconfont xiaochikuaican" style="background: #fd9d21"></span>
          <span class="icon-desc">小吃快餐</span>
        </router-link>
      </mu-flex>
    </mu-flex>
    <mu-divider></mu-divider>
  </div>
</template>

<script>

  export default {
    name: 'LanMu'
    ,
    beforeRouteEnter :function(to, from, next) {
      console.log("LanMu----beforeRouteEnter>>>>>>>");
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log("%c%s", "color:red","to: " , to);
      console.log("%c%s", "color:red","from: " , from);
      console.log("%c%s", "color:red","this: " , this);
      next();
    },
    beforeRouteUpdate :function(to, from, next) {
      console.log("LanMu----beforeRouteUpdate>>>>>>>");
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log("%c%s", "color:red","to: " , to);
      console.log("%c%s", "color:red","from: " , from);
      console.log("%c%s", "color:red","this: " , this);
      next();
    },
    beforeRouteLeave :function(to, from, next) {
      console.log("LanMu----beforeRouteLeave>>>>>>>");
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log("%c%s", "color:red","to: " , to);
      console.log("%c%s", "color:red","from: " , from);
      console.log("%c%s", "color:red","this: " , this);
      next();
    }
  }
</script>

<style>
  .lanmuWrapper{
    background-color: #ffffff;
    border-top: 1px solid #DDD8CE;
    width: 100%;
    height: auto;
    margin-top: 4px;
  }
  .flex-wrapper {
    width: 100%;
    height: auto;
  }
  .flex-child {
    width: 25%;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
  }

  .flex-child:first-child {
    margin-left: 0;
  }

  .flex-wrapper .flex-child > a{
    display: block;
    padding: 10px 0px;
    width: 100%;
    height:auto;
  }

  .flex-wrapper .flex-child .new-icon-circle {
    display: block;
    margin: auto;
    margin-bottom: 7px;
    width: 40px;
    height: 40px;
    border-radius: 500px;
    text-align: center;
    line-height: 40px;
    font-size: 25px;
    color: #fff;
  }

  .flex-wrapper .flex-child .icon-desc{
    text-align: center;
    font-size: 12px;
    color: #666;
  }
</style>
