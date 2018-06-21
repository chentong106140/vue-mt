<template>
  <div>
    <mu-flex class="flex-wrapper" align-items="center">
      <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
    </mu-flex>
  </div>
</template>

<script>

  export default {
    name: 'LanMu'
  }
</script>

<style>

  .flex-wrapper {
    width: 100%;
    height: 56px;
    margin-top: 8px;
  }
  .flex-demo {
    width: 200px;
    height: 32px;
    background-color: #e0e0e0;
    text-align: center;
    line-height: 32px;
    margin-left: 8px;
  }
</style>
