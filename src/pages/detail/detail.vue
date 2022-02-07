<template>
  <bg-container :bgStyle="bgStyle">
    <div class="back-button">
      <el-button icon="el-icon-arrow-left" @click="goBack">返回</el-button>
    </div>
    <!-- <el-page-header @back="goBack" content="详情页面"> </el-page-header> -->
    <el-card shadow="hover">
      <div class="poetry-container">
        <div class="container-title">诗词正文</div>
        <div class="poetry-title">{{ poetryInfo.title }}</div>
        <div class="poetry-author">{{ poetryInfo.author }}</div>
        <div class="poetry-content">{{ poetryInfo.contents }}</div>
      </div>
    </el-card>
    <el-card class="appreciate-container" shadow="hover">
      <div class="container-title appreciate-title">诗词鉴赏</div>
      <el-input
        type="textarea"
        :rows="8"
        placeholder="请输入内容"
        v-model="content"
      >
      </el-input>
      <el-button @click="clickHandle">提交</el-button>
    </el-card>
  </bg-container>
</template>

<script>
import API from "@src/api/detail";
import moment from "moment";
import bgContainer from "@src/components/bg-container";
export default {
  name: "detail",
  data() {
    return {
      bgStyle: {
        background: "rgb(240,239,226)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      },
      poetryId: "",
      poetryInfo: {},
      content: "",
    };
  },
  components: {
    bgContainer,
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
    clickHandle() {
      let messageData = {
        content: this.content,
        author: this.$store.getters.currentUser,
        poetry_title: this.poetryInfo.title,
        time: moment().format("YYYY-MM-DD HH:mm:ss"),
      };
      this.$http.post(API.addUserMessage, messageData).then((res) => {
        if (res) {
          this.$message({
            message: "留言成功！",
            type: "success",
            showClose: true,
          });
          this.content = "";
        }
      });
    },
  },
  watch: {
    // poetryId 发生变化时 重新查询数据
    poetryId() {
      this.queryPoetryContent();
    },
  },
  mounted() {
    this.poetryId = this.$route.query.id;
  },
  beforeRouteUpdate(to, from, next) {
    this.poetryId = to.query.id;
    next();
  },
};
</script>

<style lang="less" scoped>
.el-page-header {
  background-color: rgb(84, 92, 100);
  height: 60px;
  width: 100%;
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

.back-button {
  .el-button {
    position: absolute;
    left: 60px;
    top: 30px;
  }
}

.el-card {
  width: 70%;
  padding: 20px;
  margin-top: 100px;
  /deep/ .el-card__body {
    padding: 0;
  }
  /deep/ .el-loading-mask {
    background-color: #fff;
  }
}

.container-title {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
}

.poetry-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  min-height: 200px;
  box-sizing: border-box;

  .poetry-title {
    font-size: 20px;
    font-weight: bold;
    white-space: pre-line;
    font-family: serif;
  }

  .poetry-author {
    font-size: 17px;
    margin: 8px 0;
    font-family: none;
  }

  .poetry-content {
    font-family: serif;
    font-family: monospace;
    font-size: 20px;
    line-height: 40px;
    // 数据中含有\n 自动换行
    white-space: pre-line;
  }
}

.appreciate-container {
  // background-color: #aff;
  width: 70%;
  padding: 20px;
  padding-bottom: 50px;
  margin: 70px 0;
  position: relative;

  .appreciate-title {
    position: relative;
    left: 30px;
  }

  .el-textarea {
    width: 90%;
    margin: 20px 30px;

    /deep/ .el-textarea__inner {
      font-size: 18px;
      color: #000;
    }
  }

  .el-button {
    position: absolute;
    right: 8%;
    bottom: 10px;
  }
}
</style>
>
