<template>
  <div class="root-el-title">
    <div class="title">{{title}}</div>
    <div class="help">{{help}}</div>
  </div>
</template>

<script>
export default {
  name: 'ElTitle',
  props: {
    title: String,
    help: String
  }
}
</script>

<style lang="less" scoped>
  @import "../../public/variable";

  .root-el-title {
    border-bottom: 1px solid #eee;
  }

  .title {
    font-size: @font-title;
    font-weight: bold;
    padding: 10px 20px;
  }

  .help {
    padding: 10px 20px;
    color: @font-tip-color;
    font-size: @font-tip;
  }
</style>
