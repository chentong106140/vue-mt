<template>
  <div class="daohang_wraper">
    <mu-appbar  color="primary" :z-depth="zDepth">
      <mu-button slot="left" color="primary" :flat="flat" @click="click">
        <map-city></map-city>
        <mu-icon right value="expand_more"></mu-icon>
      </mu-button>

      <mu-text-field icon="search" slot="default" placeholder="自助火锅" :full-width="fullWidth"></mu-text-field>

      <mu-button slot="right" color="primary" :flat="flat" class="mu-button-saoma">
        <mu-icon value="crop_free"></mu-icon>
        <span class="mu-button-item">扫码</span>
      </mu-button>
    </mu-appbar>

  </div>
</template>
<script>
  import MapCity from '@/components/Map-City.vue'
   export default {
     data() {
       return {
         zDepth: 24,
         title: '',
         color: 'primary',
         fullWidth:true,
         flat:true,
         showMap:false

       };
     },
     name: 'DaoHang',
     components:{
       MapCity
    },
    methods:{
       click:function () {
         this.$router.push("/Map_Search");
       }
    },
     beforeRouteEnter :function(to, from, next) {
       console.log("DaoHang----beforeRouteEnter>>>>>>>");
       // 在渲染该组件的对应路由被 confirm 前调用
       // 不！能！获取组件实例 `this`
       // 因为当守卫执行前，组件实例还没被创建
       console.log("%c%s", "color:red","to: " , to);
       console.log("%c%s", "color:red","from: " , from);
       console.log("%c%s", "color:red","this: " , this);
       next();
     },
     beforeRouteUpdate :function(to, from, next) {
       console.log("DaoHang----beforeRouteUpdate>>>>>>>");
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
       console.log("DaoHang----beforeRouteLeave>>>>>>>");
       // 导航离开该组件的对应路由时调用
       // 可以访问组件实例 `this`
       console.log("%c%s", "color:red","to: " , to);
       console.log("%c%s", "color:red","from: " , from);
       console.log("%c%s", "color:red","this: " , this);
       next();
     }
  }
</script>

<style >
  .daohang_wraper  {
    position: fixed;
    top: 0px;
    z-index: 2;
    width: 100%;
    max-width: 640px;
  }

  .daohang_wraper .mu-button-saoma .mu-icon{
    margin: auto;
    margin: 9px 0px 0px 0px;
  }
  .daohang_wraper .mu-appbar-title{
    padding-top: 14px;
  }

  .daohang_wraper .mu-button-saoma .mu-button-item {
    display: block;
    text-align: center;
    font-size:inherit;
  }
  .daohang_wraper .mu-button-saoma .mu-button-wrapper{
    display: block;
  }
</style>
