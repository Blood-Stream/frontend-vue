<template>
  <div class="Home" id="Home">
    <NavBarDash />

    <Menu-wrap />

    <!------------------------------- grid dashboard  -->
    <div class="homeGrid">
      <!--------------------------- hero -->
      <div class="hero">

        <figure class="main">
          <img :src="Boolean(gameHero[0]) ? gameHero[0].Icon_Url : 'https://gaminglaptopunder.com/wp-content/uploads/2019/12/dc486960-701e-421b-b145-70d04f3b85be.jpg'" alt="" />
        </figure>

        <div class="shadow-left main">
          <div class="content">
            <h2>Descubre los Juegos que corren por tus venas</h2>
            <p>
              Mañana 23 de julio a las 18 horas (en España), tendrá lugar el
              Xbox Games Showcase, donde Microsoft pre...
            </p>
          </div>
        </div>

        <!-- second image -->
        <figure class="second">
          <img :src="Boolean(gameHero[1]) ? gameHero[1].Icon_Url : 'https://gaminglaptopunder.com/wp-content/uploads/2019/12/dc486960-701e-421b-b145-70d04f3b85be.jpg'" alt="" />
        </figure>
        <div class="shadow-bottom second">
          <p>New Release</p>
        </div>

        <!-- third image -->
        <figure class="third">
          <img :src="Boolean(gameHero[2]) ? gameHero[2].Icon_Url : 'https://gaminglaptopunder.com/wp-content/uploads/2019/12/dc486960-701e-421b-b145-70d04f3b85be.jpg'" alt="" />
        </figure>
        <div class="shadow-bottom third">
          <p>New Release</p>
        </div>
      </div>

      <!--------------------------- filters -->
      <ul class="filters">
        <li @click.prevent="getGames">
          Top
        </li>
        <li @click.prevent="customizeGames">
          For you
        </li>
        <li @click.prevent="setArrayWithSaveGames">
          Saved
        </li>
      </ul>

      <!--------------------------- Cards -->
      <div class="cards">
        <!-- first group -->
        <div class="sugerencias">
          <div id="$gridCards" class="gridCards">
            <div class="forCard" v-for="game in games" :key="game.id">
              <Card @click.prevent="getDataGame(game.id)" :game="game" :delay="games.indexOf(game) * 100 + 1100"/>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!------------------- modal -->
    <transition name="fade">
      <ModalGames v-if="modal" />
    </transition>
  </div>
</template>

<script>
import NavBarDash from "../Components/NavBarDash.vue";
import ModalGames from "@/Components/ModalGames.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import Card from "../Components/Card";

export default {
  props: {
    infoUser: {
      type: String,
      default: "Andres",
      id: 1,
    },
  },
  beforeCreate () {
    this.$store.dispatch('game/getGames');
    this.$store.dispatch('game/getGameHero');
  },
  computed: {
    ...mapState("game", ["game",
      "modal",
      "games",
      "gameHero"
    ]),
  },
  methods: {
    ...mapMutations('game', ["setArrayWithSaveGames"]),
    ...mapActions("game", [
      "getDataGame",
      "getGames",
      "getSaveGame",
      "customizeGames"
    ]),
    leftModal() {
      window.$gridCards.scrollLeft += 820;
      console.log(window.$gridCards.scrollLeft);
    },
    rightModal() {
      window.$gridCards.scrollLeft -= 820;
      console.log(window.$gridCards.scrollLeft);
    },
  },
  components: {
    NavBarDash,
    Card,
    ModalGames,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/pages/home.scss";
slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
