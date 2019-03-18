const state = {
  id: ''
}

const getters = {
  status: state => state.id
}

const mutations = {
  changeId (state, sta) {
    state.id = sta
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
