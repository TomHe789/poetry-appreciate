<template>
  <bg-container :bgStyle="bgStyle">
    <page-title
      :titleStyle="titleStyle"
      titleContent="近一周诗词点击排行榜"
    ></page-title>
    <el-card class="table-container" shadow="always">
      <el-table :data="sortedData" style="width: 100%">
        <el-table-column
          type="index"
          :index="indexMethod"
          label="序号"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="views" label="访问量" width="180">
        </el-table-column>
        <el-table-column prop="author" label="作者" width="180">
        </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column width="180">
        <el-table-column prop="title" label="名称" >
        </el-table-column>
        
      </el-table>
    </el-card>
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
import API from "@src/api/rate";
import pageTitle from "@src/components/page-title";
import bgContainer from "@src/components/bg-container";
export default {
  name: "Rate",
  data() {
    return {
      bgStyle: {
        background: "rgb(240,239,226)",
      },
      titleStyle: {
        width: "200px",
        fontSize: "16px",
      },
      currentPage: 1,
      pageSize: 10,
      sortedData: [],
    };
  },
  methods: {
    // 查询分页数据
    queryPoetryInfo() {
      this.$http
        .get(API.getPoetryRatings, {
          params: { currentPage: this.currentPage, pageSize: this.pageSize },
        })
        .then((res) => {
          if (res) {
            this.sortedData = res.data;
          }
        });
    },
    indexMethod(index) {
      let res = this.pageSize * (this.currentPage - 1) + index+1;
      return res;
    },
  },
  components: {
    pageTitle,
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

<style lang="less" scoped>
.table-container {
  width: 70%;
  height: 550px;
  margin-top: 20px;
  margin-left: 25px;

  /deep/ .el-card__body {
    padding: 10px 20px;
  }
}
.poetry-pagination {
  width: 70%;
  height: 50px;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
