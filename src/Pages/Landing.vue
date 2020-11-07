<template>
  <main id="Landign">
    <Nav-bar />

    <!-- landing -->
    <div class="about">

      <!-- circle -->
      <div class="circle"></div>

      <!-- abstract -->
      <div class="text">
        <h1>
          Discover the games <br>running through your <br />
          <span>Veins</span>
        </h1>

        <!-- button singup -->
        <router-link to="/sesion/signup">
          <button class="btn--main-big">Discover games</button>
        </router-link>

        <!-- social media -->
        <div class="social">
          <font-awesome-icon :icon="twitter" />
          <font-awesome-icon :icon="fb" />
          <font-awesome-icon :icon="twitch" />
        </div>
      </div>

      <!-- img -->
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
