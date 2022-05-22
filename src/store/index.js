import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curId: "",
  },
  getters: {},
  mutations: {
    setCurId(state, str) {
      state.curId = str;
    },
  },
  actions: {},
  modules: {},
});
