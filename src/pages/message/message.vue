<template>
  <bg-container :bgStyle="bgStyle">
    <page-title :titleStyle="titleStyle" titleContent="留言区"></page-title>
    <div class="note-list">
      <el-card v-for="(item, index) in noteInfo" shadow="always">
        <div class="note-item">
          <el-input
            type="textarea"
            :rows="3"
            :disabled="true"
            placeholder="请输入内容"
            v-model="item.content"
          >
          </el-input>
          <div class="note-tips">
            <span>发布人：{{ item.author }}</span>
            <span :title="item.poetry_title"
              >诗词：{{ item.poetry_title }}</span
            >
            <el-tag>{{ formattTime(item.time) }}</el-tag>
          </div>
        </div>
      </el-card>
      <template v-if="noteInfo.length === 0">
        <div class="note-text">暂无留言</div>
      </template>
    </div>
  </bg-container>
</template>

<script>
import API from "@src/api/message";
import moment from "moment";
import pageTitle from "@src/components/page-title";
import bgContainer from "@src/components/bg-container";
export default {
  name: "Message",
  data() {
    return {
      bgStyle: {
        background: "rgb(240,239,226)",
      },
      titleStyle: {
        fontSize: "16px",
      },
      noteInfo: [],
    };
  },
  methods: {
    // 查询留言数据
    queryNoteInfo() {
      this.$http.get(API.getUserMessage).then((res) => {
        if (res) {
          this.noteInfo = res.data.reverse();
        }
      });
    },
    // 格式化时间
    formattTime(time) {
      return moment(time).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  components: {
    pageTitle,
    bgContainer,
  },
  mounted() {
    this.queryNoteInfo();
  },
  beforeRouteEnter(from, to, next) {
    next((vm) => {
      vm.queryNoteInfo();
    });
  },
};
</script>

<style lang="less" scoped>
.note-list {
  width: 80%;
  margin-top: 20px;
  margin-left: 25px;

  .el-card {
    margin-bottom: 20px;
  }

  .note-item {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: end;

    /deep/ .el-textarea.is-disabled .el-textarea__inner {
      font-family: math;
      color: #000;
      font-size: 16px;
      line-height: 25px;
      cursor: default;
    }

    .note-tips {
      width: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      span {
        white-space: nowrap;

        &:nth-of-type(2) {
          width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .note-text {
    font-size: 25px;
    padding: 20px;
    letter-spacing: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #888;
    height: 700px;
  }
}

/deep/ .el-card__body {
  padding: 0;
  padding-top: 20px;
  padding-left: 30px;
}

/deep/ .el-descriptions__header {
  margin-bottom: 10px;
}
</style>
