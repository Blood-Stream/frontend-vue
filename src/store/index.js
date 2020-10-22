import { createLogger, createStore } from 'vuex'
import user from './modules/user'
import game from './modules/game'
import load from './modules/load'
import statistics from './modules/statistics'

export const store = createStore({
  modules: {
    user,
    game,
    load,
    statistics
  },
  plugins: [createLogger()]
})
