<template>
  <div class="root-module-list">
    <ul>
      <li v-for="(item,index) in data" :key="item.id"
          @click="selectIndex(index)"
          :class="{ 'active':currentIndex === index }">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ModuleList',
  data () {
    return {
      data: [],
      currentIndex: 0
    }
  },
  created () {
    this.data = [{name: '邮件订阅', id: '1'}, {name: '意见反馈', id: '2'}]
  },
  methods: {
    selectIndex (i) {
      this.currentIndex = i
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../public/variable";

  .root-module-list {
    height: 100vh;
    background: rgba(244, 244, 244, 0.9);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    ul {
      display: flex;
      flex-direction: column;

      li {
        padding: 5px 10px;
        border-bottom: 1px solid #d6dee7;
        background: #fff;
        font-size: @font;
        cursor: pointer;

        &.active {
          background: @font-active-bg-color;
          color: #fff;
        }
      }
    }
  }
</style>
