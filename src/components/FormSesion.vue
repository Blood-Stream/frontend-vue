<template>
  <!-- <div> -->
  <div class="gekki">
    <form class="form" name="myform" @submit.prevent="sendData">
      <transition name="slide-fade">
        <input
          required
          type="email"
          placeholder="Email"
          v-model="userData.email"
          v-if="typeform == 'signup'"
        />
      </transition>
      <input
        required
        type="text"
        placeholder="Nickname"
        v-model="userData.nickname"
      />
      <input
        required
        type="password"
        placeholder="Password"
        v-model="userData.password"
      />
      <button class="btn--main-big">
        {{ typeOfForm }}
      </button>
      <p>{{errorLogin}}</p>
    </form>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    typeform: {
      type: String,
      default: "login",
    },
  },

  data() {
    return {
      userData: {
        email: "",
        nickname: "",
        password: "",
      },
    };
  },

  computed: {
    ...mapState('user', [
      "errorLogin"
    ]),
    typeOfForm() {
      return this.typeform.charAt(0).toUpperCase() + this.typeform.slice(1);
    },
  },

  methods: {
    sendData() {
      if (this.typeform === "login") {
        this.$store.dispatch("user/login", this.userData);
      } else if (this.typeform === "signup") {
        console.log(this.typeform);
        this.$store.dispatch("user/signup", this.userData);
      }
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
