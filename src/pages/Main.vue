<template>
  <div>
    <router-view></router-view>
    <div id="footer">
      <mu-bottom-nav :value="currentPage" :color="color" @change="handleChange">
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
    methods: {
      /**
       * 选中每一个菜单的时候，value会发生变化，发生变化的时候，控制路由跳转
       * 同时，将当前的路由值赋给父组件的currentPage，同时currentPage又与mu-bottom-nav保持了同步
       */
      handleChange: function (value) {
        //保持与当前组件的路由地址同步
        this.currentPage = value;
        //控制路由跳转
        this.$router.push(value);
      }
    },
    /**
     * vue实例创建完成后被立即调用,必须是该created钩子函数
     */
    created() {
      //页面刷新，控制当前地址栏路由地址对应的菜单
      this.currentPage = this.$route.path;
      console.log("Main----created>>>>>>>");

    },
    mounted(){
      console.log("Map-Search----mounted>>>>>>>");
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
</style>
