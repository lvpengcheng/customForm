<template>
  <div class="root-bar-container">
    <div :class="rootClass">
      <ul :class="{ 'left': position === 'left', 'right': position === 'right' }">
        <slot></slot>
        <a href="javascript:void(0);"
           :class="{'panel-open-btn-left': current === 'expand', 'panel-open-btn-right': current === 'close'}"
           @click="status">
          <i :class="{'glyphicon-menu-left': current === 'expand', 'glyphicon-menu-right': current === 'close'}"></i>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarContainer',
  data () {
    return {
      current: 'expand'
    }
  },
  props: {
    position: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    rootClass () {
      if (this.position === 'right') {
        return ['animated root', {
          'expand slideInLeft': this.current === 'expand',
          'close slideOutLeft': this.current === 'close'
        }]
      } else {
        return ['animated root', {
          'expand slideInRight': this.current === 'expand',
          'close slideOutRight': this.current === 'close'
        }]
      }
    }
  },
  methods: {
    status () {
      this.current = this.current === 'close' ? 'expand' : 'close'
    }
  },
  watch: {
    current () {
      if (this.position === 'right') {
        this.$store.commit('LibBar/changeStatus', this.current)
      } else {
        this.$store.commit('AttrBar/changeStatus', this.current)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .root-bar-container {
    @keyframes slideOutLeft-my {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        -webkit-transform: translate3d(-95%, 0, 0);
        transform: translate3d(-95%, 0, 0);
      }
    }

    @keyframes slideOutRight-my {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      to {
        -webkit-transform: translate3d(95%, 0, 0);
        transform: translate3d(95%, 0, 0);
      }
    }

    .slideOutLeft {
      -webkit-animation-name: slideOutLeft-my;
      animation-name: slideOutLeft-my;
    }

    .slideOutRight {
      -webkit-animation-name: slideOutRight-my;
      animation-name: slideOutRight-my;
    }

    .root {
      position: relative;
      width: 220px;
      height: 100vh;

      ul {
        position: relative;
        display: flex;
        background: rgba(244, 244, 244, 0.9);
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;

        li {
          padding: 5px;
          cursor: pointer;

          img {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          }
        }
      }

      .panel-open-btn-left, .panel-open-btn-right {
        width: 16px;
        padding: 10px 0px;
        margin: 0;
        background-color: rgba(244, 244, 244, 0.9);
        box-shadow: 2px 0px 1px rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 100px;
        font-family: sans-serif;
        color: rgb(37, 37, 37);
        font-size: 1.2em;
        line-height: 1;
        text-decoration: none;
        text-align: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 1px solid #fff;
        border-left: none;
        box-sizing: border-box;
      }

      .right {
        .panel-open-btn-left, .panel-open-btn-right {
          right: -15px;
        }
      }

      .left {
        .panel-open-btn-left, .panel-open-btn-right {
          left: -15px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border: 1px solid #fff;
          border-right: none;
          box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
        }
      }

      .left {
        .glyphicon-menu-left:before {
          content: "<";
          color: #669900;
        }

        .glyphicon-menu-right:before {
          content: ">";
          color: #669900;
        }
      }

      .right {
        .glyphicon-menu-left:before {
          content: ">";
          color: #669900;
        }

        .glyphicon-menu-right:before {
          content: "<";
          color: #669900;
        }
      }
    }

  }
</style>
