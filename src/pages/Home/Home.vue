<template>
  <div class="home">
    <dao-hang></dao-hang>
    <div class="wrapper">
      <lun-bo></lun-bo>
      <lan-mu></lan-mu>
      <router-link to="/map">go to map</router-link>
      <!--<shop></shop>-->
    </div>

  </div>
</template>

<script>

  import DaoHang from './DaoHang.vue'
  import LanMu from './LanMu.vue'
  import LunBo from './LunBo.vue'
  import Shop from './Shop.vue'

  export default {
    name: 'Home',
    components: {
      DaoHang,
      LanMu,
      LunBo,
      Shop
    },
    created(){
      console.log("Home----created>>>>>>>");
    },
    mounted(){
      console.log("Home----mounted>>>>>>>");
    }
  }
</script>

<style>

  .home .wrapper
  {
    width:100%;
    height:auto;
  }
</style>
