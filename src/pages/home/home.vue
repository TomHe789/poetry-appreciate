<template>
  <bg-container :bgStyle="bgStyle">
    <page-title :titleStyle="titleStyle" titleContent="诗词总览"></page-title>
    <div class="poetry-list">
      <el-card
        class="poetry-item"
        shadow="hover"
        v-for="(item, index) in poetryInfo"
      >
        <span class="index-container">{{ poetryIndex(index) }}</span>
        <el-descriptions>
          <span
            class="item-title"
            :title="item.title"
            slot="title"
            @click="clickHandle($event, item.id)"
          >
            {{ item.title }}
          </span>
          <el-descriptions-item label="作者">{{
            item.author
          }}</el-descriptions-item>
          <el-descriptions-item label="类型">
            <el-tag size="small">{{ item.type }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <el-link @click="clickHandle($event, item.id)">查看详情</el-link>
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>
    <div class="poetry-pagination">
      <el-pagination
        layout="prev, pager, next, jumper, total"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :total="319"
      >
      </el-pagination>
    </div>
  </bg-container>
</template>

<script>
import API from "@src/api/home";
import pageTitle from "@src/components/page-title";
import bgContainer from "@src/components/bg-container";

export default {
  name: "Home",
  data() {
    return {
      bgStyle: {
        background: "rgb(240,239,226)",
      },
      titleStyle: {
        fontSize: "18px",
      },
      poetryInfo: [],
      currentPage: 1,
      pageSize: 15,
    };
  },
  methods: {
    // 查询分页数据
    queryPoetryInfo() {
      this.$http
        .get(API.getPoetryInfo, {
          params: { currentPage: this.currentPage, pageSize: this.pageSize },
        })
        .then((res) => {
          if (res) {
            this.poetryInfo = res.data;
          }
        });
    },

    // 查看诗词详情
    clickHandle($event, id) {
      // 跳转路由 传递诗词id
      this.$router.push({ path: "/detail", query: { id } });
      // this.$router.push({name: 'detail', params: {id}});
    },

    // 计算诗词序号
    poetryIndex(index) {
      let res = this.pageSize * (this.currentPage - 1) + index + 1;
      return res;
    },
  },
  components: { pageTitle, bgContainer },
  watch: {
    // 查询页数发生改变时 重新查询
    currentPage() {
      this.queryPoetryInfo();
    },
  },
  mounted() {
    this.queryPoetryInfo();
  },
};
</script>

<style lang="less">
.poetry-list {
  height: 690px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: auto;

  .poetry-item {
    width: 346px;
    margin: 20px 18px;
    position: relative;

    .el-card__body {
      padding: 0;
    }

    .index-container {
      position: absolute;
      top: 0;
      left: 0px;
      width: 35px;
      text-align: center;
      background: rgba(84, 92, 100);
      border-radius: 5px;
    }
  }
}

.poetry-pagination {
  height: 50px;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
}

.el-descriptions {
  background-color: #fff;
  border-radius: 5px;
  .el-descriptions__header {
    padding-top: 18px;
    padding-left: 16px;
    margin-bottom: 10px;

    .el-descriptions__title {
      width: 80%;
      .item-title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 18px;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  .el-descriptions__body {
    padding-left: 16px;
    border-radius: 5px;

    .el-descriptions__table {
      font-size: 16px;

      .el-descriptions-item {
        &:last-of-type {
          padding-left: 10px;
        }
      }

      .el-descriptions-item__container {
        span {
          margin-right: 2px;
        }
      }
    }
  }
  .el-descriptions-row {
    .el-descriptions-item {
      &:last-of-type {
        .el-descriptions-item__label {
          display: none;
        }
      }
    }
  }
}

.el-pagination__jump {
  margin-left: 24px;
}
</style>
