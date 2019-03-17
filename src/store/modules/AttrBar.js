const state = {
  status: '' // [ 'expand', 'close' ]
}

const getters = {
  status: state => state.status
}

const mutations = {
  changeStatus (state, sta) {
    state.status = sta
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
