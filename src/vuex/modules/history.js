import Storage from 'storejs'

const state = {
  //进入app时的浏览器访问记录长度
  length: 0,
  //上一个路由对象
  from: null,
  //当前路由对象
  to: null
};

var history = null;

if (Storage.has("history") && ( history = Storage.get("history"))) {
  console.log("history>>>>>>>>>>>>state", state);
  console.log("history>>>>>>>>>>>>history", history);
  Object.assign(state, history);
  console.log("history>>>>>>>>>>>>state", state);

}


const mutations = {
  initLength(state) {
    console.log("history.initLength", state);
    state.length = window.history.length;
    Storage.set("history", state);
  },
  go(state, len) {
    window.history.go(len);
  },
  fromAssignment(state,from){
    state.from = from;
  },
  toAssignment(state,to)
  {
    state.to = to;
  }
};


export default {
  namespaced: true,
  state,
  mutations
}
