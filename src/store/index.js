import { createStore, mapMutations } from "vuex";


export default createStore ({
  state: {
    likes: 0,
    isAuth: false,
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2
    }
  },
  mutations: {
    incremensLikes(state) {
        state.likes += 1  
    },
    decrementLike(state) {
      state.likes -= 1
    }   
  },
  actions: {

  },
  modules: {

  }
})