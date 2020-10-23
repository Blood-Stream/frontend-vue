<template>
  <div id="ModalGames" @keyup.esc="setModal" tabindex="0">
    <div class="container">
      <!-------------- close  -->
      <div class="close" @click="setModal" >
        <!-- <font-awesome-icon :icon="close" color="var(--red)"/> -->
        <font-awesome-icon :icon="close" color="white"/>
      </div>

      <!-------------- content -->
      <div class="imageGame">

        <!------------- image -->
        <figure>
          <img :src="gameData.image" alt="" />
        </figure>

        <!------------- buttons -->
        <div>
          <a :href="gameData.url" class="btn--main-medium btngoGame">
            <font-awesome-icon :icon="game" />
            <p>Ir al juego</p>
          </a>
        </div>
        <div class="btn--second-medium btnsave">
          <font-awesome-icon :icon="heart" />
          <p>Guardar</p>
        </div>
      </div>

      <!------------- data info -->
      <div class="info">
        <h1>
          {{ gameData.name }}
        </h1>

        <p class="released">released {{ gameData.released }}</p>
        <div class="rate">
          <font-awesome-icon :icon="star" color="var(--yellow)" />
          <font-awesome-icon :icon="star" color="var(--yellow)" />
          <font-awesome-icon :icon="star" color="var(--yellow)" />
        </div>

        <div class="age">
          <p>
            {{ gameData.age }}
          </p>
        </div>
        <p class="description">
          {{ gameData.description }}
        </p>
        <h3>Language</h3>
        <div class="language">
          <p v-for="language in gameData.languages" :key="language">
            {{ language }}
          </p>
        </div>
        <h3>Genre</h3>
        <p>
          {{ gameData.primaryGenre }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { faStar, faHeart, faGamepad, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      star: faStar,
      heart: faHeart,
      game: faGamepad,
      close: faTimesCircle,
    };
  },
  computed: {
    ...mapState("game", ["gameData"]),
  },
  methods: {
    ...mapMutations("game", ["setModal"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ModalGames.scss";
</style>
