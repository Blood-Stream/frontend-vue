<template>
  <div class="lottie-wrap">
    <div class="lottie" id="$lottie"></div>
  </div>
</template>

<script>
// import bodymovin from 'bodymovin'

export default {

}
</script>

<style lang="scss" scoped>
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
