<template>
  <div id="navbar" v-bind:class="{ NavBar: login }">

    <div class="wrapMenu btn" @click.prevent="setWrapMenu">
      <font-awesome-icon :icon="menu" color="var(--white)" />
    </div>

    <router-link to="/">
      <h2 class="logo">Blood-Stream</h2>
    </router-link>

    <router-link to="/user" class="profile-border">
      <div class="profile">
        <img src="@/Assets/images/profile-real.jpg" alt="" />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default {
  props: {
    login: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menu: faBars,
    };
  },
  methods: {
    ...mapMutations('statistics', ['setWrapMenu'])
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/NavBar.scss";
#navbar {
  position: relative;
}
</style>
