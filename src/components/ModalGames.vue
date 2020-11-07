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
          <img :src="gameData ? gameData.Icon_Url : 'https://gaminglaptopunder.com/wp-content/uploads/2019/12/dc486960-701e-421b-b145-70d04f3b85be.jpg'" alt="" />
        </figure>

        <!------------- buttons -->
        <div>
          <a :href="gameData.Url_Game" target="_blank"
            class="btn--main-medium btngoGame">
            <font-awesome-icon :icon="game" />
            <p>Ir al juego</p>
          </a>
        </div>

        <div
          :class="clssBtn ? 'btn--second-medium btnSave' : 'btn--third btnSave'"
          @click.prevent="saveGame(gameData)">
          <font-awesome-icon :icon="heart" />
          <p v-show="!loadSave">{{clssBtn ? 'Guardar' : 'Guardado'}}</p>
          <p v-show="loadSave">Guardando...</p>
        </div>
      </div>

      <!------------- data info -->
      <div class="info">
        <h1>
          {{ gameData.Name }}
        </h1>

        <p class="released">released {{ gameData.Current_Version_Release_Date }}</p>

        <!------------ rating -->
        <div class="rate">
          <font-awesome-icon
            :icon="star"
            :color=" 1 <= gameData.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(1)"
          />
          <font-awesome-icon
            :icon="star"
            :color=" 2 <= gameData.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(2)"
          />
          <font-awesome-icon
            :icon="star"
            :color=" 3 <= gameData.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(3)"
          />
          <font-awesome-icon
            :icon="star"
            :color=" 4 <= gameData.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(4)"
          />
          <font-awesome-icon
            :icon="star"
            :color=" 5 <= gameData.Rating ? 'var(--yellow)' : 'var(--white)'"
            @click.prevent="setRating(5)"
          />
        </div>

        <div class="age">
          <p>
            Age {{ gameData.Age_Rating }}
          </p>
        </div>

        <p class="description">
          {{ gameData.Description }}
        </p>
        <h3>Language</h3>
        <div class="language">
          <p v-for="language in gameData.lenguages" :key="language">
            {{ language.Lenguages }}
          </p>
        </div>

        <h3 class="genre">Genre</h3>
        <p v-for="genreGame in gameData.genre" :key="genreGame">
          {{ genreGame.Genre }}
        </p>

        <h3 class="comments">Comments</h3>
        <div class="comment"
          v-for="review in gameData.reviews"
          :key="review.uuid"
        >

          <p >
            {{review.Review}}
          </p>
        </div>

        <div class="comment">
          <textarea name="" id="" cols="30" rows="10">
            comments
          </textarea>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import { faStar, faHeart, faGamepad, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      star: faStar,
      heart: faHeart,
      game: faGamepad,
      close: faTimesCircle,
      starRat: 3,
      // localRating: this.$store.getters.gameInfo.Rating

    };
  },
  computed: {
    ...mapState('game', [
      "clssBtn",
      "loadSave",
      "gameData"
    ]),
    // ...mapGetters('game', [
    //   "gameInfo",
    // ])
  },
  methods: {
    ...mapMutations("game", ["setModal"]),
    ...mapActions("game", ["saveGame"]),
    log() {
      console.log(this.gameInfo);
    },
    setRating(numberStar) {
      this.starRat = numberStar
      this.$store.dispatch('game/rankingGame', numberStar)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ModalGames.scss";
</style>
