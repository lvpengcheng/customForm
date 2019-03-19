<template>
  <div class="root-lib-select-bar">
    <bar-container>
      <draggable :list="data" :group="{ name: 'people', pull: 'clone', put: false }" :clone="cloneLib">
        <li v-for="item in data" :key="item.id">
          <img :src="'static/'+item.name+'.png'" alt=""><!--@dragstart="dragstart($event, item.name)"-->
        </li>
      </draggable>
    </bar-container>
  </div>
</template>

<script>
import BarContainer from './BarContainer'
import draggable from 'vuedraggable'

export default {
  name: 'LibSelectBar',
  components: {BarContainer, draggable},
  data () {
    return {
      data: [
        {id: '1', name: 'title-component'},
        // {id: '2', name: 'select-component'},
        // {id: '3', name: 'textarea-component'},
        // {id: '4', name: 'time-component'},
        {id: '5', name: 'input-component'}
      ]
    }
  },
  methods: {
    dragstart (ev, id) {
      // ev.dataTransfer.setData('uuid', id)
      // ev.dataTransfer.dropEffect = 'move'
    },
    cloneLib (e) {
      const allComponents = require('../../datas/AllComponents')
      const component = allComponents.default[e.name]
      const uuid = +new Date()
      console.log({
        id: `${e.name}`,
        attrs: component.attrs,
        uuid: `${uuid}`,
        tag: component.tag
      })
      return {
        id: `${e.name}`,
        attrs: component.attrs,
        uuid: `${uuid}`,
        tag: component.tag
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .root-lib-select-bar {
    float: left;
  }
</style>
