<template>
  <el-dialog title="账号注册" :visible.sync="isShow" @close="closeHandle">
    <input-form
      ref="inputForm"
      @validate-form="validateForm"
      :isInline="true"
      :isClearFormData="isClearFormData"
    ></input-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm()" :disabled="isDisabled"
        >确定注册</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import inputForm from "./input-form";
import API from "@src/api/login";

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
    registerSuccess() {
      this.$notify({
        title: "成功",
        message: "账号注册成功",
        type: "success",
      });
    },
    registerFail() {
      this.$notify.error({
        title: "错误",
        message: "账号注册失败",
      });
    },
    registHandle() {
      let {username, password} = this.$refs.inputForm.formInfo
      this.$http.post(API.userRegist, this.$refs.inputForm.formInfo)
      // let res = await this.$http.post(API.userRegist, this.$refs.inputForm.formInfo);  
      // console.log(res.data)
    },
    // 提交按钮回调
    submitForm() {
      this.registHandle()
      // this.registerSuccess();
    },
    // 关闭注册弹窗时 清空输入框
    closeHandle() {
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
