<template>
  <div :class="rootClass">
    <custom-template/>
  </div>
</template>

<style>
</style>

<script>
import {mapState} from 'vuex'
import CustomTemplate from './CustomTemplate.js'

export default {
  name: 'EditPanel',
  data () {
    return {
      rootClass: ['root-edit-panel'],
      items: ['1', '2', '3']
    }
  },
  components: {
    CustomTemplate
  },
  computed: {
    ...mapState({
      LibStatus: state => state.LibBar.status,
      AttrStatus: state => state.AttrBar.status,
      temArr: state => state.EditPanel.templateArr
    })
  },
  watch: {
    LibStatus () {
      this.rootClass = this.rootClass.filter(v => v.indexOf('Left') === -1)
      this.rootClass.push(this.LibStatus === 'close' ? 'slideOutLeft-my' : 'slideInLeft-my')
    },
    AttrStatus () {
      this.rootClass = this.rootClass.filter(v => v.indexOf('Right') === -1)
      this.rootClass.push(this.AttrStatus === 'close' ? 'slideOutRight-my' : 'slideInRight-my')
    }
  }
}
</script>

<style lang="less" scoped>
  .root-edit-panel {
    position: relative;
    background: #fff;
    min-height: 100vh;
    margin: 10px 240px;
    padding: 10px;

    /deep/ .current {
      border: 1px solid #ffbea3;
    }

    /deep/ .root-custom-template {
      .content {
        position: relative;
        margin: 10px 0;

        > div {
          padding: 10px;
        }
      }

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }

    &.slideInLeft-my {
      transition: all 1s;
      margin-left: 245px;
    }

    &.slideOutLeft-my {
      transition: all 1s;
      margin-left: 35px;
    }

    &.slideInRight-my {
      transition: all 1s;
      margin-right: 245px;
    }

    &.slideOutRight-my {
      transition: all 1s;
      margin-right: 35px;
    }
  }
</style>
