import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curOrder: "",
  },
  getters: {},
  mutations: {
    setCurOrder(state, str) {
      state.curOrder = str;
    },
  },
  actions: {},
  modules: {},
});
