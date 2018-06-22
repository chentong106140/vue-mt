<template>
  <div class="lunbo">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item , index ) in images" :key="index">
          <img :src="item.src"/>
      </van-swipe-item>


    </van-swipe>
  </div>
</template>

<script>


  export default {
    name: 'LunBo',
    data(){
      return {
        images:[
          {src:require('@/assets/image/lunbo/1.jpg')},
          {src:require('@/assets/image/lunbo/2.jpg')},
          {src:require('@/assets/image/lunbo/3.jpg')},
          {src:require('@/assets/image/lunbo/4.png')},
          {src:require('@/assets/image/lunbo/5.jpg')},
          {src:require('@/assets/image/lunbo/6.jpg')},
          {src:require('@/assets/image/lunbo/7.jpg')},
          {src:require('@/assets/image/lunbo/8.jpg')},
        ]
      };
    }
  }
</script>

<style>

  .lunbo{
    width:100%;
    height:auto;
  }

  .lunbo .van-swipe{

  }

  .lunbo img{
    width:100%;
    height: 100%;
    display: block;
  }

</style>
