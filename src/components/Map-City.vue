<template>
<span>
{{city}}
</span>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState('map', ["city"])
      /*      ...mapState({
                city: function (state) {
                  return state.map.city
                }
              }
            )*/
    },
    methods: mapActions("map", [
      'cityForIp'
    ])
    ,
    created() {
      //  this.$store.dispatch("cityForIp")
      this.cityForIp();
      console.log("Map-City----created>>>>>>>");
    },
    mounted(){
      console.log("Map-City----mounted>>>>>>>");
    }

  }
</script>
