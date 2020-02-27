import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/views/Login'
import Home from '../components/views/Login'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresLogin: true }
  },
  { path: "*", redirect: "/home" }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresLogin) && store.getters.getLoginStatus == false) {
    next("/login")
  } else {
    console.log("Done")
    next()
  }
})

export default router
