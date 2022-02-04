<template>
  <div id="app" class="app-container">
    <page-menu :activeIndex="activeIndex"></page-menu>
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
    height: calc(100vh -61px);
    background-color: #fff;
  }
</style>
