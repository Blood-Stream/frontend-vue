<template>
  <div class="Sesion" id="Sesion">
    <Nav-bar sesion />

    <!-- Sesion -->
    <div class="sesionWrap">

      <div class="contentSesion">
        <!-- title -->
        <h2 class="sesion__title">
          {{ typeOfForm }}
        </h2>

        <!-- circle -->
        <div class="circleBackground"></div>

        <!-- redes sociales -->
        <div class="signupRrss">
          <button class="btn--second-small">
            <a href="https://ssr-server.herokuapp.com/auth/facebook">
              <font-awesome-icon :icon="fb" />
              <span>Facebook</span>
            </a>
          </button>
          <button class="btn--second-small">
            <a href="https://ssr-server.herokuapp.com/auth/twitter">
              <font-awesome-icon :icon="twitter" />
              <span>Twitter</span>
            </a>
          </button>
          <button class="btn--second-small">
            <a href="https://ssr-server.herokuapp.com/auth/github">
              <font-awesome-icon :icon="git" />
              <span>GitHub</span>
            </a>
          </button>
          <button class="btn--second-small">
            <a href="http://ssr-server.herokuapp.com/auth/google-oauth" target="_parent">
              <font-awesome-icon :icon="google" />
              <span>Gmail</span>
            </a>
          </button>
        </div>

        <!-- form  -->
        <form-sesion :typeform="typeform" />
      </div>

      <figure class="imageSesion">
        <img src="@/Assets/images/NovaPrime.png" alt="" />
      </figure>
    </div>

    <!-- load -->
    <Load v-show="loadShow"/>
  </div>
</template>

<script>
import FormSesion from "@/Components/FormSesion.vue";
import Load from '@/Assets/animations/lotie.vue'
import { mapState } from 'vuex'

import {
  faFacebook,
  faTwitter,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default {
  props: {
    typeform: {
      type: String,
      default: "d",
    },
  },
  data() {
    return {
      fb: faFacebook,
      twitter: faTwitter,
      git: faGithub,
      google: faGoogle,
    };
  },
  components: {
    FormSesion,
    Load
  },
  computed: {
    ...mapState('load', [
      'loadShow'
    ]),
    typeOfForm() {
      return this.typeform.charAt(0).toUpperCase() + this.typeform.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../Styles/pages/Sesion.scss";
</style>
