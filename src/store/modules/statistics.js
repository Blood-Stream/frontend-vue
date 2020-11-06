
const r = Boolean(sessionStorage.getItem('UserSesion'))

export default {
  namespaced: true,
  state: {
    wrapMenu: false,
    ps: '123lkajsldkfj',
    sesionOn: r,
    sesionOff: !r,
  },
  mutations: {
    setWrapMenu (state) {
      state.wrapMenu = !state.wrapMenu
    },
    hideWrapMenu (state) {
      state.wrapMenu = false
    }
  }
}
