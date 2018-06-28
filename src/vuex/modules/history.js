
import Storage from 'storejs'

const state = {
    length:0
};

var history =null;

if(Storage.has("history") && ( history= Storage.get("history")))
{
  console.log("history>>>>>>>>>>>>state",state);
  console.log("history>>>>>>>>>>>>history",history);
  Object.assign(state,history);
  console.log("history>>>>>>>>>>>>state",state);

}


const mutations = {
  initLength(state){
    console.log("history.initLength",state);
    state.length = window.history.length;
    Storage.set("history",state);
  },
  go(state,len){
    window.history.go(len);
  }
};



export default {
  namespaced: true,
  state,
  mutations
}
