<template>
  <div class="root-attributes-select-bar">
    <bar-container position="left">
      <li class="list-item" v-for="(item,index) in attrs" :key="index">
        <div class="title">{{item.attr}}</div>
        <div>
          <el-input v-model="item.value"/>
          {{item.value}}
        </div>
      </li>
    </bar-container>
  </div>
</template>

<script>
import BarContainer from './BarContainer'
import {mapState} from 'vuex'

export default {
  name: 'AttributesSelectBar',
  components: {BarContainer},
  data () {
    return {
      attrs: []
    }
  },
  computed: {
    ...mapState({
      id: state => state.EditPanel.id
    })
  },
  watch: {
    id () {
      const AllComponents = import('../../datas/AllComponents')
      AllComponents.then(res => {
        const component = res.default[this.id]
        if (component) {
          this.attrs = component.attrs
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../public/variable";

  .root-attributes-select-bar {
    float: right;

    .list-item {
      margin: 10px 0;
      font-size: @font-tip;
      .title {
        padding: 5px 0;
      }
    }
  }
</style>
