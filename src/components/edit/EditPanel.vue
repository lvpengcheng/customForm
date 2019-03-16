<template>
  <div :class="['root-edit-panel animated', { 'slideOutLeft': status === 'close', 'slideInLeft': status === 'expand' }]">

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'EditPanel',
  computed: mapState({
    status: state => state.LibBar.status
  })
}
</script>

<style lang="less" scoped>
  .root-edit-panel {
    background: #fff;
    min-width: 750px;
    min-height: 100vh;
  }

  @keyframes slideOutLeft-my-out {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    to {
      -webkit-transform: translate3d(-200px, 0, 0);
      transform: translate3d(-200px, 0, 0);
    }
  }

  @keyframes slideOutLeft-my-in {
    from {
      -webkit-transform: translate3d(-200px, 0, 0);
      transform: translate3d(-200px, 0, 0);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .slideOutLeft {
    -webkit-animation-name: slideOutLeft-my-out;
    animation-name: slideOutLeft-my-out;
  }

  .slideInLeft {
    -webkit-animation-name: slideOutLeft-my-in;
    animation-name: slideOutLeft-my-in;
  }
</style>
