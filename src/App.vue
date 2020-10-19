<template>
  <div class="div">
    <transition name="fade">
      <router-view />
    </transition>
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

.fade-enter-active{

  transition-duration: 3500ms;
  transition-timing-function: cubic-bezier(.4,.48,.27,.94);

}

.fade-leave-active {
  transition: opacity 2500ms cubic-bezier(.4,.48,.27,.94);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
