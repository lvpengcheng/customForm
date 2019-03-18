import Vue from 'vue'

export default Vue.component('CustomTemplate',{ /* eslint-disable-line */
  props: { html: String },
  render (h) {
    return h(Vue.extend({
      template: `<div class="root-custom-template">${this.html}</div>`,
      data () {
        return {
          current: ''
        }
      },
      methods: {
        doclick (id, uuid) {
          this.current = id
          this.$store.commit('EditPanel/changeId', uuid)
        }
      }
    }))
  }
})
