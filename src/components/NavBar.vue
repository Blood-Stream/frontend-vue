<template>
  <div>
    <div id="navbar" class="navBar">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/components/NavBar.scss";
</style>
