import VueRouter from 'vue-router'

import Login from '@src/views/Login.vue'
import Home from '@src/views/Home.vue'
import Rate from '@src/views/Rate.vue'

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