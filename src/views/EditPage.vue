<template>
  <div class="root-edit-page">
    <lib-select-bar/>
    <edit-panel/>
    <attributes-select-bar/>
  </div>
</template>

<script>
import LibSelectBar from '../components/edit/LibSelectBar'
import EditPanel from '../components/edit/EditPanel'
import AttributesSelectBar from '../components/edit/AttributesSelectBar'

export default {
  name: 'EditPage',
  components: {AttributesSelectBar, EditPanel, LibSelectBar}
}
</script>

<style lang="less" scoped>
  .root-edit-page {
    display: flex;
    justify-content: space-between;
    background: rgb(238, 238, 238);
    overflow-x: hidden;
  }
</style>
