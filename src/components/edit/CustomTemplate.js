import Vue from 'vue'
import {mapState} from 'vuex'
import {SlickList, SlickItem} from 'vue-slicksort'
import draggable from 'vuedraggable'

export default Vue.component('CustomTemplate', { /* eslint-disable-line */
  data () {
    return {
      html: ''
    }
  },
  render (h) {
    return h(Vue.extend({
      template: `<div class="root-custom-template">${this.html}</div>`,
      components: {SlickList, SlickItem, draggable},
      computed: {
        temArr: {
          get () {
            return this.$store.state.EditPanel.templateArr
          },
          set (value) {
            this.$store.commit('EditPanel/changeTemplateArr', value)
          }
        }
      },
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
        log (e) {
          console.log(e)
        }
      }
    }))
  },
  computed: {
    ...mapState({
      temArr: state => state.EditPanel.templateArr
    })
  },
  created () {
    let html = `
      <draggable v-model="temArr" group="people" style="min-height: 200px;" @change="log">
      </draggable>
    `
    this.html = html
  },
  watch: {
    temArr: {
      handler () {
        let html = '<draggable v-model="temArr" group="people" style="min-height: 200px;" @change="log">'

        this.temArr.forEach(v => {
          html += `<div class="content"><${v.tag}`
          v.attrs.map(val => {
            html += ` ${val.name}="${val.value}"`
          })
          html += `/><div class="mask" :class="{'current': current == '${v.uuid}'}" @click="doclick('${v.uuid}','${v.id}')"></div></div>`
        })
        html += '</draggable>'
        this.html = html
      },
      deep: true
    }
  }
})
