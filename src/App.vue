<template>
  <div id="app" class="app-container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import router from './router'
import store from '@src/vuex/store'

export default {
  name: 'App',
  components: {
    
  },
  router,
  store
}
</script>

<style lang="less" scoped>
  .app-container{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
