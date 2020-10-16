<template>
  <div class="div">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("load", ["loadShow"]),
  },
};
</script>

<style lang="scss">
@import "./styles/styles.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
