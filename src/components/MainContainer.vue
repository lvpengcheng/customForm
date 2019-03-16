<template>
  <div class="root-main-container">
    <div class="lay-top">
      <el-button type="primary">选择此模板</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContainer'
}
</script>

<style lang="less" scoped>
.root-main-container {
  width: 100%;
  .lay-top {
    display: flex;
    justify-content: center;
    background-color: #fcf8e3;
    border-color: #faebcc;
    padding: 15px;
  }
}
</style>
