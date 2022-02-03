<template>
  <div class="menu-container">
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">排行榜</el-menu-item>
      <el-menu-item index="3">留言板</el-menu-item>
      <el-menu-item index="4"></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "pageMenu",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 1) {
        this.$router.push("/home");
      } else if (key == 2) {
        this.$router.push("/rate");
      } else if (key == 3) {
        this.$router.push("/message");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.menu-container {
  width: 100%;
  margin: 0 auto;
  background-color: #aaf;

  .el-menu-item{
    font-size: 18px;
  }
}
</style>
