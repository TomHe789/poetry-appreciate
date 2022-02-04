<template>
  <bg-container :bgStyle="bgStyle">
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    <div class="poetry-container">
      <div class="poetry-title">{{ poetryInfo.title }}</div>
      <div class="poetry-author">{{ poetryInfo.author }}</div>
      <div class="poetry-content">{{ poetryInfo.contents }}</div>
    </div>
  </bg-container>
</template>

<script>
import API from "@src/api/detail";
import bgContainer from "@src/components/bg-container";
export default {
  name: "detail",
  data() {
    return {
      bgStyle: {
        background: "rgb(240,239,226)"
      },
      poetryId: "",
      poetryInfo: {},
    };
  },
  components: {
    bgContainer,
  },
  // 进入路由回调
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // 获取路由参数
      vm.poetryId = vm.$route.query.id;
    });
  },
  methods: {
    // 查询诗词内容
    queryPoetryContent() {
      this.$http
        .get(API.getPoetryContent, {
          params: { poetryId: this.poetryId },
        })
        .then((res) => {
          if (res) {
            this.poetryInfo = res.data[0];
          }
        });
    },
    // 返回到首页
    goBack() {
      this.$router.go(-1);
    },
  },
  watch: {
    // poetryId 发生变化时 重新查询数据
    poetryId() {
      this.queryPoetryContent();
    },
  },
};
</script>

<style lang="less" scoped>
.el-page-header {
  background-color: rgb(84, 92, 100);
  height: 60px;
  line-height: 60px;
  color: #fff;

  /deep/ .el-page-header__left {
    padding-left: 15px;
    margin-right: 30px;

    &:hover {
      background-color: rgb(67, 74, 80);
    }

    &::after {
      right: -10px;
    }

    .el-icon-back {
      font-size: 20px;
    }

    .el-page-header__title {
      font-size: 16px;
      padding-right: 15px;
    }
  }

  /deep/ .el-page-header__content {
    color: rgb(255, 208, 75);
  }
}
.poetry-container {
  border: 1px dashed #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  font-family: serif;
  padding: 30px;
  width: 50%;
  min-height: 200px;
  box-sizing: border-box;

  .poetry-title {
    font-size: 20px;
    font-weight: bold;
    white-space: pre-line;
  }

  .poetry-author {
    font-size: 17px;
    margin: 8px 0;
    font-family: none;
  }

  .poetry-content {
    font-family: monospace;
    font-size: 20px;
    line-height: 40px;
    // 数据中含有\n 自动换行
    white-space: pre-line;
  }
}
</style>
>
