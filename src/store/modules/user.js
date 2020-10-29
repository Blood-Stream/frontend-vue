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
      const url = `${process.env.VUE_APP_URL_SERVICE}user/${user}`
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
              router.push({ path: '/' })
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
      const url = `${process.env.VUE_APP_URL_SERVICE}auth/sign-in`

      const headers = new Headers()
      headers.set('Authorization', 'Basic ' + btoa(`${userdata.nickname}:${userdata.password}`))
      headers.set('Content-Type', 'application/json')

      const myInit = {
        method: 'POST',
        headers,
        mode: "cors",
      };

      try {
        await fetch(url, myInit)
          .then((response) => response.json())
          .then(async (data) => {
            console.log(data);
            // if (data.status === 200) {
            //   sessionStorage.setItem('UserSesion', 'ok')
            //   commit('setJwt', data.body)
            //   dispatch('getUser', userdata.nickname)
            // }
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
      const url = `${process.env.VUE_APP_URL_SERVICE}auth/sign-up`
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
            // commit('dataUser', data.body)
            // router.push({ path: '/sesion/login' })
          });
      } catch (error) {
        alert(error)
        console.error(error);
        rootState.load.loadShow = false
      }
    },

    // ---------------------- edit profile
    async editProfile ({ state }) {
      const datasss = {
        uuid: "JyeSlNQ27QM0Ci-j2Uak2",
        nickname: "CarGDdddddev",
        country: "Mexico-Colombia",
        postal_Code: "20208",
        birthday: "1989-09-15",
        status: true,
        platform: "pc",
        email: "ingecarlos.gutierrez@gmail.com",
        phone: "12347890",
        rol: "Master",
        level: 1,
        password: "asdf"
      }

      const myInit = {
        method: 'POST',
        body: JSON.stringify(datasss),
        // body: JSON.stringify(state.userData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      };

      try {
        fetch(`${process.env.VUE_APP_URL_SERVICE}user/`, myInit)
          .then(response => response.json())
          .then(newUserData => console.log(newUserData))
      } catch (error) {
        console.error(error);
      }
    }
  }
}
