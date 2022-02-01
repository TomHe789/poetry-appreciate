import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './styles/normal.less'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueResource from 'vue-resource'
Vue.use(VueResource)

new Vue({
  render: h => h(App),
}).$mount('#app')
