export default {
  namespaced: true,
  state: {
    listGame: {},
    modal: false,
    game: {
      id: 'jkhasgjkhsjhj',
      name: 'AndresGame'
    },
  },
  mutations: {
    setDataGame(state, dataGame) {
      console.log(dataGame);
      state.game = dataGame
    },
    setModal(state) {
      state.modal = !state.modal
    }
  },
  actions: {
    getDataGame({ commit }, id) {
      console.log(id)
      const res = {
        id: 1222,
        name: 'AndresotroGame'
      }
      commit('setDataGame', res)
      commit('setModal')
    }
  }
}
