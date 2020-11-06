<template>
  <div id="Card" ref="Card">
    <!--------------- image -->
    <figure>
      <img :src="game.Icon_Url ? game.Icon_Url : 'https://gaminglaptopunder.com/wp-content/uploads/2019/12/dc486960-701e-421b-b145-70d04f3b85be.jpg' " alt="game" />
    </figure>
    <!--------------- title -->
    <h3>{{ game.Name || 'Cargando juego'}}</h3>
    <!--------------- interaction -->
    <div class="interaction">
      <!------- stars -->
      <div class="stars">

        <font-awesome-icon
            :icon="star"
            :color=" 1 <= game.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(1)"
          />
          <font-awesome-icon
            :icon="star"
            :color=" 2 <= game.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(2)"
          />
          <font-awesome-icon
            :icon="star"
            :color=" 3 <= game.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(3)"
          />
          <font-awesome-icon
            :icon="star"
            :color=" 4 <= game.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(4)"
          />
          <font-awesome-icon
            :icon="star"
            :color=" 5 <= game.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(5)"
          />
      </div>

      <!------- like -->
      <font-awesome-icon :icon="Heart" color="var(--red)" />

      <!------- game -->
      <font-awesome-icon :icon="gameIcon" color="var(--white)" />
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
    game: {
      type: Object,
      default: () => ({
        id: 1,
        Name: '',
      }),
    },
    delay: {
      type: Number,
      Default: 100
    }
  },
  data() {
    return {
      star: faStar,
      starHalf: faStarHalfAlt,
      Heart: faHeart,
      gameIcon: faGamepad,
      // image: this.$props.game.Icon_Url || '../Assets/images/games/altos.png'
    };
  },
  mounted () {
    const templateCard = this.$refs.Card
    const att = document.createAttribute("style")
    att.value = `animation-delay: ${this.delay}ms`
    templateCard.setAttributeNode(att);
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/card.scss";
</style>
