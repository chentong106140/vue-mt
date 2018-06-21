<template>
  <div>
    美食
    <a @click.prevent="back">返回</a>
  </div>
</template>

<script>


  export default {
    name: 'MeiShi',
    methods:{
      back(){
        this.$router.back();
      }
    }
  }
</script>

<style>

</style>
