<template>
  <!-- <div> -->
  <div class="gekki">
    <form className="form" @submit.prevent="register">
      <h1>{{ nameuser }} f</h1>
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
export default {
  props: {
    typeform: {
      type: String,
      default: "login"
    },
    namee: {
      type: Function
    }
  },
  data() {
    return {
      userData: {
        email: "",
        nickname: "",
        password: ""
      }
    };
  },
  computed: {
    typeOfForm() {
      return this.typeform.charAt(0).toUpperCase() + this.typeform.slice(1);
    }
  },
  methods: {
    register() {
      console.log(this.userData);
      this.$emit("data-user", this.userData);

      this.$setData.$emit("set-data", this.userData);
    }
  }
};
</script>
