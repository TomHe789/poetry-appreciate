<template>
  <div id="app" class="app-container">
    <!-- <page-header></page-header> -->
    <router-view></router-view>
  </div>
</template>

<script>

import router from './router'
import store from '@src/vuex/store'
import pageHeader from "@src/components/page-header";

export default {
  name: 'App',
  components: {
    pageHeader
  },
  router,
  store
}
</script>

<style lang="less" scoped>
  .app-container{
    width: 100%;
    height: 100%;
  }
</style>
