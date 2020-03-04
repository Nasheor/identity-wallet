import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
localStorage.setItem('login', false);

export default new Vuex.Store({
  state: {
    login: localStorage.getItem('login'),
    activeAccount: '',
  },
  mutations: {
    changeLogStatus(state, payload) {
      localStorage.setItem('login', payload);
      state.login = payload;
    },
    setActiveAccount(state, payload) {
      state.activeAccount = payload;
    },
  },
  getters: {
    getLoginStatus(state) {
      return state.login; 
    },
    getActiveAccount(state) {
      return state.activeAccount; 
    },
  }
});
