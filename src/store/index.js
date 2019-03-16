import Vue from 'vue'
import Vuex from 'vuex'
import LibBar from './modules/LibBar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {LibBar}
})
