<template>
  <div id="app" class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>

import router from './router'

export default {
  name: 'App',
  components: {
  },
  router
}
</script>

<style lang="less" scoped>
  .app-container{
    width: 100%;
    height: 100%;
  }
</style>
