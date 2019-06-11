# 库
- [vuedraggable](https://github.com/SortableJS/Vue.Draggable) 一应俱全，样式不咋地
- [vue-slicksort](https://github.com/Jexordexan/vue-slicksort) 只有单个数组排序功能，样式特效丰富


# 问题

- 整个数据流向： 左栏组件库<-->中间展示栏 <---->右栏属性设置, 控制不好数据的话，可能会出现原始数据被修改的情况。
```
var a = { k: 1 }
var b = a
b.k = 2
console.log(a) // { k: 2 }
```
考虑过使用`Immutable.js`, 繁琐 徒增代码量
最后使用`Object.freeze` [Object.freeze](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

- 拖放组件使用vuedraggable,拖放完成的时候，鉴于MVVM的特点，画面改变<=>数据改变，操作vuex时注意不能直接修改state,`其实跟第一点差不多`,使用`computed计算属性`的`get set`解决
```
computed: {
    myList: {
        get() {
            return this.$store.state.myList
        },
        set(value) {
            this.$store.commit('updateList', value)
        }
    }
}
```

- 动态显示template
```
import Vue from 'vue'
export default Vue.component('CustomTemplate', {
    props: {
        html: String
    },
    render (h) {
      return h(Vue.extend({ // 关键点
          template: `<div class="root-custom-template">${this.html}</div>`,
          data () {
            return {
              current: ''
            }
          },
          methods: {
            doclick (uuid, id) {
              this.current = uuid
              this.$store.commit('EditPanel/changeId', uuid)
            },
            dodragstart (ev) {
              ev.dropEffect = 'move'
            }
          }
    }))
  },
})
```
