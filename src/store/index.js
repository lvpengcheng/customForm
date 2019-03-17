import Vue from 'vue'
import Vuex from 'vuex'
import LibBar from './modules/LibBar'
import AttrBar from './modules/AttrBar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {LibBar, AttrBar}
})
