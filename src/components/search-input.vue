<template>
  <el-autocomplete
    v-model="keyword"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入诗词名称"
    clearable
    @select="handleSelect"
  ></el-autocomplete>
</template>

<script>
import API from "@src/api/index";

export default {
  name: "searchInput",
  data() {
    return {
      poetryTitles: [],
      keyword: "",
    };
  },
  methods: {
    // 查询诗词内容
    queryPoetryContent() {
      this.$http
        .get(API.fuzzyQueryPoetry, {
          params: { keyword: this.keyword },
        })
        .then((res) => {
          if (res) {
            this.poetryTitles = res.data.map((item) => {
              item.value = item.title;
              return item;
            });
          }
        });
    },
    querySearchAsync(queryString, cb) {
      let poetryTitles = this.poetryTitles;
      let results = queryString
        ? poetryTitles.filter(this.createStateFilter(queryString))
        : poetryTitles;
      cb(results);
    },
    createStateFilter(queryString) {
      return (keyword) => {
        return (
          keyword.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log('handleselect', item.id)
      this.$emit("changeShow", false);
      // 跳转路由 传递诗词id
      // this.$router.push("/home");
      this.$router.push({ path: "/detail", query: { id: item.id } });
    },
  },
  mounted() {
    this.queryPoetryContent();
  },
};
</script>

<style lang="less" scoped></style>
