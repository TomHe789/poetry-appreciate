<template>
  <div class="login-container">
    <div class="main-container">
      <div class="login-tips">
        <span>诗词鉴赏登录页</span>
        <span @click="showDialog">账号注册</span>
      </div>
      <input-form
        ref="inputForm"
        @validate-form="validateForm"
        :isInline="false"
      ></input-form>
      <el-button :disabled="isDisabled" @click="clickHandle"
        >确认登录</el-button
      >
    </div>
    <register-dialog
      @changeShow="changeHandle"
      :dialogVisible="dialogVisible"
    ></register-dialog>
  </div>
</template>

<script>
import API from "@src/api/login";
import registerDialog from "./components/register-dialog";
import inputForm from "./components/input-form";

export default {
  name: "Login",
  data() {
    return {
      dialogVisible: false,
      isDisabled: true,
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    changeHandle(flag) {
      this.dialogVisible = flag;
    },
    // 当表单数据通过校验时 取消禁用确认按钮
    validateForm(legal) {
      this.isDisabled = !legal;
    },
    // 登录校验
    async isAuthLogin() {
      let { formInfo } = this.$refs.inputForm;
      let res = await this.$http.post(API.isAuthLogin, formInfo);
      return res;
    },
    clickHandle() {
      this.isAuthLogin().then((res) => {
        let { formInfo } = this.$refs.inputForm;
        if (res.data.code === 1) {
          this.$message({
            message: "恭喜您，登录成功！",
            type: "success",
          });
          sessionStorage.setItem("userName", formInfo.username);
          this.$store.dispatch('setUser', formInfo.username)
          this.$router.push("/home");
        } else {
          this.$message.error("用户名或密码错误，请检查后重新输入");
        }
      });
    },
  },
  watch: {},
  components: {
    registerDialog,
    inputForm,
  },
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

    /deep/.el-form-item__label {
      display: none;
    }

    /deep/.el-form-item__content {
      margin-left: 0 !important;
    }

    /deep/.el-input {
      width: 375px;
    }

    /deep/.el-input__inner {
      height: 50px;
      font-size: 16px;
    }

    .el-button {
      width: 200px;
      height: 50px;
      font-size: 18px;
    }
  }
}
</style>
