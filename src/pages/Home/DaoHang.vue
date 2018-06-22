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
   import MapSearch from '@/components/Map-Search.vue'
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
       MapCity,
       MapSearch
    },
    methods:{
       click:function () {
         this.$router.push("/Map_Search");
       }
    },
     created(){
       console.log("DaoHang----created>>>>>>>");
     },
     mounted(){
       console.log("DaoHang----mounted>>>>>>>");
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
