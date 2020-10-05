import { createLogger, createStore } from 'vuex'
import userData from './modules/datauser'

export const store = createStore({
  modules: {
    userData,
  },
  plugins: [createLogger()]
})
