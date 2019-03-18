const state = {
  uuid: '',
  templateArr: []
}

const getters = {
  uuid: state => state.uuid,
  templateArr: state => state.templateArr
}

const mutations = {
  changeId (state, sta) {
    state.uuid = sta
  },
  changeTemplateArr (state, arr) {
    state.templateArr = arr
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
