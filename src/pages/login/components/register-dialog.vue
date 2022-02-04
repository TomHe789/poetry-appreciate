<template>
  <el-dialog
    title="账号注册"
    ref="dialog"
    :visible.sync="isShow"
    @close="closeHandle"
  >
    <input-form
      ref="inputForm"
      @validate-form="validateForm"
      :isInline="true"
      :isClearFormData="isClearFormData"
    ></input-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="registHandle()" :disabled="isDisabled"
        >确定注册</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import API from "@src/api/login";
import inputForm from "./input-form";

export default {
  name: "registerDialog",
  data() {
    return {
      isDisabled: true,
      isClearFormData: false,
      isShow: false,
    };
  },
  props: ["dialogVisible"],
  methods: {
    // 是否授权注册 用户名不能重复
    async isAuthRegist(username) {
      let flag = true;
      let res = await this.$http.get(API.getUserInfo);
      res.data.forEach((item, index) => {
        if (item.username === username) {
          flag = false;
        }
      });
      return flag;
    },
    // 请求注册接口 进行注册操作
    async userRegist(userInfo) {
      let res = await this.$http.post(API.userRegist, userInfo);
      return res;
    },
    // 注册成功
    registerSuccess() {
      this.$message({
        message: "恭喜你，注册成功",
        type: "success",
      });
      this.isShow = false;
    },
    // 注册失败
    registerFail() {
      this.$message.error("注册失败，请稍后重试");
    },
    // 用户名重复
    usernameRepet() {
      this.$message({
        message: "用户名重复，请重新输入用户名",
        type: "warning",
      });
    },
    // 提交按钮回调
    registHandle() {
      let { username, password } = this.$refs.inputForm.formInfo;
      this.isAuthRegist(username).then((res) => {
        if (res) {
          this.userRegist(this.$refs.inputForm.formInfo).then((flag) => {
            if (flag) {
              this.registerSuccess();
            } else {
              this.registerFail();
            }
          });
        } else {
          this.usernameRepet();
        }
      });
    },
    // 关闭弹窗回调
    closeHandle() {
      // 清空弹窗数据
      this.isClearFormData = !this.isClearFormData;
    },
    // 当表单数据通过校验时 取消禁用确认按钮
    validateForm(legal) {
      this.isDisabled = !legal;
    },
  },
  computed: {},
  watch: {
    dialogVisible() {
      this.isShow = !this.isShow;
    },
  },
  components: {
    inputForm,
  },
};
</script>

<style></style>
