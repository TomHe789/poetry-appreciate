<template>
  <div class="login-container">
    <div class="main-container">
      <div class="login-tips">
        <span>诗词鉴赏登录页</span>
        <span @click="showDialog">账号注册</span>
      </div>
      <input-form @validate-form="validateForm" :isInline="false"></input-form>
      <el-button :disabled="isDisabled">确认登录</el-button>
    </div>
    <register-dialog
      @showDialog="showDialog"
      :dialogVisible="dialogVisible"
    ></register-dialog>
  </div>
</template>

<script>
import registerDialog from "./components/register-dialog";
import inputForm from "./components/input-form";

export default {
  name: "Login",
  data() {
    return {
      dialogVisible: false,
      isDisabled: true,
      formInfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "密码长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
    // 当表单数据通过校验时 取消禁用确认按钮
    validateForm(legal) {
      this.isDisabled = !legal;
    },
  },
  watch: {
    formInfo: {
      handler() {
        this.validate();
      },
      deep: true,
    },
  },
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
