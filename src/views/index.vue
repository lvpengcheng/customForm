<template>
  <div class="root">
    <module-list/>
    <main-container/>
  </div>
</template>

<script>

import ModuleList from '../components/ModuleList'
import MainContainer from '../components/MainContainer'

export default {
  name: 'index',
  components: {MainContainer, ModuleList}
}
</script>

<style lang="less" scoped>
  .root {
    display: flex;

    /deep/ .root-module-list {
      width: 200px;
    }
  }
</style>
