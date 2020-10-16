<template>
  <div id="EditProfile">
    <NavBarDash />
    <!-- edit profile -->
    <div class="profile">
      <img src="@/Assets/images/profile-real.jpg" alt="" />
      <div class="data">
        <div class="nickname">
          <h2>
            {{ userData.nickname }}
          </h2>
          <p>
            {{ flag }}
          </p>
        </div>
          <input
            type="date"
            :value="userData.birthday"
            autocomplete="on"
          >
          <input
            type="mail"
            :value="userData.email"
            autocomplete="on"
          >
          <input
            type="phone"
            :value="userData.phone"
            autocomplete="on"
          >
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
      // flag: ''
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
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/pages/EditProfile.scss";
</style>
