<template>
  <div class="Home" id="Home">
    <NavBarDash />
    <!------------------ grid dashboard  -->
    <div class="homeGrid">
      <!----------------hero -->
      <div class="hero">

        <figure class="main">
          <img src="@/Assets/images/games/plague.jpg" alt="" />
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
          <img src="@/Assets/images/games/xcom.jpg" alt="" />
        </figure>
        <div class="shadow-bottom second">
          <p>New Release</p>
        </div>

        <!-- third image -->
        <figure class="third">
          <img src="@/Assets/images/games/autum-dynasty.jpg" alt="" />
        </figure>
        <div class="shadow-bottom third">
          <p>New Release</p>
        </div>
      </div>

      <!----------------filters -->
      <div id="Filters" class="filters">
        <select id="" name="New-release">
          <option value="">New release</option>
          <option value="">New release</option>
          <option value="">New release</option>
          <option value="">New release</option>
          <option value="">New release</option>
          <option value="">New release</option>
          <option value="">New release</option>
        </select>

        <select id="" name="Top-10">
          <option value="1a">Top 10</option>
        </select>

        <select id="" name="Edad">
          <option value="1a">Edad</option>
        </select>

        <select id="" name="Categoria">
          <option value="1a">Categoria</option>
        </select>

        <select id="" name="Mas-juegos">
          <option value="1a">Más juegos</option>
        </select>

        <select id="" name="Guardados">
          <option value="gurdados">Guardados</option>
        </select>
      </div>

      <!----------------Cards -->
      <div class="cards">

        <!-- first group -->
        <div class="sugerencias">
          <!-- <h1>Sugerencias</h1> -->
          <!-- <p @click.prevent="leftModal">left</p>
          <p @click.prevent="rightModal">Rigth</p> -->
          <div id="$gridCards" class="gridCards">
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 100"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 200"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 300"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 400"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 500"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 600"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 700"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 800"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 900"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 1000"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 1100"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 1200"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 1300"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 1400"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 1500"/>
            <Card @click.prevent="getDataGame(id)" :delay="1100 + 1600"/>
          </div>
        </div>

      </div>
    </div>
    <transition name="fade">
      <ModalGames v-show="modal" />
    </transition>
  </div>
</template>

<script>
import NavBarDash from "../Components/NavBarDash.vue";
import ModalGames from "@/Components/ModalGames.vue";
import { mapActions, mapState } from "vuex";

import Card from "../Components/Card";

export default {
  props: {
    infoUser: {
      type: String,
      default: "Andres",
      id: 1,
    },
  },
  data() {
    return {
      modalGames: true,
    };
  },
  computed: {
    ...mapState("game", ["game", "modal"]),
  },
  methods: {
    ...mapActions("game", ["getDataGame"]),
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
