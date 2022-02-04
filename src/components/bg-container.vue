<template>
  <div class="bg-container" :style="bgStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bgContainer",
  props: ["bgStyle"]
};
</script>

<style lang="less" scoped>
.bg-container {
  width: 80%;
  min-height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
