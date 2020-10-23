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
            {{ userData.Nickname }}
          </h2>
          <p>
            {{ flag }}
          </p>
        </div>

        <!------------ form -->
        <form @submit.prevent="editProfile" class="form">
          <input
            type="date"
            v-model="newData.Birthday"
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
        email: this.$store.state.user.userData.contactId.email,
        phone: this.$store.state.user.userData.contactId.phone,
        birthday: this.$store.state.user.userData.Birthday,
      },
    }
  },

  computed: {
    ...mapState("user", [
      'userData'
    ]),
    flag() {
      return this.userData.Country
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
