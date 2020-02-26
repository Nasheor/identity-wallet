import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/views/Login'
import Home from '../components/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home/:id',
    name: 'Home',
    component: Home
  },
  { path: "*", redirect: "/login" }
]

const router = new VueRouter({
  routes
})

export default router
