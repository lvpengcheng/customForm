import Vue from 'vue'
import {mapState} from 'vuex'

export default Vue.component('CustomTemplate', { /* eslint-disable-line */
  data () {
    return {
      html: ''
    }
  },
  render (h) {
    return h(Vue.extend({
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
  computed: {
    ...mapState({
      temArr: state => state.EditPanel.templateArr
    })
  },
  watch: {
    temArr: {
      handler (val) {
        let html = ''
        val.map(v => {
          html += `<div class="content"><${v.tag}`
          v.attrs.map(val => {
            html += ` ${val.name}="${val.value}"`
          })
          html += `/><div class="mask" draggable="true" :class="{'current': current == '${v.uuid}'}" @click="doclick('${v.uuid}','${v.id}')" @dragstart="dodragstart"></div></div>`
        })

        this.html = html
      },
      deep: true
    }
  }
})
