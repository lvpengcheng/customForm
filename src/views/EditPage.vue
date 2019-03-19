<template>
  <div class="root-edit-page">
    <div>
      <top-container/>
    </div>
    <div>
      <lib-select-bar/>
      <attributes-select-bar/>
      <edit-panel/>
    </div>
  </div>
</template>

<script>
import LibSelectBar from '../components/edit/LibSelectBar'
import EditPanel from '../components/edit/EditPanel'
import AttributesSelectBar from '../components/edit/AttributesSelectBar'
import TopContainer from '../components/edit/TopContainer'

export default {
  name: 'EditPage',
  components: {TopContainer, AttributesSelectBar, EditPanel, LibSelectBar}
}
</script>

<style lang="less" scoped>
  .root-edit-page {
    display: flex;
    flex-direction: column;
    background: rgb(238, 238, 238);
    overflow-x: hidden;
  }
</style>
