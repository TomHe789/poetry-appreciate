<template>
  <el-dialog :title="dialogTitle" :visible.sync="showDialog" @close="closeHandle" width="30%">
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: "searchDialog",
  props: ["dialogTitle", "dialogVisible"],
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    closeHandle(){
      this.$emit('changeShow', false)
    }
  },
  watch: {
    dialogVisible() {
      this.showDialog = this.dialogVisible;
    },
  },
};
</script>

<style lang="less" scoped></style>
