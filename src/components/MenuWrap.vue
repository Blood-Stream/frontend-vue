<template>
  <!------------------ menu burguer -->
  <div class="menuWrap" v-show="wrapMenu">
    <ul>
      <li v-show="sesionOff">
        <router-link  to="/sesion/signup">
          Sign up
        </router-link>
      </li>
      <li v-show="sesionOff">
        <router-link to="/sesion/login">
          Login
        </router-link>
      </li>
      <li v-show="sesionOn">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-show="sesionOn">
        <router-link to="/sesion/login">
          Logout
        </router-link>
      </li>
      <li v-show="sesionOn">
        <router-link to="/statistic">
          Statistics
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState("statistics", ["wrapMenu", "sesionOff", "sesionOn"]),
  },

  unmounted () {
    this.$store.commit('statistics/hideWrapMenu')
  },
}
</script>

<style lang="scss" scoped>
  @import '../Styles/utils/_mixins.scss';

  .menuWrap {
    position: absolute;
    top: 65px;
    left: 16px;
    @include center;
    width: 200px;
    height: 300px;
    background-color: var(--red);
    border-radius: 15px;
    box-sizing: border-box;

    ul {
      padding: 0;

      a:hover {
        text-decoration: underline;
      }
    }
  }
</style>
