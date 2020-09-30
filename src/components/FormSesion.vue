<template>
  <!-- <div> -->
  <form className="form" action="register">
    <input
      required
      type="email"
      placeholder="Email"
      v-model="email"
      v-show="typeform == 'signup'"
    />
    <input required type="text" placeholder="Nickname" v-model="nickname" />
    <input required type="password" placeholder="Password" v-model="password" />
    <button className="btn--main-big">
      {{ typeOfForm }}
    </button>
  </form>
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
      email: "",
      nickname: "",
      password: "",
    };
  },
  computed: {
    typeOfForm() {
      return this.typeform.charAt(0).toUpperCase() + this.typeform.slice(1);
    },
  },
};
</script>
