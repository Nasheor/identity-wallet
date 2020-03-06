import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: localStorage.getItem('login'),
    activeAccount: '',
    num_credentials: ''
  },
  mutations: {
    changeLogStatus(state, payload) {
      state.login = payload;
      localStorage.setItem('login', payload);
    },
    setActiveAccount(state, payload) {
      state.activeAccount = payload;
    },
    setNumCredentials(state, payload) {
      state.num_credentials = payload;
    }
  },
  getters: {
    getLoginStatus(state) {
      return state.login; 
    },
    getActiveAccount(state) {
      return state.activeAccount; 
    },
    getNumCredentials(state) {
      return state.num_credentials;
    }
  }
});
