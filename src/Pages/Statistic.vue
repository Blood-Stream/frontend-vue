<template>
  <div id="statistic">
    <NavBar />
    <iframe width="100%" height="1080" src="https://datastudio.google.com/embed/reporting/9d650a14-8f91-4f93-bcf4-745eb10890d2/page/copiB" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</template>

<script>
import NavBar from '@/Components/NavBarDash.vue'
export default {

  components: {
    NavBar,
  },

  computed: {
    widthScree() {
      return window.outerWidth
    }
  },
}
</script>

<style scoped>

  #statistic {
    max-width: 1366px;
    margin: auto;
  }

</style>
