import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  mutations,
  state,
  strict: debug,
})

export default store
