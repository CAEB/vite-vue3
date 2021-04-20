import { createStore } from 'vuex'

const defaulStore = {
  count: 0
}

export default createStore({
  state() {
    return defaulStore
  },
  mutations: {
    increment(state: typeof defaulStore) {
      const newState = state
      newState.count += 1
    }
  },
  actions: {
    increment(ctx) {
      ctx.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaulStore) {
      return 2 * state.count
    }
  }
})
