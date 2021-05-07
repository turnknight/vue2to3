// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
import {
  createStore
} from 'vuex'

const store = createStore({
  state: {
    globalMessage: "这是store里的message"
  },
  mutations: {
    increment(state) {
      state.globalMessage = "store里的message更新了"
    },
    resetMessage(state) {
      state.globalMessage = "这是store里的message"
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    resetMessage(context) {
      context.commit('resetMessage')
    }
  },
  modules: {}
})

export default store;

// export default new Vuex.Store({
//   state: {
//     globalMessage: "这是store里的message"
//   },
//   mutations: {
//     increment(state) {
//       state.globalMessage = "store里的message更新了"
//     },
//     resetMessage(state) {
//       state.globalMessage = "这是store里的message"
//     }
//   },
//   actions: {
//     increment(context) {
//       context.commit('increment')
//     },
//     resetMessage(context) {
//       context.commit('resetMessage')
//     }
//   },
//   modules: {}
// })