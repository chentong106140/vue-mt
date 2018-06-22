<template>
  <div class="map-search">
    <iframe id="mapPage" width="100%" height="100%" frameborder="0"
            :src="mapSearchUrl">
    </iframe>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex'


  export default {
    computed: {
      ...mapState("map", ["mapSearchUrl"])
    },
    methods: {
      ...mapMutations("map", ["cityForSearch"]),
      doSearch: function () {
        var this_ = this;
        window.addEventListener('message', function (event) {
          // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
          var loc = event.data;
          if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
            console.log("doSearch", loc)
            //通过监听，将数据重置给store
            this_.cityForSearch({
              location: loc,
              callBack: this_.goBack
            });
          }
        }, false);
      },
      goBack: function (state) {
        console.log("goBack", state.city);
        this.$router.go(-1);
      }
    },
    created() {
      console.log("Map-Search----created>>>>>>>");
      if (!this.$store.state.map.isEvnet) {
        this.doSearch();
        this.$store.state.map.isEvnet = true;
      }
    },
    mounted() {
      console.log("Map-Search----mounted>>>>>>>");
    }

  }
</script>
<style>
  html, body {
    height: 100%;
  }

  .map-search {
    width: 100%;
    height: 100%;
    position: fixed;
    max-width: 640px;
    top: 0;
  }

</style>
