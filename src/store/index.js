import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: ''
  },
  mutations: {
    UPDATE_LOCATION(state, payload) {
      state.location = payload
    }
  },
  actions: {
    updateLocation(context, newLocation) {
      context.commit('UPDATE_LOCATION', newLocation)
    }
  },
  modules: {}
})
