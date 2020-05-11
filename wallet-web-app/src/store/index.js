import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: localStorage.getItem('login'),
    activeAccount: '',
    num_credentials: '',
    credentials: [],
    keys: [],
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
    },
    setCredentials(state, payload) {
      state.credentials = payload;
    },
    setActiveStatusCredential(state, payload) {
      state.credentials[payload].active = false;
    },
    setOppActiveStatusCredential(state, payload) {
      state.credentials[payload].active = true;
    },
    incrementNotificationCounter(state, payload) {
      state.notification_counter += payload; 
    },
    setCredentialKeys(state, payload) {
      payload.map(credential => {
        if(credential['name'] != null)
          state.keys.push(credential['name']);
      });
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
    },
    getProcessingCredentials(state) {
      let data = [];
      state.credentials.map((credential=> {
        if(credential['active'] === false) {
          data.push(credential);
        }
      }));
      return data;
    },
    getCredentials(state) {
      return state.credentials;
    }
  }
});
