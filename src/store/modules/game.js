export default {
  namespaced: true,
  state: {
    listGame: {},
    modal: false,
    gameData: {
      id: 'jkhasgjkhsjhj',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8f/MiddleEarthShadowOfWar.jpg',
      url: 'http://www.google.com',
      name: 'Shadowgun war games',
      released: '20-05-2020',
      userRaiting: 4.5,
      age: '+18',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id laborum dolores repellat porro laudantium ipsum distinctio voluptas, dolorum quod neque.',
      languages: ['spanish', 'english', 'chinese'],
      primaryGenre: 'Arcade'
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
