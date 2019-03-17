<template>
  <div :class="rootClass"
       @drop="drop"
       @dragover="allowDrop">

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'EditPanel',
  data () {
    return {
      rootClass: ['root-edit-panel']
    }
  },
  computed: {
    ...mapState({
      LibStatus: state => state.LibBar.status,
      AttrStatus: state => state.AttrBar.status
    })
  },
  methods: {
    allowDrop (ev) {
      ev.preventDefault()
    },
    drop (ev) {
      ev.preventDefault()
    }
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
    min-width: 750px;
    min-height: 100vh;
  }

  .slideInLeft-my {
    transition: all 1s;
    margin-left: 255px;
    margin-right: 255px;
    &.slideInRight-my {
      transition: all 1s;
      margin-left: 255px;
      margin-right: 255px;
    }
  }

  .slideOutLeft-my {
    transition: all 1s;
    margin-left: 12px;
    margin-right: 255px;
    &.slideOutRight-my {
      transition: all 1s;
      margin-left: 12px;
      margin-right: 12px;
    }
  }

  .slideOutRight-my {
    transition: all 1s;
    margin-left: 255px;
    margin-right: 12px;
  }

  .slideInRight-my {
    transition: all 1s;
    margin-left: 12px;
    margin-right: 255px;
  }

</style>
