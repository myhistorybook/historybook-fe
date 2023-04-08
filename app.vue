<template>
  <div class="page">
    <h1 class="title">Hello World</h1>
    <el-button type="primary">测试</el-button>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: '一梦浮生'
})
</script>

<style lang="less" scoped>
.page {
  .title {
    font-size: 28px;
  }
}
</style>
