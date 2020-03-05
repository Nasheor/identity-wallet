import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// localStorage.setItem('login', false);

export default new Vuex.Store({
  state: {
    login: false,
    activeAccount: '',
    num_credentials: ''
  },
  mutations: {
    changeLogStatus(state, payload) {
      state.login = payload;
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
