<template>
  <div class="div">
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <Load v-if="loadShow"/> -->
    <div class="lottie-wrap" v-show="loadShow">
      <div class="lottie" id="$lottie"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted () {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')
    document.head.appendChild(recaptchaScript);

    const lottieplayer = document.createElement('lottie-player')
    lottieplayer.setAttribute('src', 'https://assets3.lottiefiles.com/packages/lf20_9zyharse.json')
    lottieplayer.setAttribute('background', 'transparent')
    lottieplayer.setAttribute('speed', '0.95')
    lottieplayer.setAttribute('style', 'width: 300px; height: 300px; margin: auto;')
    lottieplayer.setAttribute('loop', '')
    lottieplayer.setAttribute('ref', 'AnimationLotie')
    // lottieplayer.setAttribute('controls', '')
    lottieplayer.setAttribute('autoplay', '')
    window.$lottie.appendChild(lottieplayer);
  },
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

.lottie-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .lottie{
    background-color: var(--black-trans);
    border-radius: 50%;
  }
}

</style>
