export default {
  namespaced: true,
  state: {
    id: 0,
    user: sessionStorage.getItem('User'),
    listGame: {},
    modal: false,
    clssBtn: true,
    loadSave: false,
    pageGame: 1,
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
    games: [
      {
        id: 0,
        Icon_Url: 'https://gaminglaptopunder.com/wp-content/uploads/2019/12/dc486960-701e-421b-b145-70d04f3b85be.jpg'
      }
    ],
    gameHero: [],
    savedGames: []
  },

  mutations: {
    // ---------------------------------------- set data games
    setDataGame(state, dataGame) {
      state.game = dataGame
    },

    // ---------------------------------------- modal
    setModal(state) {
      state.modal = !state.modal
    },

    // ---------------------------------------- set games
    setGames(state, games) {
      state.games = games
    },

    // ---------------------------------------- set id games for modal
    setIdGame(state, id) {
      state.id = id
    },

    // ---------------------------------------- class button save modal game
    btnState (state) {
      state.clssBtn = !state.clssBtn
    },

    // ---------------------------------------- set load btn
    setLoadSave(state) {
      state.loadSave = !state.loadSave
    },

    // ---------------------------------------- set games for hero
    setHeroGame(state, game) {
      state.gameHero.push(game)
    },

    // ---------------------------------------- saved games
    setSaveGames(state, games) {
      state.savedGames = games
    },

    // ---------------------------------------- change array with saved games
    setArrayWithSaveGames(state) {
      state.games = state.savedGames
    }
  },

  actions: {
    // ----------------------------------------- get game id
    getDataGame({ commit }, id) {
      const res = {
        id: 1222,
        name: 'AndresotroGame'
      }
      commit('setIdGame', id)
      commit('setDataGame', res)
      commit('setModal')
    },

    // ----------------------------------------- save games
    async saveGame({ commit }, game) {
      commit('setLoadSave')
      const url = `${process.env.VUE_APP_URL_SERVICE_DATA}/game-collection/`
      const token = sessionStorage.getItem('UserSesion')
      const user = sessionStorage.getItem('User')
      const headers = new Headers()
      headers.set('Authorization', 'Bearer ' + token)
      headers.set('Content-Type', 'application/json')

      console.log(game);
      const data = {
        Game: game.Name,
        Nickname: user,
        Text: ""
      }
      const myInit = {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
        mode: "cors",
      };

      await fetch(url, myInit)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          commit('setLoadSave')
          commit('btnState')
        })
        .catch(error => console.log(error.message))
    },

    // ----------------------------------------- get save games
    async getSaveGame({ commit, state }) {
      const user = sessionStorage.getItem('User')
      const url = `${process.env.VUE_APP_URL_SERVICE_DATA}/game-collection/collections/${user}&0`
      const token = sessionStorage.getItem('UserSesion')
      const headers = new Headers()
      headers.set('Authorization', 'Bearer ' + token)
      headers.set('Content-Type', 'application/json')

      const myInit = {
        method: 'GET',
        headers,
        mode: "cors",
      };

      await fetch(url, myInit)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          } else {
            throw new Error(response.statusText)
          }
        })
        .then(data => {
          commit('setGames', data.body)
        })
        .catch(error => {
          state.errorCustomGames = error
          console.log(error, '<--- catch')
        })
    },

    // ----------------------------------------- Ranking games
    async rankingGame({ commit, getters }, rank) {
      const url = `${process.env.VUE_APP_URL_SERVICE_DATA}/game-rating/`
      const token = sessionStorage.getItem('UserSesion')
      const user = sessionStorage.getItem('User')
      const headers = new Headers()
      headers.set('Authorization', 'Bearer ' + token)
      headers.set('Content-Type', 'application/json')

      const data = {
        Game: getters.gameInfo.Name,
        Nickname: user,
        Review: "",
        Like_Post: "FALSE",
        Rating: rank
      }

      const myInit = {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
        mode: "cors",
      };

      await fetch(url, myInit)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error.message))
    },

    // ----------------------------------------- custom games
    async customizeGames({ commit, state }) {
      const groupGame = state.savedGames[0].Name

      const url = `${process.env.VUE_APP_URL_SERVICE_DATA}/game/group/${groupGame}&1`
      const token = sessionStorage.getItem('UserSesion')
      const headers = new Headers()
      headers.set('Authorization', 'Bearer ' + token)
      headers.set('Content-Type', 'application/json')

      const myInit = {
        method: 'GET',
        headers,
        mode: "cors",
      };

      await fetch(url, myInit)
        .then(response => response.json())
        .then(data => {
          commit('setGames', data.body)
        })
        .catch(error => console.log(error.message))
    },

    // ----------------------------------------- get games hero
    async getGameHero({ commit, state }) {
      // get user games
      const user = sessionStorage.getItem('User')
      const url = `${process.env.VUE_APP_URL_SERVICE_DATA}/game-collection/collections/${user}&0`
      const token = sessionStorage.getItem('UserSesion')
      const headers = new Headers()
      headers.set('Authorization', 'Bearer ' + token)
      headers.set('Content-Type', 'application/json')

      const myInit = {
        method: 'GET',
        headers,
        mode: "cors",
      };

      await fetch(url, myInit)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          } else {
            throw new Error(response.statusText)
          }
        })
        .then(async savedGames => {
          commit('setSaveGames', savedGames.body)

          const groupGame = savedGames.body[0].Name
          const urlHero = `${process.env.VUE_APP_URL_SERVICE_DATA}/game/group/${groupGame}&1`

          const myInitHero = {
            method: 'GET',
            headers,
            mode: "cors",
          };

          await fetch(urlHero, myInitHero)
            .then(response => response.json())
            .then(dataHero => {
              for (let index = 0; index < 3; index++) {
                commit('setHeroGame', dataHero.body[index])
              }
            })
            .catch(error => console.log(error.message))
        })
        .catch(error => {
          state.errorCustomGames = error
          console.log(error, '<--- catch')
        })
    },

    // ----------------------------------------- get popular games
    async getGames({ commit, state }) {
      const url = `${process.env.VUE_APP_URL_SERVICE_DATA}/game-rating/get/${state.pageGame}`
      const token = sessionStorage.getItem('UserSesion')
      const headers = new Headers()
      headers.set('Authorization', 'Bearer ' + token)
      headers.set('Content-Type', 'application/json')
      const myInit = {
        method: 'GET',
        headers,
        mode: "cors",
      };

      try {
        await fetch(url, myInit)
          .then(responser => responser.json())
          .then(data => {
            console.log(data.body);
            commit('setGames', data.body)
          })
      } catch (error) {
        console.error(error);
      }
    }

  },

  getters: {
    gameInfo: state => {
      return state.games.find(game => game.id === state.id)
    }
  }
}
