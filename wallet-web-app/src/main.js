// @ts-ignore
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import drizzleVuePlugin from "@drizzle/vue-plugin"
import drizzleOptions from "./drizzleOptions"


Vue.config.productionTip = false
Vue.use(drizzleVuePlugin, { store, drizzleOptions })


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
