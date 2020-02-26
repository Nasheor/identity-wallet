import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    activeAccount: '',
  },
  mutations: {
    changeLogStatus(state, payload) {
      state.login = payload;
    },
    setActiveAccount(state, payload) {
      state.activeAccount = payload;
    }
  },
  getters: {
    getLoginStatus(state) {
      return state.login; 
    },
    getActiveAccount(state) {
      return state.activeAccount; 
    }
  }
});
