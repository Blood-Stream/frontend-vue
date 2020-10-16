<template>
  <div id="Load">
   <lottie-animation
    path="https://assets6.lottiefiles.com/packages/lf20_zrswwpdn.json" />
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  components: {
    LottieAnimation
  },
};
</script>

<style lang="scss" scoped>
#Load {
  background-color: var(--black);
}
</style>
