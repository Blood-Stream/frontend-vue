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
        <figure class="second">
          <img src="@/Assets/images/games/xcom.jpg" alt="" />
        </figure>
        <div class="shadow-bottom second">
          <p>New Release</p>
        </div>
        <figure class="third">
          <img src="@/Assets/images/games/autum-dynasty.jpg" alt="" />
        </figure>
        <div class="shadow-bottom third">
          <p>New Release</p>
        </div>
      </div>
      <!----------------Cards -->
      <div class="filters">
        <select id="" name="New-release">
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
      <!----------------filters -->
      <div class="cards">
        <div class="sugerencias">
          <Card />
        </div>
        <div class="sugerencias">
          <Card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarDash from "../Components/NavBarDash";
import Card from "../Components/Card";

export default {
  props: {
    infoUser: {
      type: String,
      default: "Andres",
    },
  },
  components: {
    NavBarDash,
    Card,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/pages/home.scss";
</style>
