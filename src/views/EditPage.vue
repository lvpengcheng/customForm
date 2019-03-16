<template>
  <div class="root-edit-page">
    <lib-select-bar/>
    <edit-panel/>
  </div>
</template>

<script>
import LibSelectBar from '../components/edit/LibSelectBar'
import EditPanel from '../components/edit/EditPanel'

export default {
  name: 'EditPage',
  components: {EditPanel, LibSelectBar}
}
</script>

<style lang="less" scoped>
  .root-edit-page {
    display: flex;
    background: rgb(238, 238, 238);
  }
</style>
