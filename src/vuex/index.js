import Vue from 'vue';
import Vuex from 'vuex';
import map from './modules/map.js'
import history from './modules/history.js'
import user from './modules/user.js'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    map,
    history,
    user
  }
})
