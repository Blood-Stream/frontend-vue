export default {
  namespaced: true,
  state: {
    nameuser: 'andres'
  },
  mutatios: {
    increment(state) {
      state.count++
    },
    dataUser(state) {
      console.log(state);
    }
  },
  actions: {
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
            commit('dataUser', data.body.Nickname)
            history.push('/home')
          });
      } catch (error) {
        console.error(error);
      }
    },

    async login({
      commit,
      typeform
    }, userdata) {
      let url = `http://dry-mesa-48732.herokuapp.com/user/`
      let data = {}
      const Method = 'POST'
      let myInit = {}

      switch (typeform) {
        case 'login':

          data = {
            nickname: userdata.nickname,
            password: userdata.password,
          };

          url += "login";

          myInit = {
            method: `${Method}`,
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
          };

          try {
            await fetch(url, myInit)
              .then((response) => response.json())
              .then((data) => {
                commit('activateAuth', data.body)
                // commit('getNick', userdata.nickname)
                this.getNick(userdata.nickname)
              });
          } catch (error) {
            console.error(error);
          }

          break;

        case 'signup':
          data = {
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

          myInit = {
            method: `${Method}`,
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

                history.push('/sesion/login')
              });
          } catch (error) {
            console.error(error);
          }

          break;

        default:
          return false
      }
    }
  }
}
