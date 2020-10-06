<template>
  <div id="Card">
    <!--------------- image -->
    <figure>
      <img src="@/Assets/images/games/altos.png" alt="" />
    </figure>
    <!--------------- title -->
    <h3>{{ nameGame }}</h3>
    <!--------------- interaction -->
    <div class="interaction">
      <!------- stars -->
      <div class="stars">
        <font-awesome-icon :icon="star" color="var(--yellow)" />
        <font-awesome-icon :icon="star" color="var(--yellow)" />
        <font-awesome-icon :icon="star" color="var(--yellow)" />
        <font-awesome-icon :icon="star" color="var(--yellow)" />
        <font-awesome-icon :icon="starHalf" color="var(--yellow)" />
      </div>
      <!------- like -->

      <font-awesome-icon :icon="Heart" color="var(--red)" />
      <!------- game -->
      <font-awesome-icon :icon="game" color="var(--white)" />
    </div>
  </div>
</template>

<script>
import {
  faStar,
  faStarHalfAlt,
  faHeart,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

export default {
  props: {
    nameGame: {
      type: String,
      default: "XCom 2",
    },
  },
  data() {
    return {
      star: faStar,
      starHalf: faStarHalfAlt,
      Heart: faHeart,
      game: faGamepad,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/card.scss";
</style>
