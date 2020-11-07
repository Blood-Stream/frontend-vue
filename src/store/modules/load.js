export default {
  namespaced: true,
  state: {
    loadShow: false
  },
  mutations: {
    setTrueLoad(state) {
      state.loadShow = true
    },
    setFalseLoad(state) {
      state.loadShow = false
    }
  }
}
