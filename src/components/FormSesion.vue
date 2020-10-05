<template>
  <!-- <div> -->
  <div class="gekki">
    <form className="form" @submit.prevent="register">
      <input
        required
        type="email"
        placeholder="Email"
        v-model="userData.email"
        v-show="typeform == 'signup'"
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
      <button className="btn--main-big">
        {{ typeOfForm }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    typeform: {
      type: String,
      default: "login",
    },
    namee: {
      type: Function,
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
    ...mapState("userData", ["nameuser"]),
    typeOfForm() {
      return this.typeform.charAt(0).toUpperCase() + this.typeform.slice(1);
    },
  },
  methods: {
    ...mapActions("userData", ["login"]),
    register() {
      console.log(this.userData);
      this.$emit("data-user", this.userData);

      this.$setData.$emit("set-data", this.userData);
    },
  },
};
</script>
