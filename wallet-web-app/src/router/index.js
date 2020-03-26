import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/views/Login'
import Home from '../components/views/Home'
import Credentials from '../components/sections/Credentials'
import Attestations from '../components/sections/Attestations'
import Processing from '../components/sections/Processing'
import Settings from '../components/sections/Settings'

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
    children: [
      {
        path: 'credentials',
        component: Credentials
      },
      {
        path: 'attestations',
        component: Attestations
      },
      {
        path: 'processing',
        component: Processing
      },
      {
        path: 'settings',
        component: Settings
      },
    ]
  },
  { path: "*", redirect: "/home/credentials", component: Credentials }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name != 'Login' && localStorage.getItem('login') === "false") {
    next({name: 'Login'})
  } else {
    console.log("From: "+to);
    next()

  }
})

export default router
