<template>
  <div class="home-container">
    <!-- <page-header></page-header> -->
  </div>
</template>

<script>
import pageHeader from "@src/components/page-header";

export default {
  name: "Home",
  data() {
    return {}
  },
  components: {
    pageHeader,
  },
};
</script>

<style lang="less">
  .home-container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    background-color: #afa;
  }
</style>
