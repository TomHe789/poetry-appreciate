<template>
  <el-form
    ref="ruleForm"
    :inline="isInline"
    label-width="80px"
    :model="formInfo"
    :rules="rules"
  >
    <el-form-item label="用户名" prop="username">
      <el-input
        v-model="formInfo.username"
        placeholder="请输入用户名"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formInfo.password" placeholder="请输入密码"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "inputForm",
  data() {
    return {
      // 是否满足表单校验
      legal: false,
      formInfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "用户名长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
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
  props: ["isInline", "isClearFormData"],
  methods: {
    // 校验表单数据
    validate() {
      this.$refs.ruleForm.validate((valid) => {
        // console.log("123123123", valid);
        this.$emit("validate-form", valid);
      });
    },
  },
  watch: {
    formInfo: {
      handler() {
        // if (this.formInfo.username === "" && this.formInfo.password === "") {
        //   console.log("都为空");
        //   this.$emit("validate-form", false);
        // } else {
        //   this.validate();
        // }
        this.validate();
      },
      deep: true,
    },
    isClearFormData() {
      this.formInfo = {
        username: "",
        password: "",
      };
    },
  },
};
</script>

<style></style>
