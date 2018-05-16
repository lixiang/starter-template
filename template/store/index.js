import Vue from 'vue'
import Vuex from 'vuex'
import base from './modules/base'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = () =>
  new Vuex.Store({
    modules: {
      base,
    },
    strict: debug,
  })

export default store
