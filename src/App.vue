<template>
  <div id="app" class="app-container" :style="getContainerHeight()">
    <page-menu v-if="this.$route.path !== '/login'" :activeIndex="activeIndex"></page-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import router from './router'
import store from '@src/vuex/store'
import pageMenu from "@src/components/page-menu";

export default {
  name: 'App',
  data() {
    return {
      activeIndex: "/home",
    };
  },
  methods: {
    getContainerHeight(){
      if(this.$route.path === '/login') {
        return {
          height: '100%'
        }
      }
    }
  },
  components: {
    pageMenu
  },
  router,
  store
}
</script>

<style lang="less" scoped>
  .app-container{
    width: 100%;
    height: calc(100% - 61px);
    background-color: #fff;
  }
</style>
