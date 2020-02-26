import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
  },
  mutations: {
    changeLogStatus(state, payload) {
      state.login = payload;
    }
  },
  getters: {
    getLoginStatus(state) {
      return state.login; 
    }
  }
});
