export default {
  namespaced: true,
  state: {
    wrapMenu: false,
    ps: '123lkajsldkfj'
  },
  mutations: {
    setWrapMenu (state) {
      state.wrapMenu = !state.wrapMenu
    }
  }
}
