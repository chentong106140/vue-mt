const state = {
  city: '',
  isGet:false,
  isEvnet:false,
  mapSearchUrl:'http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=JVPBZ-MRAWW-TI2RN-OFFBG-PFJZF-V3FWJ&referer=morgan',
  geolocation: (function () {
   /* if (!qq) return;
    return new qq.maps.Geolocation();*/
  })()
};
const mutations = {
  /**
   * 通过地图搜索，确定城市
   * @param state
   * @param location
   */
  cityForSearch:function (state,params) {
    if(!location)return;
    if(params && params.location)
    {
      state.city = params.location.cityname;
    }
    if(params && params.callBack)
    {
      params.callBack(state)
    }
  }
};

const actions = {
  /**
   * 通过客户端ip获取当前城市
   * @param context
   * @param state
   */
  cityForIp: function ({context,state}) {
    if (!state.geolocation) return;
    if(!state.city && !state.isGet){
      /*state.geolocation.getIpLocation(function (position) {
        console.log("cityForIp",position);
        state.city = position.city;
        state.isGet=true;
      });*/
    }

  }
};

export default {
  //使用命名空间，否则无法通过mapState("namespaced",[])来访问
  namespaced: true,
  state,
  mutations,
  actions
}
