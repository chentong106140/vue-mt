<template>
  <div class="lanmuWrapper">
    <mu-flex class="flex-wrapper" align-items="center">
      <mu-flex class="flex-child" justify-content="center" fill>美食</mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>猫眼电影</mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>酒店</mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>体闲娱乐</mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>外卖</mu-flex>
    </mu-flex>
    <mu-flex class="flex-wrapper" align-items="center">
      <mu-flex class="flex-child" justify-content="center" fill>KTV</mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>周边游</mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>丽人</mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>小吃快餐</mu-flex>
      <mu-flex class="flex-child" justify-content="center" fill>机票/火车票</mu-flex>
    </mu-flex>
    <mu-divider></mu-divider>
  </div>
</template>

<script>

  export default {
    name: 'LanMu'
  ,
  created(){
    console.log("LanMu----created>>>>>>>");
  },
  mounted(){
    console.log("LanMu----mounted>>>>>>>");
  }
  }
</script>

<style>
  .lanmuWrapper{
    background-color: #ffffff;
    border-top: 1px solid #DDD8CE;
  }
  .flex-wrapper {
    width: 100%;
    height: 56px;
    padding: 8px;
  }
  .flex-child {
    width: 200px;
    height: 32px;
    background-color: #e0e0e0;
    text-align: center;
    line-height: 32px;
    margin-left: 8px;
  }

  .flex-child:first-child {
    margin-left: 0;
  }
</style>
