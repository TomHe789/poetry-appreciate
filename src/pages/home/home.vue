<template>
  <bg-container>
    <page-menu></page-menu>
    <div class="title">唐诗三百首</div>
    <div class="poetry-list">
      <div class="poetry-item" v-for="(item, index) in poetryInfo">
        <span class="index-container">{{ poetryIndex(index) }}</span>
        <el-descriptions>
          <div
            class="item-title"
            :title="item.title"
            slot="title"
            @click="clickHandle($event, item.id)"
          >
            {{ item.title }}
          </div>
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
      </div>
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
import pageMenu from "@src/components/page-menu";
import bgContainer from "@src/components/bg-container";

export default {
  name: "Home",
  data() {
    return {
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
  components: {
    pageMenu,
    bgContainer,
  },
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
.title {
  height: 25px;
  line-height: 25px;
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px 25px;
  background-color: rgb(240, 239, 226);
  &::before {
    display: inline-block;
    width: 3px;
    height: 100%;
    content: "";
    background-color: rgb(84, 92, 100);
    margin-right: 5px;
    position: relative;
    top: 3px;
  }
}

.poetry-list {
  height: 690px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: auto;
  background-color: rgb(240, 239, 226);

  .poetry-item {
    width: 30%;
    margin: 20px 18px;
    position: relative;

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
  background-color: rgb(240, 239, 226);
  display: flex;
  justify-content: flex-end;
}

.el-descriptions {
  background-color: #fff;
  border: 1px solid #000;
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

      .el-descriptions-item{
        &:last-of-type{
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
