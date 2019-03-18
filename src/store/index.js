import Vue from 'vue'
import Vuex from 'vuex'
import LibBar from './modules/LibBar'
import AttrBar from './modules/AttrBar'
import EditPanel from './modules/EditPanel'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {LibBar, AttrBar, EditPanel}
})
