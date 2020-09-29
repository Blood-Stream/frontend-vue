<template>
  <div id="navbar" v-bind:class="{ NavBar: login }">
    <router-link to="/">
      <h2 class="logo">Blood-Stream</h2>
    </router-link>
    <ul>
      <li>
        <router-link to="/sesion/login"> Login </router-link>
      </li>
      <li>
        <router-link to="/sesion/signup"> Signup </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    login: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/components/NavBar.scss";
</style>
