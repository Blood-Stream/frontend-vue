<template>
  <div class="Sesion" id="Sesion">
    <Nav-bar sesion />
    <div class="sesionWrap">
      <div class="contentSesion">
        <h2 class="sesion__title">
          {{ typeOfForm }}
        </h2>

        <div class="signupRrss">
          <button class="btn--second-small">
            <font-awesome-icon :icon="fb" />
            <span>Facebook</span>
          </button>
          <button class="btn--second-small">
            <font-awesome-icon :icon="twitter" />
            <span>Twitter</span>
          </button>
          <button class="btn--second-small">
            <font-awesome-icon :icon="git" />
            <span>GitHub</span>
          </button>
          <button class="btn--second-small">
            <font-awesome-icon :icon="google" />
            <span>Gmail</span>
          </button>
        </div>
        <form-sesion
          activateAuth="{activateAuth}"
          dataUser="{dataUser}"
          :typeform="typeform"
        />
      </div>

      <div class="circleBackground"></div>

      <figure class="imageSesion">
        <img src="@/Assets/images/NovaPrime.png" alt="" />
      </figure>
    </div>
  </div>
</template>

<script>
import FormSesion from "@/Components/FormSesion.vue";

import {
  faFacebook,
  faTwitter,
  faGithub,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

export default {
  props: {
    typeform: {
      type: String,
      default: "d"
    }
  },
  data() {
    return {
      fb: faFacebook,
      twitter: faTwitter,
      git: faGithub,
      google: faGoogle
    };
  },
  components: {
    FormSesion
  },
  computed: {
    typeOfForm() {
      return this.typeform.charAt(0).toUpperCase() + this.typeform.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Styles/pages/Sesion.scss";
</style>
