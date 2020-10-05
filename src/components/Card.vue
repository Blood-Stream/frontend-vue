<template>
  <div>
    <!--------------- image -->
    <figure>
      <img src="@/Assets/images/games/altos.png" alt="" />
    </figure>
    <!--------------- title -->
    <h3></h3>
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
    </div>
    {{ key }}
  </div>
</template>

<script>
import {
  faStar,
  faStarHalfAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      key: "card",
      star: faStar,
      starHalf: faStarHalfAlt,
      Heart: faHeart,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
