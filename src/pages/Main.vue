<template>
  <div>
    <router-view></router-view>
    <div id="footer">
      <mu-bottom-nav :value.sync="currentPage" :color="color" @change="handleChange">
        <mu-bottom-nav-item title="首页" icon="home" value="/Home" ></mu-bottom-nav-item>
        <mu-bottom-nav-item title="附近" icon="pin_drop" value="/Fujin"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="逛一逛" icon="language" value="/Guang"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="订单" icon="assignment" value="/Order"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="个人中心" icon="account_circle" value="/Me"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        color: "black",
        currentPage: "/Home",
      }
    },
    methods:{
      handleChange:function (value) {
        console.log(arguments);
        this.currentPage = value;
        this.$router.push(value);
      }
    }
  }
</script>


<style scoped>



  #footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-top: 1px solid #ebebeb;
    z-index: 999;
  }

  .mu-bottom-item {
    min-width: 40px;
  }
</style>
