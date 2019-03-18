<template>
  <div class="root-el-my-input">
    <label>{{title}}</label>
    <div>
      <el-input :placeholder="describe"/>
      <p class="help">{{help}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElMyInput',
  props: {
    describe: String,
    title: String,
    help: String
  }
}
</script>

<style lang="less" scoped>
  @import "../../public/variable";

  .root-el-my-input {
    display: flex;
    justify-content: center;

    label {
      padding-top: 14px;
    }

    > div {
      width: 250px;
      margin-left: 20px;

      .help {
        padding: 10px 0;
        color: @font-tip-color;
        font-size: @font-tip;
      }
    }
  }
</style>
