<template>
  <bg-container :bgStyle="bgStyle">
    <page-title
      :titleStyle="titleStyle"
      titleContent="近一周诗词点击排行榜"
    ></page-title>
    <div class="main-container">
      <el-card class="table-container" shadow="hover">
        <el-table :data="sortedData" style="width: 100%" :row-style="{cursor: 'pointer'}"
            @row-click="clickHandle">
          <el-table-column
            type="index"
            :index="indexMethod"
            label="序号"
            width="150"
            fixed
          >
          </el-table-column>
          <el-table-column prop="title" label="名称"  width="250" fixed>
          </el-table-column>
          <el-table-column prop="views" label="访问量" width="150" >
          </el-table-column>
          <el-table-column prop="author" label="作者" width="150">
          </el-table-column>
          <el-table-column prop="type" label="类型"> </el-table-column width="150">
          <el-table-column prop="id" label="诗词id"> </el-table-column width="150">
          
          
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
    // 点击行 回调
    clickHandle(row, column, event){
      // 跳转路由 传递诗词id
      this.$router.push({ path: "/detail", query: { id: row.id } });
    }
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

.main-container {
  width: 80%;

  .table-container {
    height: 550px;
    margin-top: 20px;
    margin-left: 25px;

    /deep/ .el-card__body {
      padding: 10px 20px;
    }
    /deep/ .el-table__cell{
      text-align: center;
    }
    /deep/ .el-table_1_column_2,
    /deep/ .el-table_1_column_3{
      font-weight: bold;
    }

  }
  .poetry-pagination {
    height: 50px;
    padding-top: 30px;
    display: flex;
    justify-content: flex-end;
  }
}

</style>
