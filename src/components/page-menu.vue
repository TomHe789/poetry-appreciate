<template>
  <div class="menu-container">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/rate">排行榜</el-menu-item>
      <el-menu-item index="/message">留言板</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "pageMenu",
  data() {
    return {
      activeIndex: "/home",
    };
  }
};
</script>

<style lang="less" scoped>
.menu-container {
  width: 80%;
  margin: 0 auto;
  background-color: #aaf;
  .el-menu-item{
    font-size: 18px;
  }
}
</style>
