import router from '../../Routers'
export default {
  namespaced: true,
  state: {
    nameuser: 'Andres',
    Nickname: 'circuandante',
    jwt: '',
    userData: {}
  },

  mutations: {
    // ----------- set data user
    dataUser(state, userdata) {
      state.userData = userdata
    },

    // -------------- set jwt
    setJwt(state, jwt) {
      state.jwt = jwt
    }
  },

  actions: {
    // ----------------------get user
    async getUser({
      commit
    }, user) {
      const url = `http://dry-mesa-48732.herokuapp.com/user/${user}`
      const myInit = {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      };

      try {
        await fetch(url, myInit)
          .then(response => response.json())
          .then(data => {
            if (data.status === 200) {
              commit('dataUser', data.body)
              router.push({ path: '/home' })
            }
          });
      } catch (error) {
        console.error(error);
      }
    },

    // -------------------login
    async login({
      commit,
      dispatch
    }, userdata) {
      const url = `http://dry-mesa-48732.herokuapp.com/user/login`

      const data = {
        nickname: userdata.nickname,
        password: userdata.password,
      };

      const myInit = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      };
      try {
        await fetch(url, myInit)
          .then((response) => response.json())
          .then(async (data) => {
            if (data.status === 200) {
              commit('setJwt', data.body)
              dispatch('getUser', userdata.nickname)
            }
          });
      } catch (error) {
        console.error(error);
      }
    },

    // ----------------------- signup
    async signup({
      commit
    }, userdata) {
      const url = `http://dry-mesa-48732.herokuapp.com/user/`
      const data = {
        nickname: userdata.nickname,
        country: "-",
        postal_Code: "-",
        birthday: "2020-05-05",
        status: true,
        platform: "-",
        email: userdata.email,
        phone: "-",
        rol: "-",
        level: 1,
        password: userdata.password
      }

      const myInit = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      };

      try {
        await fetch(url, myInit)
          .then(response => response.json())
          .then(data => {
            commit('dataUser', data.body)
          });
      } catch (error) {
        console.error(error);
      }
    },
  }
}
