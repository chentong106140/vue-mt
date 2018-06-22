const state = {
    num:1
};
const mutations = {
    changeNum:function (state) {
      state.num ++;
    }
};



export default {
  namespaced: true,
  state,
  mutations
}
