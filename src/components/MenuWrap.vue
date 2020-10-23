<template>
  <!------------------ menu burguer -->
  <div class="menuWrap" v-show="wrapMenu">
    <ul>
      <router-link to="/statistic">
        Statistics
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState("statistics", ["wrapMenu"]),
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
