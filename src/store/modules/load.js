export default {
  namespaced: true,
  state: {
    loadShow: false
  },
  mutations: {
    setLoad(state) {
      state.loadShow = !state.loadShow
    }
  }
}
