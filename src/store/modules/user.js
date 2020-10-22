import router from '../../Routers'
export default {
  namespaced: true,
  state: {
    jwt: '',
    userData: {
      uuid: "",
      Avatar: '',
      Nickname: "",
      Country: "",
      Postal_Code: "",
      Birthday: "",
      Status: true,
      Platform: "",
      rol: "",
      level: 1,
      contactId: {
        id: 1,
        uuid: "",
        email: "",
        phone: ""
      },
    }
  },

  mutations: {
    // --------------------- set data user
    dataUser(state, userdata) {
      state.userData = userdata
      console.log(
        userdata
      );
    },

    // --------------------- set jwt
    setJwt(state, jwt) {
      state.jwt = jwt
    },

    // --------------------- new data
    setNewData(state, payload) {
      state.userData.email = payload.email
      state.userData.phone = payload.phone
      state.userData.birthday = payload.birthday
    },
  },

  actions: {
    // ---------------------- get user
    async getUser({
      commit,
      rootState
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
              rootState.load.loadShow = false
              router.push({ path: '/home' })
            }
          });
      } catch (error) {
        alert(error)
        console.error(error);
        rootState.load.loadShow = false
      }
    },

    // ---------------------- login
    async login({
      commit,
      dispatch,
      rootState,
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
              sessionStorage.setItem('UserSesion', 'ok')
              commit('setJwt', data.body)
              dispatch('getUser', userdata.nickname)
            }
          });
      } catch (error) {
        alert(error)
        console.error(error);
        rootState.load.loadShow = false
      }
    },

    // ---------------------- signup
    async signup({
      commit,
      rootState
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
            console.log(data);
            commit('dataUser', data.body)
            router.push({ path: '/sesion/login' })
          });
      } catch (error) {
        alert(error)
        console.error(error);
        rootState.load.loadShow = false
      }
    },

    // ---------------------- edit profile
    async editProfile ({ state }) {
      const myInit = {
        method: 'POST',
        body: JSON.stringify(state.userData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      };

      try {
        fetch('http://dry-mesa-48732.herokuapp.com/user/', myInit)
          .then(response => response.json())
          .then(newUserData => console.log(newUserData))
      } catch (error) {
        console.error(error);
      }
      console.log(state.userData)
    }
  }
}
