import Vue from 'vue';
import Vuex from 'vuex';
import map from './modules/map.js'
import test from './modules/test.js'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    map,
    test
  }
})
