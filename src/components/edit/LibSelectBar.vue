<template>
  <div class="root-lib-select-bar">
    <bar-container>
      <li v-for="item in data" :key="item.id">
        <img :src="'static/'+item.name+'.png'" alt="" @dragstart="dragstart($event, item.name)">
      </li>
    </bar-container>
  </div>
</template>

<script>
import BarContainer from './BarContainer'
export default {
  name: 'LibSelectBar',
  components: {BarContainer},
  data () {
    return {
      data: [
        {id: '1', name: 'title-component'},
        {id: '2', name: 'select-component'},
        {id: '3', name: 'textarea-component'},
        {id: '4', name: 'time-component'},
        {id: '5', name: 'input-component'}
      ]
    }
  },
  methods: {
    dragstart (ev, id) {
      ev.dataTransfer.setData('uuid', id)
      ev.dataTransfer.dropEffect = 'move'
    }
  }
}
</script>

<style lang="less" scoped>
  .root-lib-select-bar {
    float: left;
  }
</style>
