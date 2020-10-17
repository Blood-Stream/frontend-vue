<template>
  <div id="EditProfile">
    <NavBarDash />
    <!-- edit profile -->
    <div class="profile">

      <!--------------------------- profile image -->
      <img src="@/Assets/images/profile-real.jpg" alt="" />

      <!--------------------------- data user -->
      <div class="data">

        <!----------- Nickname -->
        <div class="nickname">
          <h2>
            {{ userData.nickname }}
          </h2>
          <p>
            {{ flag }}
          </p>
        </div>

        <!------------ form -->
        <form @submit.prevent="editProfile" class="form">
          <input
            type="date"
            v-model="newData.birthday"
            autocomplete="on"
          >
          <input
            type="mail"
            v-model="newData.email"
            autocomplete="on"
          >
          <input
            type="phone"
            v-model="newData.phone"
            autocomplete="on"
          >
          <button class="btn--main-big" type="submit" >
            Guardar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBarDash from "@/Components/NavBarDash.vue";

export default {

  data() {
    return {
      newData: {
        email: this.$store.state.user.userData.email,
        phone: this.$store.state.user.userData.phone,
        birthday: this.$store.state.user.userData.birthday,
      },
    }
  },

  computed: {
    ...mapState("user", [
      'userData'
    ]),
    flag() {
      return this.userData.country
    }

  },

  components: {
    NavBarDash
  },

  methods: {
    editProfile () {
      this.$store.commit('user/setNewData', this.newData)
      this.$store.dispatch('user/editProfile')
    }

  },
};
</script>

<style lang="scss" scoped>
@import "../styles/pages/EditProfile.scss";
</style>
