<template>
  <div class="title" :style="titleStyle">
    <el-card shadow="hover">{{titleContent}}</el-card>
  </div>
</template>

<script>
export default {
  name: 'pageTitle',
  props: {
    titleContent: {
      required: true,
    },
    titleStyle: {
      required: false,
    },
  }
};
</script>

<style lang="less">
.title {
  width: 150px;
  text-align: center;
  line-height: 25px;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 25px;
  .el-card {
    .el-card__body {
      padding: 10px;
    }
  }
}
</style>
