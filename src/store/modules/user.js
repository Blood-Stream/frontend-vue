import router from '../../Routers'

export default {
  namespaced: true,
  state: {
    jwt: '',
    errorLogin: '',
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
    // --------------------------------------- set data user
    dataUser(state, userdata) {
      state.userData = userdata
    },

    // --------------------------------------- set jwt
    setJwt(state, jwt) {
      state.jwt = jwt
    },

    // --------------------------------------- set new name
    setNewNick(state, name) {
      state.userData.Nickname = name
    },

    // --------------------------------------- set new name
    setNewBirthday(state, birthday) {
      state.userData.Birthday = birthday
    },

    // --------------------------------------- set new name
    setNewPhone(state, phone) {
      state.userData.contactId.phone = phone
    },

    // --------------------------------------- set new name
    setNewEmail(state, email) {
      state.userData.contactId.email = email
    },

    // --------------------------------------- set error login
    setErrorLogin(state, error) {
      state.errorLogin = error
    }
  },

  actions: {
    // --------------------------------------- get user
    async getUser({
      commit,
      rootState
    }) {
      const user = sessionStorage.getItem('User')
      const url = `${process.env.VUE_APP_URL_SERVICE_DATA}/user/get/${user}`
      const token = sessionStorage.getItem('UserSesion')
      const headers = new Headers()
      headers.set('Authorization', 'Bearer ' + token)
      headers.set('Content-Type', 'application/json')
      const myInit = {
        method: `GET`,
        headers,
        mode: "cors",
      };

      fetch(url, myInit)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          } else {
            rootState.load.loadShow = false
            throw new Error(response.statusText)
          }
        })
        .then(data => {
          rootState.load.loadShow = false
          commit('dataUser', data.body)
        })
        .catch(error => {
          alert(error)
        })
    },

    // --------------------------------------- login
    async login({
      commit,
      rootState,
    }, userdata) {
      const url = `${process.env.VUE_APP_URL_SERVICE}/auth/sign-in`
      rootState.load.loadShow = true

      const headers = new Headers()
      headers.set('Authorization', 'Basic ' + btoa(`${userdata.nickname}:${userdata.password}`))
      headers.set('Content-Type', 'application/json')

      const myInit = {
        method: 'POST',
        headers,
        mode: "cors",
      };

      await fetch(url, myInit)
        .then((response) => {
          console.log(response)
          rootState.load.loadShow = false
          if (response.status === 200) {
            return response.json()
          } else {
            rootState.load.loadShow = false
            throw new Error('Error en contraseña o clave')
          }
        })
        .then(async (data) => {
          sessionStorage.setItem('UserSesion', data.token)
          sessionStorage.setItem('User', data.Nickname)
          commit('setJwt', data.token)
          rootState.load.loadShow = false
          rootState.statistics.sesionOn = false
          rootState.statistics.sesionOff = true
          setTimeout(router.push({ path: '/' }), 1000)
        })
        .catch(error => {
          commit('setErrorLogin', error)
        })
    },

    // --------------------------------------- signup
    async signup({
      commit,
      rootState
    }, userdata) {
      rootState.load.loadShow = true
      const url = `${process.env.VUE_APP_URL_SERVICE}/auth/sign-up`
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
            rootState.load.loadShow = false
          });
      } catch (error) {
        alert(error)
        console.error(error);
        rootState.load.loadShow = false
      }
    },

    // --------------------------------------- edit profile
    async editProfile ({ state, commit, rootState }) {
      rootState.load.loadShow = true

      const newDataUser = {
        uuid: state.userData.uuid,
        nickname: state.userData.Nickname,
        country: state.userData.Country,
        postal_Code: state.userData.Postal_Code,
        birthday: state.userData.Birthday,
        status: true,
        platform: state.userData.platformId.Platform,
        email: state.userData.contactId.email,
        phone: state.userData.contactId.phone,
        rol: state.userData.accessRolId.Rol,
        level: state.userData.Level
      }
      console.log(newDataUser);

      const token = sessionStorage.getItem('UserSesion')
      const headers = new Headers()
      headers.set('Authorization', 'Bearer ' + token)
      headers.set('Content-Type', 'application/json')

      const myInit = {
        method: 'POST',
        body: JSON.stringify(newDataUser),
        headers,
        mode: "cors",
      };
      await fetch(`${process.env.VUE_APP_URL_SERVICE_DATA}/user/`, myInit)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          } else {
            rootState.load.loadShow = false
            throw new Error(response.statusText)
          }
        })
        .then(newUserData => {
          rootState.load.loadShow = false
          commit('dataUser', newUserData.body)
        })
        .catch(errorNewData => {
          console.log(errorNewData);
        })
    }
  }
}
