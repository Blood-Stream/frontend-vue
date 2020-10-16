<template>
  <!-- <div> -->
  <div class="gekki">
    <form class="form" name="myform" @submit.prevent="sendData">
      <input
        required
        type="email"
        placeholder="Email"
        v-model="userData.email"
        v-if="typeform == 'signup'"
      />
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
    </form>
  </div>
</template>

<script>
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
        nickname: "andres",
        password: "123lkajsldkfj",
      },
    };
  },
  computed: {
    typeOfForm() {
      return this.typeform.charAt(0).toUpperCase() + this.typeform.slice(1);
    },
  },
  methods: {
    sendData() {
      if (this.typeform === "login") {
        this.$store.commit('load/setLoad')
        this.$store.dispatch("user/login", this.userData);
      } else {
        this.$store.dispatch("user/signup", this.userData);
      }
    },
  },
};
</script>
