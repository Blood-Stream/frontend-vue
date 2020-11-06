<template>
  <div id="EditProfile">
    <NavBarDash />
    <Menu-wrap />

    <!-- edit profile -->
    <div class="profile">

      <!--------------------------- profile image -->
      <img src="@/Assets/images/profile-real.jpg" alt="" />

      <!--------------------------- data user -->
      <div class="data">

        <!----------- Nickname -->
        <div class="nickname">
          <h2>
            {{ nickname }}
          </h2>
          <p>
            {{ flag }}
          </p>
        </div>

        <!------------ form -->
        <form @submit.prevent="editProfile" class="form">
          <input
            type="date"
            v-model="birthday"
            autocomplete="on"
          >
          <input
            type="mail"
            v-model="email"
            autocomplete="on"
          >
          <input
            type="phone"
            v-model="phone"
            autocomplete="on"
          >
          <button class="btn--main-big" type="submit" >
            Guardar
          </button>
        </form>
      </div>
    </div>
      <!-- load -->
    <Load v-show="loadShow"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBarDash from "@/Components/NavBarDash.vue";
import Load from '../Components/Load'

export default {
  beforeCreate () {
    this.$store.dispatch('user/getUser')
  },

  computed: {
    ...mapState("user", [
      'userData'
    ]),
    ...mapState("load", [
      'loadShow'
    ]),
    nickname: {
      get() {
        return this.$store.state.user.userData.Nickname
      },
      set(value) {
        this.$store.commit('user/setNewNick', value)
      },
    },
    birthday: {
      get() {
        const date = this.$store.state.user.userData.Birthday
        const formatDate = Date.parse(date)
        const DATE = new Date(formatDate)
        const year = DATE.getFullYear()
        const month = DATE.getDay()
        const day = DATE.getDate()
        return year + '-' + month + '-' + day
      },
      set(value) {
        this.$store.commit('user/setNewBirthday', value)
      },
    },
    email: {
      get() {
        return this.$store.state.user.userData.contactId.email
      },
      set(value) {
        this.$store.commit('user/setNewEmail', value)
      },
    },
    phone: {
      get() {
        return this.$store.state.user.userData.contactId.phone
      },
      set(value) {
        this.$store.commit('user/setNewPhone', value)
      },
    },
    flag() {
      return this.userData.Country
    }

  },

  components: {
    NavBarDash,
    Load
  },

  methods: {

    editProfile () {
      this.$store.dispatch('user/editProfile')
    }

  },
};
</script>

<style lang="scss" scoped>
@import "../styles/pages/EditProfile.scss";
</style>
