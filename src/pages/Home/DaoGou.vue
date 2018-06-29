<template>
  <div class="daoGouWrapper">
    <mu-row>
      <mu-col span="4" v-for="(item,index) in daogou" :key="index">
        <router-link  :to="item.path" class="react">
          <span class="info">
            <strong>{{item.title}}</strong>
            <small>{{item.desc}}</small>
          </span>
          <span class="imgbox">
            <img :src="item.src" />
          </span>
        </router-link>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>

  export default {
    name: 'DaoGou'
    ,
    data:function () {
      return {
        daogou:[
          {title:'我们约吧',desc:'恋人家人好朋友',path:'/MeiShi',src:require('@/assets/image/daogou/1.png')},
          {title:'超值低价',desc:'十元惠生活',path:'/MeiShi',src:require('@/assets/image/daogou/2.jpg')},
          {title:'午后时光',desc:'懒懒下午茶',path:'/MeiShi',src:require('@/assets/image/daogou/3.png')}
        ]
      };
    },
    beforeRouteEnter :function(to, from, next) {
      console.log("DaoGou----beforeRouteEnter>>>>>>>");
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log("%c%s", "color:red","to: " , to);
      console.log("%c%s", "color:red","from: " , from);
      console.log("%c%s", "color:red","this: " , this);
      next();
    },
    beforeRouteUpdate :function(to, from, next) {
      console.log("DaoGou----beforeRouteUpdate>>>>>>>");
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
      console.log("DaoGou----beforeRouteLeave>>>>>>>");
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
  .daoGouWrapper{
    background-color: #ffffff;
    border-top: 1px solid #DDD8CE;
    width: 100%;
    height: auto;
    margin-top: 4px;
    text-align: center;
    overflow: hidden;
    padding: 10px 0px;
  }


  .daoGouWrapper .row .col .react{
    display: block;
    width: 100%;
    height:auto;
    border-left: 1px solid #ddd8ce;
  }
  .daoGouWrapper .row .col:first-child .react{
    border-left:0;
  }

  .daoGouWrapper .info{
    display: inline-block;
    width:100px;
    text-align: left;
    padding-left: 18px;
  }
  .daoGouWrapper .info strong{
    display: block;
    color: #55a40f;
    font-size:15px;
  }
  .daoGouWrapper .info small{
    color: #666;
  }

  .daoGouWrapper .imgbox{
    display: block;
    width:62px;
    height:62px;
    margin: auto;
    position: relative;
  }
  .daoGouWrapper .imgbox img{
    width:100%;
    height:100%;
    vertical-align: middle;
    border: 0;
   /* position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);*/
  }

</style>
