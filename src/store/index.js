import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: 'Mosset'
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
