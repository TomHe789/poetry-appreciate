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
      <el-button type="primary" icon="el-icon-search" @click="clickHandle"
        >搜索诗词</el-button
      >
    </el-menu>
    <search-dialog
      :dialogVisible="dialogVisible"
      dialogTitle="搜索框"
      @changeShow="changeHandle"
    >
      <search-input @changeShow="changeHandle"></search-input>
    </search-dialog>
  </div>
</template>

<script>
import searchDialog from "@src/components/search-dialog";
import searchInput from "@src/components/search-input";

export default {
  name: "pageMenu",
  data() {
    return {
      activeIndex: "/home",
      dialogVisible: false,
    };
  },
  methods: {
    clickHandle() {
      this.dialogVisible = true;
    },
    changeHandle(flag) {
      this.dialogVisible = flag;
    },
  },
  components: {
    searchDialog,
    searchInput
  },
};
</script>

<style lang="less" scoped>
.menu-container {
  width: 80%;
  margin: 0 auto;
  background-color: #aaf;
  .el-menu-item {
    font-size: 18px;
  }
  .el-button {
    position: relative;
    top: 10px;
    left: 50px;
  }
}
</style>
