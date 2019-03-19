<template>
  <div class="root-lib-select-bar">
    <bar-container>
      <draggable :list="data" :group="{ name: 'people', pull: 'clone', put: false }" :clone="cloneLib">
        <li v-for="item in data" :key="item.id">
          <img :src="'static/'+item.name+'.png'" alt="">
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
        {name: 'title-component'},
        {name: 'select-component'},
        {name: 'input-component'}
      ]
    }
  },
  methods: {
    cloneLib (e) {
      const allComponents = require('../../datas/AllComponents')
      const component = allComponents.default[e.name]
      const uuid = +new Date()
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
