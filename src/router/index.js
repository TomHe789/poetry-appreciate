import VueRouter from 'vue-router'

import Login from '@src/pages/login/login.vue'
import Home from '@src/pages/home/home.vue'
import Rate from '@src/pages/rate/rate.vue'

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', component: Login},
  {path: '/home', component: Home},
  {path: '/rate', component: Rate},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router