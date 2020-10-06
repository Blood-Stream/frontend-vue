<template>
  <div id="ModalGames" @keyup.esc="setModal" tabindex="0">
    <div class="container">
      {{ game.id }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("game", ["game"]),
  },
  methods: {
    ...mapMutations("game", ["setModal"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ModalGames.scss";
</style>
