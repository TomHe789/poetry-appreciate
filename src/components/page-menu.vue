<template>
  <div class="menu-container"  v-show="isLogin()">
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
      <div class="login-user">
        <div class="current-user">
          <el-avatar :size="25" :src="circleUrl"> </el-avatar>
          <span>{{ this.$store.getters.currentUser }}</span>
        </div>
        <router-link to="/login">[退出]</router-link>
      </div>
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
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    clickHandle() {
      this.dialogVisible = true;
    },
    changeHandle(flag) {
      this.dialogVisible = flag;
    },
    isLogin() {
      console.log('当前登录用户', sessionStorage.getItem("userName"))
      // 通过sessionStorage 设置vuex的isLogin状态
      if (sessionStorage.getItem("userName") !== 'null') {
        this.$store.commit("userStatus", sessionStorage.getItem("userName"));
      } else {
        this.$store.commit("userStatus", null);
      }
      console.log("当前用户", this.$store.getters.currentUser);
      return this.$store.getters.isLogin;
    },
  },
  components: {
    searchDialog,
    searchInput,
  },
  mounted(){
    // 未登录 则跳转到404
    if(!this.isLogin()){
      this.$router.push('/404')
    }
  }
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
    position: absolute;
    top: 10px;
    left: 20%;
  }

  .login-user {
    height: 40px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 5px;
   left: 40%;
    padding: 5px;
    border-radius: 5px;

    .current-user {
      display: flex;
      align-items: center;
      margin-right: 15px;
      span {
        margin-left: 8px;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
