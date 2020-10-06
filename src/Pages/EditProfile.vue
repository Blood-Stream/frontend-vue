<template>
  <div id="EditProfile">
    <NavBarDash />
    <!-- edit profile -->
    <div class="profile">
      <img src="@/Assets/images/profile-real.jpg" alt="" />
      {{ nameuser }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBarDash from "@/Components/NavBarDash.vue";

export default {
  computed: {
    ...mapState("userData", ["nameuser"]),
  },

  components: {
    NavBarDash,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/pages/EditProfile.scss";
</style>
