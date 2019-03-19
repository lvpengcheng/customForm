<template>
  <div class="root-attributes-select-bar">
    <bar-container position="left">
      <li class="list-item" v-for="(item,index) in attrs" :key="index">
        <div class="title">{{item.attr}}</div>
        <div>
          <el-input v-model="item.value"/>
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
      id: state => state.EditPanel.uuid,
      templateArr: state => state.EditPanel.templateArr
    })
  },
  watch: {
    id () {
      this.attrs = this.templateArr.filter(v => v.uuid === this.id)[0].attrs
      const attrss = this.templateArr.filter(v => v.uuid === this.id)[0].attrs
      const attrs = []
      attrss.forEach(v => {
        attrs.push({
          name: v.name,
          max: v.max,
          min: v.min,
          value: v.value,
          attr: v.attr
        })
      })
      this.attrs = attrs
    },
    attrs: {
      handler () {
        let arr = this.templateArr.map(v => {
          if (v.uuid === this.id) {
            v.attrs = this.attrs
          }
          return v
        })
        this.$store.commit('EditPanel/changeTemplateArr', arr)
      },
      deep: true
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
