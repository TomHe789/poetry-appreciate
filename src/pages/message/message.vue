<template>
  <bg-container :bgStyle="bgStyle">
    <page-title :titleStyle="titleStyle" titleContent="留言区"></page-title>
  </bg-container>
</template>

<script>
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
    };
  },
  components: {
    pageTitle,
    bgContainer,
  },
};
</script>

<style></style>
