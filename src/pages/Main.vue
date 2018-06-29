<template>
  <div>
    <transition name="slide-left">
      <router-view class="childComponents"></router-view>
    </transition>
    <div id="footer">
      <mu-bottom-nav :value="currentPage" :color="color" @change="handleChange" ref="muBootomNav">
        <mu-bottom-nav-item title="首页" icon="home" value="/Home"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="附近" icon="pin_drop" value="/Fujin"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="逛一逛" icon="language" value="/Guang"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="订单" icon="assignment" value="/Order"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="我" icon="account_circle" value="/Me"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        color: "primary",
        currentPage: "",
      }
    },
    watch:{
      '$route'(to,from){
        console.log("Main----watch>>>>>>>");
        console.log("%c%s", "color:red", "to     : ", to);
        console.log("%c%s", "color:red", "from     : ", from);
        console.log("%c%s", "color:red", "this: ", this);
      }
    },
    methods: {
      /**
       * 选中每一个菜单的时候，value会发生变化，发生变化的时候，控制路由跳转
       * 同时，将当前的路由值赋给父组件的currentPage，同时currentPage又与mu-bottom-nav保持了同步
       */
      handleChange: function (value) {
        console.log("Main----handleChange>>>>>>>", window.location.pathname, window.history.state);
        var lastPage = this.currentPage;
        //保持与当前组件的路由地址同步
        this.currentPage = value;
        //控制路由跳转,判断是否需要添加路由到history中，作用，为了在底部导航切换的时候，按返回还能返回到首页，并不是逐步返回
        if(lastPage == '/Home' )
        {
          //会添加到history记录中，并且切换路由
          this.$router.push(value);
        }else{
          //不会添加到history记录中，只是切换路由
          this.$router.replace(value);
        }
      }
    },
    /**
     * 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
     */
    beforeCreate() {
      console.log("Main----beforeCreate>>>>>>>");
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)
    },
    /**
     * vue实例创建完成后被立即调用,必须是该created钩子函数
     */
    created() {
      //页面刷新，控制当前地址栏路由地址对应的菜单
      this.currentPage = this.$route.path;
      console.log("Main----created>>>>>>>");
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)

    },
    /**
     *在挂载开始之前被调用：相关的 render 函数首次被调用。
     */
    beforeMount() {
      console.log("Main----beforeMount>>>>>>>");
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)
    },
    mounted() {
      console.log("Main----mounted>>>>>>>");
      console.log("%c%s", "color:red", "el     (Vue 实例使用的根 DOM 元素。): ", this.$el);
      console.log("%c%s", "color:red", "data   (Vue 实例代理了对其 data 对象属性的访问): ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color);
      console.log("%c%s", "color:red", "$parent: (父实例)", this.$parent);
      console.log("%c%s", "color:red", "$props: (当前组件接收到的 props 对象)", this.$props);
      console.log("%c%s", "color:red", "$options: (自定义属性)", this.$options);
      console.log("%c%s", "color:red", "$root: (当前组件树的根 Vue 实例)", this.$root);
      console.log("%c%s", "color:red", "$children: (当前实例的直接子组件)", this.$children);
      console.log("%c%s", "color:red", "$slots: (用来访问被插槽分发的内容)", this.$slots);
      console.log("%c%s", "color:red", "$scopedSlots: (用来访问作用域插槽)", this.$scopedSlots);
      console.log("%c%s", "color:red", "$refs: (一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例)", this.$refs);
    },
    /**
     * 数据更新时调用，发生在虚拟 DOM 打补丁之前
     */
    beforeUpdate() {
      //页面更新，控制当前地址栏路由地址对应的菜单
      console.log("Main----beforeUpdate>>>>>>>", this.$route.path);
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)
    },
    /**
     * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
     */
    updated() {
      console.log("Main----updated>>>>>>>", this.$route.path);
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)
      //按返回，前进键，同时更新对应的底部菜单为选中状态，
      //进入子路由，也会导致当前组件被销毁，同时，也被更新，所以需要加入如下判断，才能获取到数据
      if (this.$refs.muBootomNav) {
        this.currentPage = this.$refs.muBootomNav.activeValue = this.$route.path;
      }

    },
    /**
     * keep-alive 组件激活时调用。
     */
    activated() {
      console.log("Main----activated>>>>>>>");
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)
    },
    /**
     * keep-alive 组件停用时调用
     */
    deactivated() {
      console.log("Main----deactivated>>>>>>>");
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)
    },
    /**
     * 实例销毁之前调用。在这一步，实例仍然完全可用。
     */
    beforeDestroy() {
      console.log("Main----beforeDestroy>>>>>>>");
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)
    },
    /**
     * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
     */
    destroyed() {
      console.log("Main----destroyed>>>>>>>");
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "color: ", this.color)
    },
    beforeRouteEnter: function (to, from, next) {
      console.log("Main----beforeRouteEnter>>>>>>>");
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log("%c%s", "color:red", "to: ", to);
      console.log("%c%s", "color:red", "from: ", from);
      console.log("%c%s", "color:red", "this: ", this);
      next();
    },
    beforeRouteUpdate: function (to, from, next) {
      console.log("Main----beforeRouteUpdate>>>>>>>");
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log("%c%s", "color:red", "to: ", to);
      console.log("%c%s", "color:red", "from: ", from);
      console.log("%c%s", "color:red", "this: ", this);
      next();
    },
    beforeRouteLeave: function (to, from, next) {
      console.log("Main----beforeRouteLeave>>>>>>>");
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log("%c%s", "color:red", "to: ", to);
      console.log("%c%s", "color:red", "from: ", from);
      console.log("%c%s", "color:red", "this: ", this);
      next();
    }
  }

</script>


<style>


  #footer {
    position: fixed;
    margin: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
    z-index: 999;
  }

  #footer .mu-bottom-item {
    min-width: 40px;
  }

  .childComponents {
    transition: all .8s ease;
    position: absolute;/*为了让路由切换时有动画效果，才设置为这个布局*/
    width:100%;
    max-width:640px;
    overflow-x: hidden;
    height:100%;
    top:0px;
    -webkit-overflow-scrolling : touch;
    z-index: 1;
  }

  .slide-left-enter{
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>
