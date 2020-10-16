<template>
  <div class="lottie-wrap">
    <div class="lottie" id="$lottie"></div>
  </div>
</template>

<script>
// import bodymovin from 'bodymovin'

export default {
  mounted () {
    // console.log(this.$refs.lottie);
    // var svgContainer = document.getElementById('lottie');
    // var animItem = bodymovin.loadAnimation({
    //   wrapper: svgContainer,
    //   animType: 'svg',
    //   loop: true,
    //   path: 'https://assets5.lottiefiles.com/packages/lf20_9zyharse.json'
    // });
    // console.log(animItem);

    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')
    document.head.appendChild(recaptchaScript);

    const lottieplayer = document.createElement('lottie-player')
    lottieplayer.setAttribute('src', 'https://assets1.lottiefiles.com/packages/lf20_9zyharse.json')
    lottieplayer.setAttribute('background', 'transparent')
    lottieplayer.setAttribute('speed', '0.95')
    lottieplayer.setAttribute('style', 'width: 300px; height: 300px; margin: auto;')
    lottieplayer.setAttribute('loop', '')
    lottieplayer.setAttribute('ref', 'AnimationLotie')
    // lottieplayer.setAttribute('controls', '')
    lottieplayer.setAttribute('autoplay', '')
    window.$lottie.appendChild(lottieplayer);
  },
}
</script>

<style lang="scss" scoped>
.lottie-wrap {
  position: fixed;
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
