<template>
  <div class="login-container">
    <div class="main-container">
      <div class="login-tips">
        <span>诗词鉴赏登录页</span>
        <span @click="showDialog">账号注册</span>
      </div>
      <el-input
        v-model="username"
        placeholder="请输入用户名"
        clearable
      ></el-input>
      <el-input
        v-model="password"
        placeholder="请输入密码"
        show-password
        clearable
      ></el-input>
      <el-button>确认登录</el-button>
    </div>
    <register @showDialog="showDialog" :dialogVisible="dialogVisible"></register>
  </div>
</template>

<script>
import register from './components/register'

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      dialogVisible: false,
      
    };
  },
  methods: {
    showDialog(){
      this.dialogVisible = !this.dialogVisible
    }
  },
  components: {
    register
  }
  
};
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-image: url(./../../images/login/loginBg.jpg);

  .main-container {
    width: 500px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    position: relative;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .login-tips {
      width: 100%;
      font-weight: bold;

      span:first-of-type {
        font-size: 30px;
        margin-right: 155px;
        text-shadow: 2px 2px #888;
      }

      span:last-of-type {
        font-size: 17px;
        // letter-spacing: 2px;
        color: rgb(0, 122, 204);

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    .el-input {
      width: 375px;
      /deep/.el-input__inner {
        height: 50px;
        font-size: 18px;
      }
    }

    .el-button {
      width: 200px;
      height: 50px;
      font-size: 18px;
    }
  }
}
</style>
