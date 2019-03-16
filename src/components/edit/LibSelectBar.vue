<template>
  <div class="root-lib-select-bar">
    <ul :class="['animated',{'expand slideInLeft': current === 'expand', 'close slideOutLeft': current === 'close'}]">
      <li v-for="item in data"
          :key="item.id"
          draggable="true">
        <img :src="'static/'+item.name+'.png'" alt="">
      </li>

      <a href="javascript:void(0);"
         :class="{'panel-open-btn-left': current === 'expand', 'panel-open-btn-right': current === 'close'}"
         @click="status">
        <i :class="{'glyphicon-menu-left': current === 'expand', 'glyphicon-menu-right': current === 'close'}"></i>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LibSelectBar',
  data () {
    return {
      data: [
        {id: '1', name: 'title-component'},
        {id: '2', name: 'select-component'},
        {id: '3', name: 'textarea-component'},
        {id: '4', name: 'time-component'},
        {id: '5', name: 'input-component'}
      ],
      current: 'expand'
    }
  },
  methods: {
    status () {
      this.current = this.current === 'close' ? 'expand' : 'close'
    }
  },
  watch: {
    current () {
      this.$store.commit('LibBar/changeStatus', this.current)
    }
  }
}
</script>

<style lang="less" scoped>
  .root-lib-select-bar {
    position: relative;
    width: 240px;
    height: 100vh;
    margin-right: 30px;

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

    .slideOutLeft {
      -webkit-animation-name: slideOutLeft-my;
      animation-name: slideOutLeft-my;
    }

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
      right: -15px;
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

    .glyphicon-menu-left:before {
      content: "<";
      color: #669900;
    }

    .glyphicon-menu-right:before {
      content: ">";
      color: #669900;
    }
  }
</style>
