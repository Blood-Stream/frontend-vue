<template>
  <div class="Home" id="Home">
    <NavBar login />

    <!-- welcome -->
    <div class="message">
      <div class="welcome container">
        <h1>Bienvenido</h1>
      </div>

      <div class="name container">
        <h1>{{ infoUser }}</h1>
      </div>

      <div class="to container">
        <h1>A Blood-Stream</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../Components/NavBar";
export default {
  props: {
    infoUser: {
      type: String,
      default: "Andres"
    }
  },
  components: {
    NavBar
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/pages/home.scss";
</style>
