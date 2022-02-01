<template>
  <el-dialog title="账号注册" :visible.sync="isShow" @close="closeHandle">
    <el-form
      ref="ruleForm"
      :inline="true"
      label-width="80px"
      :model="formInfo"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="username" required>
        <el-input v-model="formInfo.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input v-model="formInfo.password" clearable></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm()" :disabled="isDisabled"
        >确定注册</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      isDisabled: true,
      isShow: false,
      formInfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  props: {
    dialogVisible: {
      required: true,
    },
  },
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
    // 校验表单数据
    validate() {
      this.$refs.ruleForm.validate((valid) => {
        this.isDisabled = !valid;
      });
    },
    // 提交按钮回调
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.registerSuccess();
          // this.isShow = false;
          this.$emit('showDialog')
        } else {
          this.registerFail();
          return false;
        }
      });
    },
    closeHandle(){
      console.log('close')
      this.$emit('showDialog')
      console.log('321')
      
    }
  },
  computed: {},
  watch: {
    // 监听对象
    formInfo: {
      handler: function () {
        this.validate();
      },
      deep: true,
    },
    dialogVisible(){
      console.log('123123')
      this.isShow = !this.isShow;
    }
  },
};
</script>

<style></style>
