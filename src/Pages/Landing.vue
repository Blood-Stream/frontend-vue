<template>
  <main id="Landign">
    <Nav-bar />

    <!--  -->
    <div class="about">
      <div class="text">
        <h1>
          Descubre los Juegos <br />quecorren por tus<br />
          <span>venas</span>
        </h1>

        <!--  -->
        <router-link to="/sesion/signup">
          <button class="btn--main-big">Signup</button>
        </router-link>

        <!--  -->
        <div class="social">
          <font-awesome-icon :icon="twitter" />
          <font-awesome-icon :icon="fb" />
          <font-awesome-icon :icon="twitch" />
        </div>
      </div>

      <div class="circle"></div>

      <!--  -->
      <figure id="landing-img">
        <img src="@/Assets/images/Nova.png" alt="" />
      </figure>
    </div>
  </main>
</template>

<script>
import {
  faFacebook,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

export default {
  data() {
    return {
      fb: faFacebook,
      twitter: faTwitter,
      twitch: faTwitch,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../Styles/pages/Landing.scss";
</style>
