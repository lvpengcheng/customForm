<template>
  <div class="root-top-container">
    <el-button type="primary" @click="save">保存</el-button>
    <el-button type="success">保存为模板</el-button>
  </div>
</template>

<script>
export default {
  name: 'TopContainer',
  methods: {
    save () {
      const arr = this.$store.state.EditPanel.templateArr
      alert(JSON.stringify(arr))
    }
  }
}
</script>

<style lang="less" scoped>
.root-top-container {
  margin: 10px;
}
</style>
