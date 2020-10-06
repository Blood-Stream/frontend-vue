import { createLogger, createStore } from 'vuex'
import userData from './modules/datauser'
import game from './modules/game'

export const store = createStore({
  modules: {
    userData,
    game,
  },
  plugins: [createLogger()]
})
